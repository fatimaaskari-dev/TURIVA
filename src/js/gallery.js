
const GALLERY_JSON_URL = "./src/data/gallery.json";
const GALLERY_SPEED = 35;

export async function renderGallery() {
    const track = document.querySelector(".gallery-track");

    if (!track) {
        console.warn("Gallery track was not found.");
        return;
    }

    if (track.dataset.initialized === "true") return;

    track.dataset.initialized = "true";

    try {
        const response = await fetch(GALLERY_JSON_URL);

        if (!response.ok) {
            throw new Error(
                `Failed to load gallery.json: ${response.status}`
            );
        }

        const destinations = await response.json();

        if (!Array.isArray(destinations) || destinations.length === 0) {
            throw new Error("Gallery data is empty or invalid.");
        }

        const cardsHTML = destinations.map((destination) => {
            const card = document.createElement("a");

            card.href = destination.link;
            card.className =
                "group relative w-45 h-25 overflow-hidden rounded-xl shrink-0";

            const image = document.createElement("img");

            image.src = destination.image;
            image.alt = destination.alt;
            image.className =
                "h-full w-full object-cover transition duration-500 group-hover:scale-110";
            image.draggable = false;

            const overlay = document.createElement("div");

            overlay.className =
                "absolute inset-0 flex flex-col items-center justify-end bg-black/0 p-4 text-center transition duration-500 group-hover:bg-black/45";

            const content = document.createElement("div");

            content.className =
                "translate-y-5 opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100";

            const title = document.createElement("h3");

            title.className = "text-lg font-semibold text-white";
            title.textContent = destination.name;

            const explore = document.createElement("span");

            explore.className = "mt-2 inline-block text-sm text-white";
            explore.textContent = "Explore →";

            content.append(title, explore);
            overlay.appendChild(content);
            card.append(image, overlay);

            return card;
        });

        const group = document.createElement("div");

        group.className =
            "gallery-group flex items-center justify-between shrink-0 gap-4";

        group.append(...cardsHTML);

        track.replaceChildren(group);

        await Promise.all(
            Array.from(group.querySelectorAll("img")).map((image) => {
                if (image.complete) return Promise.resolve();

                return new Promise((resolve) => {
                    image.addEventListener("load", resolve, { once: true });
                    image.addEventListener("error", resolve, { once: true });
                });
            })
        );

        const clone = group.cloneNode(true);

        clone.setAttribute("aria-hidden", "true");

        clone.querySelectorAll("a").forEach((link) => {
            link.setAttribute("tabindex", "-1");
        });

        track.appendChild(clone);

        startGalleryAnimation(track, group);

    } catch (error) {
        track.dataset.initialized = "false";
        console.error("Gallery error:", error);
    }
}

function startGalleryAnimation(track, group) {
    let position = 0;
    let lastTime = 0;
    let groupWidth = 0;
    let animationId = null;
    let isPaused = false;

    const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    );

    function measure() {
        const trackStyle = getComputedStyle(track);
        const trackGap = parseFloat(trackStyle.columnGap) || 0;

        groupWidth = group.getBoundingClientRect().width + trackGap;

        if (groupWidth > 0) {
            position = position % groupWidth;
            track.style.transform = `translateX(${-position}px)`;
        }
    }

    function animate(time) {
        animationId = null;

        if (isPaused || reduceMotion.matches || groupWidth <= 0) {
            return;
        }

        if (!lastTime) lastTime = time;

        const delta = Math.min((time - lastTime) / 1000, 0.05);

        lastTime = time;
        position += GALLERY_SPEED * delta;

        if (position >= groupWidth) {
            position %= groupWidth;
        }

        track.style.transform = `translateX(${-position}px)`;

        animationId = requestAnimationFrame(animate);
    }

    function start() {
        if (isPaused || reduceMotion.matches || animationId !== null) {
            return;
        }

        lastTime = 0;
        animationId = requestAnimationFrame(animate);
    }

    function pause() {
        if (animationId !== null) {
            cancelAnimationFrame(animationId);
            animationId = null;
        }

        lastTime = 0;
    }

    function onMouseEnter() {
        isPaused = true;
        pause();
    }

    function onMouseLeave() {
        isPaused = false;
        start();
    }

    function onMotionChange() {
        pause();

        if (!reduceMotion.matches && !isPaused) {
            start();
        }
    }

    measure();

    track.addEventListener("mouseenter", onMouseEnter);
    track.addEventListener("mouseleave", onMouseLeave);

    track.addEventListener("focusin", onMouseEnter);
    track.addEventListener("focusout", (event) => {
        if (!track.contains(event.relatedTarget)) {
            onMouseLeave();
        }
    });

    window.addEventListener("resize", measure);
    reduceMotion.addEventListener("change", onMotionChange);

    start();
}

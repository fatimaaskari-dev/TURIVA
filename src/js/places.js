export async function renderPlaces() {
  const viewport = document.querySelector(".topViewport");
  const track = document.querySelector(".topTrack");
  const prevBtn = document.querySelector(".topPrev");
  const nextBtn = document.querySelector(".topNext");

  if (!viewport || !track || !prevBtn || !nextBtn) {
    console.error("Top destinations slider elements not found.");
    return;
  }

  try {
    const response = await fetch("./src/data/places.json");

    if (!response.ok) {
      throw new Error(`JSON loading failed: ${response.status}`);
    }

    const destinations = await response.json();

    function createStars(rating) {
      return Array.from({ length: 5 }, (_, index) => {
        let starClass = "fa-regular fa-star";

        if (rating >= index + 1) {
          starClass = "fa-solid fa-star";
        } else if (rating >= index + 0.5) {
          starClass = "fa-solid fa-star-half-stroke";
        }

        const colorClass =
          starClass === "fa-regular fa-star"
            ? "text-gray-300"
            : "text-yellow-400";

        return `
                    <i class="${starClass} ${colorClass}"></i>
                `;
      }).join("");
    }

    track.innerHTML = destinations
      .map(
        (destination) => `
            <article
                class="topSlide flex h-80 w-53 shrink-0 flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm md:h-85.5 md:w-70 lg:w-70.5">

                <div class="h-37.5 w-full shrink-0 overflow-hidden bg-gray-200">
                    <img
                        src="${destination.image}"
                        alt="${destination.name}"
                        class="h-full w-full object-cover">
                </div>

                <div class="flex min-h-0 flex-1 flex-col gap-2 p-2">
                    <h3 class="text-xl font-medium leading-7 text-gray-900">
                        ${destination.name}
                    </h3>

                    <p class="min-h-10 wrap-break-word text-sm font-medium leading-5 text-gray-500">
                        ${destination.location}
                    </p>

                    <div class="flex shrink-0 gap-1 text-yellow-400">
                        ${createStars(destination.rating)}
                    </div>

                    <a href="${destination.link}"
                       class="mt-auto block w-full shrink-0 rounded-lg bg-black py-2 text-center text-sm font-semibold text-white transition hover:bg-gray-800">
                        BUY NOW
                    </a>
                </div>
            </article>
        `,
      )
      .join("");

    let currentPosition = 0;

    function getStep() {
      const firstSlide = track.querySelector(".topSlide");

      if (!firstSlide) return 0;

      const trackStyles = getComputedStyle(track);
      const gap = parseFloat(trackStyles.columnGap) || 0;

      return firstSlide.getBoundingClientRect().width + gap;
    }

    function getMaxPosition() {
      return Math.max(0, track.scrollWidth - viewport.clientWidth);
    }

    function updateSlider() {
      const maxPosition = getMaxPosition();

      currentPosition = Math.max(0, Math.min(currentPosition, maxPosition));

      track.style.transform = `translateX(-${currentPosition}px)`;
    }

    nextBtn.addEventListener("click", () => {
      const step = getStep();
      const maxPosition = getMaxPosition();

      if (currentPosition >= maxPosition - 1) {
        currentPosition = 0;
      } else {
        currentPosition = Math.min(currentPosition + step, maxPosition);
      }

      updateSlider();
    });

    prevBtn.addEventListener("click", () => {
      const step = getStep();
      const maxPosition = getMaxPosition();

      if (currentPosition <= 1) {
        currentPosition = maxPosition;
      } else {
        currentPosition = Math.max(currentPosition - step, 0);
      }

      updateSlider();
    });

    window.addEventListener("resize", updateSlider);

    updateSlider();
  } catch (error) {
    console.error("Top destinations slider error:", error);
  }
}

export async function initHeroSlider() {
  const heroSlides = document.querySelector(".heroSlides");
  const heroDots = document.querySelector(".heroDots");

  const prevButton = document.querySelector(".heroPrev");
  const nextButton = document.querySelector(".heroNext");

  if (!heroSlides || !heroDots || !prevButton || !nextButton) {
    console.error("Hero slider elements were not found.");
    return;
  }

  try {
    const response = await fetch("./src/data/heroSlider.json");

    if (!response.ok) {
      throw new Error(`Failed to load hero.json: ${response.status}`);
    }

    const data = await response.json();
    const slides = data.slides;

    if (!Array.isArray(slides) || slides.length === 0) {
      throw new Error("No slides found in hero.json.");
    }

    heroSlides.innerHTML = slides
      .map(
        (slide, index) => `
            <article class="heroSlide absolute inset-0 ${
              index === 0 ? "opacity-100" : "opacity-0"
            } transition-opacity duration-700">

                <img
                    src="${slide.image}"
                    alt="${slide.alt}"
                    class="absolute inset-0 h-full w-full object-cover"
                >

                <div class="absolute inset-0 bg-black/40"></div>

                <div class="relative z-10 flex h-full flex-col gap-2 md:gap-4 items-center justify-center text-center text-white">

                    <h1 class="text-2xl font-medium md:text-3xl lg:text-4xl lg:font-bold">
                        ${slide.title}
                    </h1>

                    <p class="text-base">
                        ${slide.description}
                    </p>

                    <a
                        href="${slide.buttonLink}"
                        class="rounded-lg bg-white px-4 py-2 md:px-6 md:py-2 text-sm font-medium text-black transition hover:bg-gray-200"
                    >
                        ${slide.buttonText}
                    </a>

                </div>

            </article>
        `,
      )
      .join("");

    heroDots.innerHTML = slides
      .map(
        (slide, index) => `
            <button
                type="button"
                class="heroDot cursor-pointer h-2 w-2 rounded-full ${
                  index === 0 ? "bg-white" : "bg-white/40"
                }"
                aria-label="Go to slide ${index + 1}"
                aria-current="${index === 0 ? "true" : "false"}"
            ></button>
        `,
      )
      .join("");

    const slideElements = heroSlides.querySelectorAll(".heroSlide");
    const dotElements = heroDots.querySelectorAll(".heroDot");

    let currentIndex = 0;

    function showSlide(index) {
      currentIndex = (index + slides.length) % slides.length;

      slideElements.forEach((slide, i) => {
        slide.classList.toggle("opacity-100", i === currentIndex);
        slide.classList.toggle("opacity-0", i !== currentIndex);
      });

      dotElements.forEach((dot, i) => {
        dot.classList.toggle("bg-white", i === currentIndex);
        dot.classList.toggle("bg-white/40", i !== currentIndex);

        dot.setAttribute("aria-current", i === currentIndex ? "true" : "false");
      });
    }

    prevButton.addEventListener("click", () => {
      showSlide(currentIndex - 1);
    });

    nextButton.addEventListener("click", () => {
      showSlide(currentIndex + 1);
    });

    dotElements.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        showSlide(index);
      });
    });

    showSlide(0);
  } catch (error) {
    console.error("Hero slider error:", error);
  }
}

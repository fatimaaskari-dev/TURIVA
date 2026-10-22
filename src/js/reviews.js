export async function renderReviews() {
  try {
    const reviewTrack = document.querySelector(".reviewTrack");
    const reviewPrev = document.querySelector(".reviewPrev");
    const reviewNext = document.querySelector(".reviewNext");

    if (!reviewTrack || !reviewPrev || !reviewNext) {
      console.error("Reviews slider elements were not found.");
      return;
    }

    const response = await fetch("./src/data/reviews.json");

    if (!response.ok) {
      throw new Error(`Reviews JSON loading failed: ${response.status}`);
    }

    const reviews = await response.json();

    function createStars(rating) {
      return Array.from({ length: 5 }, (_, index) => {
        let starClass = "fa-regular fa-star";

        if (rating >= index + 1) {
          starClass = "fa-solid fa-star";
        } else if (rating >= index + 0.5) {
          starClass = "fa-solid fa-star-half-stroke";
        }

        return `<i class="${starClass}"></i>`;
      }).join("");
    }

    reviewTrack.innerHTML = reviews
      .map(
        (review, index) => `
            <div
                class="reviewSlide col-start-1 row-start-1 flex flex-col items-center text-center gap-2 md:gap-3 ${index === 0 ? "opacity-100" : "opacity-0 pointer-events-none"} transition-opacity duration-500">

                <div class="w-12 h-12 md:w-25 md:h-25 overflow-hidden rounded-full">
                    <img
                        src="${review.image}"
                        alt="${review.name}"
                        class="h-full w-full object-cover">
                </div>

                <div class="flex items-center gap-2 md:gap-2.25 text-yellow-400">
                    ${createStars(review.rating)}
                </div>

                <h3 class="text-2xl md:text-4xl font-medium md:font-semibold text-gray-900">
                    ${review.name}
                </h3>

                <p class="text-base md:text-2xl font-medium uppercase tracking-wide text-gray-400">
                    ${review.date} - ${review.destination}
                </p>

                <p class="mx-auto max-w-2xl text-base leading-7 text-gray-500">
                    ${review.review}
                </p>
            </div>
        `,
      )
      .join("");

    const reviewSlides = reviewTrack.querySelectorAll(".reviewSlide");

    let currentIndex = 0;

    function showReview(index) {
      reviewSlides.forEach((slide, slideIndex) => {
        const isActive = slideIndex === index;

        slide.classList.toggle("opacity-100", isActive);
        slide.classList.toggle("opacity-0", !isActive);
        slide.classList.toggle("pointer-events-none", !isActive);
      });
    }

    reviewPrev.addEventListener("click", () => {
      currentIndex =
        (currentIndex - 1 + reviewSlides.length) % reviewSlides.length;

      showReview(currentIndex);
    });

    reviewNext.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % reviewSlides.length;

      showReview(currentIndex);
    });
  } catch (error) {
    console.error("Reviews slider error:", error);
  }
}

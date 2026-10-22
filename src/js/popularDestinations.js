const iconSVG = {
  calendar: `
        <svg width="24" height="24" viewBox="0 0 24 24"
            fill="none" xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true">
            <path d="M7.5 3.5625C7.5 3.41332 7.44074 3.27024 7.33525 3.16475C7.22976 3.05926 7.08668 3 6.9375 3C6.78832 3 6.64524 3.05926 6.53975 3.16475C6.43426 3.27024 6.375 3.41332 6.375 3.5625V4.125H5.25C4.65326 4.125 4.08097 4.36205 3.65901 4.78401C3.23705 5.20597 3 5.77826 3 6.375V7.5H21V6.375C21 5.77826 20.7629 5.20597 20.341 4.78401C19.919 4.36205 19.3467 4.125 18.75 4.125H17.625V3.5625C17.625 3.41332 17.5657 3.27024 17.4602 3.16475C17.3548 3.05926 17.2117 3 17.0625 3C16.9133 3 16.7702 3.05926 16.6648 3.16475C16.5593 3.27024 16.5 3.41332 16.5 3.5625V4.125H7.5V3.5625Z"
                fill="black"/>
            <path d="M21 18.75V8.625H3V18.75C3 19.3467 3.23705 19.919 3.65901 20.341C4.08097 20.7629 4.65326 21 5.25 21H18.75C19.3467 21 19.919 20.7629 20.341 20.341C20.7629 19.919 21 19.3467 21 18.75Z"
                fill="black"/>
        </svg>
    `,

  car: `
        <svg width="24" height="24" viewBox="0 0 24 24"
            fill="none" xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true">
            <path d="M6 18V19C6 19.2833 5.904 19.521 5.712 19.713C5.52 19.905 5.28267 20.0007 5 20H4C3.71667 20 3.479 19.904 3.287 19.712C3.095 19.52 2.99934 19.2827 3 19V11L5.1 5C5.2 4.7 5.379 4.45833 5.637 4.275C5.895 4.09167 6.18267 4 6.5 4H17.5C17.8167 4 18.1043 4.09167 18.363 4.275C18.6217 4.45833 18.8007 4.7 18.9 5L21 11V19C21 19.2833 20.9043 19.521 20.713 19.713C20.5217 19.905 20.284 20.0007 20 20H19C18.7167 20 18.479 19.904 18.287 19.712C18.095 19.52 17.9993 19.2827 18 19V18H6ZM5.8 9H18.2L17.15 6H6.85L5.8 9ZM7.5 15C7.91667 15 8.271 14.854 8.563 14.562C8.855 14.27 9.00067 13.916 9 13.5C9 13.0833 8.854 12.729 8.562 12.437C8.27 12.145 7.916 11.9993 7.5 12C7.08334 12 6.729 12.146 6.437 12.438C6.145 12.73 5.99934 13.084 6 13.5C6 13.9167 6.146 14.271 6.438 14.563C6.73 14.855 7.084 15.0007 7.5 15ZM16.5 15C16.9167 15 17.271 14.854 17.563 14.562C17.855 14.27 18.0007 13.916 18 13.5C18 13.0833 17.854 12.729 17.562 12.437C17.27 12.145 16.916 11.9993 16.5 12C16.0833 12 15.729 12.146 15.437 12.438C15.145 12.73 14.9993 13.084 15 13.5C15 13.9167 15.146 14.271 15.438 14.563C15.73 14.855 16.084 15.0007 16.5 15Z"
                fill="black"/>
        </svg>
    `,

  waves: `
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true">
            <path d="M2 21V19C2.63333 19 3.10833 18.8333 3.425 18.5C3.74167 18.1667 4.36667 18 5.3 18C6.23333 18 6.875 18.1667 7.225 18.5C7.575 18.8333 8.05 19 8.65 19C9.25 19 9.725 18.8333 10.075 18.5C10.425 18.1667 11.0667 18 12 18C12.9333 18 13.575 18.1667 13.925 18.5C14.275 18.8333 14.75 19 15.35 19C15.95 19 16.425 18.8333 16.775 18.5C17.125 18.1667 17.7667 18 18.7 18C19.6333 18 20.2583 18.1667 20.575 18.5C20.8917 18.8333 21.3667 19 22 19V21C21.0167 21 20.371 20.8333 20.063 20.5C19.755 20.1667 19.3007 20 18.7 20C18.1 20 17.625 20.1667 17.275 20.5C16.925 20.8333 16.2833 21 15.35 21C14.4167 21 13.775 20.8333 13.425 20.5C13.075 20.1667 12.6 20 12 20C11.4 20 10.925 20.1667 10.575 20.5C10.225 20.8333 9.58333 21 8.65 21C7.71667 21 7.075 20.8333 6.725 20.5C6.375 20.1667 5.9 20 5.3 20C4.7 20 4.24567 20.1667 3.937 20.5C3.62833 20.8333 2.98267 21 2 21ZM2 16.5V14.5C2.63333 14.5 3.10833 14.3333 3.425 14C3.74167 13.6667 4.36667 13.5 5.3 13.5C6.23333 13.5 6.87933 13.6667 7.238 14C7.59667 14.3333 8.06733 14.5 8.65 14.5C9.25 14.5 9.725 14.3333 10.075 14C10.425 13.6667 11.0667 13.5 12 13.5C12.9333 13.5 13.575 13.6667 13.925 14C14.275 14.3333 14.75 14.5 15.35 14.5C15.95 14.5 16.425 14.3333 16.775 14C17.125 13.6667 17.7667 13.5 18.7 13.5C19.6333 13.5 20.2583 13.6667 20.575 14C20.8917 14.3333 21.3667 14.5 22 14.5V16.5C21.0167 16.5 20.371 16.3333 20.063 16C19.755 15.6667 19.3007 15.5 18.7 15.5C18.1 15.5 17.6373 15.6667 17.312 16C16.9867 16.3333 16.3327 16.5 15.35 16.5C14.4 16.5 13.7543 16.3333 13.413 16C13.0717 15.6667 12.6007 15.5 12 15.5C11.3667 15.5 10.8957 15.6667 10.587 16C10.2783 16.3333 9.63267 16.5 8.65 16.5C7.66667 16.5 7.01233 16.3333 6.687 16C6.36167 15.6667 5.89933 15.5 5.3 15.5C4.7 15.5 4.246 15.6667 3.938 16C3.63 16.3333 2.984 16.5 2 16.5ZM6.9 11.4L10.225 8.075L9.225 7.075C8.675 6.525 8.09167 6.125 7.475 5.875C6.85833 5.625 6.1 5.5 5.2 5.5V3C6.45 3 7.48333 3.13767 8.3 3.413C9.11667 3.68833 9.91667 4.21733 10.7 5L17.1 11.4C16.8167 11.5833 16.5417 11.7293 16.275 11.838C16.0083 11.9467 15.7 12.0007 15.35 12C14.75 12 14.275 11.8333 13.925 11.5C13.575 11.1667 12.9333 11 12 11C11.0667 11 10.425 11.1667 10.075 11.5C9.725 11.8333 9.25 12 8.65 12C8.3 12 7.99167 11.9457 7.725 11.837C7.45833 11.7283 7.18333 11.5827 6.9 11.4ZM16.7 3C17.4 3 17.9917 3.24567 18.475 3.737C18.9583 4.22833 19.2 4.816 19.2 5.5C19.2 6.2 18.9583 6.79167 18.475 7.275C17.9917 7.75833 17.4 8 16.7 8C16 8 15.4083 7.75833 14.925 7.275C14.4417 6.79167 14.2 6.2 14.2 5.5C14.2 4.81667 14.4417 4.229 14.925 3.737C15.4083 3.245 16 2.99933 16.7 3Z"
                fill="black"/>
        </svg>
    `,

  food: `
        <svg width="24" height="24" viewBox="0 0 24 24"
            fill="none" xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true">
            <path d="M4.5 2.75C4.5 2.55109 4.42099 2.36032 4.28033 2.21967C4.13968 2.07902 3.94892 2 3.75 2C3.55109 2 3.36033 2.07902 3.21967 2.21967C3.07902 2.36032 3 2.55109 3 2.75C3 4.02 3.928 4.667 4.506 5.07L4.57 5.114C5.25 5.59 5.5 5.819 5.5 6.25C5.5 6.44891 5.57902 6.63968 5.71967 6.78033C5.86033 6.92098 6.05109 7 6.25 7C6.44892 7 6.63968 6.92098 6.78033 6.78033C6.92099 6.63968 7 6.44891 7 6.25C7 4.98 6.072 4.333 5.494 3.93L5.43 3.886C4.75 3.41 4.5 3.18 4.5 2.75ZM3.821 8C3.33804 8 2.87487 8.19185 2.53336 8.53336C2.19186 8.87486 2 9.33804 2 9.821V14C1.99839 15.8578 2.6434 17.6582 3.82434 19.0923C5.00529 20.5265 6.64854 21.5049 8.47213 21.8597C10.2957 22.2145 12.1859 21.9236 13.8184 21.0368C15.4509 20.1501 16.7239 18.7229 17.419 17H18.75C19.612 17 20.4386 16.6576 21.0481 16.0481C21.6576 15.4386 22 14.612 22 13.75C22 12.888 21.6576 12.0614 21.0481 11.4519C20.4386 10.8424 19.612 10.5 18.75 10.5H18V9.821C18 9.33804 17.8081 8.87486 17.4666 8.53336C17.1251 8.19185 16.662 8 16.179 8H3.821ZM18.75 15.5H17.86C17.9535 15.0055 18.0004 14.5033 18 14V12H18.75C19.714 12 20.5 12.786 20.5 13.75C20.5 14.714 19.714 15.5 18.75 15.5Z"
                fill="black"/>
        </svg>
    `,
};

function createStars(rating) {
  return Array.from({ length: 5 }, (_, index) => {
    let starClass = "fa-regular fa-star text-gray-300";

    if (rating >= index + 1) {
      starClass = "fa-solid fa-star text-yellow-400";
    } else if (rating >= index + 0.5) {
      starClass = "fa-solid fa-star-half-stroke text-yellow-400";
    }

    return `<i class="${starClass}" aria-hidden="true"></i>`;
  }).join("");
}

function createFeatures(destination) {
  return `
        <div class="hidden md:flex items-center gap-3"
            aria-label="Destination features">

            <span title="${destination.date}">
                ${iconSVG.calendar}
            </span>

            <span class="border border-gray-400 h-5"></span>

            <span title="${destination.transport}">
                ${iconSVG.car}
            </span>

            <span title="${destination.activity}">
                ${iconSVG.waves}
            </span>

            <span title="${destination.food}">
                ${iconSVG.food}
            </span>

        </div>
    `;
}

function createDestinationCard(destination) {
  return `
        <article
            class="popularSlide flex flex-col md:flex-row w-53 h-71 md:w-147 md:h-94 lg:w-147 min-h-75 overflow-hidden rounded-2xl bg-gray-100 shrink-0">

            <div class="w-full md:w-1/2 shrink-0">
                <img
                    src="${destination.image}"
                    alt="${destination.alt}"
                    class="h-30 w-full md:h-full object-cover"
                    loading="lazy">
            </div>

            <div class="flex w-full md:w-1/2 flex-col p-2 md:py-0 md:px-2 gap-3 md:gap-5.25">

                <div class="flex items-center gap-1 md:pt-3">
                    ${createStars(destination.rating)}
                </div>

                <h3 class="font-medium text-gray-900 gap-1.75">
                    <i class="fa-solid fa-location-dot"></i>
                    ${destination.name}
                </h3>

                <p class="hidden md:flex font-medium leading-5.75 text-gray-500">
                    ${destination.description}
                </p>

                ${createFeatures(destination)}

                <hr class="w-full border border-gray-400">

                <div class="flex items-center justify-center flex-col">
                    <span class="text-sm text-gray-400 line-through">
                        ${destination.oldPrice}
                    </span>

                    <span class="text-lg font-bold text-gray-900">
                        ${destination.price}
                    </span>
                </div>

                <a href="#contact"
                    class="hidden md:flex w-full items-center justify-center rounded-lg bg-black py-2.5 text-sm font-medium text-white transition hover:bg-gray-800">
                    BUY NOW
                </a>

            </div>
        </article>
    `;
}

export async function renderDestinations() {
  const track = document.querySelector(".popular-track");
  const viewport = document.querySelector(".popularViewport");
  const prevButton = document.querySelector(".popular-prev");
  const nextButton = document.querySelector(".popular-next");

  if (!track || !viewport || !prevButton || !nextButton) {
    console.error("Destination slider elements were not found.");
    return;
  }

  try {
    const response = await fetch("./src/data/popularDestinations.json");

    if (!response.ok) {
      throw new Error(`JSON loading failed: ${response.status}`);
    }

    const data = await response.json();

    track.innerHTML = data.destinations.map(createDestinationCard).join("");

    const slides = Array.from(track.querySelectorAll(".popularSlide"));

    if (!slides.length) return;

    let currentIndex = 0;

    function updateSlider() {
      if (!slides.length) return;

      const desiredTranslate =
        slides[currentIndex].offsetLeft - slides[0].offsetLeft;

      const maxTranslate = Math.max(
        0,
        track.scrollWidth - viewport.clientWidth,
      );

      const translateX = Math.min(Math.max(0, desiredTranslate), maxTranslate);

      track.style.transform = `translateX(-${translateX}px)`;
    }

    nextButton.addEventListener("click", () => {
      currentIndex++;

      if (currentIndex >= slides.length) {
        currentIndex = 0;
      }

      updateSlider();
    });

    prevButton.addEventListener("click", () => {
      currentIndex--;

      if (currentIndex < 0) {
        currentIndex = slides.length - 1;
      }

      updateSlider();
    });

    function initializeSlider() {
      // currentIndex = 0;
      track.style.transform = "translateX(0px)";
      updateSlider();
    }

    const images = Array.from(track.querySelectorAll("img"));

    await Promise.all(
      images.map((img) => {
        if (img.complete) {
          return Promise.resolve();
        }

        return new Promise((resolve) => {
          img.addEventListener("load", resolve, { once: true });
          img.addEventListener("error", resolve, { once: true });
        });
      }),
    );

    requestAnimationFrame(() => {
      requestAnimationFrame(initializeSlider);
    });

    window.addEventListener("resize", updateSlider);
  } catch (error) {
    console.error("Destination slider error:", error);
  }
}

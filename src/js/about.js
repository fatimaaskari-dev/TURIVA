
export async function setupAboutSlider() {
    const aboutTrack = document.querySelector(".aboutTrack");
    const aboutPrev = document.querySelector(".aboutPrev");
    const aboutNext = document.querySelector(".aboutNext");
    const aboutImage = aboutTrack?.querySelector("img");

    if (!aboutTrack || !aboutPrev || !aboutNext || !aboutImage) {
        return;
    }

    try {
        const response = await fetch("./src/data/about.json");

        if (!response.ok) {
            throw new Error(`JSON loading failed: ${response.status}`);
        }

        const data = await response.json();
        const images = data.images;

        if (!Array.isArray(images) || images.length === 0) {
            throw new Error("No images found in about.json");
        }

        let currentIndex = 0;

        function showImage(index) {
            currentIndex = (index + images.length) % images.length;

            aboutImage.src = images[currentIndex].src;
            aboutImage.alt = images[currentIndex].alt;
        }

        aboutPrev.addEventListener("click", () => {
            showImage(currentIndex - 1);
        });

        aboutNext.addEventListener("click", () => {
            showImage(currentIndex + 1);
        });

        showImage(0);

    } catch (error) {
        console.error("About slider error:", error);
    }
}

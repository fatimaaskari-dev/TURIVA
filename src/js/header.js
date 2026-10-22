
export async function renderHeader() {
    try {
        const response = await fetch("./src/data/header.json");

        if (!response.ok) {
            throw new Error(`JSON loading failed: ${response.status}`);
        }

        const data = await response.json();

        // Logo
        document.getElementById("brand-link").href = data.brand.link;
        document.getElementById("brand-letter").textContent = data.brand.letter;
        document.getElementById("brand-name").textContent = data.brand.name;

        // Desktop navigation
        document.getElementById("desktop-nav").innerHTML =
            data.navigation.map(item => `
                <li>
                    <a href="${item.href}"
                       class="transition hover:text-blue-600">
                        ${item.text}
                    </a>
                </li>
            `).join("");

        // Mobile navigation
        const mobileNav = document.getElementById("mobile-nav");

        mobileNav.innerHTML = data.navigation.map(item => `
            <li>
                <a href="${item.href}"
                   class="block transition hover:text-blue-600">
                    ${item.text}
                </a>
            </li>
        `).join("");

        // Hamburger menu
        const menuBtn = document.getElementById("menu-btn");
        const mobileMenu = document.getElementById("mobile-menu");
        const menuIcon = document.getElementById("menu-icon");

        if (menuBtn && mobileMenu && menuIcon) {
            menuBtn.addEventListener("click", () => {
                const isOpening = mobileMenu.classList.contains("hidden");

                mobileMenu.classList.toggle("hidden");
                menuIcon.classList.toggle("fa-bars", !isOpening);
                menuIcon.classList.toggle("fa-xmark", isOpening);

                menuBtn.setAttribute("aria-expanded", String(isOpening));
            });

            // Close menu after clicking a navigation link
            mobileNav.querySelectorAll("a").forEach(link => {
                link.addEventListener("click", () => {
                    mobileMenu.classList.add("hidden");
                    menuIcon.classList.add("fa-bars");
                    menuIcon.classList.remove("fa-xmark");
                    menuBtn.setAttribute("aria-expanded", "false");
                });
            });
        }

    } catch (error) {
        console.error("Header error:", error);
    }
}

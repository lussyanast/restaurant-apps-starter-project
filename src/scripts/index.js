import 'regenerator-runtime';
import '../styles/main.css';

document.addEventListener("DOMContentLoaded", async () => {
    try {
        const response = await fetch("../data/DATA.json");
        const data = await response.json();
        const restaurantList = data.restaurants;

        const postsContainer = document.querySelector(".posts");

        restaurantList.forEach((restaurant) => {
            const article = document.createElement("article");
            article.classList.add("post-item");

            const img = document.createElement("img");
            img.src = restaurant.pictureId;
            img.alt = restaurant.name;
            img.classList.add("post-item_thumbnail");

            const contentDiv = document.createElement("div");
            contentDiv.classList.add("post-item_content");

            const cityPara = document.createElement("p");
            cityPara.classList.add("post-item_city");
            cityPara.textContent = `City: ${restaurant.city}`;

            const title = document.createElement("h1");
            title.classList.add("post-item_title");
            title.textContent = restaurant.name;

            const description = document.createElement("p");
            description.classList.add("post-item_description");
            description.textContent = restaurant.description;

            const ratingPara = document.createElement("p");
            ratingPara.classList.add("post-item_rating");
            ratingPara.textContent = `Rating: ${restaurant.rating}`;

            contentDiv.appendChild(cityPara);
            contentDiv.appendChild(title);
            contentDiv.appendChild(ratingPara);
            contentDiv.appendChild(description);

            article.appendChild(img);
            article.appendChild(contentDiv);

            postsContainer.appendChild(article);
        });
    } catch (error) {
        console.error("Error fetching data:", error);
    }

    const menuButton = document.getElementById("menu");
    const drawer = document.getElementById("drawer");
    const overlay = document.getElementById("overlay");

    // Function to toggle drawer
    function toggleDrawer() {
        const isDrawerOpen = drawer.getAttribute("aria-hidden") === "false";
        drawer.setAttribute("aria-hidden", isDrawerOpen ? "true" : "false");
    }

    // Toggle drawer when menu button is clicked
    menuButton.addEventListener("click", () => {
        toggleDrawer();
    });

    // Toggle drawer when overlay is clicked
    overlay.addEventListener("click", () => {
        toggleDrawer();
    });

    // Function to detect screen size and toggle menu accordingly
    function toggleMenu() {
        const isMobile = window.matchMedia("(max-width: 767px)").matches;
        if (isMobile) {
            drawer.setAttribute("aria-hidden", "true");
            overlay.style.display = "none"; // Hide overlay on mobile
        } else {
            drawer.setAttribute("aria-hidden", "false");
            overlay.style.display = "none"; // Ensure overlay is hidden on larger screens
        }
    }

    // Call the function when the page loads and when the window is resized
    toggleMenu();
    window.addEventListener("resize", toggleMenu);
});
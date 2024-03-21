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
});

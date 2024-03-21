document.addEventListener("DOMContentLoaded", function () {
    // Mengambil data restoran dari file JSON
    fetch("./data/DATA.json")
      .then((response) => response.json())
      .then((data) => {
        const restaurantList = data.restaurants;
  
        // Membuat container untuk daftar restoran
        const postsContainer = document.querySelector(".posts");
  
        // Loop melalui setiap restoran dalam daftar dan menambahkannya ke dalam HTML
        restaurantList.forEach((restaurant) => {
          // Membuat elemen <article> untuk setiap restoran
          const article = document.createElement("article");
          article.classList.add("post-item");
  
          // Membuat elemen <img> untuk gambar restoran
          const img = document.createElement("img");
          img.src = restaurant.pictureId;
          img.alt = restaurant.name;
          img.classList.add("post-item_thumbnail");
  
          // Membuat elemen <div> untuk konten restoran
          const contentDiv = document.createElement("div");
          contentDiv.classList.add("post-item_content");
  
          // Menambahkan informasi restoran ke dalam konten
          const cityPara = document.createElement("p");
          cityPara.classList.add("post-item_city");
          cityPara.textContent = `City: ${restaurant.city}`;
  
          const title = document.createElement("h1");
          title.classList.add("post-item_title");
          title.textContent = restaurant.name;
  
          const description = document.createElement("p");
          description.classList.add("post-item_description");
          description.textContent = restaurant.description;
  
          // Menambahkan elemen-elemen ke dalam konten
          contentDiv.appendChild(cityPara);
          contentDiv.appendChild(title);
          contentDiv.appendChild(description);
  
          // Menambahkan elemen gambar dan konten ke dalam artikel
          article.appendChild(img);
          article.appendChild(contentDiv);
  
          // Menambahkan artikel ke dalam container daftar restoran
          postsContainer.appendChild(article);
        });
      })
      .catch((error) => {
        console.error("Error fetching restaurant data:", error);
      });
  });
  
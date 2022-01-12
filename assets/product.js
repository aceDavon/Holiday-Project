$(document).ready(function () {
    $.ajax({
        url: "https://fakestoreapi.com/products",
        method: "GET",
        success: function(response) {
            $(response).each(function(i, data){
                let packs = `
                
                <div class="shop-col">
                    <img src="${data.image}" alt="">
                    <p class="">${data.title}</p>
                    <p class="price">£${data.price}</p>
                </div>

                `;
                $('.shop-grid').append(packs)
            });
        }
    });

    $.ajax({
            url: "https://fakestoreapi.com/products?limit=3",
            method: "GET",
            success: function(response) {
                $(response).each(function(i, data){
                    let topGrid = `
                    
                    <div class="top-grid-col">
                        <div class="text-overlay">
                            <a href="#" class="overlay-text">discover the collection</a>
                        </div>
                        <img src="${data.image}" alt="">
                        <p>${data.title}</p>
                    </div>
    
                    `;
                    $('.top-grid').append(topGrid)
                });
            } 
        });
        $.ajax({
            url: "https://fakestoreapi.com/products?limit=6",
            method: "GET",
            success: function(response) {
                $(response).each(function(i, data){
                    let arrivalFlex = 
                    `
                    <div class="flex-col">
                        <img src="${data.image}" class="flex-img">
                        <p class="product_name">${data.title}</p>
                        <p class="price">£${data.price}</p>
                    </div>
                    `;
                    $('.flex-section').append(arrivalFlex);
                });
            } 
        });

        $.ajax({
            url: "https://fakestoreapi.com/products?limit=6",
            method: "GET",
            success: function(response) {
                $(response).each(function(i, data){
                    console.log(data)
                    let instaPost = `
                    
                    <div class="insta-col">
                        <img src="${data.image}" alt="instagram posts" class="social-posts">
                    </div>
    
                    `;
                    $('.instagram-posts').append(instaPost)
                });
            } 
        });
    
});
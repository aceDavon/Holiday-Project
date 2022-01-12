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

        $.ajax({
            url: "https://fakestoreapi.com/products?limit=1",
            method: "GET",
            success: function(response) {
                $(response).each(function(i, data){
                    console.log(data)
                    let product = `
                    
                    <div class="product-text">
                    <div class="tablinks-col">
                        <a href="#" class="tablinks">shop /</a>
                        <a href="#" class="tablinks-inverted">seperated</a>
                    </div>
                    <div class="product-name">
                        <p class="product-title">${data.title}</p>
                        <p class="price">£${data.price}</p>
                    </div>
                    <div class="product-descript">
                        <article>
                            ${data.description}
                            
                        <div class="product-sizes">
                            <a href="#" class="tablinks">34</a>
                            <a href="#" class="tablinks">36</a>
                            <a href="#" class="tablinks">38</a>
                            <a href="#" class="tablinks">40</a>
                            <a href="#" class="tablinks">42</a>
                        </div>
                        </article>
                        <button class="article-btn-inverted" disabled="disabled">add to cart</button>
        
                        <p class="customer-care">
                            SIZE HELP +
                            <br>
                            DELIVERIES & RETURNS +
                            <br>
                            ENQUIRIES +
                        </p>
                        <button class="article-btn-inverted">pin this</button>
                    </div>
                </div>
                <div class="product-img">
                    <div class="product1-img">
                        <img src="./assets/images/SASSI-HOLFORD-RTW-SS21-AQUAREMARINE-PEARL-DUNSTER-TOP-DUNSTER-SHORTS-918x1366.jpg" alt="">
                    </div>
                    <div class="product2-img">
                        <img src="${data.image}" alt="">
                    </div>
                </div>
            </div>
    
                    `;
                    $('.product-top-section').append(product)
                });
            } 
        });
    
});
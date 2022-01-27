$(document).ready(function () {

    let url = window.location.href;
    let urlData = new URL(url).searchParams;
    let id = urlData.get('id');

    $.ajax({
        url: "http://159.65.21.42:9000/products",
        method: "GET",
        success: function(data) {
            let i = 0;
            while(i <= 29 ) {
                let packs = `
                
                 <div class="shop-col">
                     <img src="${data[i].image}" alt="">
                     <p class="product_name"><a href="./product.html?id=${data[i]._id}" class="tablinks-inverted">${data.name}</a></p>
                     <p class="price">£${data[i].price}</p>
                 </div>

                `;
                $('.shop-grid').append(packs);
                i++;
            }
        },
        Error: function(err) {
            console.log(err);
        }
    });

    $.ajax({
            url: "http://159.65.21.42:9000/products",
            method: "GET",
            success: function(data) {
                    let i = 0;
                    while(i<= 2) {
                    let topGrid = `
                    
                    <div class="top-grid-col">
                        <div class="text-overlay">
                            <a href="#" class="overlay-text">discover the collection</a>
                        </div>
                        <img src="${data[i].image}" alt="">
                        <p class="product_name"><a href="./product.html?id=${data[i]._id}" 
                        class="tablinks-inverted">${data[i].name}</a></p>
                        </div>
                    `;
                    $('.top-grid').append(topGrid);
                    i++;
                    }
                }    
            });
        $.ajax({
            url: "http://159.65.21.42:9000/products",
            method: "GET",
            success: function(data) {
                    let i = 0;
                    while(i <= 5) {
                    let arrivalFlex = `
                            <div class="flex-col">
                                <img src="${data[i].image}" class="flex-img">
                                <p class="product_name"><a href="./product.html?id=${data[i]._id}" 
                                class="tablinks-inverted">${data[i].name}</a></p>
                                <p class="price">£${data[i].price}</p>
                            </div>
                        `;
                        $('.flex-section').append(arrivalFlex);
                        i++;
                    }
                } 
        });

        $.ajax({
            url: "http://159.65.21.42:9000/products",
            method: "GET",
            success: function(data) {
                let i= 0;
                while(i <= 5) {
                    let instaPost = `
                        <div class="insta-col">
                            <img src="${data[i].image}" alt="instagram posts" class="social-posts">
                        </div>
                    `;
                    $('.instagram-posts').append(instaPost);
                    i++;
                }
            } 
        });

        
        $.ajax({
            url: `http://159.65.21.42:9000/product/${id}`,
            method: "GET",
            success: function(data) {
                    // console.log(data)
                    let product = `
                    
                    <div class="product-text">
                    <div class="tablinks-col">
                        <a href="#" class="tablinks">shop /</a>
                        <a href="#" class="tablinks-inverted">seperated</a>
                    </div>
                    <div class="product-name">
                        <p class="product-title">${data.name}</p>
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
                        <img src=${data.image} alt="">
                    </div>
                    <div class="product2-img">
                        <img src="${data.image}" alt="">
                    </div>
                </div>
            </div>
    
                    `;
                    $('.product-top-section').append(product);
            }
        });
    
})
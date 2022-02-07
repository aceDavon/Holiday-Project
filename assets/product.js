$(document).ready(function () {

    let url = window.location.href;
    let urlData = new URL(url).searchParams;
    let id = urlData.get('id');
    let content = $('.cart');

    $.ajax({
        url: `http://159.65.21.42:9000/products`,
        method: "GET",
        success: (Response) => {
            displayProduct(Response);
        },
        error: (err) => {
            console.log(err);
        }
    });

    function displayProduct(data) {
        let markUp = "";
        let i = 0;
        while(i <= 29) {
            markUp +=`
                <div class="shop-col">
                    <img src="${data[i].image}" alt="">
                    <p class="product_name"><a href="./product.html?id=${data[i]._id}" 
                    class="tablinks-inverted">${data.name}</a></p>
                    <p class="price">£${data[i].price}</p>
                </div>
            `;
            $('.shop-grid').append(markUp);
            i++;
        }
    }

    //Other product display boxes
    $.ajax({
            url: "http://159.65.21.42:9000/products",
            method: "GET",
            success: function(data) {
                    let i = 0;
                    while(i <= 2) {
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
        url: `http://159.65.21.42:9000/products?id=${id}`,
        method: "GET",
        success: function (data) {
            let product = "";
                let response = data.find(x => x._id == id);
                product += `
                 <div class="product-text">
                 <div class="tablinks-col">
                     <a href="#" class="tablinks">shop /</a>
                     <a href="#" class="tablinks-inverted">seperated<a>
                     </div>
                     <div class="product-name">
                         <p class="product-title">${response.name}</p>
                         <p class="price">£${response.price}</p>
                     </div>
                     <div class="product-descript">
                         <article>
                             ${response.description}
    
                         <div class="product-sizes">
                             <a href="#" class="tablinks">34</a>
                             <a href="#" class="tablinks">36</a>
                                         <a href="#" class="tablinks">38<a>
                                             <a href="#" class="tablinks">40<a>
                                     <a href="#" class="tablinks">42</a>
                                             </div>
                                             </article>
                                             <button type="button"class="article-btn-inverted" id="cartBtn" data-productId=${response._id}>add to cart</button>
                            
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
                                             <img src=${response.image} alt="">
                                         </div>
                                         <div class="product2-img">
                                             <img src="${response.image}" alt="">
                                         </div>
                                     </div>
                                 </div>
                `;
            $('.product-top-section').append(product);
            bindEvent(response)
        },
        error: (err) => {
            $('.load-fail').html('Could\'nt get product details, try again please', err);
        }
    });

    let cart = localStorage.getItem("cart");
    let arr = [];
    let cartObj = {};
    // console.log(cart);

    function bindEvent(response) {
        $('#cartBtn').click( () => {
            let item = $('#cartBtn').attr('data-productId');
            let cartItem = "";
            //if the cart is not empty
            if(cart) {
                arr = JSON.parse(cart);
                    cartObj = arr.find(x=>x._id == id);
                    arr.push(cartObj);
                        localStorage.setItem("cart", JSON.stringify(arr));
                        $('.cart-body').toggleClass('cart-dropped');
            }else {
                cartObj = response;
                arr = [cartObj];
                 localStorage.setItem("cart", JSON.stringify(arr));
            }
            displayCart(arr);
        });
    }

    function displayCart(response) {
        console.log(response.length);
        $('.counter').html(response.length);
        
        let i = 0;
        while(i < response.length -1) {
            console.log(response[i].name);
            let cartItem = `
                <div class="cart-row">
                    <div id="removable">
                        <div class="cart-items">
                            <img src=${response[i].image} alt="product_image" class="cart-img">
                            <span class="cart-item-name">${response[i].name}</span>
                        </div>
                        <p class="price">£${response[i].price}</p>
                        <div class="cart-items-stats">
                            <input type="number" class="product-qty" value="1">
                            <button class="removebtn">remove</button>
                        </div>
                    </div>
                </div>
                `;
                $('.cart-row-inner').append(cartItem);
                i++;
                cartLogic(response);
                updatePrice();
        }   
    }

    function cartLogic(counter) {   
        $('.removebtn').click( () => {
            let item = $('#removable');
                item.eq(0).remove();
                let snoop = counter.find(x=>x._id == id);
                localStorage.removeItem("cart", snoop);
                if(counter.length == 0) {
                    $('.cart-body').toggleClass('cart-dropped');
                }
                updatePrice()
        })
    }

    function updatePrice() {
       let amount = $('.price');
       amount = amount.value;
       console.log(amount);
        //    amount = parseFloat(amount.replace('£', '')); 
       let qty = $('.product-qty');
       for( let i = 0; i<= qty; i++) {
           qty = qty[i];
       }    
    }

})
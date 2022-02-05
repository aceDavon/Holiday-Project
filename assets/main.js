$(document).ready(function (){
    
    // let url = window.location.href;
    // let urlData = new URL(url).searchParams;
    // let id = urlData.get('id');

    

    let header =  `
    <nav class="top-nav">
        <div class="nav-menu">
            <div class="logo">
                <h6 class="logo-text"><a href="./index.html" class="menu-links">Sassi Holford</a></h6>
            </div>
            <div class="top-menu">
                <ul class="motion-links">
                    <li><a href="" class="menu-links">About</a></li>
                    <li><a href="#" class="menu-links">Bridal</a></li>
                    <li><a href="#" class="menu-links">Fashion</a></li>
                    <li><a href="#" class="menu-links">Appointments</a></li>
                    <li><a href="#" class="menu-links">Enquiries</a></li>
                    <li><a href="#" class="menu-links">Blog</a></li>
                    <li><a href="./shop.html#" class="menu-links">Our Shop</a></li>
                    <li><a href="./login.html" class="menu-links">login</a></li>
                </ul>
            </div>
        </div>
        <div class="icons">
            <ul>
                <li><a href="#" class="menu-links">Account</a></li>
                <li><img width="15px" height="15px" src="./assets/images/shop/search.png" alt="" class="search"></li>
                <li><img width="15px" height="15px" src="./assets/images/shop/bag.png" alt="" class="bag"></li>
            </ul>
        </div>
    </nav>
    `

    let  mobile_menu = `
    <nav class="mobile-nav">
        <div class="nav-items">
            <div class="hamburger">
                <img src="./assets/images/shop/menu.png" alt="hamburger" class="menu">
            </div>
            <div class="mobile-logo">
                <h6 class="logo-text"><a href="./index.html" class="menu-links">Sassi Holford</a></h6>
            </div>
        </div>
        <div class="mobile-icons">
            <ul>
                <li><a href="#" class="menu-links">Account</a></li>
                <li><img width="15px" height="15px" src="./assets/images/shop/search.png" alt="" class="search"></li>
                <li><img width="15px" height="15px" src="./assets/images/shop/bag.png"  alt="" class="bag"></li>
            </ul>
        </div>
    </nav>
    `;

    // let  cart = `
    // <div class="cart-body">
    //     <div class="empty-cart">
    //         <p class="cart-items-info">
    //             Your bag is empty
    //         </p>
    //         <button class="article-btn">go to the shop</button>
    //     </div>
    //     <div class="cart-body">
    //         <p class="cart-items-info">
    //             Your bag is empty
    //         </p>
            
    //         <button class="article-btn">go to the shop</button>
    //     </div>
    //     <div class="cart-row1">
    //     <div class="cart-row-inner">
    //         <div class="cart-items">
    //             <img src="./assets/images/shop/SASSI-HOLFORD-RTW-SS21-SAND-WINCHESTER-DRESS-2-459x683.jpg" alt="product_image" class="cart-img">
    //             <span class="cart-item-name">Sassi holford items</span>
    //         </div>
    //         <span class="price">&euro; 9.99</span>
    //         <div class="cart-items-stats">
    //             <input type="number" class="product-qty" value="2">
    //             <button class="removebtn">remove</button>
    //         </div>
    //     </div>
    //     <div class="cart-total">
    //         <span class="items-total"><h3>total:</h3><p>£12.58</p></span>
    //     </div>
    //     </div>
    // </div>
    // `;
    
    let footer = `
    <div class="footer">
        <div class="copyright">
            <label for="copyright">&copy; 2021 sassi holford</label>
            <ul>
                <li><a href="#" class="footer-links">Terms & Conditions</a></li>
                <li><a href="#" class="footer-links">Privacy policy</a></li>
                <li><a href="#" class="footer-links">website by gc</a></li>
            </ul>
        </div>
            <div class="footer-menu-lists">
                <ul>
                    <label for="about us">about us</label>
                    <li><a href="#" class="footer-links">bridal stockists</a></li>
                    <li><a href="#" class="footer-links">magazine</a></li>
                    <li><a href="#" class="footer-links">our Story</a></li>
                    <li><a href="#" class="footer-links">responsibility</a></li>
                </ul>
                <ul>
                    <label for="about us">about us</label>
                    <li><a href="#" class="footer-links">bridal stockists</a></li>
                    <li><a href="#" class="footer-links">magazine</a></li>
                    <li><a href="#" class="footer-links">our Story</a></li>
                    <li><a href="#" class="footer-links">responsibility</a></li>
                </ul>
                <ul>
                    <label for="about us">about us</label>
                    <li><a href="#" class="footer-links">bridal stockists</a></li>
                    <li><a href="#" class="footer-links">magazine</a></li>
                    <li><a href="#" class="footer-links">our Story</a></li>
                    <li><a href="#" class="footer-links">responsibility</a></li>
                </ul>
                <ul class="social-icons">
                <li><img src="./assets/images/shop/facebook.png" alt=""></li>
                <li><img src="./assets/images/shop/twitter.png" alt=""></li>
                <li><img src="./assets/images/shop/instagram.png" alt=""></li>
                <li><img src="./assets/images/shop/pinterest-circular-logo-symbol.png" alt=""></li>
                <li><img src="./assets/images/shop/youtube.png" alt=""></li>
                </ul>
            </div>
    </div>
    `;

    $('.topNav').append(header);
    $('.mobileNav').append(mobile_menu);
    // $('.cart').append(cart);  
    $('.footer').append(footer);

    // make navbar links animate 
    let fastLink = $('.motion-links li');

    $(fastLink).each(function(i, link){
        $(link).children('a').hover(function(){
            $(this).slideUp('slow').stop(true, true);
        }, function(){
            $(this).slideDown('slow');
        });
    });

    //Cart Logic
    // $('.removebtn').click(function (event) {
    //     let item = $('.cart-row1');
    //         item.eq(0).remove();
    //         updatePrice();
    //         if($('.cart-row1').length == 0) {
    //             $('.empty-cart').toggle();
    //         }
    // });

    // function updatePrice() {
    //    let amount = $('.price');
    //    amount = amount.eq(0).val();
    //    amount = parseFloat(amount.replace('£', '')); 
    //    let qty = $('.product-qty');
    //    for( let i = 0; i<= qty; i++) {
    //        qty = qty[i];
    //    }
    //    console.log(qty);
        
    // }

    // $('.menu-links').hover(function () { 
    //     $('.menu-links').slideUp('slow');
    // }, function(){
    //     $('.menu-links').slideDown('slow');
    // });

    //mobile menu display
   $('.hamburger img').click(function(){
       $('.top-menu ul').toggleClass('stick');
       $('.top-menu ul').toggle();
   })

   $('.bag').click(function(){
       $('.cart').toggleClass('modal');
       $('.cart').toggle()
    })

    $('.close-btn').click(function(){
        $('.cart').toggle();
       })

       let images = $('.flex-col, .shop-col, .insta-col, .single-grid-first');

       $(images).each(function(i, img){
        
           $(img)
            .mouseover(function(){
                $(this).children('img').addClass('zoom');
            })
            .mouseout(function(){
                $(this).children('img').removeClass('zoom');
            })
       })

});

// Fix navigator bar to top

$(document).scrollTop( function (){
    var offset = $('.topNav').offset()
    var top = offset.top
    if(scrollY >= top){
        $('.topNav').addClass('sticky');
        $('.mobileNav').addClass('sticky');
        $('.top-menu ul').toggleClass('stick');
        $('.top-menu ul').toggle();
    }else{
        $('.topNav').removeClass('sticky');
        $('.mobileNav').removeClass('sticky');
    }
});

// Animate menu links on mouseover

$(document).ready(function (){
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
    `
    
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
    let cart = `
        <div class="cart-header">
            <p class="cart-items-count">
                bag items(0)
            </p>
            <a class="cart-close-btn">close</a>
        </div>
        <div class="cart-body">
            <p class="cart-items-info">
                Your bag is empty
            </p>
            
            <button class="article-btn">go to the shop</button>
        </div>
    `;

    $('.topNav').append(header);
    $('.cart').append(cart);
    $('.mobileNav').append(mobile_menu);
    $('.footer').append(footer);

    let fastLink = $('.motion-links li');

    $(fastLink).each(function(i, link){
        $(link).children('a').hover(function(){
            $(this).slideUp('slow').stop(true, true);
        }, function(){
            $(this).slideDown('slow');
        });
    })

    // $('.menu-links').hover(function () { 
    //     $('.menu-links').slideUp('slow');
    // }, function(){
    //     $('.menu-links').slideDown('slow');
    // });

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

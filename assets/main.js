$(document).ready(function (){
    let header = 
    `
    <nav class="top-nav">
        <div class="nav-menu">
            <div class="logo">
                <h6 class="logo-text"><a href="./index.html" class="menu-links">Sassi Holford</a></h6>
            </div>
            <div class="top-menu">
                <ul>
                    <li><a href="" class="menu-links">About</a></li>
                    <li><a href="#" class="menu-links">Bridal</a></li>
                    <li><a href="#" class="menu-links">Fashion</a></li>
                    <li><a href="#" class="menu-links">Appointments</a></li>
                    <li><a href="#" class="menu-links">Enquiries</a></li>
                    <li><a href="#" class="menu-links">Blog</a></li>
                    <li><a href="./stores.html#" class="menu-links">Our Stores</a></li>
                    <li><a href="#" class="menu-links"></a>Stockists</a></li>
                </ul>
            </div>
        </div>
        <div class="icons">
            <ul>
                <li><a href="#" class="menu-links">Account</a></li>
                <li><img width="15px" height="15px" src="./assets/images/shop/search.png" alt="" class="search"></li>
                <li><img width="15px" height="15px" src="./assets/images/shop/bag.png" alt="" class="cart"></li>
            </ul>
        </div>
    </nav>
    `

    let  mobile_menu = 
    `
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
                <li><img width="15px" height="15px" src="./assets/images/shop/bag.png"  alt="" class="cart"></li>
            </ul>
        </div>
    </nav>
    `
    
    let footer =
    `
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
    `
    $('.topNav').append(header);
    $('.mobileNav').append(mobile_menu);
    $('.footer').append(footer);
}).scroll(function(){
    $( this ).animate({
        width: 'grow',
        height: 'grow'
    })
});



$(document).scrollTop( function (){
    var offset = $('.topNav').offset()
    var top = offset.top
    if(scrollY >= top){
        $('.topNav').addClass('sticky')
    }else{
        $('.topNav').removeClass('sticky')
    }
    
});

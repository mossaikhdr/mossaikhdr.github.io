var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

// check if the device is mobile or desktop
if (isMobile.any() !== null || isMobile.any() != null) {
    // window.alert('mobile device');
    document.querySelector('.nav-menu').classList.add('nav-mobile');
    loadCSS('mobile/mobile.css');
    loadCSS('mobile/nav_mobile.css');
    loadCSS('mobile/footer_mobile.css');
} else {
    if (window.innerWidth <= 700) {
        document.querySelector('.nav-menu').classList.add('nav-mobile');
        loadCSS('mobile/mobile.css');
        loadCSS('mobile/nav_mobile.css');
        loadCSS('mobile/footer_mobile.css');
    } else {
        document.querySelector('.nav-menu').classList.remove('nav-mobile');
        loadCSS('desktop/style.css');
        loadCSS('desktop/nav.css');
        loadCSS('desktop/footer.css');
    }
    window.addEventListener("resize", function(event) {
        if (window.innerWidth <= 700) {
            document.querySelector('.nav-menu').classList.add('nav-mobile');
            loadCSS('mobile/mobile.css');
            loadCSS('mobile/nav_mobile.css');
            loadCSS('mobile/footer_mobile.css');
        } else {
            document.querySelector('.nav-menu').classList.remove('nav-mobile');
            loadCSS('desktop/style.css');
            loadCSS('desktop/nav.css');
            loadCSS('desktop/footer.css');
        }
    })
}


function loadCSS(src) {
    var style = document.createElement('link');
    style.rel = 'stylesheet';
    style.type = 'text/css';
    style.href = src;
    document.head.appendChild(style);
}

var btn = document.querySelector('.nav-fixed');
var menu = document.querySelector('.nav-menu');
var menuOpen = false;
btn.onclick = function() {
    menuOpen = !menuOpen;
    if (menuOpen) {
        menu.style.opacity = '1';
        menu.style.height = '100%';
    } else {
        menu.style.opacity = '0';
        menu.style.height = '0%';
    }
}
/* menu burger start */

(function () {

    const smoothScroll = function (targetEl, duration) {
        const headerElHeight =  document.querySelector('.header').clientHeight;
        let target = document.querySelector(targetEl);
        let targetPosition = target.getBoundingClientRect().top - headerElHeight;
        let startPosition = window.pageYOffset;
        let startTime = null;
    
        const ease = function(t,b,c,d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        };
    
        const animation = function(currentTime){
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, startPosition, targetPosition, duration);
            window.scrollTo(0,run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        };
        requestAnimationFrame(animation);

    };

    const scrollTo = function () {
        const links = document.querySelectorAll('.js-scroll');
        links.forEach(each => {
            each.addEventListener('click', function () {
                const currentTarget = this.getAttribute('href');
                smoothScroll(currentTarget, 1000);
            });
        });
    };
    scrollTo();
}());


(function() {
    const burgerItem  = document.querySelector('.header__burger');
    const menu = document.querySelector('.header__nav');
    const menuCloseItem  = document.querySelector('.header__nav-close');
    const menuClose = document.querySelector('.header__list');

    burgerItem.addEventListener('click', () => {
        menu.classList.add('header__menu_active')
    });
    menuCloseItem.addEventListener('click', () => {
        menu.classList.remove('header__menu_active')
    });
    menuClose.addEventListener('click', () => {
        menu.classList.remove('header__menu_active')
    });
}())

/* menu burger end */


/* slider start */

$(document).ready(function(){
    $('.main__slider').slick({
        arrows:true,
        dots:false,
        adaptiveHeight:true, 
        infinite: false,
        
    });
})

$(document).ready(function(){
    $('.gallery__slider').slick({
        arrows:true,
        dots:false,
        adaptiveHeight:true, 
        infinite: false,
        slidesToShow: 4,
        responsive:[
			{
				breakpoint: 768,
				settings: {
					slidesToShow:3
				}
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow:2
				}
			},
            
		]
    });
})

$(document).ready(function(){
    $('.test__slider').slick({
        arrows:true,
        dots:false,
        adaptiveHeight:true, 
        infinite: false,
        
    });
})

/* slider end */


/* sticky header start */

(function (){
    const header = document.querySelector('.header');
    window.onscroll = () => {
        if (window.pageYOffset > 50) {
            header.classList.add('header_active');
        }else {
            header.classList.remove('header_active');
        }
    };
}());

/* sticky header end */





const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget)
        tabContents.forEach(tabContent => {
            tabContent.classList.remove('active')
        })
        tabs.forEach(tab => {
            tab.classList.remove('active')
        })
        target.classList.add('active')
        tab.classList.add('active')
    })
})



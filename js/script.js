$(document).ready(function () {
    /* scroll */
    $('a[href^="#"]').click(function () {
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top - 60;
        jQuery("html:not(:animated), body:not(:animated)").animate({scrollTop: destination}, 800);
        return false;
    });

    /* set price */
    $('[name="country"]').on('change', function () {
        var geoKey = $(this).find('option:selected').val();
        var data = $jsonData.prices[geoKey];
        var price = data.price;
        var oldPrice = data.old_price;
        var currency = data.currency;
        $("[value = " + geoKey + "]").attr("selected", true).siblings().attr('selected', false);

        $('.price_land_s1').text(price);
        $('.price_land_s2').text(oldPrice);
        $('.price_land_curr').text(currency);
    });

    /* promo swiper */
    var promoGetColors = document.querySelector('.promo__slider');
    var promoGetColorsItem = document.querySelectorAll('.promo__slider__color__item');
    if (promoGetColors) {
        if (promoGetColorsItem) {
            (function () {
                var setIndexColor = function setIndexColor(indexColor) {
                    var getColorItem = promoGetColorsItem[indexColor].getAttribute('data-color');
                    var getCurrentColorItem = document.querySelector('.promo__slider__color__item.active');

                    if (getCurrentColorItem) {
                        getCurrentColorItem.innerHTML = '';
                        getCurrentColorItem.classList.remove('active');
                    }

                    promoGetColors.style.backgroundColor = promoGetColorsItem[indexColor].getAttribute('data-color');
                    promoGetColorsItem[indexColor].classList.add('active');
                    promoGetColorsItem[indexColor].innerHTML = '<svg viewBox="0 0 19 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 6.33333L6.78 12L18 1" stroke="white" stroke-width="2"/></svg>';
                }; //Init


                var getColorItem = promoGetColorsItem[0].getAttribute('data-color');
                promoGetColors.style.backgroundColor = getColorItem;
                promoGetColorsItem[0].classList.add('active');
                promoGetColorsItem[0].innerHTML = '<svg viewBox="0 0 19 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 6.33333L6.78 12L18 1" stroke="white" stroke-width="2"/></svg>';
                var promoSlider = new Swiper('.promo__slider__container', {
                    slidesPerView: 1,
                    simulateTouch: false,
                    navigation: {
                    }
                }); //Events

                promoSlider.on('slideChange', function () {
                    setIndexColor(promoSlider.activeIndex);
                });

                for (var i = 0; i < promoGetColorsItem.length; i++) {
                    promoGetColorsItem[i].addEventListener('click', function (event) {
                        var thisColorIndex = this.getAttribute('data-index');
                        setIndexColor(thisColorIndex);
                        promoSlider.slideTo(thisColorIndex, 400, false);
                    });
                }
            })();
        }
    }
});





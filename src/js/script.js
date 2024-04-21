
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる

    //ハンバーガーメニュー
    $('.js-hamburger').on('click', function () {
        if ($('.js-hamburger').hasClass('is-open')) {
            $('.js-drawer-menu').removeClass("is-open");
            $(this).removeClass('is-open');
        } else {
            $('.js-drawer-menu').addClass("is-open");
            $(this).addClass('is-open');
        }
    });

      //スクロールに応じてヘッダーの背景色が変化
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
        $(".header").addClass("is_active");
        } else {
        $(".header").removeClass("is_active");
        }
    });

    $(function() {
        // 竭�繧ｿ繝悶ｒ繧ｯ繝ｪ繝�け縺励◆繧臥匱蜍�
        $('.news__tab li').click(function() {
        // 竭｡繧ｯ繝ｪ繝�け縺輔ｌ縺溘ち繝悶�鬆�分繧貞､画焚縺ｫ譬ｼ邏�
            var index = $('.news__tab li').index(this);
        // 竭｢繧ｯ繝ｪ繝�け貂医∩繧ｿ繝悶�繝�じ繧､繝ｳ繧定ｨｭ螳壹＠縺歡ss縺ｮ繧ｯ繝ｩ繧ｹ繧剃ｸ譌ｦ蜑企勁
            $('.news__tab li').removeClass('news__tab-list');
        // 竭｣繧ｯ繝ｪ繝�け縺輔ｌ縺溘ち繝悶↓繧ｯ繝ｪ繝�け貂医∩繝�じ繧､繝ｳ繧帝←逕ｨ縺吶ｋ
            $(this).addClass('news__tab-list');
        // 竭､繧ｳ繝ｳ繝�Φ繝�ｒ荳譌ｦ髱櫁｡ｨ遉ｺ縺ｫ縺励√け繝ｪ繝�け縺輔ｌ縺滄��分縺ｮ繧ｳ繝ｳ繝�Φ繝��縺ｿ繧定｡ｨ遉ｺ
            $('.news__wrapper ul').removeClass('news__list').eq(index).addClass('news__list');
        });
    });

    //Campaign swiper
    var swiper = new Swiper(".js-visit-swiper", {
        allowTouchMove: false, // マウスでの操作を無効化
        centeredSlides: true, // 中央にスライドを配置
        slidesPerView: "auto",
        //スライド枚数 1.26枚

        //〇〇以上の画面幅で〇〇枚のスライドと幅が〇〇pxと設定する
        breakpoints: {
        768: {
            spaceBetween: 40
        }
        },
        spaceBetween: 15,
        speed: 5000,
        loop: true,
        autoplay: {
        delay: 0,
        disableOnInteraction: false
        },
    });
});
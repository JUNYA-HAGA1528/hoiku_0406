
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


    const swiper = new Swiper(".swiper", {
        centeredSlides: true, // 1枚目のスライドを中央にする
        loop: true, // ループさせる
        speed: 700, // 少しゆっくり(デフォルトは300)
        slidesPerView: 1.5, // スライドの表示枚数
        autoplay: { // 自動再生
          delay: 3000, // 3秒後に次のスライド
          disableOnInteraction: false, // 矢印をクリックしても自動再生を止めない
        },

        breakpoints: {
            768: {
                slidesPerView: 3, // スライドの表示枚数
            }
        },
      
        // ページネーション
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        // 前後の矢印
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
    });

      // 同ページリンク sp
  $(function(){
    $('.js-tab-link a').click(function() {
    //押されたのが.リストの何番目か調べる
    var number = $('.js-tab-link a').index(this);
    //表示領域を全部非表示にする
    $('.page-introduction__tab-cards li').hide();
    //押されたのと同じ番目のを表示する
    $('.page-introduction__tab-cards li').eq(number).fadeIn();
    //.activeがついてるのを外す
    $('.js-tab-link a').removeClass('active');
    $('.js-tab-info li').removeClass('active');
    //押activeを付与してる      
    $('.js-tab-info li').eq(number).addClass('active');
    });
  });
  
  // 同ページリンク footer
  $(function(){
    $('.js-tab-link-footer a').click(function() {
    //押されたのが.リストの何番目か調べる
    var number = $('.js-tab-link-footer a').index(this);
    //表示領域を全部非表示にする
    $('.page-introduction__tab-cards li').hide();
    //押されたのと同じ番目のを表示する
    $('.page-introduction__tab-cards li').eq(number).fadeIn();
    //.activeがついてるのを外す
    $('.js-tab-link-footer a').removeClass('active');
    $('.js-tab-info li').removeClass('active');
    //押activeを付与してる      
    $('.js-tab-info li').eq(number).addClass('active');
    });
  });

  // タブ
  $(function(){
    $('.js-tab-info li').click(function() {
    //押されたのがリストの何番目か調べる
    var index = $('.js-tab-info li').index(this);
    //表示領域を全部非表示にする
    $('.page-introduction__tab-cards li').hide();
    //押されたのと同じ番目のを表示する
    $('.page-introduction__tab-cards li').eq(index).fadeIn();
    //.activeがついてるのを外す
    $('.js-tab-info li').removeClass('active');
    //押したやつにactiveを付与してる
    $(this).addClass('active');
    });
  });

  // 他ぺージ
  $(function(){
    //ハッシュタグ読み込み
    var hash = location.hash;
    if(hash.length){
    //ハッシュがあったら
    if(hash.match(/#info/)){
    //ハッシュタグが「#tab◯」ってなってたら
    //表示領域を全部非表示にする
    $('.page-introduction__tab-cards li').hide();
    //メニューに付いてる「class="active"」を削除
    $('.js-tab-info li').removeClass('active');
    //「#tab◯」を「◯」だけにする
    var tabname = hash.slice(5.1);
   
    tabname = tabname - 1;
    //n番目の内容を表示する
    $('.page-introduction__tab-cards li').eq(tabname).fadeIn();
    //n番目のメニューに「class="active"」を付与する
    $('.js-tab-info li').eq(tabname).addClass('active');
    }else{
    //ハッシュタグが「#tab◯」じゃなかったら
    //1番目のメニューに「class="active"」を付与する
    $('.js-tab-info li').eq(0).addClass('active');
    //内容部分を全部非表示にする
    $('.page-introduction__tab-cards li').hide();
    //1番目の内容を表示する
    $('.page-introduction__tab-cards li').eq(0).fadeIn();
    }
    }else{
    //ハッシュがなかったら（普通にページ開いたときとか）
    //1番目のメニューに「class="active"」を付与する
    $('.js-tab-info li').eq(0).addClass('active');
    //内容部分を全部非表示にする
    $('.page-introduction__tab-cards li').hide();
    //1番目の表示内容を表示する
    $('.page-introduction__tab-cards li').eq(0).fadeIn();
    }
  });

});



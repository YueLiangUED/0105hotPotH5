//是否关注
window.isGuanzhu = false;
//是否验证手机
window.isyanzheng = false;

(function(win) {
  (function($) {
    function PreLoad(imgs, opts) {
      this.imgs = (typeof imgs === 'string') ? [imgs] : imgs;
      this.opts = $.extend({}, PreLoad.DEFAULTS, opts);
      if (this.opts.order === 'ordered') {
        this._ordered(); // 有序加载
      } else {
        this._unordered(); // 无序加载
      }
    }
    PreLoad.DEFAULTS = {
      order: 'unordered', //默认进行无序预加载
      each: null, // 单个图片加载完成后执行的方法
      all: null // 所有图片加载完成后执行的方法
    };

    PreLoad.prototype._ordered = function() { // 有序加载
      var imgs = this.imgs,
        len = imgs.length,
        count = 0,
        opts = this.opts;
      load();

      function load() {
        var img = new Image();
        $(img).on('load error', function() {
          opts.each && opts.each(count);
          if (count >= len) {
            // 所有图片加载完毕
            opts.all && opts.all();
          } else {
            load();
          }
          count++;
        });
        img.src = imgs[count];
      }
    };
    PreLoad.prototype._unordered = function() { // 无序加载
      var imgs = this.imgs,
        len = imgs.length,
        count = 0,
        opts = this.opts;
      imgs.forEach(function(elem) {
        var img = new Image();
        $(img).on('load error', function() {
          opts.each && opts.each(count);
          if (count >= len - 1) {
            opts.all && opts.all();
          }
          count++;
        });
        img.src = elem;
      });
    };
    $.extend({
      preload: function(imgs, opts) {
        new PreLoad(imgs, opts);
      }
    });
  })(jQuery);

  Array.prototype.indexOf = function(val) {
    for (var i = 0; i < this.length; i++) {
      if (this[i] == val)
        return i
    }
    return -1;
  }

  Array.prototype.remove = function(val) {
    var index = this.indexOf(val);
    if (index > -1) {
      this.splice(index, 1);
      return index;
    }
  }

  //设置文件目录根路径
  var baseURL = './';

  localStorage.baseURL = baseURL;

  //获取设备像素比
  var Ratio = window.devicePixelRatio

  //获取屏幕宽高
  var w = document.documentElement.clientWidth || document.body.clientWidth;
  var h = document.documentElement.clientHeight || document.body.clientHeight;

  var gameWidth = Ratio * w
  var gameHeight = Ratio * h

  //创建game游戏对象
  var game = new Phaser.Game(gameWidth, gameHeight, Phaser.AUTO, 'game-container');

  //定义在游戏中在各个场景中使用的全局变量,例如在各个场景都可能调用的音频对象
  var background = null;

  //添加初始化设置以及加载资源
  game.state.add('Boot', Boot);
  game.state.add('Preloader', Preloader);
  //添加游戏场景
  game.state.add('Home', Home)
  game.state.add('Game1', Game1)
  game.state.add('Game2', Game2)
  game.state.add('Game3', Game3)
  game.state.add('Game4', Game4)

  var imgs = ['./img/game/guoGif.gif','./img/shadow/foodBox.png',
        './img/shadow/getPrizeBox.png','./img/shadow/hotpotBox.png','./img/shadow/phoneBox.png',
        './img/shadow/prizeBox.png','./img/shadow/qrBox.png','./img/shadow/rule.png',
        './img/shadow/yihanBox.png','./img/shadow/share1.png','./img/shadow/share2.png',
        './img/shadow/share3.png','./img/shadow/share4.png','./img/shadow/share5.png','./img/shadow/share6.png']

  $.preload(imgs, { // imgs: 图片数组或字符串 ['1.jgp', '2.jpg'] 或者 '1.jpg'
    order: 'ordered', // 默认无序加载
    each: function(count) {
      // 单个图片加载完成
      if(count==1){
        game.state.start('Boot')
      }
    },
    all: function() {
      // 所有图片加载完成
      //执行代码
    }
  });

  $('.close_btn').click(function() {
    $(this).parent().parent().hide()
  })

  var noChooseImgArr = ['./img/shadow/chongqing.png', './img/shadow/yuanyang.png', './img/shadow/laobeijing.png', './img/shadow/chaoshan.png']
  var chooseImgArr = ['./img/shadow/chongqing_c.png', './img/shadow/yuanyang_c.png', './img/shadow/laobeijing_c.png', './img/shadow/chaoshan_c.png']

  $('.hotpot').click(function() {

    for (var i = 0; i < $('.hotpot').length; i++) {
      $('.hotpot').eq(i).find('img').attr('src', noChooseImgArr[i])
    }
    $('.hotpot').removeClass('active')
    $(this).addClass('active')

    var type = parseInt($(this).attr('type'))

    $('.hotpot').eq(type).find('img').attr('src', chooseImgArr[type])

  })


  $('.choose_sure').click(function() {

    var type = parseInt($('.hotpot.active').attr('type'))

    $('.choose_shadow').hide()
    if (type == 0) {
      window.gameLevel = 0
      window.heartCount = 3
      game.state.start('Game2')
    } else if (type == 1) {
      window.gameLevel = 0
      window.heartCount = 3
      game.state.start('Game3')
    } else if (type == 2) {
      window.gameLevel = 0
      window.heartCount = 3
      game.state.start('Game4')
    } else if (type == 3) {
      window.gameLevel = 0
      window.heartCount = 3
      game.state.start('Game1')
    }
  })


  $('.myPrize_btn').click(function() {
    $('.food_shadow').show()
  })

  var shareImgArr = ['./img/shadow/share1.png','./img/shadow/share2.png','./img/shadow/share3.png','./img/shadow/share4.png','./img/shadow/share5.png','./img/shadow/share6.png']

  //每次游戏后获得奖品炫耀一下按钮
  $('.share_btn').click(function() {
    $('.share_shadow').show()

    var shareImgIndex = parseInt((window.gameLevel-1)/2)

    $('.share_bg').attr('src',shareImgArr[shareImgIndex])

  })

  $('.share_shadow').click(function() {
    $(this).hide()
  })


  $('.getPrzie_close').click(function() {
    console.log(window.gameLevel)
    if (window.gameLevel <= 10) {
      game.state.start(window.gameType)
    } else {
      alert('已通过所有关卡')
      game.state.start('Home')
    }
  })

  $('.game_over_close_btn').click(function() {
    game.state.start('Home')
  })

  $('.game_over_btn').click(function() {
    $('.game_over_shadow').hide()
    game.state.start('Home')
  })

  $('.qr_close_btn').click(function() {
    $('.phone_shadow').show()
    window.isGuanzhu = true
  })

  $('.phone_sure').click(function() {

    var reg = /^1[0-9]{10}$/;

    if ($('input.phone_number').val() == '' || $('input.yanzhengma').val() == '') {
      alert('手机号或验证码不能为空')
    } else if (!reg.test($('input.phone_number').val())) {
      alert('请输入正确的手机号')
    } else {
      $('.phone_shadow').hide()
      $('.choose_shadow').show()

      window.isyanzheng = true

    }
  })


  $('.jingxi').click(function(){
    $('.guo_shadow').hide()
    $('.getPrize_shadow').show()
  })

  $('.bigPrize_share_btn').click(function(){
    $('.share_shadow').show()
  })



})(window)
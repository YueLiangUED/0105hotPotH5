var bgmusic = null;
var hitmusic = null;
var hitmusic2 = null;

var Preloader = function(game){
  //从localStorage中提取储存的baseURL变量
  var baseURL = localStorage.baseURL;

  //初始化操作
  this.init = function(){
    game.stage.backgroundColor = '#f2cd03'
  }

  //资源加载
  this.preload = function(){

    //mp3
    // game.load.audio('bgmusic',baseURL+'/img/bg.mp3')

    //home
    game.load.image('home_bg',baseURL+'/img/home/home_bg.png')
    game.load.image('btn_myFood',baseURL+'/img/home/btn_myFood.png')
    game.load.image('btn_prizeRecord',baseURL+'/img/home/btn_prizeRecord.png')
    game.load.image('btn_rule',baseURL+'/img/home/btn_rule.png')
    game.load.image('home_bottom',baseURL+'/img/home/home_bottom.png')
    game.load.image('go',baseURL+'/img/home/go.png')
    game.load.image('cloud',baseURL+'/img/game/cloud.png')
    game.load.image('miss',baseURL+'/img/game/miss.png')

    game.load.atlasXML('banana',baseURL+'/img/game/banana.png',baseURL+'/img/game/banana.xml')
    game.load.atlasXML('wanzi',baseURL+'/img/game/wanzi.png',baseURL+'/img/game/wanzi.xml')
    game.load.atlasXML('phone',baseURL+'/img/game/phone.png',baseURL+'/img/game/phone.xml')
    game.load.atlasXML('dangao',baseURL+'/img/game/dangao.png',baseURL+'/img/game/dangao.xml')
    game.load.atlasXML('huacai',baseURL+'/img/game/huacai.png',baseURL+'/img/game/huacai.xml')
    game.load.atlasXML('roupian',baseURL+'/img/game/roupian.png',baseURL+'/img/game/roupian.xml')

    game.load.atlasXML('banana_b',baseURL+'/img/game/banana_b.png',baseURL+'/img/game/banana_b.xml')
    game.load.atlasXML('wanzi_b',baseURL+'/img/game/wanzi_b.png',baseURL+'/img/game/wanzi_b.xml')
    game.load.atlasXML('phone_b',baseURL+'/img/game/phone_b.png',baseURL+'/img/game/phone_b.xml')
    game.load.atlasXML('dangao_b',baseURL+'/img/game/dangao_b.png',baseURL+'/img/game/dangao_b.xml')
    game.load.atlasXML('huacai_b',baseURL+'/img/game/huacai_b.png',baseURL+'/img/game/huacai_b.xml')
    game.load.atlasXML('roupian_b',baseURL+'/img/game/roupian_b.png',baseURL+'/img/game/roupian_b.xml')

    //game
    game.load.image('game_bg',baseURL+'/img/game/game_bg.png')
    game.load.image('head',baseURL+'/img/game/head.png')
    game.load.image('chaoshan_pot',baseURL+'/img/game/chaoshan_pot.png')
    game.load.image('chaoshan_bottom',baseURL+'/img/game/chaoshan_bottom.png')

    game.load.image('chongqing_pot',baseURL+'/img/game/chongqing_pot.png')
    game.load.image('chongqing_bottom',baseURL+'/img/game/chongqing_bottom.png')

    game.load.image('yuanyang_pot',baseURL+'/img/game/yuanyang_pot.png')
    
    game.load.image('yuanyang_bottom',baseURL+'/img/game/yuanyang_bottom.png')

    game.load.image('laobeijing_pot',baseURL+'/img/game/laobeijing_pot.png')
    
    game.load.image('laobeijing_bottom',baseURL+'/img/game/laobeijing_bottom.png')

    game.load.image('jingxi',baseURL+'/img/shadow/jingxi.png')




    game.load.image('foot',baseURL+'/img/game/foot.png')
    game.load.image('x',baseURL+'/img/game/x.png')
    game.load.image('heart',baseURL+'/img/game/heart.png')
    game.load.image('level',baseURL+'/img/game/level.png')


    game.load.atlasXML('chopsticks',baseURL+'/img/game/chopsticks.png',baseURL+'/img/game/chopsticks.xml')


    //资源加载过程中执行的操作
    game.load.onFileComplete.add(function(progress) {
        document.getElementById('progress').innerHTML = '疯狂加载中 ' + progress + '%'
    })
    //资源加载结束后执行的操作
    game.load.onLoadComplete.add(function() {
        document.getElementById('loading').style.display = 'none'
        game.state.start('Home')
    }, game)

  }

  this.create = function(){

  }

}

var Home = function(game){
  var tool = new utils();

  //初始化
  this.init = function(){

  }

  this.create = function(){

    createFrist()
  }

  function createFrist(){

    var w = game.width
    var h = game.height

    var home_bg = game.add.sprite(0,-w*0.05,'home_bg')
    tool.setSize(home_bg,'width',game.width)

    var go = game.add.sprite(w*0.5,h*0.62,'go')
    tool.setSize(go,'width',w*0.22)
    go.anchor.set(0.5,0)

    var home_bottom = game.add.sprite(0,h,'home_bottom')
    tool.setSize(home_bottom,'width',w)
    home_bottom.anchor.set(0,1)

    var btn_rule = game.add.sprite(w,h,'btn_rule')
    tool.setSize(btn_rule,'width',w*0.12)
    btn_rule.anchor.set(1.2,1)

    var btn_myFood = game.add.sprite(w*0.15,w*1.3,'btn_myFood')
    tool.setSize(btn_myFood,'width',w*0.3)


    var btn_prizeRecord = game.add.sprite(w*0.55,w*1.3,'btn_prizeRecord')
    tool.setSize(btn_prizeRecord,'width',w*0.3)


    for(var i = 0;i<game3PointData.length;i++){

        var foodTypeIndex = i

        if(foodTypeIndex>=4){
          foodTypeIndex -=2
        }

        //获取随机食物位置
        var pointIndex = i
        if (pointIndex != null) {
          var foodMessageArr = []
          if(game3PointData[pointIndex].type=='red'){
            foodMessageArr = foodTypeArr
          }else if(game3PointData[pointIndex].type=='white'){
            foodMessageArr = foodTypeArr_b
          }

          var foodName = foodMessageArr[foodTypeIndex].name
          var foodScore = foodMessageArr[foodTypeIndex].score

          var food = game.add.sprite(w * game3PointData[pointIndex].w, w * game3PointData[pointIndex].h, foodName)
          tool.setSize(food, 'width', w * foodMessageArr[foodTypeIndex].width)
          food.anchor.set(0.5, 0.5)

          food.animations.add('play', [0, 1, 2, 3, 4]);
          food.play('play', 5, true);

        }
    }

    $('.cloud_box').show()

    go.inputEnabled = true

    go.events.onInputDown.add(function(){
      if(window.isGuanzhu&&window.isyanzheng){
        $('.choose_shadow').show()
      }else{
        $('.qr_shadow').show()
      }
    })

    btn_rule.inputEnabled = true

    btn_rule.events.onInputDown.add(function(){
      $('.rule_shadow').show()
    })

    btn_myFood.inputEnabled = true

    btn_myFood.events.onInputDown.add(function(){
      $('.food_shadow').show()
    })

    btn_prizeRecord.inputEnabled = true

    btn_prizeRecord.events.onInputDown.add(function(){
      $('.prize_shadow').show()
    })

  }

}
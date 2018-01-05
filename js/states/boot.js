var Boot = function(game) {
   var  baseURI = localStorage.baseURI
    this.init = function() {
        // game.input.maxPointers = 1;
        // this.stage.disableVisibilityChange = true;
        // this.scale.setMinMax(480, 260, 1024, 768);

        if (!game.device.desktop) {
            game.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;
            game.scale.forceOrientation(false, true);
            game.scale.enterIncorrectOrientation.add(enterIncorrectOrientation, this);
            game.scale.leaveIncorrectOrientation.add(leaveIncorrectOrientation, this);
        }
        game.scale.pageAlignHorizontally = true
        game.scale.pageAlignVertically = true
    }
    this.preload = function() {
        game.load.crossOrign = true
        // game.load.audio('bgmusice',baseURI+'/img/bg.mp3')
        //
        // game.load.onFileComplete.add(function(){
        //           //
        //           // window.sound = game.add.sound('bgmusice')
        //           //   window.sound.loop = true
        //           // window.sound.play()
        // })
    }
    this.create = function() {
      //  window.sound.volume = .5
        game.state.start('Preloader');
    }
    this.update = function() {}
    this.render = function() {}

    function gameResized(width, height) {}

    function enterIncorrectOrientation() {
        document.getElementById('orientation').style.display = 'block';
    }

    function leaveIncorrectOrientation() {
        document.getElementById('orientation').style.display = 'none';
    }

}

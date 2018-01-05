

function utils() {
    //设置宽高的适配，避免图片被压扁或者拉长
    this.setSize = function(sprite, param, len) {
        if (param === 'height') {
            var precent = len / sprite.height
            sprite.height = len
            sprite.width = sprite.width * precent
        } else {
            var precent = len / sprite.width
            sprite.width = len
            sprite.height = sprite.height * precent
        }
    }
    //设置宽高铺满整个屏幕,会出现拉长或者压扁的情况，在配图时尽量使用能适用大多数手机的图片
    this.setFull  = function(obj){
        obj.width = window.innerWidth
        obj.height = window.innerHeight
    }
    this.cw = function(num) {
        var w = document.documentElement.clientWidth || document.body.clientWidth;
        var res = w * (num / 100)
        return res
    }
    this.ch = function(num) {
        var h = document.documentElement.clientHeight;
        var res = h * (num / 100)
        return res
    }
}
// 动画特效
/*
 Back
 Bounce
 Circular
 Cubic
 Elastic
 Exponential
 Linear
 Quadratic
 Quartic
 Quintic
 Sinusoidal
 */


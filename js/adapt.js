function adapt(designWidth, rem2px) {
  var d = window.document.createElement('div');
  d.style.width = '1rem';
  d.style.display = "none";
  var head = window.document.getElementsByTagName('head')[0];
  head.appendChild(d);
  var defaultFontSize = parseFloat(window.getComputedStyle(d, null).getPropertyValue('width'));
  d.remove();
  // document.documentElement.style.fontSize = window.innerWidth / designWidth * rem2px / defaultFontSize * 100 + '%';
  var st = document.createElement('style');
  var portrait = "@media screen and (min-width: " + window.innerWidth + "px) {html{font-size:" + ((window.innerWidth / (designWidth / rem2px) / defaultFontSize) * 100) + "%;}}";
  var landscape = "@media screen and (min-width: " + window.innerHeight + "px) {html{font-size:" + ((window.innerHeight / (designWidth / rem2px) / defaultFontSize) * 100) + "%;}}"
  st.innerHTML = portrait + landscape;
  head.appendChild(st);
  return defaultFontSize
};


var defaultFontSize = adapt(750, 100);

//解决ios页面自动划动的问题
$('body').on('touchstart', function(event) {
  //起始位置
  //之前写成changedtouches了忘了大写
  oldX = event.changedTouches[0].clientX
  oldY = event.changedTouches[0].clientY
});
$('body').on('touchmove', function(event) {
  //新的位置
  newX = event.changedTouches[0].clientX
  newY = event.changedTouches[0].clientY
    //取绝对值,再来比 以免上滑动失效和左滑动生效（上滑动y的差值是负的，左同理）
  yValue = Math.abs(newY - oldY)
  xValue = Math.abs(newX - oldX)
  if (xValue > yValue) {
    event.preventDefault()
  }
  //然后
  oldX = newX;
  oldY = newY;
});
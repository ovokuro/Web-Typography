// get line height

var body = document.body
var style = window.getComputedStyle(body);
var lineHeight = style.getPropertyValue('line-height');
var lineHeight = lineHeight.split('p')[0];

var img = document.querySelector('img')

function loaded() {


  var fig = document.querySelectorAll('figure');
  var lh = document.querySelector('p').style.lineHeight;

  for (i = 0; i < fig.length; i++) {
    var h = fig[i].offsetHeight;

    
    var n = h;
    var next = Math.floor(n/lineHeight) * lineHeight;

    
    fig[i].style.height = next + "px"
    console.log(next)

  }
}

if (img.complete) {
  loaded()
} else {
  img.addEventListener('load', loaded)
  img.addEventListener('error', function () {
    alert('error')
  })
}

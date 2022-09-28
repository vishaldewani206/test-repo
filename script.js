let canvas = document.getElementById('canvas');
let colorPicker = document.getElementById('color');
let styles = document.getElementsByClassName('styles')[0];
let range = document.getElementById('range');
let currentValue = document.getElementById('currentValue');
let starting = document.querySelector('.starting');
let clear = document.querySelector('#clear');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight - styles.clientHeight;
let color = colorPicker.value;
let strokeSize = 5;
let ctx = canvas.getContext('2d');
let paint = false;
canvas.onclick = () => {
  if (paint) {
    paint = false;
  } else {
    paint = true;
  }
};
document.addEventListener('mousemove', () => {
  if (paint) {
    let x = event.clientX; // Get the horizontal coordinate
    let y = event.clientY; // Get the vertical coordinate
    ctx.beginPath();
    ctx.arc(x, y, strokeSize, 0, Math.PI * 2, true);
    ctx.fillStyle = color;
    ctx.fill();
  }
});

colorPicker.addEventListener('change', () => {
  console.log(colorPicker.value);
  color = colorPicker.value;
});
range.addEventListener('change', () => {
  console.log(range.value);
  strokeSize = range.value;
  currentValue.innerHTML = range.value;
});
let opacity = 1;
let timer = setInterval(disappear, 100);

function disappear() {
  if (opacity < 0.1) {
    clearInterval(timer);
    starting.style.display = 'none';
    starting.style.zIndex = -4;
    styles.style.zIndex = 1;
  }
  starting.style.opacity = opacity;
  opacity -= 0.1;
}

clear.onclick = () => {
  ctx.clearRect(
    0,
    0,
    window.innerWidth,
    window.innerHeight - styles.clientHeight
  );
};

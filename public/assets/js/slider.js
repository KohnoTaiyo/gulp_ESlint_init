const mainImg = document.getElementById('mainImg');
const img01 = document.getElementById('images01');
const img02 = document.getElementById('images02');
const img03 = document.getElementById('images03');
const left = document.getElementById('left');
const right = document.getElementById('right');
const imageSample = ['/assets/img/kasou_main_pc.jpg','/assets/img/pc_main_img.jpg','/assets/img/woman01.jpg'];

let c = 0;
mainImg.src = imageSample[c];

const change = (e) => {
  if(e.target === img01) {
    c = 0;
  } else if (e.target === img02) {
    c = 1;
  } else {
    c = 2;
  }
  mainImg.src = imageSample[c];
};

img01.addEventListener('click', change);
img02.addEventListener('click', change);
img03.addEventListener('click', change);


const slideLeft = () => {
  c = c -1;
  if(c === -1) {c = 2;}
  mainImg.src = imageSample[c];
};
const slideRight = () => {
  c = c + 1;
  if(c === 3) {c = 0;}
  mainImg.src = imageSample[c];
};

left.addEventListener('click', slideLeft);
right.addEventListener('click', slideRight);
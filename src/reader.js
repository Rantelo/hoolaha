let SCALE = 1;
const book = {
  aspectRatio: {
    width: 640,
    height: 360,
    orientation: "landscape"
  },
  pages: [
    [
      {
        type: 'text',
        content: 'Hoolaha!',
        size: 32,
        fill: 'white'
      }
    ]
  ]
}

const fitter = ( src_width, src_height, dest_width, dest_height ) => {
  SCALE = min(dest_width/src_width, dest_height/src_height);
  const fit = {
    width: src_width * SCALE,
    height: src_height * SCALE
  }
  return fit;
}

function setup() {
  const { width: book_w, height: book_h } = book.aspectRatio;
  const { width: w, height: h } = fitter(book_w, book_h, windowWidth, windowHeight);

  console.log('hello world');

  console.log({w, h});
  createCanvas(w, h);
  background(20);
  console.log(windowWidth);
}

function draw() {

  fill(book.pages[0][0].fill);
  textSize(book.pages[0][0].size * SCALE);
  const txt = book.pages[0][0].content;
  const title_w = textWidth(txt);
  text(txt, width / 2 - title_w / 2, height / 2)
}
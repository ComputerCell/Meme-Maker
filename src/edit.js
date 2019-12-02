let img, top_text, bottom_text;
let top_label;
let bottom_label;

function setup() {
  createCanvas(720, 400+200); // TODO: replace it with img.width, img.height
  img = loadImage('src/a.jpg');

  fill(255);
  top_text = createInput();
  top_text.value("TOP TEXT");
  top_text.position(width/2 - width/9, 40);

  bottom_text = createInput();
  bottom_text.value("BOTTOM TEXT");
  bottom_text.position(width/2 - width/9, height-height/10 + 10);

}

function draw() {
  image(img, 0, 0);
  fill(255);
  textSize(32);
  top_label = top_text.value();
  bottom_label = bottom_text.value();
  text(top_label, width/2 - width/8, 30);
  text(bottom_label, width/2 - width/6, height-height/10);

}

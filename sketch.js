function setup() {
	createCanvas(windowWidth, windowHeight);
	colorMode(HSB) //色相:0-360，飽和度0-100，亮度 0-100
}

function draw() {
	background(85, 50, 100);
  for (let y = 0; y < height; y += 50) {
    for (let x = 0; x < width; x += 50) {
      var clr = color((frameCount + (x + y) / (width + height) * 80) % 360, 100, 100); // 色相從0到360變化，飽和度和亮度固定
      clr.setAlpha((x + y) / (width + height)); // 設置透明度
      fill(clr); // 設置透明度
      ellipse(x, y, 50, 50); // x座標，y座標，寬度，高度
    }
  }
}

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background(240, 245, 255); // 浅蓝色背景
  
  // 将原点移动到画布中心
  translate(width/2, height/2);
  
  // 绘制8片花瓣
  let i=0;
  for(; i < 8; i++) {
    // 每片花瓣旋转45度
    rotate(45);
    
    // 设置花瓣颜色 - 粉色
    fill(105, 130, 180, 100);
    noStroke();
    
    // 绘制花瓣（椭圆形状）
    ellipse(0, -50, 40, 80);
  }
  
  // 绘制花蕊
  fill(255, 220, 50); // 黄色
  ellipse(0, 0, 30, 30);
  
  
  // 防止持续重绘
  noLoop();
}
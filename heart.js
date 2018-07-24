const Heart = class{
  static get contextOptions(){ return {alpha: true};}
  constructor(){
    this.path = [
     [75, 37, 70, 25, 50, 25],
     [20, 25, 20, 62.5, 20, 62.5],
     [20, 80, 40, 102, 75, 120],
     [110, 102, 130, 80, 130, 62.5],
     [130, 62.5, 130, 25, 100, 25],
     [85, 25, 75, 37, 75, 40]
    ];
  }
  paint(ctx, geom){
    ctx.fillStyle = 'rgba(255,0,0,0.5)';
    for(let y = 0; y < geom.height; y+=60){
      for(let x = 0; x < geom.width; x+=60){
        ctx.save();
        ctx.translate(x, y);
        ctx.scale(0.5, 0.5)
        ctx.beginPath();
        ctx.moveTo(75, 40);
        this.path.forEach(v=>ctx.bezierCurveTo(...v));
        ctx.fill();
        ctx.restore();
      }
    }
    console.log("painted");
  }
};
registerPaint('heart', Heart);

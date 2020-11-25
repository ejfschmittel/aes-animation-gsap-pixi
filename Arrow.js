

class PixiArrow extends PIXI.Container{


    constructor(width, height){
        super();
        this.arrowWidth = width;
        this.arrowHeight = height; 

        this.init();        
    }

    init(){


        
        this.rect = new PIXI.Graphics();
        this.rect.beginFill(0xFFFFFF);
        this.rect.drawRect(0,0, this.arrowWidth * .7,this.arrowHeight / 2);
        this.rect.endFill();



       var triangleWidth = this.arrowWidth * .3,
        triangleHeight = this.arrowHeight,
        triangleHalfway = this.arrowHeight/2;

        this.arrowHead = new PIXI.Graphics();
        this.arrowHead.position.set(this.arrowWidth * .7, -triangleHalfway / 2)
        this.arrowHead.beginFill(0xFFFFFF);
        this.arrowHead.lineStyle(0, 0xFF0000, 1);
        this.arrowHead.moveTo(0, 0);
        this.arrowHead.lineTo(triangleWidth, triangleHalfway); 
        this.arrowHead.lineTo(0, triangleHeight);
        //this.arrowHead.lineTo(0, 0);
       // this.arrowHead.lineTo(triangleHalfway, 0);
        this.arrowHead.endFill();

        this.addChild(this.rect)
       this.addChild(this.arrowHead)

   
    }

    setColor(color){
        this.getRect().tint = color;
        this.getArrowHead().tint = color;
    }

    getRect(){
        return this.rect;
    }

    getArrowHead(){
        return this.arrowHead;
    }




}
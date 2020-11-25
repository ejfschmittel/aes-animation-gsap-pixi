

const SOMETESTVAR = "test"

class BorderContainer extends PIXI.Container{

    constructor(graphic, borderWidth=2, borderColor=0xFFFFFF, anchored=true){
        super();
        this.graphic = graphic;
        this.border = null;
        this.borderWidth = borderWidth;
        this.borderColor = borderColor;
        this.anchored = anchored,
        this.init();
    }

    init(){
        this.border = this.graphic.clone();
        


       this.border.width = this.graphic.width + 2 * this.borderWidth;
        this.border.height = this.graphic.height + 2 * this.borderWidth;
        if(!this.anchored){
            this.border.position.set(-(this.borderWidth), -(this.borderWidth))
        }

        this.border.tint = this.borderColor;

        this.addChild(this.border)
        this.addChild(this.graphic)
    }


    getGraphic(){
        return this.graphic
    }

    getBorder(){
        return this.border;
    }


}


class CharInCircle extends PIXI.Container{

    constructor(char,borderWidth=2, radius = 50, settings = {}){
        super();

        this.settings = {
            backgroundColor: 0x000000,
            borderColor: 0xFFFFFF,
            textColor: 0xFFFFFF,
            fontSize: 70,
            ...settings
        }
        this.char = char;
        this.borderWidth = borderWidth;
        this.radius = radius;
        this.init();
    }

    init(){
        const circle = new PIXI.Graphics()
        circle.beginFill(0xFFFFFF);
        circle.drawCircle(0,0, this.radius);
        circle.endFill();
        circle.tint = this.settings.backgroundColor;

        const borderedCircle = new BorderContainer(circle, this.borderWidth, this.settings.borderColor);
        const circleText = new PIXI.Text(this.char,{
            fontFamily : 'Arial', 
            fontSize: this.settings.fontSize, fill : this.settings.textColor, 
            align : 'center'
        });

        borderedCircle.addChild(circleText)    
        circleText.anchor.set(0.5)
       // borderedCircle.position.set(Math.round(window.innerWidth /2),Math.round(window.innerHeight /2) - 100)

        this.addChild(borderedCircle)
    }
}
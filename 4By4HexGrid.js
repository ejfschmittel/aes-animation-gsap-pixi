

class Hexgrid4x4 extends PIXI.Container{
    constructor(fieldValues, settings = {}){
        super();
        this.settings = {
            width: 50,
            height: 40,
            fontSize: 24,
            color: 0x000000,
            backgroundColor: 0xFFFFFF,
            borderColor: 0x000000,
            ...settings
        }
        this.fieldValues = fieldValues;
        this.fields = []
        this.init();
    }

    init(){

 
       for(let i = 0; i < this.fieldValues.length; i++){
  
            const field = new HexgridField(this.fieldValues[i], this.settings)

            field.position.set(Math.round(Math.floor(i/4) * field.width) , Math.round((i % 4) * field.height))
            this.fields.push(field)
            this.addChild(field)
        }
    }

    getField(x, y){

    }
}

class HexgridField extends PIXI.Container{
    constructor(text, settings={}){
        super();
        this.settings = {
            width: 50,
            height: 40,
            fontSize: 24,
            color: 0x000000,
            backgroundColor: 0xFFFFFF,
            borderColor: 0x000000,
            borderWidth: 2,
            ...settings
        }
        this.text = text;
        this.textElement = null;
        this.rect = null;
        this.borderContainer = null;

        this.init();
    }

    init(){
        this.rect = new PIXI.Graphics()
        this.rect.beginFill(0xFFFFFF);
        this.rect.drawRect(0,0,this.settings.width, this.settings.height);
        this.rect.endFill();
        this.rect.tint = this.settings.backgroundColor;

        this.borderContainer = new BorderContainer(this.rect, this.settings.borderWidth, this.settings.borderColor, false);

        this.textElement = new PIXI.Text(this.text,{
            fontFamily : 'Arial', 
            fontSize: this.settings.fontSize, 
            fill : this.settings.color, 
            align : 'center'
        });

        this.textElement.anchor.set(0.5)
        this.textElement.position.set(Math.round(this.borderContainer.width / 2) , Math.round(this.borderContainer.height /2))

        this.borderContainer.addChild(this.textElement)
        this.addChild(this.borderContainer)
    }

    getSettings = () => this.settings;

    getText = () => this.textElement;
    getRect = () => this.rect;
    getborderContainer = () => this.borderContainer;
}
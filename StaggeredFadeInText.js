
class StaggeredFadeInText extends PIXI.Container {

    constructor(text, textSettings={}){
        super();
        this.text = text;
        this.textElements = []

        this.textSettings = {
            fontFamily : 'Arial', 
            fontSize: 50, fill : 0xFFFFFF, 
            align : 'center',
            ...textSettings
        }

        this.init();

        
    }

    init(){
        let offset = 0;

        for (var i = 0; i < this.text.length; i++) {
            const text = new PIXI.Text(this.text[i],this.textSettings)
            text.position.set(offset,0)

            offset += text.width;
            this.textElements.push(text);
            this.addChild(text);
        }
    }

    getCyphers(){
        return this.textElements;
    }

    setFontSize(val){
        this.tet
    }

    


}
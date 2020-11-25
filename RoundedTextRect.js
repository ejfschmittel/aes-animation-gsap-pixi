

  class RoundRectLabel extends PIXI.Container{

    constructor(text, x, y, rectStyles, textStyles){
        super();
        this.position.set(x,y)
   
        this.text =  new PIXI.Text(text,
                            {
                                fontFamily : 'Arial', 
                                fontSize: 24, fill : 0xff1010, 
                                align : 'center',
                                ...textStyles
                            }
                        );

        

        this.rectElement = new PIXI.Graphics();
        this.rectElement.beginFill(0xFFFFFF);
        this.rectElement.drawRoundedRect(0,0,this.text.width + 40, this.text.height + 14);
        this.rectElement.endFill();

        this.addChild(this.rectElement)
        this.addChild(this.text)
  
        
        this.text.position.set(this.width / 2 - this.text.width / 2, this.height/2 - this.text.height /2 )
    }

    setText(text){
        // set the text
        this.text.text = text;
        // update rect size;
        this.rectElement.width = this.text.width + 40;
        this.rectElement.height = this.text.height + 14;

        // recalc width
        this.text.position.set(this.width / 2 - this.text.width / 2, this.height/2 - this.text.height /2 )
    }

    getRect(){
        return this.rectElement;
    }

    getText(){
        return this.text;
    }

    blink(color, duration){
        const tl = gsap.timeline({defaults: {duration: 0}});
        const target = this.getRect();
        let oldTint = target.tint;

        tl.to(target, {tint: color})
        tl.to(target, {tint: 0xFFFFFF}, `+=${duration}`)

        return tl;
    }
}
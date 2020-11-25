
class Page6 extends Page{

    constructor(){
        super();
        this.init();
       
    }

    init(){
        // setup

        this.headline = new PIXI.Text("The 4 types of\ntransformations:",{
            align: "center",
            fontSize: 30,
            fill: 0xFFFFFF,
            fontFamily : 'Arial', 
        })

        this.lableContainer = new PIXI.Container();

        const rect1 = new RoundRectLabel("1-SubBytes", 0, 0)
        const rect2 = new RoundRectLabel("2-ShiftRows", 0, 70)
        const rect3 = new RoundRectLabel("3-MixColumns", 0, 140)
        const rect4 = new RoundRectLabel("4-AddRoundKey", 0, 210)

  


        this.lableContainer.addChild(rect1)
        this.lableContainer.addChild(rect2)
        this.lableContainer.addChild(rect3)
        this.lableContainer.addChild(rect4)

        this.lableContainer.position.set(window.innerWidth /2 - this.lableContainer.width / 2 -200, 200);

        this.lableContainer.scale.set(0.8)

        this.headline.anchor.set(0.5)
        this.headline.position.set(window.innerWidth /2  , 100);
        this.headline.alpha = 0;
        this.addChild(this.lableContainer)
        this.addChild(this.headline)
        this.createAnimations();
    }   


 

    createMainAnimation(){
        this.createMainTimeline();
        this.getMainTL().to(this.lableContainer, {x: window.innerWidth /2 - this.lableContainer.width / 2, duration: 1})
        this.getMainTL().to(this.lableContainer.scale, {x: 1, y: 1, duration: 1}, "<")
        this.getMainTL().to(this.headline, {alpha: 1, duration: 1})

    }
}
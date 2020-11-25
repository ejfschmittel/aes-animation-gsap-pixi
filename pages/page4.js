
class Page4 extends Page{

    constructor(){
        super();
        this.init();
       
    }

    init(){
        // setup



        const circle = new PIXI.Graphics()
        circle.beginFill(0xFFFFFF);
        circle.drawCircle(0,0, 50);
        circle.endFill();
        circle.tint = 0x000000;

        const borderedCircle = new BorderContainer(circle, 3, 0xFFFFFF);
        const circleText = new PIXI.Text("A",{
            fontFamily : 'Arial', 
            fontSize: 70, fill : 0xFFFFFF, 
            align : 'center'
        });

        borderedCircle.addChild(circleText)    
        circleText.anchor.set(0.5)
        borderedCircle.position.set(Math.round(window.innerWidth /2),Math.round(window.innerHeight /2) - 100)
        
    


        this.headlineText =   new PIXI.Text("Encryption\nProcess", {
            fontFamily : 'Arial', 
            fontSize: 50, fill : 0xFFFF00, 
            align : 'center',
        } );

        this.headlineText.anchor.set(0.5)
        this.headlineText.position.set(Math.round(window.innerWidth /2) ,Math.round(window.innerHeight /2) +50)


        this.descriptionText =   new PIXI.Text(`
            (Performing the encryption of the\n 
            given plaintext block using 4 differnt\n
            transformations in the initial round,\n
            the 9 main rounds and the final round)
        `, {
            fontFamily : 'Arial', 
            fontSize: 20, fill : 0xFFFFFF, 
            lineHeight: 14
        });

        this.descriptionText.anchor.set(0.5)
        this.descriptionText.position.set(Math.round(window.innerWidth /2) ,Math.round(window.innerHeight /2) +200)

        this.addChild(borderedCircle);
        this.addChild(this.headlineText)
        this.addChild(this.descriptionText)
        this.createAnimations();
    }   

    createMainAnimation(){
        

        this.createMainTimeline();

        this.getMainTL(this, {alpha: 1, duration: 5})
    }
}
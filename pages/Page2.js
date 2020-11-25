



class Page2 extends Page{

    constructor(){
        super();
        this.init();


        

    }

    init(){
        // setup

        this.mainContainer = new PIXI.Container();

        const innerRect = new PIXI.Graphics();
        innerRect.beginFill(0xAAAAAA);
        innerRect.drawRect(0,0, 500,300);
        innerRect.endFill();

        const outerRect = new PIXI.Graphics();
        outerRect.beginFill(0xFFFFFF);
        outerRect.drawRect(-10,-10,520, 320);
        outerRect.endFill()

        const mainContainerText = new PIXI.Text("Rijndael\nEncryptor", { fontFamily : 'Arial', 
        fontSize: 50, fill : 0xFFFFFF, 
        align : 'center',})


        const arrow = new PixiArrow(300, 100);
        

        this.arrowText1 = new PIXI.Text("01011010", { fontFamily : 'Arial', 
        fontSize: 20, fill : 0x000000, 
        align : 'center',}) 

        arrow.pivot.x = arrow.width / 2;
        arrow.pivot.y = arrow.height / 4;
        arrow.position.set(500,window.innerHeight /2)


        this.arrowText1.anchor.set(0.5)     
        this.arrowText1.position.set(arrow.width / 2 - 40, arrow.height / 2 - 24)
        arrow.addChild(this.arrowText1);


       const arrow2 = new PixiArrow(180, 100)     
        arrow2.pivot.x = arrow2.width / 2;
        arrow2.pivot.y = arrow2.height / 4;
        arrow2.rotation = toRadians(90)
        arrow2.position.set(window.innerWidth / 2 ,window.innerHeight /2 - 260)

        this.arrowText2 = new PIXI.Text("01011010", { fontFamily : 'Arial', 
        fontSize: 20, fill : 0x000000, 
        align : 'center',})

        this.arrowText2.anchor.set(0.5)     
        this.arrowText2.position.set(arrow2.width / 2 - 20, arrow2.height / 2 - 24)
     
        arrow2.addChild(this.arrowText2);


        const arrow3 = new PixiArrow(180, 100)     
        arrow3.pivot.x = arrow3.width / 2;
        arrow3.pivot.y = arrow3.height / 4;
        arrow3.rotation = toRadians(90)
        arrow3.position.set(window.innerWidth / 2 ,window.innerHeight /2 + 250)

        this.arrowText3 = new PIXI.Text("01011010", { fontFamily : 'Arial', 
        fontSize: 20, fill : 0x000000, 
        align : 'center',})

        this.arrowText3.anchor.set(0.5)     
        this.arrowText3.position.set(arrow3.width / 2 - 20, arrow3.height / 2 - 24)
     
        arrow3.addChild(this.arrowText3);
 


        this.mainContainer.addChild(outerRect);
        this.mainContainer.addChild(innerRect);
        mainContainerText.anchor.set(0.5)
        mainContainerText.position.set(this.mainContainer.width / 2, this.mainContainer.height /2)
        this.mainContainer.addChild(mainContainerText);

        this.mainContainer.position.set(window.innerWidth / 2 - this.mainContainer.width / 2, window.innerHeight / 2 - this.mainContainer.height / 2)


        this.addChild(this.mainContainer)
        this.addChild(arrow)
        this.addChild(arrow2)
        this.addChild(arrow3)

        this.createAnimations();
    }


    generateBinary = (count, length=9) => {
        const binaryArray = []
        for (var j = 0; j < count; j++){        
            let binaryString = "";
            for(var i = 0; i < length; i++){
                binaryString += Math.round(Math.random()).toString()
            }
            binaryArray.push(binaryString)
        }
        return binaryArray;
    }

    createMainAnimation(){

        const counter = {val: 0}
        const binaryArray = this.generateBinary(20);
    
        this.createMainTimeline();
        this.getMainTL().to(counter, {ease: `steps(${binaryArray.length-1})`, duration: 3, repeat: 3, val: binaryArray.length-1, loop: true,onUpdate: () => {
            this.arrowText1.text = binaryArray[counter.val];
            this.arrowText2.text = binaryArray[(counter.val + 1) % (binaryArray.length-1)];
            this.arrowText3.text = binaryArray[(counter.val + 2) % (binaryArray.length-1)];
        } })



    }



    

    
}
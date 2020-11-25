


const yellowNumbers = [
    "32", "43", "f6", "a8",
    "88", "5a", "30", "8d",
    "31", "31", "98", "a2",
    "e0", "37", "07", "34",
]

const blueNumbers = [
    "32", "43", "f6", "a8",
    "88", "5a", "30", "8d",
    "31", "31", "98", "a2",
    "e0", "37", "07", "34",
]


class Page3 extends Page{

    constructor(){
        super();
        this.blueNumbers = [];
        this.yellowNumbers = [];
        this.init();
        
    }

    init(){
        // setup

        this.mainHeadline = new PIXI.Text("Input", {
            fontFamily : 'Arial', 
            fontSize: 40,
            fill: 0xFFFFFF,
            textAlign: "center"
        })

        this.headlineYellowContainer = new PIXI.Text("State", {
            fontFamily : 'Arial', 
            fontSize: 30,
            fill: 0xFFFFFF,
            textAlign: "center"
        })

        this.headlineBlueContainer = new PIXI.Text("Cipher Key", {
            fontFamily : 'Arial', 
            fontSize: 30,
            fill: 0xFFFFFF,
            align : 'center',
        })

        this.yellowText = new PIXI.Text("to\nEncryption\nProcess", {
            fontFamily : 'Arial', 
            fontSize: 27,
            fill: 0xFFFF00,
            align : 'center',
        })

        this.blueText = new PIXI.Text("to\nKey\nSchedule", {
            fontFamily : 'Arial', 
            fontSize: 26,
            fill: 0x0000FF,
            align : 'center',
        })


        this.arrowYellow = new PixiArrow(120, 40)
        this.arrowBlue = new PixiArrow(120, 40)

        this.yellowContainer = new PIXI.Container();

        for(let i = 0; i < yellowNumbers.length; i++){
            const rect = new PIXI.Graphics()
            rect.beginFill(0xFFFFFF);
            rect.drawRect(0,0, 40,40);
            rect.endFill();
            rect.tint = 0xFFFF00;
          
    
            const borderedRect = new BorderContainer(rect, 2, 0x888888, false);
         
            const rectText = new PIXI.Text(yellowNumbers[i],{
                fontFamily : 'Arial', 
                fontSize: 20, 
                fill : 0x000000, 
                align : 'center'
            });
            rectText.alpha = 0;
            
            this.yellowNumbers.push(rectText);
    
            borderedRect.addChild(rectText)    
            rectText.position.set(Math.round(borderedRect.width / 2) - Math.round(rectText.width /2) , Math.round(borderedRect.height /2)- Math.round(rectText.height /2) )
            
            borderedRect.position.set(Math.floor(i/4) * 44 , (i % 4) * 44)

            this.yellowContainer.addChild(borderedRect);
        }

        this.yellowContainer.position.set(window.innerWidth / 2 -  100 - this.yellowContainer.width,window.innerHeight / 3)

        this.blueContainer = new PIXI.Container();

        for(let i = 0; i < blueNumbers.length; i++){
            const rect = new PIXI.Graphics()
            rect.beginFill(0xFFFFFF);
            rect.drawRect(0,0, 40,40);
            rect.endFill();
            rect.tint = 0x0000FFF;
          
    
            const borderedRect = new BorderContainer(rect, 2, 0x888888, false);
         
            const rectText = new PIXI.Text(yellowNumbers[i],{
                fontFamily : 'Arial', 
                fontSize: 20, 
                fill : 0x000000, 
                align : 'center'
            });
            rectText.alpha = 0;
            
            this.blueNumbers.push(rectText);
    
            borderedRect.addChild(rectText)    
            rectText.position.set(Math.round(borderedRect.width / 2) - Math.round(rectText.width /2) , Math.round(borderedRect.height /2)- Math.round(rectText.height /2) )
            
            borderedRect.position.set(Math.floor(i/4) * 44 , (i % 4) * 44)

            this.blueContainer.addChild(borderedRect);
        }
        
        this.blueContainer.position.set(window.innerWidth / 2 + 100,window.innerHeight / 3)


        const yellowCenterAchsis = Math.round(window.innerWidth / 2) - 100 - Math.round(this.yellowContainer.width / 2)
        const blueCenterAchsis = Math.round(window.innerWidth / 2) + 100 + Math.round(this.blueContainer.width / 2)

        this.mainHeadline.anchor.set(0.5);
        this.mainHeadline.position.set(window.innerWidth /2, 80)

        this.headlineYellowContainer.anchor.set(0.5)
        this.headlineYellowContainer.position.set(yellowCenterAchsis ,window.innerHeight / 3-60)
        this.headlineBlueContainer.anchor.set(0.5)
        this.headlineBlueContainer.position.set(blueCenterAchsis,window.innerHeight / 3 -60)


        this.arrowYellow.pivot.x = this.arrowYellow.width / 2;
        this.arrowYellow.pivot.y = this.arrowYellow.height / 4;
        this.arrowYellow.rotation = toRadians(90)
        this.arrowYellow.position.set(yellowCenterAchsis,window.innerHeight /2 + 130)


        this.arrowBlue.pivot.x = this.arrowBlue.width / 2;
        this.arrowBlue.pivot.y = this.arrowBlue.height / 4;
        this.arrowBlue.rotation = toRadians(90)
        this.arrowBlue.position.set(blueCenterAchsis ,window.innerHeight /2 + 130)

        this.yellowText.anchor.set(0.5);
        this.yellowText.position.set(yellowCenterAchsis, window.innerHeight /2 + 250)

        this.blueText.anchor.set(0.5);
        this.blueText.position.set(blueCenterAchsis, window.innerHeight /2 + 250)
     
        this.a = new CharInCircle("A", 3, 30, {fontSize: 30});
        this.a.position.set(yellowCenterAchsis,window.innerHeight /2 + 350)

        this.b = new CharInCircle("B", 3, 30, {fontSize: 30});
        this.b.position.set(blueCenterAchsis,window.innerHeight /2 + 350)


        this.headlineBlueContainer.alpha = 0;
        this.headlineYellowContainer.alpha = 0;
        this.mainHeadline.alpha = 0;
        this.yellowContainer.alpha = 0;
        this.blueContainer.alpha = 0;


        this.arrowBlue.alpha = 0;
        this.arrowYellow.alpha = 0;
        
        this.yellowText.alpha = 0;
        this.blueText.alpha = 0;

        this.a.alpha = 0;
        this.b.alpha = 0, 


        this.addChild(this.yellowContainer);
        this.addChild(this.blueContainer)
        this.addChild(this.headlineBlueContainer)
        this.addChild(this.headlineYellowContainer)
        this.addChild(this.mainHeadline)
        this.addChild(this.arrowYellow);
        this.addChild(this.arrowBlue);
        this.addChild(this.yellowText);
        this.addChild(this.blueText);
       
        this.addChild(this.a)
        this.addChild(this.b)
 

      

        this.createAnimations();
    }   






    resetMainAnimation(){

    }

   

    createMainAnimation(){
        this.createMainTimeline({});

        this.getMainTL().to(this.mainHeadline, {alpha: 1, duration: 1})
        // fade in headlines + containers
        this.getMainTL().to([
            this.blueContainer, this.yellowContainer, this.headlineBlueContainer, this.headlineYellowContainer
        ], {alpha: 1, duration: 2, delay: .5})


        // fade in numbers
        this.getMainTL().to(this.yellowNumbers, {alpha: 1, stagger: .2, duration: .2, delay: .5})
        this.getMainTL().to(this.blueNumbers, {alpha: 1, stagger: .2, duration: .2}, "<")

        this.getMainTL().to(this.arrowYellow, {alpha: 1, duration: .5})
        this.getMainTL().to(this.arrowBlue, {alpha: 1, duration: .5}, "+=.2")
        this.getMainTL().to([this.yellowText, this.blueText, this.a, this.b], {alpha: 1, duration: 1})
    }
}
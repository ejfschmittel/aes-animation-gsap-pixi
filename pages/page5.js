
class Page5 extends Page{

    constructor(){
        super();
        this.init();
       
    }

    init(){
        // setup

        this.initialRoundLabel = new RoundRectLabel("Add Round Key", 100,100)


        this.mainRoundOne = new RoundRectLabel("1 - SubBytes", 100,200)
        this.mainRoundTwo = new RoundRectLabel("2 - ShiftRows", 100,250)
        this.mainRoundThree = new RoundRectLabel("3 - MixColumns", 100,300)
        this.mainRoundFour = new RoundRectLabel("4 - AddRoundKey", 100,350)
         
        this.finalRoundOne = new RoundRectLabel("SubBytes", 100,450)
        this.finalRoundTwo = new RoundRectLabel("ShiftRows", 100,500)
        this.finalRoundThree = new RoundRectLabel("AddRoundKey", 100,550)



        this.counterText =   new PIXI.Text("Round: 1",
                                    {
                                        fontFamily : 'Arial', 
                                        fontSize: 50, fill : 0xff1010, 
                                        align : 'center',
                            
                                    }
                                );
        this.counterText.position.set(500, 200) 

        this.runner = new PIXI.Graphics();
        this.runner.beginFill(0xFFFFFF);
        this.runner.drawRect(180, 50, 50, 50)
        this.runner.endFill();
        this.runner.tint = 0xFF0000;

        this.addChild(this.runner)
        this.addChild(this.initialRoundLabel)
        this.addChild(this.mainRoundOne)
        this.addChild(this.mainRoundTwo)
        this.addChild(this.mainRoundThree)
        this.addChild(this.mainRoundFour)

        this.addChild(this.finalRoundOne)
        this.addChild(this.finalRoundTwo)
        this.addChild(this.finalRoundThree)
        this.addChild(this.counterText)

        this.createAnimations();

    }

    looper(loops, tl, label){
        tl.timeScale(4)
        if(this.counter < loops){
            this.setCounter(this.counter+1)
            tl.seek(label);
      
        }
    }

    setCounter(count){
        this.counter = count;
        this.counterText.text = `Round: ${count}`;
    }


    resetMainAnimation(){
      console.log("rest main animation")
      this.setCounter(1)
       this.getMainTL().timeScale(1) 
    }


    createMainAnimation(){
        this.setCounter(1)

        this.createMainTimeline({defaults: {duration: 1}}); 

        this.getMainTL().to(this.runner, {y: 90, duration: .5}, "start")
        this.getMainTL().add(() => this.initialRoundLabel.blink( 0x00FF00, .1), "start+=.1")
   
        this.getMainTL().to(this.runner, {y: 330}, "loop")
        this.getMainTL().add(() => this.mainRoundOne.blink( 0x00FF00, .1), "loop+=.1")
        this.getMainTL().add(() => this.mainRoundTwo.blink( 0x00FF00, .1), "loop+=.3")
        this.getMainTL().add(() => this.mainRoundThree.blink( 0x00FF00, .1), "loop+=.5")
        this.getMainTL().add(() => this.mainRoundFour.blink( 0x00FF00, .1), "loop+=.7")
       

        this.getMainTL().to(this.runner, {x: 200})
        this.getMainTL().to(this.runner, {y: 90})
        this.getMainTL().to(this.runner, {x: 0})
        this.getMainTL().call(this.looper.bind(this), [9, this.getMainTL(), "loop"])
     
        this.getMainTL().to(this.runner, {y: 330, onStart: () => this.getMainTL().timeScale(1), onComplete: () => this.setCounter(this.counter+1) }, "end")
        this.getMainTL().add(() => this.mainRoundOne.blink( 0x00FF00, .1), "end+=.1")
        this.getMainTL().add(() => this.mainRoundTwo.blink( 0x00FF00, .1), "end+=.3")
        this.getMainTL().add(() => this.mainRoundThree.blink( 0x00FF00, .1), "end+=.5")
        this.getMainTL().add(() => this.mainRoundFour.blink( 0x00FF00, .1), "end+=.7")

        this.getMainTL().to(this.runner, {y: 500}, "final")
        this.getMainTL().add(() => this.finalRoundOne.blink( 0x00FF00, .1), "final+=.1")
        this.getMainTL().add(() => this.finalRoundTwo.blink( 0x00FF00, .1), "final+=.3")
        this.getMainTL().add(() => this.finalRoundThree.blink( 0x00FF00, .1), "final+=.5")
    }

    
}
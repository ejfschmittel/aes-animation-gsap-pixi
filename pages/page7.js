
const test = [
    "32", "43", "f6", "a8",
    "88", "5a", "30", "8d",
    "31", "31", "98", "a2",
    "e0", "37", "07", "34",
]


class Page7 extends Page{

    constructor(){
        super();
        this.init();
       
    }

    init(){
        // setup

     let container = new Hexgrid4x4(test, { fontSize: 20,backgroundColor: 0xFFFF00, borderColor: 0xAAAAAA})

     container.position.set(300, 300)
     
     this.addChild(container)
       
        this.createAnimations();
    }   

    playMainAnimation(){

    }
 

    createMainAnimation(){
        this.createMainTimeline();

        
 

    }
}
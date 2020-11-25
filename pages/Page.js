


/*


    lifcycle:

    switchToPage(sconds) => fadeinpage

    animationIn() => initial transition (only played when coming from previous page)

    mainAnimation() => the real animation of the page

    animationOut() => played before transitioning to the next page


    the menu / controller handles the contorls (pause, switch, autoplay etc)

    switchTOPage => animationIn => mainAnimation => animationOut => switchToPage (the next one)
    => on pause => pause current animation reference
    => on play => play current animation reference
    => on page switch => swithToPage and play mainAnimation


*/

class Page extends PIXI.Container{

    constructor(){
        super();

        this.controller = null;
        this.mainTimeline = null;
        this.outTimeline = null;
        this.inTimeline = null;
    }

    init(){}


    stopAllAnimations(){
        // resetting alls of the timelines
        if(this.getInTL()){
            this.getInTL().restart();
            this.getInTL().pause();
        } 
        if(this.getMainTL()){
            this.resetMainAnimation();
            this.getMainTL().restart();
            this.getMainTL().pause();
        }
        if(this.getOutTL()){
            this.getOutTL().restart();
            this.getOutTL().pause();
        } 
    }

    createAnimations(){
        this.createAnimationIn();
        this.createMainAnimation();
        this.createAnimationOut();
    }

    createAnimationIn(){}

    createMainAnimation(){}

    createAnimationOut(){}

    playAnimationIn(){
        if(this.getInTL()) this.getInTL().play();
        else this.playMainAnimation();
    }

    playMainAnimation(){ 
        if(this.getMainTL()) this.getMainTL().play();
        else this.playAnimationOut();
    }

    playAnimationOut(){
        if(this.getOutTL()) this.getOutTL().invalidate().restart();
        else this.controller.onPageAnimationEnd();
    }

    resetMainAnimation(){}
    resetOutAnimation(){}
    resetInAnimation(){}



    createInTimeline(settings = {}){
        this.inTimeline = gsap.timeline({...settings, onComplete: this.onInTimelineComplete, paused: true})
        return this.inTimeline
    }

    createOutTimeline(settings = {}){
        this.outTimeline = gsap.timeline({...settings, onComplete: this.onOutTimelineComplete, paused:true})
        return this.outTimeline
    }

    createMainTimeline(settings = {}){
        this.mainTimeline = gsap.timeline({...settings, onComplete: this.onMainTimelineComplete, paused: true})
        return this.mainTimeline
    }


    onInTimelineComplete = () => {
        // notify controller
        this.playMainAnimation();
        console.log("in timeline ended")
    }

    onMainTimelineComplete = () => {
        console.log("main timeline ended")
        // notify controller
        // start end timeline
        this.playAnimationOut();
        
    }

    onOutTimelineComplete = () => {
        // notify controller
        console.log("timeline out ended")
        this.controller.onPageAnimationEnd();
    }



    getInTL = () => this.inTimeline

    getMainTL= () => this.mainTimeline

    getOutTL = () => this.outTimeline

    setPageController(controller){
        console.log("set page controller")
        this.controller = controller;
    }


    fadeIn = async (duration=0) => new Promise((resolve, reject) => {
        const tl = gsap.timeline({onComplete: () => resolve()});
        tl.fromTo(this, {visible: true, alpha: 0}, {alpha: 1, duration})
    })
    



    


}
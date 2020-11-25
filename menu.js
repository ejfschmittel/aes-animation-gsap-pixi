

// menu controls which pages is shown
// by buttons, mous and scrollwheel

class Menu extends PIXI.Container{
    constructor(){
        super();
        this.pages = []
        this.currentPage = 0;
        this.init();
   

       
    }


    init(){
        // render menu
        this.renderMenuButtons();
        window.addEventListener("keydown", this.onKeyDown, false);
    }

    onKeyDown(e){
        console.log(e)
    }

    renderMenuButtons(){
        if(this.menuContainer){
            this.removeChild(this.menuContainer)
        }
        
        this.menuContainer = new PIXI.Container();

        for(let i = 0; i < this.pages.length; i++){
            const button = new MenuButton(i * 50 + i * 20, 0);
            button.on("pointerdown", () => this.onButtonClick(i))


            button.on("pointerout", () => this.onPointerOut(i, button))
            if(i == this.currentPage){
                button.tint = 0xFF0000;
            }
            this.menuContainer.addChild(button);
        }

        const posX = Math.round((window.innerWidth / 2 ) - (this.menuContainer.width /2))
        this.menuContainer.position.set(posX, window.innerHeight - 80)
        this.addChild(this.menuContainer)
    }



    goToPage = async (num) =>{
        if(num >= 0 && num < this.pages.length){
            // hide old current page

            
            this.pages[this.currentPage].visible = false;
            this.pages[this.currentPage].stopAllAnimations();
            // play and wait for end transition
         
            this.currentPage = num;
            this.renderMenuButtons();

            await this.pages[num].fadeIn(2);

            this.pages[num].playAnimationIn();

        }
    }

    onPageAnimationEnd = () => {
        console.log(this.currentPage)
        if(this.currentPage !== this.pages.length -1){
            this.goToPage(this.currentPage + 1)
        }else{
            console.log("no other page found")
        }
    }


    registerPage(pageContainer){
        // add to pages array
        pageContainer.visible = this.pages.length == 0 ? true : false ;
        this.pages.push(pageContainer)      
        pageContainer.setPageController(this);
        this.addChild(pageContainer);
        this.renderMenuButtons();
    }

    onButtonClick(num){

        if(num != this.currentPage){
            // switch page
            this.goToPage(num)
        }
    }

    onPointerOut = (num, button) => {
        console.log(this.currentPage)
        console.log(num)
        if(this.currentPage == num){
            button.tint = 0xFF0000;
        }else{
            button.tint = 0xFFFFFF;
        } 
    }

}


class MenuButton extends PIXI.Graphics{
    constructor(x, y){
        super();
        this.interactive = true;
        this.buttonMode = true;
        this.beginFill(0xFFFFFF);
        this.drawRect(x,y,50,50);



        this.endFill();
        this.on("pointerover", this.onPointerOver)
    }


    
    onPointerOver(){
        this.tint = 0x00FF00;
    }


}
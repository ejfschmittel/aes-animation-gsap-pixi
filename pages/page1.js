

class Page1 extends Page{

    constructor(){
        super();
        this.init();

    }

    init(){
        // setup
        this.textRijndael = new StaggeredFadeInText("Rijndael")
        this.textRijndael.getCyphers().forEach(cypherElement => cypherElement.alpha = 0);

        this.textCipher = new StaggeredFadeInText("Cipher")
        this.textCipher.getCyphers().forEach(cypherElement => cypherElement.alpha = 0);

        this.fadeInTextContainer = new PIXI.Container();


        this.textCipher.position.set(0, 100)

        this.textRijndael.position.set(window.innerWidth / 2 - (this.textRijndael.width / 2), window.innerHeight / 2 -this.textRijndael.height /2 )
        this.textCipher.position.set(window.innerWidth / 2 - (this.textCipher.width / 2), (window.innerHeight / 2 -this.textCipher.height /2) +80 )
        this.addChild(this.textRijndael )
        this.addChild(this.textCipher)

        this.createAnimations();
    }



    createMainAnimation(){

        const textRijndaelStyles = this.textRijndael.getCyphers().map(cypher => cypher.style);   
        const textCipherStyles = this.textCipher.getCyphers().map(cypher => cypher.style);  



        this.createMainTimeline()


        this.getMainTL().fromTo(this.textRijndael.getCyphers(), {
            alpha: 0,
        }, {
            alpha: 1,
            duration: 2,
            stagger: .2
        }, "rijndael")

        
        this.getMainTL().fromTo(textRijndaelStyles, {
            fontSize: 100,
        },{
            fontSize: 50,
            duration: .5,
            stagger: .2,
        }, "<")


        
        this.getMainTL().fromTo(this.textCipher.getCyphers(), {
            alpha: 0,
        }, {
            alpha: 1,
            duration: 2,
            stagger: .2
        }, "rijndael+=2")

        
        this.getMainTL().fromTo(textCipherStyles, {
            fontSize: 100,
        },{
            fontSize: 50,
            duration: .5,
            stagger: .2,
        }, "<")
    }

    
}
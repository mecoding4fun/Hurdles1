class Form {
    constructor(){
        this.enter = createElement("h3", "ENTER YOUR NAME");
        this.input = createInput();
        this.button = createButton("PLAY");
        this.greeting = createElement("h3");        
    }

    hide(){
        this.greeting.hide();
        this.input.hide();
        this.button.hide();
        this.enter.hide();
    }

    display(){
        var title = createElement("h1");
        title.html("HURDLES");
        title.position(570,0);
        
        this.enter.position(550,130);
        this.input.position(530,200);        
        this.button.position(600,240);

        this.button.mousePressed(()=>{
            this.enter.hide();
            this.input.hide();
            this.button.hide();

            player.name = this.input.value();
            playerCount+=1;
            player.index = playerCount;

            player.update();
            player.updateCount(playerCount);

           this.greeting.html("Welcome " + player.name);
           this.greeting.position(530,160);
        })
    }
}
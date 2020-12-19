class Form{
    constructor(){
        this.input = createInput("Name");
        this.button = createButton('PLAY');
        this.greeting = createElement('h3');
    }

    hide(){
        this.button.hide();
        this.greeting.hide();
        this.input.hide();
    }

    display(){

        var title = createElement('h2');
        title.html("ALPHA CAR RACING");
        title.position(displayWidth/2,0);


        var input = createInput("Name");
        var button = createButton('PLAY');


        this.input.position(displayWidth/2 -50, displayHeight/2 -80);
        this.button.position(displayWidth/2 +30, displayHeight/2 );


        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();


            player.name = this.input.value();

            playerCount =playerCount+1;
            player.index=playerCount;
            player.updateCount(playerCount);
            player.update();

            var greeting =createElement('h3');
            this.greeting.html("Welcome,"+player.name + " Wait for other players to join...");
            this.greeting.position(displayWidth/2 -70,displayWidth/4);
        })


    }




}
class Game {
    constructor(){

    }
    getState(){
        var gameStateRef = database.ref("gameState");
        gameStateRef.on("value", function(data){
            gameState = data.val();
        })
    }

    update(state){
        database.ref("/").update({
            gameState: state
        })
    }

    async start(){
        if(gameState===0){
            player = new Player();
            var playerCountRef = await database.ref("playerCount").once("value");
            if(playerCountRef.exists()){
                playerCount = playerCountRef.val();
                player.getCount();
            }
            form = new Form();
            form.display();
        }
    }

    play(){
        form.hide();
        textSize(40);
        text("Start", 620, 100);
        Player.getPlayerinfo();

        if(allPlayers!==undefined){
            var display_position = 130;
            for(var plr in allPlayers){
                if(plr==="player" + player.index)
                    fill("blue");

                else
                    fill("black");

                display_position+=40;
                textSize(25);
                text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 620,display_position);
            }
        }

        if(keyDown(UP_ARROW) && player.index!==null){
            player.distance+=50;
            player.update();
        }
    }
}
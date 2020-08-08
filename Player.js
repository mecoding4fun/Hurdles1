class Player {
    constructor(){
        this.index = null;
        this.distance = 0;
        this.name = null;
    }

    getCount(){
        //refers to database
        var playerCountRef = database.ref("playerCount");
        //refers to value
        playerCountRef.on("value", function(data){
            //updates in database
            playerCount = data.val();
        })
    }

    updateCount(count){
        //refers to the total database
        database.ref("/").update({
            //count is no. of players(in the arguments)
            playerCount: count
        })
    }

    update(){
        //creating var to players in database
        var playerIndex = "players/player" + this.index;
        //referring to db and creates entry 'players'
        database.ref(playerIndex).set({
            //setting the name and distance in db
            name: this.name,
            distance: this.distance
        })
    }

    static getPlayerinfo(){
        var playerInfoRef = database.ref("players");
        playerInfoRef.on("value", (data)=>{
            allPlayers = data.val();
        })
    }
}
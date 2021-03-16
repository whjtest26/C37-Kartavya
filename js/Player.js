class Player{

    constructor(){

        this.index = null;
        this.name = null;
        this.distance = 0;


    }

    getCount(){

        var playerCountRef = database.ref("playerCount");
        playerCountRef.on("value",function(data){

            playerCount = data.val();
        });
    }

    updateCount(){

        database.ref("/").update({

            playerCount : playerCount
        });
    }

    update(){

        var playerIndex = "players/player"+ this.index;
        database.ref(playerIndex).set({

            name : this.name,
            distance : this.distance
        });
    }

    static getPlayerInfo(){

        var playerInfoRef = database.ref("players");
        playerInfoRef.on("value",function(data){

            allPlayers = data.val();
        });
    }
}
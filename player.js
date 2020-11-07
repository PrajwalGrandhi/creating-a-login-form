class Player
{
        constructor()
        {
 
        }
        getCount()
        {
            var n = database.ref('PlayerCount');
            n.on("value",function(data)
            {
                playerCount = data.val();
            })
        }
        updateCount(pc)
        {
              database.ref('/').update({
                  playerCount:pc
              });
        }
        update(inpt)
        {
             var c = "player" + playerCount
             database.ref(c).set({
                 name:inpt
             })
        }
}
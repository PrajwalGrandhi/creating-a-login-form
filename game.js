class Game
{
    constructor()
    {

    }
    getState()
    {
        var state = database.ref('GameState');
        state.on("value",function(data)
        {
            stateValue = data.val();
        })
    }
    updateState(sv)
    {
      database.ref('/').update({
          GameState:sv
      });
    }
    start()
    {
        if(stateValue == 0)
        {
            player=new Player();
            player.getCount();
            
            form = new Form();
            form.display();
        }
    }
}

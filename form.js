class Form
{
    constructor()
    {

    }
    display()
    {
        var title = createElement('h1')
        title.html("MULTIPLAYER CAR RACING GAME");
        title.position(100,100);
        
        var input1 = createInput("username");
        input1.position(100,150);

        var button = createButton("continue")
        button.position(100,175);

        var greet = createElement('h2')
        button.mousePressed(function ()
        {
            input1.hide();
            button.hide();
            var input = input1.value();
            playerCount++

            player.update(input)
            player.updateCount(playerCount);
            greet.html("hi "+input+" Please wait for others to join");
            greet.position(100,100);
        })
    }
}
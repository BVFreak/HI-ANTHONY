var clicks = 0;
function clickClick(number){
    clicks = clicks + number;
    document.getElementById("clicks").innerHTML = clicks;
};
var cursors = 0;
function buyCursor(){
    var cursorCost = Math.floor(15 * Math.pow(1.2,cursors));     //works out the cost of this cursor
    if(clicks >= cursorCost){                                   //checks that the player can afford the cursor
        cursors = cursors + 1;                                   //increases number of cursors
    	clicks = clicks - cursorCost;                          //removes the clicks spent
        document.getElementById('cursors').innerHTML = cursors;  //updates the number of cursors for the player
        document.getElementById('clicks').innerHTML = clicks;  //updates the number of clicks for the player
    };
    var nextCost = Math.floor(15 * Math.pow(1.2,cursors));       //works out the cost of the next cursor
    document.getElementById('cursorCost').innerHTML = nextCost;  //updates the cursor cost for the player
};

window.setInterval(function(){
clickClick(cursors);
}, 10000);

var cardboardboxes = 0;
function buyCardboardBox(){
    var cardboardboxCost = Math.floor(100 * Math.pow(1.2,cardboardboxes));     //works out the cost of this cardboardbox
    if(clicks >= cardboardboxCost){                                   //checks that the player can afford the cardboardbox
        cardboardboxes = cardboardboxes + 1;                                   //increases number of cardboardboxes
        clicks = clicks - cardboardboxCost;                          //removes the clicks spent
        document.getElementById('cardboardboxes').innerHTML = cardboardboxes;  //updates the number of cardboardboxes for the player
        document.getElementById('clicks').innerHTML = clicks;  //updates the number of clicks for the player
    };
    var nextCost = Math.floor(100 * Math.pow(1.2,cardboardboxes));       //works out the cost of the next cardboardbox
    document.getElementById('cardboardboxCost').innerHTML = nextCost;  //updates the cardboardbox cost for the player
};

window.setInterval(function(){
clickClick(cardboardboxes);
}, 2000);

var cacti = 0;
function buyCactus(){
    var cactusCost = Math.floor(500 * Math.pow(1.2,cacti));     //works out the cost of this cactus
    if(clicks >= cactusCost){                                   //checks that the player can afford the cactus
        cacti = cacti + 1;                                   //increases number of cacti
        clicks = clicks - cactusCost;                          //removes the clicks spent
        document.getElementById('cacti').innerHTML = cacti;  //updates the number of cacti for the player
        document.getElementById('clicks').innerHTML = clicks;  //updates the number of clicks for the player
    };
    var nextCost = Math.floor(500 * Math.pow(1.2,cacti));       //works out the cost of the next cactus
    document.getElementById('cactusCost').innerHTML = nextCost;  //updates the cactus cost for the player
};

window.setInterval(function(){
clickClick(cacti);
}, 500);


function save(){
    var save = {
    clicks: clicks,
    cursors: cursors,
    cardboardboxes: cardboardboxes,
    cacti: cacti
}
    localStorage.setItem("save",JSON.stringify(save));
}

function load(){
    var savegame = JSON.parse(localStorage.getItem("save"));
}


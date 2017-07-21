// set the endpoint
var url = "https://gears-pack-db-carlc.c9users.io/pack-controller.php";

// define you pack
var pack = {
    "gamertag": "your_gamer_tag",
    "pack_type": "horde booster",
    "card_1": "Silly Lancer Skin",
    "card_2": "Random Country Emblem",
    "card_3": "Worthless Horde Bounty",
    "card_4": "Common Horde Skill",
    "card_5": "Colorblast Crap",
};

// create a new http request object
var request = new XMLHttpRequest();

// specify POST request
request.open("POST", url, true);

// specifcy JSON in the request body
request.setRequestHeader("Content-type", "application/json");

// callback
request.onreadystatechange = function () {
    if (request.readyState == 4 && request.status == 200) {
        console.log(request.responseText);
    }
}

// post the pack json -> updates the database
request.send(JSON.stringify());

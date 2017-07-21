// set the endpoint
let url = "https://gears-pack-db-carlc.c9users.io/pack-controller.php";
// define you pack
let pack = {};

// create a new http request object
let request = new XMLHttpRequest();

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

// post the pack json
request.send(JSON.stringify());

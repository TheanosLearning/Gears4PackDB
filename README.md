# Gears4 Pack Database
A MySQL database with an http API hosted on [Cloud9](https://c9.io/)
> View Cloud9 configuration [here](https://github.com/TheanosLearning/Gears4PackDB/blob/master/cloud9_config/config.md).

![demo](https://github.com/TheanosLearning/Gears4PackDB/raw/master/images/sql-demo.png)

## How do I use it?

### 1. Run [sendPack.js](https://github.com/TheanosLearning/Gears4PackDB/blob/master/js/sendPack.js) in your browser<sup>1</sup>

![from-browser](https://github.com/TheanosLearning/Gears4PackDB/raw/master/images/db-browser.png)

### 2. Use [cURL](https://en.wikipedia.org/wiki/CURL) from the command line.

```python
curl -X POST -H "Content-Type: application/json" -d '{"gamertag":"Tensforflow","pack_type":"Horde Booster","card_1":"Lancer Skin","card_2":"Horde Bounty","card_3":"Horde Skill","card_4":"Emblem","card_5":"Character Skin"}' https://gears-pack-db-carlc.c9users.io/pack-controller.php
```

</br>

![from-command-line](https://github.com/TheanosLearning/Gears4PackDB/raw/master/images/db-curl.png)

### 3. Gears 4 Pack Stats Chrome Extension

Can be configured to send pack data to Cloud9 by adding the following code to [cards-recorder.js](https://github.com/TheanosLearning/Gears4PackStats/blob/7cd5dda80426df5ed804a41aa796bb45d02f42d0/gears4-pack-stats/background/cards-recorder.js#L18)

```Javascript
let pack = background.recordPack(request);
sendToCloud9(pack);
```

additionally, add the following code [here](https://github.com/TheanosLearning/Gears4PackStats/blob/7cd5dda80426df5ed804a41aa796bb45d02f42d0/gears4-pack-stats/background/cards-recorder.js#L173) to transform the data and post it to the php server running on Cloud9.

```Javascript
function transformPayload(pack) {
    console.log("transforming payload");
    payload = {};
    payload['gamertag'] = pack.gamertag;
    payload['pack_type'] = pack.type;
    for(let i = 0; i < pack.cards.length; i++) {
        payload['card_' + (i + 1)] = pack.cards[i];
    }
    return payload;
}

function sendToCloud9(pack) {
    console.log("sending pack to cloud9, pack:");
    console.log(pack);
    let payload = {"gamertag": pack.gamertag, "pack_type": pack.type}
    let xmlhttp = new XMLHttpRequest();
    let url = "https://gears-pack-db-carlc.c9users.io/pack-controller.php";
    xmlhttp.open("POST", url, true);
    xmlhttp.setRequestHeader("Content-type", "application/json");
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            console.log(xmlhttp.responseText);
        }
    }
    console.log(transformPayload(pack));
    xmlhttp.send(JSON.stringify(transformPayload(pack)));
}
```
</br>
</br>
<sup>1</sup> *From a Chrome extension domain.*

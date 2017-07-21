# Gears4 Pack Database
A MySQL database with an http API hosted on Cloud9

![demo](https://github.com/TheanosLearning/Gears4PackDB/raw/master/images/sql-demo.png)

## How do I use it?

### Run [sendPack.js](https://github.com/TheanosLearning/Gears4PackDB/blob/master/js/sendPack.js) in your browser.

![from-browser](https://github.com/TheanosLearning/Gears4PackDB/raw/master/images/db-browser.png)

### cURL from the command line.

```python
curl -X POST -H "Content-Type: application/json" -d '{"gamertag":"Tensforflow","pack_type":"Horde Booster","card_1":"Lancer Skin","card_2":"Horde Bounty","card_3":"Horde Skill","card_4":"Emblem","card_5":"Character Skin"}' https://gears-pack-db-carlc.c9users.io/pack-controller.php
```
<br>
![from-command-line](https://github.com/TheanosLearning/Gears4PackDB/raw/master/images/db-curl.png)

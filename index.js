const needle = require("needle");

module.exports = {
    getStatus: function getStatus(callback) {
        needle.get("https://dl.labymod.net/", (function (error, response) {
            if (error) return error;
            callback(JSON.parse(response.body).status);
        }))
    },

    getCosmetics: function getCosmetics(uuid, callback) {
        needle.get("https://dl.labymod.net/userdata/" + uuid + ".json", (function (error, response) {
            if (error) return error;
            var responseStringed = JSON.stringify(response.body.c);
            var reponseJsoned = JSON.parse(responseStringed)
            var finalstr = "";
            for (var i = 0; i < reponseJsoned.length; i++) {
                switch (reponseJsoned[i].i) {
                    case 0:
                        finalstr += "Cape ";
                        break;
                    case 1:
                        finalstr += "Wolf-Tail ";
                        break;
                    case 2:
                        finalstr += "Dragonwings ";
                        break;
                    case 3:
                        finalstr += "Cat-Tail ";
                        break;
                    case 4:
                        finalstr += "MoehritzCosmetics ";
                        break;
                    case 5:
                        finalstr += "ChristmasBeard ";
                        break;
                    case 6:
                        finalstr += "Rednose ";
                        break;
                    case 7:
                        finalstr += "Witchhat ";
                        break;
                    case 8:
                        finalstr += "Tool ";
                        break;
                    case 9:
                        finalstr += "Halo ";
                        break;
                    case 10:
                        finalstr += "Antlers ";
                        break;
                    case 11:
                        finalstr += "Rabbit ";
                        break;
                    case 12:
                        finalstr += "Devilhorns ";
                        break;
                    case 13:
                        finalstr += "Crystalwings ";
                        break;
                    case 14:
                        finalstr += "SteampunkWings ";
                        break;
                    case 15:
                        finalstr += "Haloween ";
                        break;
                    case 16:
                        finalstr += "X-Mas-Hat ";
                        break;
                    case 17:
                        finalstr += "Stegi-Hat ";
                        break;
                    case 18:
                        finalstr += "Merchcrown ";
                        break;
                    case 19:
                        finalstr += "Cap ";
                        break;
                    case 20:
                        finalstr += "Backpack ";
                        break;
                    case 21:
                        finalstr += "Cat-Ears ";
                        break;
                    case 22:
                        finalstr += "Bandana ";
                        break;
                    case 23:
                        finalstr += "Headset ";
                        break;
                    case 24:
                        finalstr += "Angelwings ";
                        break;
                    case 25:
                        finalstr += "Flower ";
                        break;
                    case 26:
                        finalstr += "Dog ";
                        break;
                    case 27:
                        finalstr += "Shoes ";
                        break;
                    case 28:
                        finalstr += "Royal-Crown ";
                        break;
                    case 29:
                        finalstr += "Abgegrieft-Belt ";
                        break;
                    case 30:
                        finalstr += "Reved-Fire-Hand ";
                        break;
                    case 31:
                        finalstr += "Maskcover ";
                        break;
                    case 32:
                        finalstr += "Snoxh-Eyes ";
                        break;
                    case 33:
                        finalstr += "Watch ";
                        break;
                    case 34:
                        finalstr += "Kawaii-Mask ";
                        break;
                    case 35:
                        finalstr += "Butterfly-Wings ";
                        break;
                    case 34:
                        finalstr += "Eyelids ";
                        break;
                }
            }

            callback(finalstr);
        }))
    }
}
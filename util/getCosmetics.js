const needle = require('needle');
const fs = require('fs');
const cosmeticsRaw = JSON.parse(fs.readFileSync('./configs/cosmetics.json', 'utf8'))
let cosmetics = {}
for (let i in cosmeticsRaw) {
    cosmetics[cosmeticsRaw[i].item_id] = cosmeticsRaw[i].item_name
}

module.exports = {
    getCosmetics: async function getCosmetics(uuid, callback) {
        needle.get("https://dl.labymod.net/userdata/" + uuid + ".json", (function (error, response) {
            if (error) return error;
            const jsonResponse = JSON.parse(JSON.stringify(response.body.c));
            let cosmeticNames = [];
            for (let i in jsonResponse) {
                cosmeticNames.push(cosmetics[jsonResponse[i]["i"]])
            }
            callback(cosmeticNames)
        }))
    }
}

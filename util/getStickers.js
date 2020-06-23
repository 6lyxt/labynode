const needle = require('needle');
const fs = require('fs');
const packsRaw = JSON.parse(fs.readFileSync('./configs/stickers.json', 'utf8'))
let packs = {}
for (let i in packsRaw) {
    packs[packsRaw[i].pack_id] = packsRaw[i].pack_name
}

module.exports = {
    getStickers: async function getStickers(uuid, callback) {
        needle.get('https://dl.labymod.net/userdata/' + uuid + ".json", (function (error, response) {
            if (error) return error;
            const jsonResponse = JSON.parse(JSON.stringify(response.body.st.p));
            console.log(jsonResponse)
            let packNames = [];
            for (let i in jsonResponse) {
                packNames.push(packs[jsonResponse[i]])
            }
            callback(packNames)
        }))
    }
}
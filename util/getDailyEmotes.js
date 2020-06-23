const needle = require('needle');
const fs = require('fs');
const emotesRaw = JSON.parse(fs.readFileSync('./configs/emotes.json', 'utf8'));
let emotes = {}
for (let i in emotesRaw) {
    emotes[emotesRaw[i].emote_id] = emotesRaw[i].name
}

module.exports = {
    getDailyEmotes: async function getDailyEmotes(callback) {
        needle.get("https://dl.labymod.net/advertisement/entries.json", (function (error, response) {
            if (error) return error;
            const jsonResponse = JSON.parse(JSON.stringify(response.body.dailyEmotes))
            let emoteNames = [];
            for (let i in jsonResponse) {
                emoteNames.push(emotes[jsonResponse[i]["id"]]);
            }
            callback(emoteNames)
        }))
    }
}
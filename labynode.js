const needle = require("needle");
const getCosmetic = require("./utils/getCosmetics")
const getEmote = require("./utils/getEmotes")

module.exports = {
    getStatus: async function getStatus(callback) {
        await needle.get("https://dl.labymod.net/", (function (error, response) {
            if (error) return error;
            callback(JSON.parse(response.body).status);
        }))
    },
    getCosmetics: async function getCosmetics(uuid, callback){
        await getCosmetic.getCosmetics(uuid, callback)
    },

    getEmotes: async function getEmotes(uuid, callback){
        await getEmote.getEmotes(uuid, callback);
    }
    
    
}

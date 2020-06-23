const needle = require('needle');

module.exports = {
    getStatus: async function getStatus(callback) {
        needle.get("https://dl.labymod.net/", (function (error, response) {
            if (error) return error;
            callback(JSON.parse(response.body).status);
        }))
    }
}
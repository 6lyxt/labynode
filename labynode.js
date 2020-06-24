const status = require('./util/getStatus');
const emotes = require('./util/getEmotes');
const dailyEmotes = require('./util/getDailyEmotes');
const plusEmotes = require('./util/getPlusEmotes');
const cosmetics = require('./util/getCosmetics');
const roles = require('./util/getRoles');
const stickers = require('./util/getStickers');

module.exports = {
    getStatus: async function getStatus(callback) {
        await status.getStatus(callback);
    },

    getEmotes: async function getEmotes(uuid, callback) {
        await emotes.getEmotes(uuid, callback);
    },

    getCosmetics: async function getCosmetics(uuid, callback) {
        await cosmetics.getCosmetics(uuid, callback);
    },

    getRoles: async function getRoles(uuid, callback) {
        await roles.getRoles(uuid, callback)
    },

    getStickers: async function getStickers(uuid, callback) {
        await stickers.getStickers(uuid, callback)
    },

    getDailyEmotes: async function getDailyEmotes(callback) {
        await dailyEmotes.getDailyEmotes(callback);
    },

    getPlusEmotes: async function getPlusEmotes(callback) {
        await plusEmotes.getPlusEmotes(callback);
    }
}
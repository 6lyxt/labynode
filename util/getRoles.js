const needle = require('needle');
const fs = require('fs');
const rolesRaw = JSON.parse(fs.readFileSync('./configs/roles.json', 'utf8'))
let roles = {}
for (let i in rolesRaw) {
    roles[rolesRaw[i].role_id] = rolesRaw[i].role_name
}

module.exports = {
    getRoles: async function getRoles(uuid, callback) {
        needle.get('https://dl.labymod.net/userdata/' + uuid + ".json", (function (error, response) {
            if (error) return error;
            const jsonResponse = JSON.parse(JSON.stringify(response.body.g));
            console.log(jsonResponse)
            let roleName = [];
            for (let i in jsonResponse) {
                roleName.push(roles[jsonResponse[i]["i"]])
            }
            callback(roleName);
        }))
    }
}
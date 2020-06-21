const needle = require("needle");

module.exports = {
    getEmotes: async function getEmotes(uuid, callback) {
        needle.get("https://dl.labymod.net/userdata/" + uuid + ".json", (function (error, response) {
            if (error) return error;
            var responseStringed = JSON.stringify(response.body.e);
            var reponseJsoned = JSON.parse(responseStringed)
            var finalstr = "";
            for (var i = 0; i < reponseJsoned.length; i++) {
                console.log(reponseJsoned[i])
                switch (reponseJsoned[i]) {
                    case 2:
                        finalstr += "Backflip ";
                        break;
                    case 3:
                        finalstr += "Dab ";
                        break;
                    case 4:
                        finalstr += "Hello ";
                        break;
                    case 5:
                        finalstr += "Bow-Thanks ";
                        break;
                    case 6:
                        finalstr += "Hype ";
                        break;
                    case 7:
                        finalstr += "Tryingtofly ";
                        break;
                    case 8:
                        finalstr += "Infinity-Sit ";
                        break;
                    case 11:
                        finalstr += "Zombie ";
                        break;
                    case 13:
                        finalstr += "Hula-Hoop ";
                        break;
                    case 14:
                        finalstr += "Calling ";
                        break;
                    case 15:
                        finalstr += "Facepalm ";
                        break;
                    case 18:
                        finalstr += "Brush-your-shoulders ";
                        break;
                    case 19:
                        finalstr += "Split ";
                        break;
                    case 20:
                        finalstr += "Salute ";
                        break;
                    case 22:
                        finalstr += "Balarina ";
                        break;
                    case 31:
                        finalstr += "Handstand ";
                        break;
                    case 32:
                        finalstr += "Helicopter ";
                        break;
                    case 33:
                        finalstr += "Holy ";
                        break;
                    case 34:
                        finalstr += "Waveover ";
                        break;
                    case 36:
                        finalstr += "Deeper-deeper ";
                        break;
                    case 37:
                        finalstr += "Karate ";
                        break;
                    case 38:
                        finalstr += "Moonwalk ";
                        break;
                    case 40:
                        finalstr += "Freezing ";
                        break;
                    case 41:
                        finalstr += "Jubilation ";
                        break;
                    case 43:
                        finalstr += "Turtle ";
                        break;
                    case 45:
                        finalstr += "Headspin ";
                        break;
                    case 46:
                        finalstr += "Infinity-Dab ";
                        break;
                    case 47:
                        finalstr += "Chicken ";
                        break;
                    case 49:
                        finalstr += "The-Floss ";
                        break;
                    case 50:
                        finalstr += "The-mega-thrust ";
                        break;
                    case 51:
                        finalstr += "The-cleaner ";
                        break;
                    case 52:
                        finalstr += "Bridge ";
                        break;
                    case 53:
                        finalstr += "Milk-the-cow ";
                        break;
                    case 54:
                        finalstr += "Rurik ";
                        break;
                    case 55:
                        finalstr += "Wave ";
                        break;
                    case 57:
                        finalstr += "Money-rain ";
                        break;
                    case 59:
                        finalstr += "The-pointer ";
                        break;
                    case 60:
                        finalstr += "Frightening ";
                        break;
                    case 61:
                        finalstr += "Sad ";
                        break;
                    case 62:
                        finalstr += "Air-guitar ";
                        break;
                    case 63:
                        finalstr += "Witch ";
                        break;
                    case 69:
                        finalstr += "Left ";
                        break;
                    case 70:
                        finalstr += "Right ";
                        break;
                    case 74:
                        finalstr += "Buuuh ";
                        break;
                    case 75:
                        finalstr += "Spitting-bars ";
                        break;
                    case 76:
                        finalstr += "Count-money ";
                        break;
                    case 77:
                        finalstr += "Hug ";
                        break;
                    case 78:
                        finalstr += "Applause ";
                        break;
                    case 79:
                        finalstr += "Boxing ";
                        break;
                    case 83:
                        finalstr += "Shoot ";
                        break;
                    case 84:
                        finalstr += "The-pointing-man ";
                        break;
                    case 85:
                        finalstr += "Heart ";
                        break;
                    case 86:
                        finalstr += "Near-the-fall ";
                        break;
                    case 89:
                        finalstr += "Waiting ";
                        break;
                    case 92:
                        finalstr += "Praise-your-item ";
                        break;
                    case 93:
                        finalstr += "Look ";
                        break;
                    case 97:
                        finalstr += "I-love-you ";
                        break;
                    case 98:
                        finalstr += "Sarcastic-clap ";
                        break;
                    case 101:
                        finalstr += "You ";
                        break;
                    case 105:
                        finalstr += "Head-on-wall ";
                        break;
                    case 112:
                        finalstr += "Balance ";
                        break;
                    case 113:
                        finalstr += "Levelup ";
                        break;
                    case 114:
                        finalstr += "Take-the-L ";
                        break;
                    case 121:
                        finalstr += "My-idol ";
                        break;
                    case 122:
                        finalstr += "Airplane ";
                        break;
                    case 124:
                        finalstr += "Eagle ";
                        break;
                    case 126:
                        finalstr += "Job-well-done ";
                        break;
                    case 128:
                        finalstr += "Elephant ";
                        break;
                    case 130:
                        finalstr += "Present ";
                        break;
                    case 131:
                        finalstr += "Eyes-on-you ";
                        break;
                    case 133:
                        finalstr += "Bow-down ";
                        break;
                    case 134:
                        finalstr += "Maneki-neko ";
                        break;
                    case 135:
                        finalstr += "Conductor ";
                        break;
                    case 136:
                        finalstr += "Didi-challenge ";
                        break;
                    case 137:
                        finalstr += "Snow-Angle ";
                        break;
                    case 138:
                        finalstr += "Snowball ";
                        break;
                    case 139:
                        finalstr += "Sprinkler ";
                        break;
                    case 140:
                        finalstr += "Calculated ";
                        break;
                    case 141:
                        finalstr += "One-armed-handstand ";
                        break;
                    case 142:
                        finalstr += "Eat ";
                        break;
                    case 143:
                        finalstr += "Shy ";
                        break;
                    case 145:
                        finalstr += "Sit-Ups ";
                        break;
                    case 146:
                        finalstr += "Breakdance ";
                        break;
                    case 148:
                        finalstr += "Mindblow ";
                        break;
                    case 149:
                        finalstr += "Fall ";
                        break;
                    case 150:
                        finalstr += "T-Pose ";
                        break;
                    case 153:
                        finalstr += "Jumping-Jack ";
                        break;
                    case 154:
                        finalstr += "Backstoke ";
                        break;
                    case 156:
                        finalstr += "Ice-Hockey ";
                        break;
                    case 157:
                        finalstr += "Look-at-fireworks ";
                        break;
                    case 158:
                        finalstr += "Finish-the-tree ";
                        break;
                    case 159:
                        finalstr += "Ice-Skating ";
                        break;
                    case 161:
                        finalstr += "Fancy-Feet ";
                        break;
                    case 162:
                        finalstr += "Ronaldo ";
                        break;
                    case 163:
                        finalstr += "True-Heart ";
                        break;
                    case 164:
                        finalstr += "Pumpernickel ";
                        break;
                    case 166:
                        finalstr += "Baby-Shark ";
                        break;
                    case 167:
                        finalstr += "Open-present ";
                        break;
                    case 170:
                        finalstr += "Dj ";
                        break;
                    case 173:
                        finalstr += "Sneeze ";
                        break;
                }
            }
            callback(finalstr);
        }))
    }
}
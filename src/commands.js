const Utils = require("../utils/utils.js");
const Dice = require("./dice.js");

const Commands = {
    detect(command) {
        if (!command.startsWith(Utils.commandDefault())) {
            return undefined;
        }
        const rpgWorkCommand = command.split(" ")[0].split(Utils.commandDefault())[1];
        switch(rpgWorkCommand) {
            case 'dice': 
                return Dice.translate(command);
                break;
            default:
                return "invalid command!";
        }
    },
}

module.exports = Commands;
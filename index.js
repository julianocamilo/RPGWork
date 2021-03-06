const Discord = require("discord.js");
const bot = new Discord.Client();
const Utils = require("./utils/utils.js");
const Commands = require("./src/commands.js");

bot.login(Utils.clientID());


bot.on("message", message => {
    const messageReturned = Commands.detect(message.content);
    if (messageReturned) {
        message.channel.send(`${message.author} ${messageReturned}`);
    }
})

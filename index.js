const Discord = require("discord.js");
const bot = new Discord.Client();
const Utils = require("./utils/utils.js");

bot.login(Utils.clientID());


bot.on("message", message => {
    if (Utils.isBotCommand(message.content)){
          message.channel.sendMessage("oi me chamou?");
    }
    const messageReturned = Utils.detectCommand(message.content);
    if (messageReturned) {
        message.channel.send(messageReturned);
    }
})
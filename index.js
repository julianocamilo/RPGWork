const Discord = require("discord.js");
const bot = new Discord.Client();
const Utils = require("./utils/utils.js");

bot.login(Utils.clientID());


bot.on("message", message => {
    if (Utils.isBotCommand(message.content)){
          message.channel.send("oi me chamou?");
    }
})
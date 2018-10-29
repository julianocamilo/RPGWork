const Utils = {
    clientID() {
      return "NTA2NTUzMzA5NzI5OTE0ODgx.DrkFNA.HsWn7OlcBa1HjTmpSNUwxizq9vY";   
    },
    
    commandDefault() {
        return "--";
    },
    
    isBotCommand(command) {
       return command.startsWith(this.commandDefault());
   }
}

module.exports = Utils;
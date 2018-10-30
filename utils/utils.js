const Utils = {
    clientID() {
      return "NTA2NTUzMzA5NzI5OTE0ODgx.DrkFNA.HsWn7OlcBa1HjTmpSNUwxizq9vY";   
    },
    
    commandDefault() {
        return "--";
    },
    
    isBotCommand(command) {
       const init = command.split(" ")[0]
       return init === this.commandDefault();
   },
   detectCommand(command) {
       const init = command.split(" ")[0]
       if (init === (this.commandDefault() + "dice")){ 
          return this.dice(command) 
       } else {
          return undefined;
       }
   },
   dice(diceCommand) {
       const commands = diceCommand.split(" ");
       const dice = commands[1].split("d");
       const diceTypes = [2, 3, 4, 6, 8, 10, 12, 20, 100];
       const paramsValid = [">", ">=", "=", "<", "<="];
       
       if (!diceTypes.includes(parseInt(dice[1]))) {
         return ("dice type invalid the dices types is " + diceTypes.join(", "));   
       }
       
       let count;
       let dices = [];
       for (count = 0; count < dice[0]; count++) {
           let number = Math.ceil(Math.random() * dice[1]);
           if (number === 0) { number = 1 }
           dices.push(number);
       }
       const total = dices.reduce((a, b) => a + b, 0);
       
       let secondMessage = "";
       
       if (commands.length > 2 && paramsValid.includes(commands[2]) && commands[3]) {
           let result;
           let param = ""
           switch(commands[2]) {
               case ">":
                   result = parseInt(total) > parseInt(commands[3]);
                   param = "more than " + commands[3];
                   break;
               case ">=":
                   result = parseInt(total) >= parseInt(commands[3]);
                   param = "more or equal than " + commands[3];
                   break;
               case "=":
                   result = parseInt(total) === parseInt(commands[3]);
                   param = "equal than " + commands[3];
                   break;
               case "<":
                   result = parseInt(total) < parseInt(commands[3]);
                   param = "less than " + commands[3];
                   break;
               case "<=":
                   result = parseInt(total) <= parseInt(commands[3]);
                   param = "less or equal than " + commands[3];
                   break;
           }
          secondMessage = ", expected " + param + ": **" + result + "**"
       }
       
       const message = "rolled (" + dices.join(" + ") + ") = **" + total+ "**" + secondMessage;
       return message;
   }
}

module.exports = Utils;
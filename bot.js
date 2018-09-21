const Discord = require('discord.js');
const bot = new Discord.Client();


bot.on('ready', () => {
  console.log('I am ready!');
  bot.user.setPresence({ game: { name: 'Majima Anthem 🚧', type: 0 } })
});

const prefix ="m!"


bot.on('message', message => {
  if(message.author.bot)return;

        if(message.member.roles.find("name", "Officer")){
        var person="boss";
        var pronoun="himself";
        }     
        else if(message.member.roles.find("name", "she/her")){
        var person="madam";
        var pronoun="herself";
        } 
        else if(message.member.roles.find("name", "he/him")){
        var person="sir";
        var pronoun="himself";
        }
        else {
        var person="captain";
        var pronoun="themselves";
        }
  

if(message.content.toLowerCase().includes( ['bepsi'] ) || message.content.toLowerCase().includes( ['pepsi'] ) ){
       message.react(":bepsi:403237730919645224");
   }
 
if(message.content.toLowerCase().startsWith( [prefix + 'say'] )){
       if (message.member.roles.find("name", "Officer")) { 
         var newm=message.content.replace("m!say", "")
         message.channel.send(newm);
       }
   } 
 
 
   if (message.content.toLowerCase().startsWith("m!announce ")) {
        if (message.member.roles.find("name", "Officer")) { 
        var newannounce=message.content.replace("m!announce ", "")
        message.guild.channels.get('449101348537892865').send( "@everyone\n" + newannounce);
        }
    }
    
 
 
if (message.content.toLowerCase().startsWith(prefix + "stab")) {
  if (message.cleanContent.includes("@")) {
        var odene= message.mentions.members.first()
        message.channel.sendMessage( ":knife:  |  **" + message.author.username + "** has stabbed **" + odene + "**!");  

    } else if (message.cleanContent.includes("m!stab ")) { 
        var odene= message.cleanContent.replace("m!stab ", "")
        message.channel.sendMessage( ":knife:  |  **" + message.author.username + "** has stabbed **" + odene + "**!");  

    } else message.channel.sendMessage( ":knife:  |  **" + message.author.username + "** stabbed " + pronoun + "!");
}
 
  
  

});







bot.login(process.env.BOT_TOKEN);

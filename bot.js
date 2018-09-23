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
 
  
 
  

  const NISHIDA2 = new Discord.RichEmbed()
  .setColor("0x36393F")
  .setAuthor("N I S H I D A  西田")
  .setDescription("Talk to <@&462409281719762954> by typing [ **`hey nishida`** ] in the chat.\nTo get help with Nishida's commands type [ **`m!nishida`** ]")
  .setThumbnail("https://media.discordapp.net/attachments/461288149247852559/493266242036039680/c2b6529310b7a694834a16007e3c52f2.png");


  const MINAMI2 = new Discord.RichEmbed()
  .setColor("0x36393F")
  .setAuthor("M I N A M I  南大作")
  .setDescription("Talk to <@&472561280906166273>  by typing [ **`hey minami`** ] in the chat.\nTo get help with Minami's commands type [ **`m!minami`** ].")
  .setThumbnail("https://media.discordapp.net/attachments/461288149247852559/493266266115670026/bcfc2c42060284b1b678bf8ddb1e2d6a.png");  
 
 
  
  if (message.content.toLowerCase().startsWith(prefix + "help")) {
    message.channel.send("<:transparent:454330573029376000> \n<:m_:493288220071559178><:a_:493288218800816129><:j_:493288218960330755><:i_:493288219065057280><:m_:493288220071559178><:a_:493288218800816129> <:majima3:493297211522809866> <:f_:493288218410745858><:a_:493288218800816129><:m_:493288220071559178><:i_:493288219065057280><:l_:493288219530625034><:y_:493288219798929408>\nA bot to help the mods watch over our lovely family! And for stabbing. \n\n<:lineblack:493296997122703360>   <:c_:493295659060035584>**ᴏ ᴍ ᴍ ᴀ ɴ ᴅ s**\n<:lineblack:493296997122703360>   :knife:  [ **`m!stab`** ]  \n<:lineblack:493296997122703360>   <:transparent:454330573029376000>  Stab your fellow family members. **Usage:** `m!stab @person`, `m!stab name`\n\n<:m_:493288220071559178>**ᴇ ᴍ ʙ ᴇ ʀ s**");
    message.channel.sendEmbed(NISHIDA2);
    message.channel.sendEmbed(MINAMI2);


  }  
  
  
   if (message.content.toLowerCase().startsWith(prefix + "nishida")) {
    message.channel.send("<:transparent:462456796498624512> \n<:n_:493298132172406795><:i_:493288219065057280><:s_:493298132369539113><:h_:493298132034125854><:i_:493288219065057280><:d_:493298131706970112><:a_:493288218800816129> <:nishi:493303757027934209><:da:493303756834865168> \nNishida is Majima's right-eye man and also his personal errand boy. \nHe's the best at keeping peace in the Majima Family.\nHe is in charge of greeting new people to our server! :yellow_heart: \n    \n<:line:462136569894273025>   <:c:493295659060035584>**ᴏ ᴍ ᴍ ᴀ ɴ ᴅ s**\n<:line:462136569894273025>   :speech_balloon:  [ **`hey nishida`** ]\n<:line:462136569894273025>   <:tr:493314078635458590>  Interact with Nishida! He answers to:\n<:line:462136569894273025>   <:tr:493314078635458590>  <:smallcheck:462358803434700811> Sentences that end in **`?`**\n<:line:462136569894273025>   <:tr:493314078635458590>  <:smallcheck:462358803434700811> Certain keywords like **`I love you`**\n<:line:462136569894273025>   <:tr:493314078635458590> \n<:line:462136569894273025>   <:call:485968129831469071>  [ **`hey nishida call kiryu`** ]\n<:line:462136569894273025>   <:tr:493314078635458590>  Calls Kiryu and lets you interact with him.\n<:line:462136569894273025>   <:tr:493314078635458590>  This is a work in progress. Kiryu answers to:\n<:line:462136569894273025>   <:tr:493314078635458590>  <:smallcheck:462358803434700811> **`selfie`** Kiryu sends you a selfie\n<:line:462136569894273025>   <:tr:493314078635458590>  <:smallcheck:462358803434700811> Certain keywords like **`I love you`**");
   
  }
  
    if (message.content.toLowerCase().startsWith(prefix + "minami")) {
    message.channel.send("<:tr:493314078635458590> \n<:m:493288220071559178><:i:493288219065057280><:n:493298132172406795><:a:493288218800816129><:m:493288220071559178><:i:493288219065057280> <:minami:493309446903037962>\nMinami is the Junior Leader of the Majima Family. \nHe is a loyal man who will fight and give his all for his family and boss.\nHe is in charge of Karaoke <:microphones:492922149703647232> \n\n<:linepink:493307589535465472>   <:c_:493295659060035584>**ᴏ ᴍ ᴍ ᴀ ɴ ᴅ s**\n<:linepink:493307589535465472>   :speech_balloon:    [ **`hey minami`** ]\n<:linepink:493307589535465472>   <:tr:493314078635458590>  Interact with Minami! He answers to:\n<:linepink:493307589535465472>   <:tr:493314078635458590>  <:smallcheck:462358803434700811> **`lizard`** Sends a picture of a lizard!\n<:linepink:493307589535465472>   <:tr:493314078635458590>  <:smallcheck:462358803434700811> Sentences that end in **`?`**\n<:linepink:493307589535465472>   <:tr:493314078635458590>  <:smallcheck:462358803434700811> Certain keywords like **`I love you`**");
    


  }
  
  

});







bot.login(process.env.BOT_TOKEN);

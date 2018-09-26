const Discord = require('discord.js');
const bot = new Discord.Client();


bot.on('ready', () => {
  console.log('I am ready!');
  bot.user.setPresence({ game: { name: '[m!help]', type: 0 } })
});

const prefix ="m!"
var { y0, y0cut, cinderella } = require('./screenshots/y0');
var { y1 } = require('./screenshots/y1');
var { y2 } = require('./screenshots/y2');
var { y3 } = require('./screenshots/y3');
var { y4 } = require('./screenshots/y4');
var { y5 } = require('./screenshots/y5');
var { y6 } = require('./screenshots/y6');
var { kiwami } = require('./screenshots/kiwami');
var { kiwami2 , majisaga } = require('./screenshots/kiwami2');
var { deadsouls, gettothetop } = require('./screenshots/deadsouls');
var { ishin } = require('./screenshots/ishin');
var { kenzan } = require('./screenshots/kenzan');
var { online, movie, play } = require('./screenshots/misc');

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
  .setDescription("Talk to <@&472561280906166273>  by typing [ **`hey minami`** ] in the chat.\nTo get help with Minami's commands type [  **`m!minami`**  ]")
  .setThumbnail("https://media.discordapp.net/attachments/461288149247852559/493266266115670026/bcfc2c42060284b1b678bf8ddb1e2d6a.png");  
 
 
  
  if (message.content.toLowerCase().startsWith(prefix + "help")) {
    message.channel.send("<:transparent:454330573029376000> \n<:m_:493288220071559178><:a_:493288218800816129><:j_:493288218960330755><:i_:493288219065057280><:m_:493288220071559178><:a_:493288218800816129> <:majima3:493297211522809866> <:f_:493288218410745858><:a_:493288218800816129><:m_:493288220071559178><:i_:493288219065057280><:l_:493288219530625034><:y_:493288219798929408>\nA bot to help the mods watch over our lovely family! And for stabbing. \n\n<:lineblack:493296997122703360>   <:c_:493295659060035584>**ᴏ ᴍ ᴍ ᴀ ɴ ᴅ s**\n<:lineblack:493296997122703360>   :knife:  [ **`m!stab`** ]  \n<:lineblack:493296997122703360>   <:transparent:454330573029376000>  Stab your fellow family members. **Usage:** `m!stab @person`, `m!stab name`\n<:lineblack:493296997122703360>\n<:lineblack:493296997122703360>   <:a_goro_runner:488584508594192394>  [ **`m!majima`**]\n<:lineblack:493296997122703360>   <:transparent:454330573029376000>  Sends a random Majima picture!\n<:lineblack:493296997122703360>   <:transparent:454330573029376000>  **Tags:** `y0`, `24h cinderella`, `y1`, `y2`, `y3`, `y4`, `y5`, `y6`,\n<:lineblack:493296997122703360>   <:transparent:454330573029376000>  `kiwami`, `kiwami 2`, `ishin`, `kenzan`, `dead souls`, \n<:lineblack:493296997122703360>   <:transparent:454330573029376000>  `get to the top`, `movie`, `online`, `stage play`\n<:lineblack:493296997122703360>   \n<:transparent:454330573029376000>  **Usage:** `m!majima [ tag ]`\n\n<:m_:493288220071559178>**ᴇ ᴍ ʙ ᴇ ʀ s**");
    message.channel.sendEmbed(NISHIDA2);
    message.channel.sendEmbed(MINAMI2);


  }  
  
  
   if (message.content.toLowerCase().startsWith(prefix + "nishida")) {
    message.channel.send("<:transparent:462456796498624512> \n<:n_:493298132172406795><:i_:493288219065057280><:s_:493298132369539113><:h_:493298132034125854><:i_:493288219065057280><:d_:493298131706970112><:a_:493288218800816129> <:nishi:493303757027934209><:da:493303756834865168> \nNishida is Majima's right-eye man and also his personal errand boy. \nHe's the best at keeping peace in the Majima Family.\nHe is in charge of greeting new people to our server! :yellow_heart: \n    \n<:line:462136569894273025>   <:c:493295659060035584>**ᴏ ᴍ ᴍ ᴀ ɴ ᴅ s**\n<:line:462136569894273025>   :speech_balloon:  [ **`hey nishida`** ]\n<:line:462136569894273025>   <:tr:493314078635458590>  Interact with Nishida! He answers to:\n<:line:462136569894273025>   <:tr:493314078635458590>  <:smallcheck:462358803434700811> Sentences that end in **`?`**\n<:line:462136569894273025>   <:tr:493314078635458590>  <:smallcheck:462358803434700811> Certain keywords like **`I love you`**\n<:line:462136569894273025>   <:tr:493314078635458590> \n<:line:462136569894273025>   <:call:485968129831469071>  [ **`hey nishida call kiryu`** ]\n<:line:462136569894273025>   <:tr:493314078635458590>  Calls Kiryu and lets you interact with him.\n<:line:462136569894273025>   <:tr:493314078635458590>  This is a work in progress. Kiryu answers to:\n<:line:462136569894273025>   <:tr:493314078635458590>  <:smallcheck:462358803434700811> **`selfie`** Kiryu sends you a selfie\n<:line:462136569894273025>   <:tr:493314078635458590>  <:smallcheck:462358803434700811> Certain keywords like **`I love you`**");
   
  }
  
    if (message.content.toLowerCase().startsWith(prefix + "minami")) {
    message.channel.send("<:tr:493314078635458590> \n<:m:493288220071559178><:i:493288219065057280><:n:493298132172406795><:a:493288218800816129><:m:493288220071559178><:i:493288219065057280> <:minami:493309446903037962>\nMinami is the Junior Leader of the Majima Family. \nHe is a loyal man who will fight and give his all for his family and boss.\nHe is in charge of Karaoke <:microphones:492922149703647232> \n\n<:linepink:493307589535465472>   <:c_:493295659060035584>**ᴏ ᴍ ᴍ ᴀ ɴ ᴅ s**\n<:linepink:493307589535465472>   :speech_balloon:    [ **`hey minami`** ]\n<:linepink:493307589535465472>   <:tr:493314078635458590>  Interact with Minami! He answers to:\n<:linepink:493307589535465472>   <:tr:493314078635458590>  <:smallcheck:462358803434700811> **`lizard`** Sends a picture of a lizard!\n<:linepink:493307589535465472>   <:tr:493314078635458590>  <:smallcheck:462358803434700811> **`fact`** Sends a random reptile/amphibian fact!\n<:linepink:493307589535465472>   <:tr:493314078635458590>  <:smallcheck:462358803434700811> Sentences that end in **`?`**\n<:linepink:493307589535465472>   <:tr:493314078635458590>  <:smallcheck:462358803434700811> Certain keywords like **`I love you`**");
    message.channel.send("<:tr:493314078635458590>\n<:linepink:493307589535465472>   <:k_:493322738404950026>**ᴀ ʀ ᴀ ᴏ ᴋ ᴇ   ᴄ ᴏ ᴍ ᴍ ᴀ ɴ ᴅ s**\n<:linepink:493307589535465472>   These commands are for when you are in a **voice channel.**\n<:linepink:493307589535465472>\n<:linepink:493307589535465472>   🎵  [ **`hey minami sing`** ] or [ **`hey minami play`** ] \n<:linepink:493307589535465472>   <:tr:493314078635458590>  Minami plays a song **Usage:** \n<:linepink:493307589535465472>   <:tr:493314078635458590>  `hey minami sing song name` Searches song. Lets you choose.\n<:linepink:493307589535465472>   <:tr:493314078635458590>  `hey minami sing [youtube url]` Plays video sent.\n<:linepink:493307589535465472>   <:tr:493314078635458590>  `hey minami sing [playlist url]` Adds playlist to the queue\n<:linepink:493307589535465472>\n<:linepink:493307589535465472>   :play_pause:  [ **`hey minami skip`** ]\n<:linepink:493307589535465472>   <:tr:493314078635458590>  Skips the current song playing.\n<:linepink:493307589535465472>\n<:linepink:493307589535465472>   :stop_button:  [ **`hey minami shut up`** ]\n<:linepink:493307589535465472>   <:tr:493314078635458590>  Disconnects and deletes queue. Kills Minami.\n<:linepink:493307589535465472>\n<:linepink:493307589535465472>   :loud_sound:  [ **`hey minami scream`** ]\n<:linepink:493307589535465472>   <:tr:493314078635458590>  Increases or Decreases the volume. **Usage:**\n<:linepink:493307589535465472>   <:tr:493314078635458590>  `hey minami scream` Gives you the current volume\n<:linepink:493307589535465472>   <:tr:493314078635458590>  `hey minami scream [number 1-10]` Changes the volume\n<:linepink:493307589535465472>\n<:linepink:493307589535465472>   :timer:  [**`hey minami queue`** ]\n<:linepink:493307589535465472>   <:tr:493314078635458590>  Gives you the current Queue. Might not show if there's too many songs");


  }



    if (message.content.toLowerCase().startsWith(prefix + "majima")) {


        var command= message.cleanContent.replace("m!majima ", "")
        
        if(command.includes('y0')) {
            if (command.includes('cutscene')) {
                message.channel.send(
                {embed: {color: 0x36393F,
                    image: {url: y0cut[Math.floor(Math.random()*y0cut.length)]},
                    footer: {text: "© 龍が如く0 ┃ Yakuza 0"}}}
                );
            } else {    var yakuza0 = [ y0[Math.floor(Math.random()*y0.length)],
                        y0cut[Math.floor(Math.random()*y0cut.length)],
                        cinderella[Math.floor(Math.random()*cinderella.length)] ]

                    message.channel.send(
                        {embed: {color: 0x36393F,
                        image: {url: yakuza0[Math.floor(Math.random()*yakuza0.length)]},
                        footer: {text: "© 龍が如く0 ┃ Yakuza 0"}}}
                        );  }
        } 

        else if (command.includes('y1')) {
            message.channel.send(
                {embed: {color: 0x36393F,
                image: {url: y1[Math.floor(Math.random()*y1.length)]},
                footer: {text: "© 龍が如く1 ┃ Yakuza 1 "}}}
            );
        }

        else if (command.includes('y2')) {
            message.channel.send(
                {embed: {color: 0x36393F,
                    image: {url: y2[Math.floor(Math.random()*y2.length)]},
                    footer: {text: "© 龍が如く2 ┃ Yakuza 2 "}}}
                );
        }  

        else if (command.includes('y3')) {
            message.channel.send(
                {embed: {color: 0x36393F,
                    image: {url: y3[Math.floor(Math.random()*y3.length)]},
                    footer: {text: "© 龍が如く3 ┃ Yakuza 3 "}}}
                );
        } 

        else if (command.includes('y4')) {
            message.channel.send(
                {embed: {color: 0x36393F,
                    image: {url: y4[Math.floor(Math.random()*y4.length)]},
                    footer: {text: "© 龍が如く4 ┃ Yakuza 4 "}}}
                );
        } 

        else if (command.includes('y5')) {
            message.channel.send(
                {embed: {color: 0x36393F,
                    image: {url: y5[Math.floor(Math.random()*y5.length)]},
                    footer: {text: "© 龍が如く5 ┃ Yakuza 5 "}}}
                );
        }     

        else if (command.includes('y6')) {
            message.channel.send(
                {embed: {color: 0x36393F,
                    image: {url: y6[Math.floor(Math.random()*y6.length)]},
                    footer: {text: "© 龍が如く6 ┃ Yakuza 6 "}}}
                );
        }  

        
        else if (command.includes('kiwami 2')) {
            if (command.includes('cutscene')) {
                message.channel.send(
                {embed: {color: 0x36393F,
                    image: {url: kiwami2[Math.floor(Math.random()*kiwami2.length)]},
                    footer: {text: "© 龍が如く極2 ┃ Yakuza Kiwami 2"}}}
                );
            } else {    var yakuza2 = [ kiwami2[Math.floor(Math.random()*kiwami2.length)],
                        majisaga[Math.floor(Math.random()*majisaga.length)] ]

                    message.channel.send(
                        {embed: {color: 0x36393F,
                        image: {url: yakuza2[Math.floor(Math.random()*yakuza2.length)]},
                        footer: {text: "© 龍が如く極2 ┃ Yakuza Kiwami 2"}}}
                        );  }
        } 

        else if (command.includes('kiwami')) {
            message.channel.send(
                {embed: {color: 0x36393F,
                    image: {url: kiwami[Math.floor(Math.random()*kiwami.length)]},
                    footer: {text: "© 龍が如く極 ┃ Yakuza Kiwami "}}}
                );
        } 

        else if (command.includes('dead')) {
        message.channel.send('get to the top!');

            if (command.includes('cutscene')) {
                    message.channel.send(
                    {embed: {color: 0x36393F,
                        image: {url: deadsouls[Math.floor(Math.random()*deadsouls.length)]},
                        footer: {text: "© 龍が如くOTE ┃ Yakuza Dead Souls"}}}
                    );
            } else {    var ded = [ deadsouls[Math.floor(Math.random()*deadsouls.length)],
                            gettothetop[Math.floor(Math.random()*gettothetop.length)] ]

                        message.channel.send(
                            {embed: {color: 0x36393F,
                            image: {url: ded[Math.floor(Math.random()*ded.length)]},
                            footer: {text: "© 龍が如くOTE ┃ Yakuza Dead Souls"}}}
                            );  }
        }  

        else if (command.includes('ishin')) {
            message.channel.send(
                {embed: {color: 0x36393F,
                    image: {url: ishin[Math.floor(Math.random()*ishin.length)]},
                    footer: {text: "© 龍が如く 維新!  ┃ Yakuza Ishin"}}}
                );
        }  
        
        else if (command.includes('kenzan')) {
            message.channel.send(
                {embed: {color: 0x36393F,
                    image: {url: kenzan[Math.floor(Math.random()*kenzan.length)]},
                    footer: {text: "© 龍が如く 見参!  ┃ Yakuza Kenzan"}}}
                );
        } 
        
        
        else if (command.includes('get')) {
            message.channel.send(
                {embed: {color: 0x36393F,
                    image: {url: gettothetop[Math.floor(Math.random()*gettothetop.length)]},
                    footer: {text: "© 龍が如くOTE ┃ Yakuza Dead Souls"}}}
                );
        } 

 
        else if (command.includes('24')) {
            message.channel.send(
                {embed: {color: 0x36393F,
                image: {url: cinderella[Math.floor(Math.random()*cinderella.length)]},
                footer: {text: "© 龍が如く0 ┃ Yakuza 0 "}}}
            );
        }  

        else if (command.includes('movie')) {
            message.channel.send(
                {embed: {color: 0x36393F,
                    image: {url: movie[Math.floor(Math.random()*movie.length)]},
                    footer: {text: "© 龍が如く：劇場版 ┃ Like A Dragon Movie "}}}
                );
        }

        else if (command.includes('online')) {
            message.channel.send(
                {embed: {color: 0x36393F,
                    image: {url: online[Math.floor(Math.random()*online.length)]},
                    footer: {text: "© 龍が如くONLINE ┃ Yakuza Online "}}}
                );
        }

        else if (command.includes('play')) {
            message.channel.send(
                {embed: {color: 0x36393F,
                    image: {url: play[Math.floor(Math.random()*play.length)]},
                    footer: {text: "© 龍が如く舞台 ┃ Yakuza Stage Play "}}}
                );
        }

        else 
        {

            var randomjima = [  y0[Math.floor(Math.random()*y0.length)],
                                y0cut[Math.floor(Math.random()*y0cut.length)],
                                cinderella[Math.floor(Math.random()*cinderella.length)],
                                y0[Math.floor(Math.random()*y0.length)],
                                y0cut[Math.floor(Math.random()*y0cut.length)],
                                cinderella[Math.floor(Math.random()*cinderella.length)],
                                y0[Math.floor(Math.random()*y0.length)],
                                y0cut[Math.floor(Math.random()*y0cut.length)],
                                cinderella[Math.floor(Math.random()*cinderella.length)],
                                y1[Math.floor(Math.random()*y1.length)],
                                y2[Math.floor(Math.random()*y2.length)],
                                y3[Math.floor(Math.random()*y3.length)],
                                y4[Math.floor(Math.random()*y4.length)],
                                y5[Math.floor(Math.random()*y5.length)],
                                y6[Math.floor(Math.random()*y6.length)],
                                kiwami[Math.floor(Math.random()*kiwami.length)],
                                kiwami[Math.floor(Math.random()*kiwami.length)],
                                kiwami[Math.floor(Math.random()*kiwami.length)],
                                kiwami[Math.floor(Math.random()*kiwami.length)],
                                kiwami[Math.floor(Math.random()*kiwami.length)],
                                kiwami2[Math.floor(Math.random()*kiwami2.length)],
                                majisaga[Math.floor(Math.random()*majisaga.length)],
                                deadsouls[Math.floor(Math.random()*deadsouls.length)],
                                gettothetop[Math.floor(Math.random()*gettothetop.length)],
                                deadsouls[Math.floor(Math.random()*deadsouls.length)],
                                gettothetop[Math.floor(Math.random()*gettothetop.length)],
                                deadsouls[Math.floor(Math.random()*deadsouls.length)],
                                gettothetop[Math.floor(Math.random()*gettothetop.length)],
                                deadsouls[Math.floor(Math.random()*deadsouls.length)],
                                gettothetop[Math.floor(Math.random()*gettothetop.length)],
                                ishin[Math.floor(Math.random()*ishin.length)],
                                kenzan[Math.floor(Math.random()*kenzan.length)],
                                online[Math.floor(Math.random()*online.length)],
                                movie[Math.floor(Math.random()*movie.length)],
                                play[Math.floor(Math.random()*play.length)] ]

            var randomtext = [  "© 龍が如く0 ┃ Yakuza 0 ",
                                "© 龍が如く0 ┃ Yakuza 0 ",
                                "© 龍が如く0 ┃ Yakuza 0 ",
                                "© 龍が如く0 ┃ Yakuza 0 ",
                                "© 龍が如く0 ┃ Yakuza 0 ",
                                "© 龍が如く0 ┃ Yakuza 0 ",
                                "© 龍が如く0 ┃ Yakuza 0 ",
                                "© 龍が如く0 ┃ Yakuza 0 ",
                                "© 龍が如く0 ┃ Yakuza 0 ",
                                "© 龍が如く1 ┃ Yakuza 1 ",
                                "© 龍が如く2 ┃ Yakuza 2 ",
                                "© 龍が如く3 ┃ Yakuza 3 ",
                                "© 龍が如く4 ┃ Yakuza 4 ",
                                "© 龍が如く5 ┃ Yakuza 5 ",
                                "© 龍が如く6 ┃ Yakuza 6 ",
                                "© 龍が如く極 ┃ Yakuza Kiwami ",
                                "© 龍が如く極 ┃ Yakuza Kiwami ",
                                "© 龍が如く極 ┃ Yakuza Kiwami ",
                                "© 龍が如く極 ┃ Yakuza Kiwami ",
                                "© 龍が如く極 ┃ Yakuza Kiwami ",
                                "© 龍が如く極2 ┃ Yakuza Kiwami 2",
                                "© 龍が如く極2 ┃ Yakuza Kiwami 2",
                                "© 龍が如くOTE ┃ Yakuza Dead Souls",
                                "© 龍が如くOTE ┃ Yakuza Dead Souls",
                                "© 龍が如くOTE ┃ Yakuza Dead Souls",
                                "© 龍が如くOTE ┃ Yakuza Dead Souls",
                                "© 龍が如くOTE ┃ Yakuza Dead Souls",
                                "© 龍が如くOTE ┃ Yakuza Dead Souls",
                                "© 龍が如くOTE ┃ Yakuza Dead Souls",
                                "© 龍が如くOTE ┃ Yakuza Dead Souls",
                                "© 龍が如く 維新!  ┃ Yakuza Ishin",
                                "© 龍が如く 見参!  ┃ Yakuza Kenzan",
                                "© 龍が如くONLINE ┃ Yakuza Online ",
                                "© 龍が如く：劇場版 ┃ Like A Dragon Movie ",
                                "© 龍が如く舞台 ┃ Yakuza Stage Play" ]                    

            var randonumber = Math.floor(Math.random()*randomjima.length)

            message.channel.send(
                {embed: {color: 0x36393F,
                image: {url: randomjima[randonumber]},
                footer: {text: randomtext[randonumber]}}}
                );  
                         
       
        }  

    }   












  
  

});




bot.login(process.env.BOT_TOKEN);

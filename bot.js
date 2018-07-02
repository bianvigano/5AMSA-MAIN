const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require("fs");
const Canvas = require("canvas");
const jimp = require("jimp");
const moment = require('moment');
const yt = require('ytdl-core');
const prefix = '('

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame("For Help type - (help - Enjoy!");
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});

//help
client.on("message", message => {
             
     if(!message.channel.guild) return;

 if (message.content === "(help") {
   message.react("😜")
  const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .addField(" 5AMSA is Here", true)
      
      .addField("XDROWN#5950 : Dev", true)
      
      .addField("❖ (help-ar ➾ help by arabic", true)

        .addField("❖ (help-en ➾ help by english", true)
      
  message.channel.sendMessage({embed});

 }
});

//dm help

client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-en") {
		 message.channel.send(':white_check_mark: **The Message Was Sent On Private**');
            
	
		 


 message.author.sendMessage(`
 **
__~~5AMSA Bot~~__ By: XDROWN#5950
╭━━━┳━━━┳━╮╭━┳━━━┳━━━╮
┃╭━━┫╭━╮┃┃╰╯┃┃╭━╮┃╭━╮┃
┃╰━━┫┃╱┃┃╭╮╭╮┃╰━━┫┃╱┃┃
╰━━╮┃╰━╯┃┃┃┃┃┣━━╮┃╰━╯┃
╭━━╯┃╭━╮┃┃┃┃┃┃╰━╯┃╭━╮┃
╰━━━┻╯╱╰┻╯╰╯╰┻━━━┻╯╱╰╯
╔[❖════════════❖]╗
             Prefix = ' ( '
╚[❖════════════❖]╝

╔[❖════════════❖]╗
             Admin Commands
╚[❖════════════❖]╝

❖ (kick <mention > ➾ kick member from server

❖ (clear <amount> ➾ clear chat
 
❖ (mute < mention > ➾ mute member

❖ (unmute <mention> ➾ unmute member

❖ (ct <name> ➾ create channel

❖ (cv <name> create voice channel

❖ (bc <message> ➾ message all members in server

╔[❖════════════❖]╗
          General  Commands
╚[❖════════════❖]╝

❖ (help-ar ➾ help by arabic

❖ (help-en ➾ help by english

❖ (roll <number> ➾ role 

❖ (profile ➾ see your profile

❖ (daily ➾ for daily Money

❖ (title <text> ➾ for change your profile title

❖ (trans ➾ for convert your money to anyone

❖ (credit ➾ to see your credit [money]

❖ (member ➾ members info

❖ (ser-av ➾ server avatar

❖ (infobot ➾ to see bot uptime

❖ (own ➾ bot owner

❖ (id ➾ your id (SooN)

❖ (avatar ➾ your avatar account

❖ (ping ➾ to see ping

❖ (bot ➾ bot informations 

❖ (server ➾ server informations 

❖ (invite ➾ bot invite link

❖ (invites ➾ To Know The Number of Invitations

❖ (colors ➾ To choose the colors you want

❖ (ccolors ➾ Making colors for bot [Mission to work bot]

❖ (rcolors ➾ To remove the colors of the bot

❖ (support ➾ To help with bot orders

❖ (Help-en-2 ➾ To Continue Help Menu

╔[❖════════════❖]╗
                  Welcome
╚[❖════════════❖]╝

to enable welcome message do channel name "welcome"
**
`);

    }
});


//help2
client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-en-2") {
		 message.channel.send(':white_check_mark: **The Message Was Sent On Private**');
            
	
		 


 message.author.sendMessage(`
**
╔[❖════════════❖]╗
           Games Commands
╚[❖════════════❖]╝

❖ (bl7a ➾ View photos of Balaha

❖ (meme ➾ View ridiculous images

❖ (انمي ➾ View Anime Pictures

❖ (خواطر ➾ Show some ideas 

❖ (لو خيروك ➾ Show some violent challenges

❖ (شعر ➾ Show some of the Poetry 

❖ (كت تويت ➾ To display some things that might have happened with you 

❖ (مريم ➾ Awesome game

❖ (اذكار ➾ View some daily Azkar

❖ (حكم ➾ View some judgment

❖ (عقاب ➾ Some challenging challenges 

❖ Some games will be added soon

╔[❖════════════❖]╗
              The Holy Quran
╚[❖════════════❖]╝

❖ (قران ➾ Opens the menu for selecting the reader 

❖ Close to more orders for the Holy Quran

╔[❖════════════❖]╗
       Soundborad Commands
╚[❖════════════❖]╝

❖ (sb ➾ to open soundboard menu

❖ Close to more of the soundboard commands for introspection

╔[❖════════════❖]╗
             Music Commands
╚[❖════════════❖]╝

❖ (play <name of song> ➾ To play or select the song you want

❖ (queue ➾ Opens the music menu that works

❖ (skip ➾ To skip the current music

❖ (np ➾ To find out the current music name

❖ (pause ➾ To stop the song temporarily

❖ (resume ➾ To resume music

❖ (vol <amount> ➾ To control the sound

==================================================================

Server support: https://discord.gg/cJ9YJF6

==================================================================
**
`);

    }
});

//help-ar

client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-ar") {
		 message.channel.send(':white_check_mark: **The Message Was Sent On Private**');
            
	
		 


 message.author.sendMessage(`
 **
__~~5AMSA Bot~~__ By: XDROWN#5950
╭━━━┳━━━┳━╮╭━┳━━━┳━━━╮
┃╭━━┫╭━╮┃┃╰╯┃┃╭━╮┃╭━╮┃
┃╰━━┫┃╱┃┃╭╮╭╮┃╰━━┫┃╱┃┃
╰━━╮┃╰━╯┃┃┃┃┃┣━━╮┃╰━╯┃
╭━━╯┃╭━╮┃┃┃┃┃┃╰━╯┃╭━╮┃
╰━━━┻╯╱╰┻╯╰╯╰┻━━━┻╯╱╰╯
╔[❖════════════❖]╗
                  Prefix = ' ( '
╚[❖════════════❖]╝

╔[❖════════════❖]╗
                    اوامر ادارية
╚[❖════════════❖]╝

❖ (kick <mention > ➾ لطرد عضو
 
❖ (mute < mention > ➾ اسكات عضو 

❖ (clear  ➾ لتنضيف المحادثة (fixing)
 
❖ (cv <name> ➾ صنع روم صوتية

❖ (ct <name> ➾ صنع روم كتابية

❖ (unmute <mention> ➾ فك الاسكات من العضو

❖ (bc <message> ➾ لارسال رسالة لجميع اعضاء السيرفر

╔[❖════════════❖]╗
                    اوامر عامة
╚[❖════════════❖]╝

❖ (help-ar ➾ المساعدة في العربي

❖ (help-en ➾ المساعدة في الانجليزيلة

❖ (ping ➾ عرض سرعه اتصال البوت

❖ (bot ➾ معلومات البوت

❖ (server ➾ معلومات السيرفر

❖ (invite ➾ رابط دعوة البوت

❖ (help-ar ➾ للمساعدة بالغة العربية

❖ (help-en ➾ للمساعدة بالغة الأنجليزيه

❖ (roll <number> ➾ قرعه 

❖ (profile ➾ لكي تري الملف الشخصي الخاص بك

❖ (daily ➾ لأموال اليومية

❖ (title <text> ➾ لتغير الوصف الخاص بك في الملف الشخصي

❖ (trans ➾ لتحول المال الخاص بك الي اي شخص

❖ (credit ➾ لكي تري اموالك او الكريديت الخاصه بك

❖ (member ➾ معلومات الأعضاء

❖ (ser-av ➾ الصورة الرمزية للبوت

❖ (infobot ➾ لرؤية حالة البوت

❖ (own ➾ مبرمج البوت

❖ (id ➾ هويتك (SooN)

❖ (avatar ➾ الأفاتار الخاص بك

❖ (ping ➾ لتري البينج الخاص بك

❖ (bot ➾ معلومات عن البوت

❖ (server ➾ معلومات عن السرفر 

❖ (invite ➾ لكي تحصل علي رابط دعوة البوت

❖ (invites ➾ لتعرف الدعوات الخاصه بالأشخاص

❖ (colors ➾ لأختيار الألوان التي تريدها

❖ (ccolors ➾ لصناعة الألوان الخاصة بالبوت [مهمة لكي يعمل البوت]

❖ (rcolors ➾ لأزالة الألوان الخاصه بالبوت

❖ (support ➾ للمساعدة في اوامر البوت

❖ (help-ar-2 ➾ لأكمال اوامر المساعدة

╔[❖════════════❖]╗
                      الترحيب
╚[❖════════════❖]╝

لتفعيل خاصية الترحيب قم بعمل قناة اسمها "welcome"
**
`);

    }
});


//help2
client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help-ar-2") {
		 message.channel.send(':white_check_mark: **The Message Was Sent On Private**');
            
	
		 


 message.author.sendMessage(`
**
╔[❖════════════❖]╗
                   اوامر الألعاب
╚[❖════════════❖]╝

❖ (bl7a ➾ لعرض صور بلحه

❖ (meme ➾ لعرض صور المتخلفه

❖ (لعرض صور انمي ➾ انمي

❖ (لعرض بعض الأفكار ➾ خواطر

❖ (لعرض بعض التحديات العنيفه ➾ لو خيروك

❖ (لعرض بعض الأشعار ➾ شعر

❖ (لعرض بعض الأشياء قد تكون حدثت معك ➾ كت تويت

❖ (لعبة مرعبة ➾ مريم

❖ (لعرض بعض الأذكار اليومية ➾ اذكار

❖ (لعرض بعض الحكم ➾ حكم

❖ (لخود بعض التحديات الصعبة ➾ عقاب

❖ سيتم اضافة بعض الألعاب قريبآ

╔[❖════════════❖]╗
                   القرأن الكريم
╚[❖════════════❖]╝

❖ (لفتح القائمة الخاص بأختيار القارئ ➾ قران

❖ قريبآ المزيد من اوامر للقرأن الكريم

╔[❖════════════❖]╗
               اوامر الساوند بورد
╚[❖════════════❖]╝

❖ (sb ➾ لفتح قائمة الساوند بورد

❖ قريبآ المزيد من اوامر الساوند بورد الخاصه بالتفحييط

╔[❖════════════❖]╗
                 اوامر الموسيقي
╚[❖════════════❖]╝

❖ (play <name of song> ➾ لتشغيل او تحديد الأغنية التي تريدها

❖ (queue ➾ لفتح قائمة الموسيقي التي تعمل

❖ (skip ➾ لتخطي الموسيقي الحالية

❖ (np ➾ لمعرفة اسم الموسيقي الحالية

❖ (np ➾ لمعرفة اسم الأغنية الحالية

❖ (pause ➾ لأيقاف الأغنية مؤقتآ

❖ (resume ➾ لأستئناف الموسيقي

❖ (vol <amount> ➾ للتحكم في الصوت

==================================================================

Server support: https://discord.gg/cJ9YJF6

==================================================================
**
`);

    }
});

//own
client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "own") {


 message.author.sendMessage(`
 
 __~~Bot Staff~~__
╭━━━┳━━━┳━╮╭━┳━━━┳━━━╮
┃╭━━┫╭━╮┃┃╰╯┃┃╭━╮┃╭━╮┃
┃╰━━┫┃╱┃┃╭╮╭╮┃╰━━┫┃╱┃┃
╰━━╮┃╰━╯┃┃┃┃┃┣━━╮┃╰━╯┃
╭━━╯┃╭━╮┃┃┃┃┃┃╰━╯┃╭━╮┃
╰━━━┻╯╱╰┻╯╰╯╰┻━━━┻╯╱╰╯
 __Powered By__: XDROWN#5950
 
Server support: https://discord.gg/cJ9YJF6

bot invite link: https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=2146958588585
`);

message.channel.send('**تم الارسال في الخاص**');

    }
});
//servers
client.on('message', message => {
     if (message.content === "(servers") {
     let embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .addField("**| السيرفرات |**" , client.guilds.size)
  message.channel.sendEmbed(embed);
    }
});

//welc
client.on("guildMemberAdd", member => {
      //const welcomer = client.channels.get("447512988954394624");
      let welcomer = member.guild.channels.find("name","welcome");
      if(!welcomer) return;
      if(welcomer) {
         moment.locale('ar-ly');
         var h = member.user;
        let heroo = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(h.avatarURL)
        .setAuthor(h.username,h.avatarURL)
        .addField(': تاريخ دخولك الدسكورد',`${moment(member.user.createdAt).format('D/M/YYYY h:mm a')} **\n** \`${moment(member.user.createdAt).fromNow()}\``,true)            
         .addField(': تاريخ دخولك السيرفر',`${moment(member.joinedAt).format('D/M/YYYY h:mm a ')} \n\`\`${moment(member.joinedAt).startOf(' ').fromNow()}\`\``, true)      
         .setFooter(`${h.tag}`,"https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif")
     welcomer.send({embed:heroo});          
      
      const w = ['./img/w1.png',
      './img/w2.png',
      './img/w3.png',
      './img/w4.png',
      './img/w5.png',
      './img/w6.png',
      './img/w7.png',
      './img/w8.png',
      './img/w9.png',
      './img/w10.png',
      './img/w11.png',
      './img/w12.png',
      './img/w13.png',
      './img/w14.png',
      './img/w15.png',
      './img/w16.png',
      './img/w17.png',
      './img/w18.png',];
      
              let Image = Canvas.Image,
                  canvas = new Canvas(401, 202),
                  ctx = canvas.getContext('2d');
              ctx.patternQuality = 'bilinear';
              ctx.filter = 'bilinear';
              ctx.antialias = 'subpixel';
              ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';
              ctx.shadowOffsetY = 2;
              ctx.shadowBlur = 2;
              fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
                  if (err) return console.log(err)
                  let BG = Canvas.Image;
                  let ground = new Image;
                  ground.src = Background;
                  ctx.drawImage(ground, 0, 0, 401, 202);
      
      })
      
                      let url = member.user.displayAvatarURL.endsWith(".webp") ? member.user.displayAvatarURL.slice(5, -20) + ".gif" : member.user.displayAvatarURL;
                      jimp.read(url, (err, ava) => {
                          if (err) return console.log(err);
                          ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                              if (err) return console.log(err);
      
                              //AVATARً
                              let Avatar = Canvas.Image;
                              let ava = new Avatar;
                              ava.src = buf;
                              ctx.drawImage(ava, 152, 27, 95, 95);
                              
                                                      //wl
                              ctx.font = '20px Arial Bold';
                              ctx.fontSize = '20px';
                              ctx.fillStyle = "#FFFFFF";
                              ctx.textAlign = "center";
                                                         ctx.fillText(member.user.username, 200, 154);
                              
                              //NAMEً
                              ctx.font = '20px Arial';
                              ctx.fontSize = '20px';
                              ctx.fillStyle = "#FFFFFF";
                              ctx.textAlign = "center";
      ctx.fillText(`انت العضو رقم  ${member.guild.memberCount} !! `
                              , 200, 190);
    welcomer.sendFile(canvas.toBuffer())
      
      
      
      })
      })
      
      }
      });
//profile
let profile = JSON.parse(fs.readFileSync("./profile.json", "utf8"))
client.on("message", message => {

  if (message.author.bot) return;
  if(!message.channel.guild)return;
  if (!profile[message.author.id]) profile[message.author.id] = {
    tite: 'PowerX User',
    rep: 0,
    reps: 'NOT YET',
    lastDaily:'Not Collected',
    level: 0,
    points: 0,
    credits: 1,
  };


fs.writeFile('./profile.json', JSON.stringify(profile), (err) => {
if (err) console.error(err);
})
});

client.on('message', message => {

    if(message.content.startsWith(prefix + 'rep')) {
      if(!message.channel.guild) return;
                    moment.locale('en');
                  var getvalueof = message.mentions.users.first()
                    if(!getvalueof) return message.channel.send(`**:mag: |  ${message.author.username}, the user could not be found.    **`);
                       if(getvalueof.id == message.author.id) return message.channel.send(`**${message.author.username}, you cant give yourself a reputation !**`)
    if(profile[message.author.id].reps != moment().format('L')) {
            profile[message.author.id].reps = moment().format('L');
            profile[getvalueof.id].rep = Math.floor(profile[getvalueof.id].rep+1);
         message.channel.send(`** :up:  |  ${message.author.username} has given ${getvalueof} a reputation point!**`)
        } else {
         message.channel.send(`**:stopwatch: |  ${message.author.username}, you can raward more reputation  ${moment().endOf('day').fromNow()} **`)
        }
       }
       fs.writeFile('./profile.json', JSON.stringify(profile), (err) => {
if (err) console.error(err);
})
});

client.on("message", (message) => {
  let men = message.mentions.users.first()

  if (message.author.bot) return;
    if (message.author.id === client.user.id) return;
	if(!message.channel.guild) return;
if (message.content.startsWith(prefix + 'credit')) {
  if(men) {
    if (!profile[men.id]) profile[men.id] = {
    lastDaily:'Not Collected',
    credits: 1,
  };
  }
  if(men) {
message.channel.send(`** ${men.username}, :credit_card: balance` + " is `" + `${profile[men.id].credits}$` + "`.**")
} else {
  message.channel.send(`** ${message.author.username}, your :credit_card: balance` + " is `" + `${profile[message.author.id].credits}$` + "`.**")
}
}

if(message.content.startsWith(prefix + "daily")) {
 if(profile[message.author.id].lastDaily != moment().format('day')) {
    profile[message.author.id].lastDaily = moment().format('day')
    profile[message.author.id].credits += 200
     message.channel.send(`**${message.author.username} you collect your \`200\` :dollar: daily pounds**`)
} else {
    message.channel.send(`**:stopwatch: | ${message.author.username}, your daily :yen: credits refreshes ${moment().endOf('day').fromNow()}**`)
}
  }

 let cont = message.content.slice(prefix.length).split(" ");
let args = cont.slice(1);
let sender = message.author
if(message.content.startsWith(prefix + 'trans')) {
          if (!args[0]) {
            message.channel.send(`**Usage: ${prefix}trans @someone amount**`);
         return;
           }
        // We should also make sure that args[0] is a number
        if (isNaN(args[0])) {
            message.channel.send(`**Usage: ${prefix}trans @someone amount**`);
            return; // Remember to return if you are sending an error message! So the rest of the code doesn't run.
             }
            let defineduser = '';
            let firstMentioned = message.mentions.users.first();
            defineduser = (firstMentioned)
            if (!defineduser) return message.channel.send(`**Usage: ${prefix}trans @someone amount**`);
            var mentionned = message.mentions.users.first();
if (!profile[sender.id]) profile[sender.id] = {}
if (!profile[sender.id].credits) profile[sender.id].credits = 200;
fs.writeFile('./profile.json', JSON.stringify(profile), (err) => {
if (err) console.error(err);
})
      var mando = message.mentions.users.id;
      if  (!profile[defineduser.id]) profile[defineduser.id] = {}
      if (!profile[defineduser.id].credits) profile[defineduser.id].credits = 200;
      profile[defineduser.id].credits += (+args[0]);
      profile[sender.id].credits += (-args[0]);
      let mariam = message.author.username
message.channel.send(`**:moneybag: | ${message.author.username}, has transferrerd ` + "`" + args[0] + "$` to " + `<@${defineduser.id}>**`)
}

      });

      client.on('message', message => {
          if(!profile[message.author.id]) profile[message.author.id] ={
              points: 0,
              level: 1
          };
          if(message.author.bot) return;
          profile[message.author.id].points = Math.floor(profile[message.author.id].points+1);
          if(profile[message.author.id].points > 100) {
              profile[message.author.id].points = 0
              profile[message.author.id].level = Math.floor(profile[message.author.id].level+1);
              message.channel.send(`**${message.author.username}, You leveld up to __${profile[message.author.id].level}__**`)
          }
          fs.writeFile('./profile.json', JSON.stringify(profile), (err) => {
if (err) console.error(err);
})
      })

    client.on('message', message => {
        let tit = message.content.split(" ").slice(1).join(" ");
        if(message.content.startsWith(prefix + "title")) {
        if(!profile[message.author.id].tite) profile[message.author.id].tite = "Hey im using PowerX"
        if(!tit) {
            message.channel.send("**:large_orange_diamond: .title <something>**");
        } else {
            profile[message.author.id].tite = tit
            message.channel.send(`:ok: Done Dude !?`)
        }
        }
        fs.writeFile('./profile.json', JSON.stringify(profile), (err) => {
if (err) console.error(err);
})
    })

    client.on("message", message => {
  if (message.author.bot) return;
	if(!message.channel.guild) return;
if (message.content.startsWith(prefix + "profile")) {
                               let user = message.mentions.users.first();
         var men = message.mentions.users.first();
            var heg;
            if(men) {
                heg = men
            } else {
                heg = message.author
            }
          var mentionned = message.mentions.members.first();
             var h;
            if(mentionned) {
                h = mentionned
            } else {
                h = message.member
            }
            var ment = message.mentions.users.first();
            var getvalueof;
            if(ment) {
              getvalueof = ment;
            } else {
              getvalueof = message.author;
            }
   var mentionned = message.mentions.users.first();

    var client;
      if(mentionned){
          var client = mentionned;
      } else {
          var client = message.author;

      }
if (!profile[getvalueof.id]) profile[getvalueof.id] = {points: 0,reps: "NOT YET",credits: 1, level: 1,tite: "PowerX User", rep: 0, lastDaily: "NOT COLLECTED"};
            let Image = Canvas.Image,
            canvas = new Canvas(300, 300),
            ctx = canvas.getContext('2d');
            fs.readFile("./powerx.png", function (err, Background) { //امتداد الصورة
            if (err) return console.log(err);
            let BG = Canvas.Image;
            let ground = new Image;
            ground.src = Background;
            ctx.drawImage(ground, 0, 0, 300, 300); // حجم الصورة

})



                let url = getvalueof.displayAvatarURL.endsWith(".webp") ? getvalueof.displayAvatarURL.slice(5, -20) + ".png" : getvalueof.displayAvatarURL;
                jimp.read(url, (err, ava) => {
                    if (err) return console.log(err);
                    ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                        if (err) return console.log(err);

                        //ur name
                    ctx.font = 'bold 13px Comic Sans MS'; // حجم الخط و نوعه
                        ctx.fontSize = '30px'; // عرض الخط
                        ctx.fillStyle = "#000000"; // لون الخط
                        ctx.textAlign = "center"; // محاذا ة النص
                        ctx.fillText(`${getvalueof.username}`, 153, 173) // احداثيات اسمك

                        //ur name
                    ctx.font = 'bold 13px Comic Sans MS'; // حجم الخط و نوعه
                        ctx.fontSize = '30px'; 
                        ctx.fillStyle = "#f1f1f1"; 
                        ctx.textAlign = "center"; 
                        ctx.fillText(`${getvalueof.username}`, 151, 171) // احداثيات اسمك

                        //credit
                        ctx.font = "bold 12px Arial" // نوع الخط وحجمه
                        ctx.fontSize = '10px'; // عرض الخط
                        ctx.fillStyle = "#f1f1f1" // لون الخط
                        ctx.textAlign = "center"; // محاذا ة النص
                        ctx.fillText(`$${profile[getvalueof.id].credits}`, 81, 159) // احداثيات المصاري

                        //poits
                        ctx.font = "bold 12px Arial" // ن
                        ctx.fontSize = '10px'; // عرض الخطوع الخط وحجمه
                        ctx.fillStyle = "#f1f1f1" // لون الخط
                        ctx.textAlign = "center"; // محاذا ة النص
                        ctx.fillText(`${profile[getvalueof.id].points}`, 223, 159) // احداثيات النقاط

                        //Level
                        ctx.font = "bold 20px Arial" // نوع الخط و حجمه
                        ctx.fontSize = '10px'; // عرض الخط
                        ctx.fillStyle = "#f1f1f1" // لون الخط
                        ctx.textAlign = "center"; // محاذا ة النص
                        ctx.fillText(`${profile[getvalueof.id].level}`, 223, 115) // احداثيات اللفل

                         //info
                        ctx.font = "bold 12px Arial" // ن
                        ctx.fontSize = '15px'; // عرض الخطوع الخط وحجمه
                        ctx.fillStyle = "#000000" // لون الخط
                        ctx.textAlign = "center"; // محاذا ة النص
                        ctx.fillText(`${profile[getvalueof.id].tite}`, 150, 199) // احداثيات النقاط

                        //info
                        ctx.font = "bold 12px Arial" // ن
                        ctx.fontSize = '15px'; // عرض الخطوع الخط وحجمه
                        ctx.fillStyle = "#f1f1f1" // لون الخط
                        ctx.textAlign = "center"; // محاذا ة النص
                        ctx.fillText(`${profile[getvalueof.id].tite}`, 150, 197) // احداثيات النقاط

                        // REP
                        ctx.font = "bold 20px  Arial";
                        ctx.fontSize = "40px";
                        ctx.fillStyle = "#f1f1f1";
                        ctx.textAlign = "center";
                        ctx.fillText(`+${profile[getvalueof.id].rep}`, 80,115)

                        let Avatar = Canvas.Image;
                        let ava = new Avatar;

ava.src = buf;
                        ctx.beginPath();
                        ctx.arc(75, 100, 780, 0, Math.PI*2, true);
                        ctx.closePath();
                        ctx.clip();
                          ctx.drawImage(ava, 116, 82, 73, 74);

message.channel.startTyping()
message.channel.sendFile(canvas.toBuffer())
message.channel.stopTyping()
})
})
}
});

//chat
client.on('message', message => {

    if (message.content === "(cchat") {
                        if(!message.channel.guild) return message.reply(' This command only for servers');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' ليس لديك صلاحيات');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: false

           }).then(() => {
               message.reply("تم تقفيل الشات :white_check_mark: ")
           });
             }

if (message.content === "(uchat") {
    if(!message.channel.guild) return message.reply(' This command only for servers');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('ليس لديك صلاحيات');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: true

           }).then(() => {
               message.reply("تم فتح الشات:white_check_mark:")
           });
             }



});

//ping
      client.on('message', message => {
                                if(!message.channel.guild) return;
                        if (message.content.startsWith('(ping')) {
                            if(!message.channel.guild) return;
                            var msg = `${Date.now() - message.createdTimestamp}`
                            var api = `${Math.round(client.ping)}`
                            if (message.author.bot) return;
                        let embed = new Discord.RichEmbed()
                        .setAuthor(message.author.username,message.author.avatarURL)
                        .setColor('RANDOM')
                        .addField('**Time Taken:**',msg + " ms :signal_strength: ")
                        .addField('**WebSocket:**',api + " ms :signal_strength: ")
         message.channel.send({embed:embed});
                        }
                    });

//serv-avatar
client.on("message", message => {    
          if(!message.channel.guild) return;
   if(message.author.bot) return;
      if(message.content === "(ser-av"){ 
          const embed = new Discord.RichEmbed()
  
      .setTitle(`صورة ** ${message.guild.name} **`)
  .setAuthor(message.author.username, message.guild.iconrURL)
    .setColor('RANDOM')
    .setImage(message.guild.iconURL)

   message.channel.send({embed});
      }
  });

//inv
client.on('message', message => {
    if (message.author.bot) return;
     if (message.content === prefix + "invite") {


 message.author.sendMessage(`
╭━━━┳━━━┳━╮╭━┳━━━┳━━━╮
┃╭━━┫╭━╮┃┃╰╯┃┃╭━╮┃╭━╮┃
┃╰━━┫┃╱┃┃╭╮╭╮┃╰━━┫┃╱┃┃
╰━━╮┃╰━╯┃┃┃┃┃┣━━╮┃╰━╯┃
╭━━╯┃╭━╮┃┃┃┃┃┃╰━╯┃╭━╮┃
╰━━━┻╯╱╰┻╯╰╯╰┻━━━┻╯╱╰╯
 
بامكانك دعوة البوت من هنا

bot invite link: https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=2146958588585

Server support: https://discord.gg/cJ9YJF6
`);

message.channel.send(':white_check_mark: **تم الارسال في الخاص**.');

    }
});
//link
client.on('message', message => {
    if (message.content.startsWith("(رابط")) {
 
  message.channel.createInvite({
        thing: true,
        maxUses: 100,
        maxAge: 86400
    }).then(invite =>
      message.author.sendMessage(invite.url)
    )
    const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setDescription("| :white_check_mark:  | :heart:  تم ارسال الرابط على الخاص  ")
      message.channel.sendEmbed(embed).then(message => {message.delete(10000)})
              const Embed11 = new Discord.RichEmbed()
        .setColor("RANDOM")
                .setAuthor(message.guild.name, message.guild.iconURL)
        .setDescription(`
**
---------------------
-[${message.guild.name}]  هذا هو رابط سيرفر
---------------------
-هذا الرابط صالح ل 100 مستخدم فقط
---------------------
-هذا الرابط صالح لمده 24 ساعه فقط
---------------------
**`)
      message.author.sendEmbed(Embed11)
    }
});

//clear
client.on('message', msg => {
  if (msg.author.bot) return;
  if (!msg.content.startsWith(prefix)) return;
  let command = msg.content.split(" ")[0];
  command = command.slice(prefix.length);
  let args = msg.content.split(" ").slice(1);

    if(command === "clear") {
        const emoji = client.emojis.find("name", "log")
    let textxt = args.slice(0).join("");
    if(msg.member.hasPermission("MANAGE_MESSAGES")) {
    if (textxt == "") {
        msg.delete().then
    msg.channel.send("***```ضع عدد الرسائل التي تريد مسحها 👌```***").then(m => m.delete(3000));
} else {
    msg.delete().then
    msg.delete().then
    msg.channel.bulkDelete(textxt);
        msg.channel.send("```php\nعدد الرسائل التي تم مسحها: " + textxt + "\n```").then(m => m.delete(3000));
        }    
    }
}
});

//roll
client.on('message', function(message) {
    if(message.content.startsWith(prefix + 'roll')) {
        let args = message.content.split(" ").slice(1);
        if (!args[0]) {
            message.channel.send('**حط رقم معين يتم السحب منه**');
            return;
            }
    message.channel.send(Math.floor(Math.random() * args.join(' ')));
            if (!args[0]) {
          message.edit('1')
          return;
        }
    }
});

//avatar
client.on('message', message => {
    if (message.content.startsWith("(avatar")) {
        var mentionned = message.mentions.users.first();
    var x5bzm;
      if(mentionned){
          var x5bzm = mentionned;
      } else {
          var x5bzm = message.author;
          
      }
        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setImage(`${x5bzm.avatarURL}`)
      message.channel.sendEmbed(embed);
    }
});

//members
    client.on('message', message => {
              if (!message.channel.guild) return;
      if(message.content =='(members')
      var IzRo = new Discord.RichEmbed()
      .setThumbnail(message.author.avatarURL)
      .setFooter(message.author.username, message.author.avatarURL) 
      .setTitle(':tulip:| Members info')
      .addBlankField(true)
      .addField(':green_book:| الاونلاين ',
      `${message.guild.members.filter(m=>m.presence.status == 'online').size}`)
      .addField(':closed_book:| دي ان دي',`${message.guild.members.filter(m=>m.presence.status == 'dnd').size}`)
      .addField(':orange_book:| خامل',`${message.guild.members.filter(m=>m.presence.status == 'idle').size}`)
      .addField(':notebook:| الاوف لاين ',`${message.guild.members.filter(m=>m.presence.status == 'offline').size}`)
      .addField('عدد اعضاء السيرفر',`${message.guild.memberCount}`)
      message.channel.send(IzRo);
    });

//BC
client.on('message', message => {

    if (message.author.id === client.user.id) return;
    if (message.guild) {
   let embed = new Discord.RichEmbed()
    let args = message.content.split(' ').slice(1).join(' ');
if(message.content.split(' ')[0] == prefix + 'bc') {
    if (!args[1]) {
message.channel.send("**:white_check_mark: bc <message>**");
return;
}
        message.guild.members.forEach(m => {
   if(!message.member.hasPermission('ADMINISTRATOR')) return;
            var bc = new Discord.RichEmbed()
            .addField('» السيرفر :', `${message.guild.name}`)
            .addField('» المرسل : ', `${message.author.username}#${message.author.discriminator}`)
            .addField(' » الرسالة : ', args)
            .setColor('#ff0000')
            // m.send(`[${m}]`);
            m.send(`${m}`,{embed: bc});
        });
    }
    } else {
        return;
    }
});
//server
client.on('message', function(msg) {
    if(msg.content.startsWith (prefix  + 'server')) {
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(msg.guild.iconURL)
      .setTitle(`Showing Details Of  **${msg.guild.name}*`)
      .addField('🌐** نوع السيرفر**',`[** __${msg.guild.region}__ **]`,true)
      .addField('🏅** __الرتب__**',`[** __${msg.guild.roles.size}__ **]`,true)
      .addField('🔴**__ عدد الاعضاء__**',`[** __${msg.guild.memberCount}__ **]`,true)
      .addField('🔵**__ عدد الاعضاء الاونلاين__**',`[** __${msg.guild.members.filter(m=>m.presence.status == 'online').size}__ **]`,true)
      .addField('📝**__ الرومات الكتابية__**',`[** __${msg.guild.channels.filter(m => m.type === 'text').size}__** ]`,true)
      .addField('🎤**__ رومات الصوت__**',`[** __${msg.guild.channels.filter(m => m.type === 'voice').size}__ **]`,true)
      .addField('👑**__ الأونـر__**',`**${msg.guild.owner}**`,true)
      .addField('🆔**__ ايدي السيرفر__**',`**${msg.guild.id}**`,true)
      .addField('📅**__ تم عمل السيرفر في__**',msg.guild.createdAt.toLocaleString())
      msg.channel.send({embed:embed});
    }
  });

//huge

const superagent = require("superagent");

  client.on('message', async message => {
  if (message.content.startsWith(prefix + 'hu')) {
    let args = message.content.split(" ").slice(1);
    let hugUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!hugUser) return message.channel.send("Make sure you mention someone!");
    const {body} = await superagent
    .get(`https://nekos.life/api/v2/img/hug`);
    let hugEmbed = new Discord.RichEmbed()
    .setTitle("Hug! c:")
    .setDescription(`**${message.author.username}** حضن **${message.mentions.users.first().username}**!`)
    .setImage(body.url)
    .setColor("RANDOM")
    .setFooter("DROWN IS HERE", client.user.displayAvatarURL);

    message.channel.send(hugEmbed)

}
});

//كف
client.on('message',  (message) => {
  if (message.content.startsWith(prefix + 'pu')) {
  let user = message.mentions.users.first();
  if (!user) {
    /**
     * The command was ran with invalid parameters.
     * @fires commandUsage
     */
    return message.emit('commandUsage', message, this.help);
  }

  let punches = [
    'https://i.giphy.com/media/iWEIxgPiAq58c/giphy.gif',
    'https://i.giphy.com/media/DViGV8rfVjw6Q/giphy.gif',
    'https://i.giphy.com/media/GoN89WuFFqb2U/giphy.gif',
    'https://i.giphy.com/media/xT0BKiwgIPGShJNi0g/giphy.gif',
    'https://i.giphy.com/media/Lx8lyPHGfdNjq/giphy.gif'
  ];

  message.channel.send({
    embed: {
      description: `${user.username} ادااك بوكس ع وشك يا ${message.author.username}! :punch:`,
      image: {
        url: punches[Math.floor(Math.random() * punches.length)]
      }
    }
  }).catch(e => {
    client.log.error(e);
  })
        }  
});

client.on('message',  (message) => {
  if (message.content.startsWith(prefix + 'sp')) {
  let user = message.mentions.users.first();
  if (!user) {

    return message.emit('commandUsage', message, this.help);
  }
  let slaps = [
    'https://i.giphy.com/media/3XlEk2RxPS1m8/giphy.gif',
    'https://i.giphy.com/media/mEtSQlxqBtWWA/giphy.gif',
    'https://i.giphy.com/media/j3iGKfXRKlLqw/giphy.gif',
    'https://i.giphy.com/media/2M2RtPm8T2kOQ/giphy.gif',
    'https://i.giphy.com/media/l3YSimA8CV1k41b1u/giphy.gif',
    'https://i.giphy.com/media/WLXO8OZmq0JK8/giphy.gif'
  ];

  message.channel.send({
    embed: {
      description: `${message.author.username} اداك بالقلم علي وشك ${user.username}!`,
      image: {
        url: slaps[Math.floor(Math.random() * slaps.length)]
      }
    }
  }).catch(e => {
    client.log.error(e);
  })
        }  
});


//invite
client.on('message', message => {
   if(message.content.startsWith(prefix + "invites")) {
    message.guild.fetchInvites().then(invs => {
      let user = message.mentions.users.first() || message.author
      let personalInvites = invs.filter(i => i.inviter.id === user.id);
      let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
message.channel.send(`${user} has ${inviteCount} invites.`);
});
  }
});


//games normal

var cats = ["https://i.ytimg.com/vi/SfLV8hD7zX4/maxresdefault.jpg","http://www.dogbazar.org/wp-content/uploads/2014/09/british-bull-dog-puppies.jpg","http://cdn2-www.dogtime.com/assets/uploads/gallery/german-shepherd-dog-breed-pictures/standing-7.jpg","http://cdn.akc.org/Marketplace/Breeds/German_Shepherd_Dog_SERP.jpg","https://animalso.com/wp-content/uploads/2016/12/black-german-shepherd_2.jpg","https://static.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpg","https://www.petfinder.com/wp-content/uploads/2012/11/101438745-cat-conjunctivitis-causes.jpg","http://www.i-love-cats.com/images/2015/04/12/cat-wallpaper-38.jpg","https://www.aspca.org/sites/default/files/cat-care_urine-marking_main-image.jpg","https://s-media-cache-ak0.pinimg.com/originals/f0/3b/76/f03b7614dfadbbe4c2e8f88b69d12e04.jpg","http://www.rd.com/wp-content/uploads/sites/2/2016/04/15-cat-wants-to-tell-you-attention.jpg","https://www.thelocal.de/userdata/images/article/fa6fd5014ccbd8f4392f716473ab6ff354f871505d9128820bbb0461cce1d645.jpg","https://www.adelaidezoo.com.au/wp-content/uploads/sites/2/animals/GiantPanda3Slider.jpg","http://imagem.band.com.br/f_230168.jpg"]
    client.on('message', message => {
        var args = message.content.split(" ").slice(1);
    if(message.content.startsWith(prefix + 'animal')) {
         var cat = new Discord.RichEmbed()
.setImage(cats[Math.floor(Math.random() * cats.length)])
message.channel.sendEmbed(cat);
    }
});

//memes area

var memes = ["https://scontent-cai1-1.xx.fbcdn.net/v/t1.15752-9/35991835_774489796273551_4340597720042438656_n.jpg?_nc_cat=0&_nc_eui2=AeEh31C9mhk6Wb5ikc8KPYhu16kmZG4-ikpMYNY-irTawjRfKs3pRTFg8R-Foy1lFLUtiWdgi6WLPcHC2VezXMv9IO8OBV3XUHLsDYvQ_6-jAg&oh=158ea5073bca5bd074daf6cc02db373f&oe=5BA3E627","https://scontent-cai1-1.xx.fbcdn.net/v/t1.15752-9/35836787_774489856273545_3116994058904403968_n.jpg?_nc_cat=0&_nc_eui2=AeE2pSA3QGuPD17m0f_xdLPDVsnxM7SNc-AVRIOc5B4ebgYO068KndkDzwwAD-YSimH9SEl58EpH7qRPy0FyIzyEKsTnXnuiomJdOC6OgHEQ0Q&oh=b7c21fc3d8293a5b7309d55589b1e0af&oe=5BB29478","https://i.imgur.com/nKeiLcW.jpg","https://i.imgur.com/Ou89M9D.jpg","https://i.imgur.com/eVlU1tS.png","https://i.imgur.com/ONaJuP6.jpg","https://i.imgur.com/Jazv0Nn.jpg","https://i.imgur.com/lxfsXDz.jpg","https://i.imgur.com/LS0TPvs.png","https://i.imgur.com/T7utZo4.jpg","https://i.imgur.com/aSSa51l.jpg","https://i.imgur.com/FxOhBqf.png","http://www.thecarpenterbuilding.com/wp-content/uploads/2016/05/coming-soon.jpg"]
    client.on('message', message => {
        var args = message.content.split(" ").slice(1);
    if(message.content.startsWith(prefix + 'memes')) {
         var meme = new Discord.RichEmbed()
.setImage(memes[Math.floor(Math.random() * memes.length)])
message.channel.sendEmbed(meme);
    }
});

//dab
var dab = ["https://scontent-sea1-1.cdninstagram.com/vp/f74bf3c2451cbf4a08a541e46de27889/5B5B6139/t51.2885-15/s480x480/e35/16230653_402791260069966_4987205548966412288_n.jpg","http://www.foot24.tn/thumbs/pogba%20dab.variant960x540.dd25b1-650x286.jpg","https://sm1.narvii.com/6602/c1f51eb618f7a36f9a77a934fc3984333c9a8f25_00.jpg","https://i.pinimg.com/originals/f5/84/d6/f584d6fe0d5173d717d1671bfa3f0d14.jpg","https://ih0.redbubble.net/image.259546796.9462/flat,800x800,075,f.jpg","https://upload.wikimedia.org/wikipedia/commons/f/fc/Dab_on_em_spongebob.jpg","https://i.ebayimg.com/images/g/XDQAAOSwTuJYs-7S/s-l300.jpg","https://cdn116.picsart.com/214968289003202.jpg?r1024x1024","https://i.pinimg.com/originals/48/32/5f/48325ffdd52c62e0db33db6edc1a8927.jpg","http://pm1.narvii.com/6815/f775300721729acee96c440a88b64b5864ac19c9v2_00.jpg","https://i.ytimg.com/vi/gp2Ydp-mOQw/maxresdefault.jpg","https://static.vibe.com/files/2017/08/singer-arrested-for-dabbing-1502464143-640x798.jpg","https://cdn6.dissolve.com/p/D23_34_318/D23_34_318_1200.jpg","http://www.thecarpenterbuilding.com/wp-content/uploads/2016/05/coming-soon.jpg"]
    client.on('message', message => {
        var args = message.content.split(" ").slice(1);
    if(message.content.startsWith(prefix + 'dab')) {
         var dabs = new Discord.RichEmbed()
.setImage(dab[Math.floor(Math.random() * dab.length)])
message.channel.sendEmbed(dabs);
    }
});

//bl7a
var bl7a = ["https://i.imgur.com/HLW70zm.jpg","https://i.ytimg.com/vi/Fj62InSHWFw/hqdefault.jpg","https://3.bp.blogspot.com/-_LXW7-zuWAg/WCituMasayI/AAAAAAADfkU/9YmMWayrvh4wQ2vxZXNuYaWxrEwUCMC8wCLcB/s640/%25D8%25A7%25D9%2584%25D8%25B3%25D9%258A%25D8%25B3%25D9%258A-%25D9%2588-%25D8%25A7%25D9%2584%25D9%2585%25D8%25AC%25D9%2584%25D8%25B3.jpg","https://pbs.twimg.com/profile_images/774920855822430208/dD4LHuD2_400x400.jpg","https://i.imgur.com/54oYVGt.jpg","https://akphoto1.ask.fm/a47/0e9b6/d519/485f/b84d/a7e3b9f02b07/original/2324041.jpg","https://i.imgur.com/kiPFu6v.jpg","https://khaberni-6zrocpuaymq7.stackpathdns.com/uploads/news_model/2018/03/main_image5ab00ac7aef5c.jpg","https://data.whicdn.com/images/234678438/large.jpg","http://www.thecarpenterbuilding.com/wp-content/uploads/2016/05/coming-soon.jpg"]
    client.on('message', message => {
        var args = message.content.split(" ").slice(1);
    if(message.content.startsWith(prefix + 'bl7a')) {
         var bl7as = new Discord.RichEmbed()
.setImage(bl7a[Math.floor(Math.random() * bl7a.length)])
message.channel.sendEmbed(bl7as);
    }
});


const secreT = [
  "**الحياة بكل ما فيها تقف دائمًا على حد الوسطية بين اتزان المعنى وضده من حب وكره وحق وباطل وعدل وظلم**.",
  "**كى تعيش عليك ان تتقن فن التجاهل باحتراف**.",
  "**لا تحزن على من اشعرك بان طيبتك غباء امام وقاحته**.",
  "**هناك من يحلم بالنجاح وهناك من يستيقظ باكرا لتحقيقه**.",
  "**ان تعالج ألمك بنفسك تلك هى القوة**.", 
  "**الجميع يسمع ما تقول والاصدقاء ينصتون لما تقول وافضل الاصدقاء ينصتون لما اخفاه سكوتك**.", 
  "**انتهى زمن الفروسية ، لم تنقرض الخيول بل انقرض الفرسان**.", 
  "**ان تكون اخرسا عاقلا خير من ان تكون نطوقا جهولا**.", 
  "**المناقشات العقيمة لا تنجب افكارا**.", 
  "**نحن نكتب ما لا نستطيع ان نقول وما نريد ان يكون**.", 
  "**نحن نكتب ما لا نستطيع ان نقول وما نريد ان يكون**.", 
]


 client.on('message', message => {
   if (message.content.startsWith("(خواطر")) {
                if(!message.channel.guild) return message.reply('** This command only for servers**');
  var embed = new Discord.RichEmbed()
  .setColor('RANDOM')

   .setThumbnail(message.author.avatarURL) 
 .addField('لعبه خواطر' ,
  `${secreT[Math.floor(Math.random() * secreT.length)]}`)
  message.channel.sendEmbed(embed);
  console.log('[id] Send By: ' + message.author.username)
    }
});

var Himo_04 = ["https://f.top4top.net/p_682it2tg6.png","https://e.top4top.net/p_682a1cus5.png","https://d.top4top.net/p_682pycol4.png","https://c.top4top.net/p_682vqehy3.png","https://b.top4top.net/p_682mlf9d2.png","https://a.top4top.net/p_6827dule1.png","https://b.top4top.net/p_682g1meb10.png","https://a.top4top.net/p_682jgp4v9.png","https://f.top4top.net/p_682d4joq8.png","https://e.top4top.net/p_6828o0e47.png","https://d.top4top.net/p_6824x7sy6.png","https://c.top4top.net/p_682gzo2l5.png","https://b.top4top.net/p_68295qg04.png","https://a.top4top.net/p_682zrz6h3.png","https://f.top4top.net/p_6828vkzc2.png","https://e.top4top.net/p_682i8tb11.png","https://f.top4top.net/p_8816hvic1.png","https://d.top4top.net/p_882020461.png","https://e.top4top.net/p_882s3ftn1.png","https://a.top4top.net/p_882eg9c51.png","https://c.top4top.net/p_882xkcqd1.png","https://f.top4top.net/p_882w7pdi1.png","https://a.top4top.net/p_882gcpmo1.png"]
    client.on('message', message => {
        var args = message.content.split(" ").slice(1);
    if(message.content.startsWith(prefix + 'لو خيروك')) {
         var cat = new Discord.RichEmbed()
.setImage(Himo_04[Math.floor(Math.random() * Himo_04.length)])
message.channel.sendEmbed(cat);
    }
});



const Sra7a = [  ' يا صرخة إحساسي وخنقة دموعي إذا الصّدف جابت مكاني مكانه من داخلي إحساس يعلن خضوعي وفي ظاهري رجال حافظ كيانه',  ' ظامي الوجدان وأشواقك نهر اسقني من عذب معسول الغدير الرّموش السّود والطّرف الحور ليتها عن لحظها لي تستخير أول المشوار في حبّك قهر وآخر المشوار عمري به خطير',  ' حبيبي عادت أسراب الحمام وعادوا الغيّاب وأنا من كثر ما شفت الوجيه اشتقت لأحبابي حبيبي من كثر ما اشتقت لك صرت أكره الأبواب ليّا شفت الوصل، وأهل الوصل ما عتّبوا بابي',  ' أي سرّ يعتري شوقي إليك إنّ شوقي حائر في مقلتيك كلّنا أسرى صبابات الهوى فادنُ منّي إنّني ملك يديك',  ' إِن الغرورَ إِذا تملَّكَ أمّةً كالزّهرِ يخفي الموتَ وهو زؤامُ',  ' إِذا عصفَ الغرورُ برأسِ غِرٍّ توّهمَ أن منكبَهُ جَناحُ',  ' أيّهذا الشّاكي و ما بك داء كن جميلاً ترى الوجود جميلا',  ' في هذه البقاع القصيّة هذه البقاع المهجورة حتى من عواء الذئب أسرجُ ضوء الشّمعة وأسافر',  ' يا نفسُ صَبْراً على ما قد مَنّيتِ به فالحرُّ يصبرُ عند الحادثِ الجَلَلِ',  ' وحسبُ الفتى إِن لمْ ينلْ ما يريدُه مع الصّبرِ أن يُلفى مقيماً على الصّبر',  '‏ صَبْراً جميلاً على مانابَ من حَدَثٍ والصبرُ ينفعُ أحياناً إِذا صبروا الصّبرُ أفضلُ شيءٍ تستعينُ به على الزّمانِ إِذا ما مسَّكَ الضّررُ',]
client.on('message', message => {
if (message.content.startsWith('(شعر')) {
  if(!message.channel.guild) return message.reply('** This command only for servers **');
var client= new Discord.RichEmbed()
.setTitle("شعر..")
.setColor('#FF0000')
.setDescription(`${Sra7a[Math.floor(Math.random() * Sra7a.length)]}`)
.setImage("https://cdn.discordapp.com/attachments/442659848019116032/443844544308576266/unknown.png")
               .setTimestamp()
        console.log("By : XDROWN#5950");
message.channel.sendEmbed(client);
message.react("??")
}
}); 

const cuttweet = [
  'كت تويت ‏| تخيّل لو أنك سترسم شيء وحيد فيصبح حقيقة، ماذا سترسم؟',
  'كت تويت | أكثر شيء يُسكِت الطفل برأيك؟',
  'كت تويت | الحرية لـ ... ؟',
  'كت تويت | قناة الكرتون المفضلة في طفولتك؟',
  'كت تويت ‏| كلمة للصُداع؟',
  'كت تويت ‏| ما الشيء الذي يُفارقك؟',
  'كت تويت | موقف مميز فعلته مع شخص ولا يزال يذكره لك؟',
  'كت تويت ‏| أيهما ينتصر، الكبرياء أم الحب؟',
  'كت تويت | بعد ١٠ سنين ايش بتكون ؟',
  'كت تويت ‏| مِن أغرب وأجمل الأسماء التي مرت عليك؟',
  '‏كت تويت | عمرك شلت مصيبة عن شخص برغبتك ؟',
  'كت تويت | أكثر سؤال وجِّه إليك مؤخرًا؟',
  '‏كت تويت | ما هو الشيء الذي يجعلك تشعر بالخوف؟',
  '‏كت تويت | وش يفسد الصداقة؟',
  '‏كت تويت | شخص لاترفض له طلبا ؟',
  '‏كت تويت | كم مره خسرت شخص تحبه؟.',
  '‏كت تويت | كيف تتعامل مع الاشخاص السلبيين ؟',
  '‏كت تويت | كلمة تشعر بالخجل اذا قيلت لك؟',
  '‏كت تويت | جسمك اكبر من عٌمرك او العكسّ ؟!',
  '‏كت تويت |أقوى كذبة مشت عليك ؟',
  '‏كت تويت | تتأثر بدموع شخص يبكي قدامك قبل تعرف السبب ؟',
  'كت تويت | هل حدث وضحيت من أجل شخصٍ أحببت؟',
  '‏كت تويت | أكثر تطبيق تستخدمه مؤخرًا؟',
  '‏كت تويت | ‏اكثر شي يرضيك اذا زعلت بدون تفكير ؟',
  '‏كت تويت | وش محتاج عشان تكون مبسوط ؟',
  '‏كت تويت | مطلبك الوحيد الحين ؟',
  '‏كت تويت | هل حدث وشعرت بأنك ارتكبت أحد الذنوب أثناء الصيام؟',
]

client.on('message', message => {
if (message.content.startsWith(prefix + "كت تويت")) {
             if(!message.channel.guild) return message.reply('** This command only for servers**');
var embed = new Discord.RichEmbed()
.setColor('RANDOM')
.setThumbnail(message.author.avatarURL) 
.addField('لعبه كت تويت' ,
`${cuttweet[Math.floor(Math.random() * cuttweet.length)]}`)
message.channel.sendEmbed(embed);
console.log('[id] Send By: ' + message.author.username)
 }
});

const zead = [
     '*** انا اسمي مريم ***',
     '*** مرحباَ ماهو اسمك ؟ ***',
     `*** اهلا بك ! انا تائهه في هذا المكان  ***`,
     '*** هل تود مساعدتي ؟ ***',
     '*** لماذا هل انت قاسي القلب ؟ ***',
     '*** انني اشفق عليك عليك يجب ان تطهر روحك وتحب الخير للجميع ***',
     '*** ابتعد عني قليل انني متعبة ***',
     '*** هل انت نادم على ماقلت ؟ ***',
     '*** ابتعد عني قليل انني متعبة ***',
     '*** هل انت نادم على ماقلت ؟ ***',
     '*** هل تود مساعدتي ؟ ***',
     '*** واو اشكرك انك شخصاَ رائع ! ***',
     '*** ابحث معي عن منزلي لقد كان قريباَ من هنا ***',
     '*** ولاكن عندما حل الليل لم اعد ارى اي شيء ***',
     '*** مذا تظن اين يوجد ؟ يمين او يسار ***',
     '*** هيا اذاَ ***',
     '*** اود ان اسئلك سؤال ونحن في الطريق ***',
     '*** هل تراني فتاة لطيفة ام مخيفة ***',
     '*** اشكرك !  ***',
     '*** لقد وصلنا الى المنزل شكراَ جزيلَ انتطرني ثواني وسوف اعود ***',
     '*** هل انت جاهز ؟ ***',
     '*** لقد اخبرت والدي عنك وهم متحمسين لرؤيتك ***',
     '*** هل تود ان تراهم الان ***',
  '*** انا لست الحوت الازرق كما يدعون ***',
     '*** انا لست كاذبة صدقني***',
     '*** لماذا ارى في عينيك الخوف ؟ ***',
     '*** انا مجرد فتاة لطيفة تحب اللعب مع الجميع ***',
     '*** اعرف كل شيء يحدث اسمع ذالك بالراديو ***',
     '*** سمعت ان البشر يقتلون من اجل المال فقط ***',
     '*** لماذا لم تدخل الغرفة ؟ ***',
     '*** ههههههههههههههههههه انت الان مسجون في هذه الغرفة ***',
     '*** لن تخرج حتى اعود لك بعد قليل ***',
     '*** المفتاح معك ! اكتب .مريم  ***',
     '*** مفتاح احمر , هل حصلت عليه ؟ ***',
     '*** ان لم تحصل عليه , اكتب .مريم مرة اخرى ***',
     '*** مفتاح اسود . هل حصلت عليه ؟ ***',
     '*** اين تريد ان تختبئ بسرعة قبل ان تعود ***',
     '*** لقد عادت من جديد الى المنزل ***',
     '*** لا تصدر اي صوت ! ***',
     '*** مريم : لقد عدت ***',
     '*** مريم : يا ايها المخادع اين انت ***',
     '*** مريم : اعلم انك هنا في المنزل ***',
     '*** مريم : ماذا تريد ان تسمع ***',
     '*** مريم : اضغط على الرابط اهداء مني لك | https://www.youtube.com/watch?v=hvSiuQccmtg ***',
     '*** احد ما خرج من المنزل ***',
     '*** حاسب دين ام التوبه خخخخخ اهههههه  ***'
  ]
   client.on('message', message => {
   if (message.content.startsWith(prefix + 'مريم')) {
    var mariam= new Discord.RichEmbed()
    .setTitle("PowerX is Real.")
    .setColor('RANDOM')
    .setDescription(`${zead[Math.floor(Math.random() * zead.length)]}`)
    .setImage("https://www.npa-ar.com/wp-content/uploads/2017/08/%D9%84%D8%B9%D8%A8%D8%A9-%D9%85%D8%B1%D9%8A%D9%85-300x200.jpg")
     message.channel.sendEmbed(mariam);
     message.react("??")
    }
  });

const adkar = [
    '**اذكار  | **اللَّهُمَّ اكْفِنِي بِحَلَالِكَ عَنْ حَرَامِكَ وَأَغْنِنِي بِفَضْلِكَ عَمَّنْ سِوَاكَ.',
    '**اذكار  |  **اللَّهُمَّ إِنِّي أَسْأَلُكَ الْهُدَى وَالتُّقَى وَالْعَفَافَ وَالْغِنَى. ',
    '**اذكار  ‏|  **اللَّهُمَّ اغْفِرْ لِي ذَنْبِي كُلَّهُ، دِقَّهُ، وَجِلَّهُ، وَأَوَّلَهُ، وَآخِرَهُ، وَعَلَانِيَتَهُ، وَسِرَّهُ. ',
    '**‏اذكار  |  **أستغفر الله .',     
    '**‏اذكار  | **الْلَّهُ أَكْبَرُ',
    '**‏اذكار  |  **لَا إِلَهَ إِلَّا اللَّهُ',
    '**اذكار  |  **اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيمَ , وَعَلَى آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ , اللَّهُمَّ بَارِكْ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا بَارَكْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ.',
    '**اذكار  |  **سُبْحَانَ الْلَّهِ، وَالْحَمْدُ لِلَّهِ، وَلَا إِلَهَ إِلَّا الْلَّهُ، وَالْلَّهُ أَكْبَرُ',
    '**اذكار  | **لَا إلَه إلّا اللهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلُّ شَيْءِ قَدِيرِ.',
    '**اذكار  | **أسْتَغْفِرُ اللهَ وَأتُوبُ إلَيْهِ',
    '**‏اذكار  | **سُبْحـانَ اللهِ وَبِحَمْـدِهِ. ',
    '‏**اذكار**|  لَا إلَه إلّا اللهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءِ قَدِيرِ.',
    '**اذكار  ‏|   **اللَّهُمَّ إِنِّي أَسْأَلُكَ عِلْمًا نَافِعًا، وَرِزْقًا طَيِّبًا، وَعَمَلًا مُتَقَبَّلًا.',
    '**اذكار  | ‏ **يَا رَبِّ , لَكَ الْحَمْدُ كَمَا يَنْبَغِي لِجَلَالِ وَجْهِكَ , وَلِعَظِيمِ سُلْطَانِكَ.',
    'اذكار    |  **أسْتَغْفِرُ اللهَ العَظِيمَ الَّذِي لاَ إلَهَ إلاَّ هُوَ، الحَيُّ القَيُّومُ، وَأتُوبُ إلَيهِ.**',
    '**‏اذكار  |  **اللَّهُمَّ إِنَّا نَعُوذُ بِكَ مِنْ أَنْ نُشْرِكَ بِكَ شَيْئًا نَعْلَمُهُ ، وَنَسْتَغْفِرُكَ لِمَا لَا نَعْلَمُهُ.',
    '**‏اذكار  |  **اللَّهُمَّ صَلِّ وَسَلِّمْ وَبَارِكْ على نَبِيِّنَا مُحمَّد. ',
    '**‏اذكار  |  **أَعـوذُ بِكَلِمـاتِ اللّهِ التّـامّـاتِ مِنْ شَـرِّ ما خَلَـق.',
    '**اذكار  |  **يَا حَيُّ يَا قيُّومُ بِرَحْمَتِكَ أسْتَغِيثُ أصْلِحْ لِي شَأنِي كُلَّهُ وَلاَ تَكِلْنِي إلَى نَفْسِي طَـرْفَةَ عَيْنٍ. ',
    '**اذكار  |  **اللّهُـمَّ إِنّـي أَعـوذُ بِكَ مِنَ الْكُـفر ، وَالفَـقْر ، وَأَعـوذُ بِكَ مِنْ عَذابِ القَـبْر ، لا إلهَ إلاّ أَنْـتَ.',
    '**‏اذكار  |  **اللّهُـمَّ عافِـني في بَدَنـي ، اللّهُـمَّ عافِـني في سَمْـعي ، اللّهُـمَّ عافِـني في بَصَـري ، لا إلهَ إلاّ أَنْـتَ.',
    '**‏اذكار  |  **سُبْحـانَ اللهِ وَبِحَمْـدِهِ عَدَدَ خَلْـقِه ، وَرِضـا نَفْسِـه ، وَزِنَـةَ عَـرْشِـه ، وَمِـدادَ كَلِمـاتِـه. ',
    '**‏اذكار  |  **اللّهُـمَّ بِكَ أَصْـبَحْنا وَبِكَ أَمْسَـينا ، وَبِكَ نَحْـيا وَبِكَ نَمُـوتُ وَإِلَـيْكَ النُّـشُور.',
    '**‏اذكار  |  **بِسـمِ اللهِ الذي لا يَضُـرُّ مَعَ اسمِـهِ شَيءٌ في الأرْضِ وَلا في السّمـاءِ وَهـوَ السّمـيعُ العَلـيم. ',
    '**‏اذكار  |  **حَسْبِـيَ اللّهُ لا إلهَ إلاّ هُوَ عَلَـيهِ تَوَكَّـلتُ وَهُوَ رَبُّ العَرْشِ العَظـيم.',
    '**اذكار  |  **اللّهُـمَّ ما أَصْبَـَحَ بي مِـنْ نِعْـمَةٍ أَو بِأَحَـدٍ مِـنْ خَلْـقِك ، فَمِـنْكَ وَحْـدَكَ لا شريكَ لَـك ، فَلَـكَ الْحَمْـدُ وَلَـكَ الشُّكْـر.',
    '**‏اذكار  |  **اللّهُـمَّ إِنِّـي أَصْبَـحْتُ أُشْـهِدُك ، وَأُشْـهِدُ حَمَلَـةَ عَـرْشِـك ، وَمَلَائِكَتَكَ ، وَجَمـيعَ خَلْـقِك ، أَنَّـكَ أَنْـتَ اللهُ لا إلهَ إلاّ أَنْـتَ وَحْـدَكَ لا شَريكَ لَـك ، وَأَنَّ ُ مُحَمّـداً عَبْـدُكَ وَرَسـولُـك',
    '**‏اذكار  |  **رَضيـتُ بِاللهِ رَبَّـاً وَبِالإسْلامِ ديـناً وَبِمُحَـمَّدٍ صلى ��لله عليه وسلم نَبِيّـاً',
    '**‏اذكار  |  **اللهم إني أعوذ بك من العجز، والكسل، والجبن، والبخل، والهرم، وعذاب القبر، اللهم آت نفسي تقواها، وزكها أنت خير من زكاها. أنت وليها ومولاها. اللهم إني أعوذ بك من علم لا ينفع، ومن قلب لا يخشع، ومن نفس لا تشبع، ومن دعوة لا يستجاب لها',
    '**‏اذكار  |  **اللهم إني أعوذ بك من شر ما عملت، ومن شر ما لم أعمل',
    '**‏اذكار  |  **اللهم مصرف القلوب صرف قلوبنا على طاعتك',
  ]
  client.on('message', message => {
  if (message.author.bot) return;
  if (message.content.startsWith(prefix + 'اذكار')) {
    if(!message.channel.guild) return;
  var client= new Discord.RichEmbed()
  .setTitle("PowerX is Real.")
  .setThumbnail(message.author.avatarURL)
  .setColor('RANDOM')
  .setDescription(`${adkar[Math.floor(Math.random() * adkar.length)]}`)
                 .setTimestamp()
  message.channel.sendEmbed(client);
  message.react("??")
  }
  });

  const kingmas = [
    '*** منشن الجميع وقل انا اكرهكم. ***',
 '*** اتصل على امك و قول لها انك تحبها :heart:. ***',
    '***     تصل على الوالده  و تقول لها  احب وحده.***',
    '*** تتصل ع��ى شرطي تقول له عندكم مطافي.***',
    '*** صور اي شيء يطلبه منك الاعبين.***',
    '*** اكتب في الشات اي شيء يطلبه منك الاعبين في الخاص. ***',
    '*** اتصل على احد من اخوياك  خوياتك , و اطلب منهم مبلغ على اساس انك صدمت بسيارتك.***',
    '*** اعطي اي احد جنبك كف اذا مافيه احد جنبك اعطي نفسك و نبي نسمع صوت الكف.***',
    '***  تروح عند شخص تقول له احبك. ***',
    '***روح عند اي احد بالخاص و قول له انك تحبه و الخ.***',
    '*** اذهب الى واحد ماتعرفه وقل له انا كيوت وابي بوسه. ***',
    '*** روح الى اي قروب عندك في الواتس اب و اكتب اي شيء يطلبه منك الاعبين  الحد الاقصى 3 رسائل. ***',
    '*** اذا انت ولد اكسر اغلى او احسن عطور عندك اذا انتي بنت اكسري الروج حقك او الميك اب حقك. ***',
    '*** ذي المرة لك لا تعيدها.***',
    '*** ارمي جوالك على الارض بقوة و اذا انكسر صور الجوال و ارسله في الشات العام.***',
    '*** اتصل على ابوك و قول له انك رحت مع بنت و احين هي حامل..... ***',
    '*** تكلم باللهجة السودانية الين يجي دورك مرة ثانية.***',
    '***سو مشهد تمثيلي عن مصرية بتولد.***',
    '*** قول نكتة اذا و لازم احد الاعبين يضحك اذا محد ضحك يعطونك ميوت الى ان يجي دورك مرة ثانية. ***',
    '*** قول نكتة اذا و لازم احد الاعبين يضحك اذا محد ضحك يعطونك ميوت الى ان يجي دورك مرة ثانية.***',
    '*** سامحتك خلاص مافيه عقاب لك :slight_smile:. ***',
    '*** اذهب الى واحد ماتعرفه وقل له انا كيوت وابي بوسه.***',
    '*** تتصل على الوالده  و تقول لها خطفت شخص. ***',
    '*** روح اكل ملح + ليمون اذا مافيه اكل اي شيء من اختيار الي معك.  ***'
 ]
  client.on('message', message => {
  if (message.content.startsWith(prefix + 'حكم')) {
   var mariam= new Discord.RichEmbed()
   .setTitle("PowerX is Real.")
   .setColor('RANDOM')
   .setDescription(`${kingmas[Math.floor(Math.random() * kingmas.length)]}`)
    message.channel.sendEmbed(mariam);
    message.react(":thinking:")
   }
 });

       const Za7f = [
           "**صورة وجهك او رجلك او خشمك او يدك**.",
           "**اصدر اي صوت يطلبه منك الاعبين**.",
           "**سكر خ��مك و قول كلمة من اختيار الاعبين الي معك**.",
           "**روح الى اي قروب عندك في الواتس اب و اكتب اي شيء يطلبه منك الاعبين  الحد الاقصى 3 رسائل**.",
           "**قول نكتة اذا و لازم احد الاعبين يضحك اذا محد ضحك يعطونك ميوت الى ان يجي دورك مرة ثانية**.",
           "**سمعنا صوتك و غن اي اغنية من اختيار الاعبين الي معك**.",
           "**ذي المرة لك لا تعيدها**.",
           "**ارمي جوالك على الارض بقوة و اذا انكسر صور الجوال و ارسله في الشات العام**.",
           "**صور اي شيء يطلبه منك الاعبين**.",
           "**اتصل على ابوك و قول له انك رحت مع بنت و احين هي حامل....**.",
           "**سكر خشمك و قول كلمة من اختيار الاعبين الي معك**.",
           "**سو مشهد تمثيلي عن مصرية بتولد**.",
           "**اعطي اي احد جنبك كف اذا مافيه احد جنبك اعطي نفسك و نبي نسمع صوت الكف**.",
           "**ذي المرة لك لا تعيدها**.",
           "**ارمي جوالك على الارض بقوة و اذا انكسر صور الجوال و ارسله في الشات العام**.",
           "**روح عند اي احد بالخاص و قول له انك تحبه و الخ**.",
           "**اكتب في الشات اي شيء يطلبه منك الاعبين في الخاص**.",
           "**قول نكتة اذا و لازم احد الاعبين يضحك اذا محد ضحك يعطونك ميوت الى ان يجي دورك مرة ثانية**.",
           "**سامحتك خلاص مافيه عقاب لك :slight_smile:**.",
           "**اتصل على احد من اخوياك  خوياتك , و اطلب منهم مبلغ على اساس انك صدمت بسيارتك**.",
           "**غير اسمك الى اسم من اختيار الاعبين الي معك**.",
           "**اتصل على امك و قول لها انك تحبها :heart:**.",
           "**لا يوجد سؤال لك سامحتك :slight_smile:**.",
           "**قل لواحد ماتعرفه عطني كف**.",
           "**منشن الجميع وقل انا اكرهكم**.",
           "**اتصل لاخوك و قول له انك سويت حادث و الخ....**.",
           "**روح المطبخ و اكسر صحن او كوب**.",
           "**اعطي اي احد جنبك كف اذا مافيه احد جنبك اعطي نفسك و نبي نسمع صوت الكف**.",
           "**قول لاي بنت موجود في الروم كلمة حلوه**.",
           "**تكلم باللغة الانجليزية الين يجي دورك م��ة ثانية لازم تتكلم اذا ما تكلمت تنفذ عقاب ثاني**.",
           "**لا تتكلم ولا كلمة الين يجي دورك مرة ثانية و اذا تكلمت يجيك باند لمدة يوم كامل من السيرفر**.",
           "**قول قصيدة **.",
           "**تكلم باللهجة السودانية الين يجي دورك مرة ثانية**.",
           "**اتصل على احد من اخوياك  خوياتك , و اطلب منهم مبلغ على اساس انك صدمت بسيارتك**.",
           "**اول واحد تشوفه عطه كف**.",
           "**سو مشهد تمثيلي عن اي شيء يطلبه منك الاعبين**.",
           "**سامحتك خلاص مافيه عقاب لك :slight_smile:**.",
           "**اتصل على ابوك و قول له انك رحت مع بنت و احين هي حامل....**.",
           "**روح اكل ملح + ليمون اذا مافيه اكل اي شيء من اختيار الي معك**.",
           "**تاخذ عقابين**.",
           "**قول اسم امك افتخر بأسم امك**.",
           "**ارمي اي شيء قدامك على اي احد موجود او على نفسك**.",
           "**اذا انت ولد اكسر اغلى او احسن عطور عندك اذا انتي بنت اكسري الروج حقك او الميك اب حقك**.",
           "**اذهب الى واحد ماتعرفه وقل له انا كيوت وابي بوسه**.",
           "**تتصل على الوالده  و تقول لها خطفت شخص**.",
           "** تتصل على الوالده  و تقول لها تزوجت با سر**.",
           "**����تصل على الوالده  و تقول لها  احب وحده**.",
             "**تتصل على شرطي تقول له عندكم مطافي**.",
             "**خلاص سامحتك**.",
             "** تصيح في الشارع انا  مجنوون**.",
             "** تروح عند شخص تقول له احبك**.",
         
       ]




    


    client.on('message', message => {
      if (message.content.startsWith(prefix + "عقاب")) {
                   if(!message.channel.guild) return message.reply('** This command only for servers**');
     var embed = new Discord.RichEmbed()
     .setColor('RANDOM')
      .setThumbnail(message.author.avatarURL) 
    .addField('PowerX is Real.' ,
     `${Za7f[Math.floor(Math.random() * Za7f.length)]}`)
     message.channel.sendEmbed(embed);
     console.log('[38ab] Send By: ' + message.author.username)
       }
   });


var rebel = ["https://media.giphy.com/media/pjk3wZcciRENa/giphy.gif","http://78.media.tumblr.com/fd4383e21495f2bb10ed699cd73f22ca/tumblr_n5l0pk3w4E1so8ds0o1_500.gif","https://media1.giphy.com/media/14309XrKEC7yyk/giphy.gif","http://gifimage.net/wp-content/uploads/2017/06/anime-gif-13-1.gif","https://i.imgur.com/M3BG3Ck.gif","https://4.bp.blogspot.com/-yDd1fLFMKts/WeX_LrmWhwI/AAAAAAAALsU/mLO7KCD0DFMp8n8xbdMdJNR5V2D0D9WXwCLcBGAs/s1600/tenor.gif","https://secure.static.tumblr.com/940bbaba171f6b2f2dabd11c17fd3f20/kj1pjcr/jxWok11nj/tumblr_static_filename_640_v2.gif","https://data.whicdn.com/images/110768190/original.gif","http://78.media.tumblr.com/80f12fdc314760b2ba3e10204e33323d/tumblr_nc1n9weNg11tk3dxfo1_500.gif","https://78.media.tumblr.com/ec3f0546a20a75cd47c00e95ef0ba0a7/tumblr_o3oyhk49JC1u6348eo1_500.gif","https://thumbs.gfycat.com/MassiveUnlinedDarwinsfox-max-1mb.gif","https://data.whicdn.com/images/120798528/original.gif","https://i.gifer.com/NZcE.gif","https://media.giphy.com/media/2aH3YUqjx92cE/giphy.gif","https://78.media.tumblr.com/99fcbe4544d83d27babb216a3f3bb8a3/tumblr_n1shx2AC2e1qztgoio3_500.gif","https://data.whicdn.com/images/81429641/original.gif","https://78.media.tumblr.com/6eace49891b549d558f3d1a2c0ad3c98/tumblr_n4xmoqCrPj1spu161o8_500.gif","https://pa1.narvii.com/6088/b868bd47eb802373aa8b8203f76b07dd04846d1f_hq.gif","https://cdn.discordapp.com/attachments/458384513173684224/460742842503921669/Tumblr_mdi9s0YkbA1rao0vlo1_500.gif","https://cdn.discordapp.com/attachments/458384513173684224/460742882064728065/Chuunibyou-Demo-Koi-Ga-Shitai-6.gif"]
    client.on('message', message => {
        var args = message.content.split(" ").slice(1);
    if(message.content.startsWith(prefix + 'انمي')) {
         var cat = new Discord.RichEmbed()
.setImage(rebel[Math.floor(Math.random() * rebel.length)])
message.channel.sendEmbed(cat);
    }
});


//bot

client.on('message', message => {

     if (message.author.bot) return;
    if (!message.channel.guild) return;
 
    

if(message.content.startsWith(prefix + 'bot')) {
        const embed = new Discord.RichEmbed()
            .setColor("RANDOM")
            .setDescription(`Servers🌐 ${client.guilds.size}
Users👥 ${client.users.size}
Channels📚 ${client.channels.size} `)
        message.channel.sendEmbed(embed);
    }
 
});

//ctcolors
client.on('message', message => {
    if(message.content.startsWith(prefix + 'ctcolors')) {
    if(!message.channel.guild) return message.channel.send('**This Command Only For Servers !**')
            if (!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(`**${message.author.username} You Dont Have** ``MANAGE_ROLES`` **Premission**`);

                     message.guild.createRole({ name: "Black", color: "#080808", permissions: [] })
                     message.guild.createRole({ name: "D-Red", color: "#B40404", permissions: [] })
                     message.guild.createRole({ name: "Yellow", color: "#FFFF00", permissions: [] })
                     message.guild.createRole({ name: "D-Green", color: "#088A08", permissions: [] })
                     message.guild.createRole({ name: "Aqua", color: "#00BFFF", permissions: [] })
                     message.guild.createRole({ name: "Green", color: "#00FF00", permissions: [] })
                     message.guild.createRole({ name: "Brown", color: "#B45F04", permissions: [] })
                     message.guild.createRole({ name: "Red", color: "#FF0000", permissions: [] })
                     message.guild.createRole({ name: "Purple", color: "#DF01D7", permissions: [] })
                     message.guild.createRole({ name: "White", color: "#ffffff", permissions: [] })
                     message.guild.createRole({ name: "Orange", color: "#FFBF00", permissions: [] })
        

message.channel.sendMessage('**:white_check_mark: الرجاء الانتظار ريث ما يتم صناعه رتب الألوان :smile: **')
}
});

//rmcolors
	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
    if(message.content.startsWith(prefix + 'rmcolors')) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', 'Black');
		
		role.delete()
		}
	
	});
	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
    if(message.content.startsWith(prefix + 'rmcolors')) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', 'D-Red');
		
		role.delete()
		}
	
	});
	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
    if(message.content.startsWith(prefix + 'rmcolors')) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', 'Yellow');
		
		role.delete()
		}
	
	});
	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
    if(message.content.startsWith(prefix + 'rmcolors')) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', 'D-Green');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
    if(message.content.startsWith(prefix + 'rmcolors')) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', 'Aqua');
		
		role.delete()
		}
	
	});
	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
    if(message.content.startsWith(prefix + 'rmcolors')) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', 'Green');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
    if(message.content.startsWith(prefix + 'rmcolors')) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', 'Brown');
		
		role.delete()
		}
	
	});
	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
    if(message.content.startsWith(prefix + 'rmcolors')) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', 'Red');
		
		role.delete()
		}
	
	});

	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
    if(message.content.startsWith(prefix + 'rmcolors')) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', 'Purple');
		
		role.delete()
		}
	
	});
	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
    if(message.content.startsWith(prefix + 'rmcolors')) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', 'White');
		
		role.delete()
		}
	
	});
	client.on('message', async message => {
		
			let args = message.content.split(' ').slice(1);
    if(message.content.startsWith(prefix + 'rmcolors')) {
		if(!message.member.hasPermission('ADMINISTRATOR')) return
		let role = message.guild.roles.find('name', 'Orange');
		
		role.delete()
  message.channel.send('**:negative_squared_cross_mark: الرجاء الانتظار ريث ما يتم أزالة رتب الألوان :smile:**')
		}
	
	});


//colors

client.on('message', message => {                      
    if(!message.channel.guild) return;
       if(message.content.startsWith(prefix + 'color')) {
       if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
       message.channel.sendFile(`https://i.imgur.com/NQy4FI0.png`).then(msg => {
        
        
        
        msg.react('🖤').then(r=>{
        msg.react('❤').then(r=>{
        msg.react('💛').then(r=>{
        msg.react('💚').then(r=>{
        msg.react('💙').then(r=>{
        msg.react('🐸').then(r=>{
        msg.react('💩').then(r=>{
        msg.react('😡').then(r=>{
        msg.react('😈').then(r=>{
        msg.react('💀').then(r=>{
        msg.react('😜').then(r=>{
        msg.react('❌').then(r=>{


       
   


    
     
     let activeFilter = (reaction, user) => reaction.emoji.name === '🖤' && user.id === message.author.id;
     
       let active = msg.createReactionCollector(activeFilter, { time: 15000 });
      
                                    //red                    
                               active.on("collect", r => {
                                   message.member.addRole(message.guild.roles.find("name", "Black"))
                                   
                                   
                            
                                 

     const embed = new Discord.RichEmbed() 
      .setColor("#000000")

      .setDescription("**:art:تم اعطائك اللون الأسود**")
      .setFooter(message.author.tag , message.author.avatarURL)

message.channel.sendEmbed(embed).then();

})


//لون اسود


 let y1Filter = (reaction, user) => reaction.emoji.name === '❤️' && user.id === message.author.id;
     
       let y1 = msg.createReactionCollector(y1Filter, { time: 15000 });
      
                                    //t                    
                               y1.on("collect", r => {
                                   message.member.addRole(message.guild.roles.find("name", "D-Red"))
                                   
                                   
                            
                                 

     const embed = new Discord.RichEmbed() 
      .setColor("#FF0000")

      .setDescription("**:art:تم اعطائك اللون الأحمر الغامق**")
      .setFooter(message.author.tag , message.author.avatarURL)

message.channel.sendEmbed(embed).then();



   })

 //لون احمر 
let y2Filter = (reaction, user) => reaction.emoji.name === '💛' && user.id === message.author.id;
     
       let y2 = msg.createReactionCollector(y2Filter, { time: 15000 });
      
                                                    
                               y2.on("collect", r => {
                                   message.member.addRole(message.guild.roles.find("name", "Yellow"))
                                   
                                   
                            
                                 

     const embed = new Discord.RichEmbed() 
      .setColor("#e7fa02")

      .setDescription("**:art:تم اعطائك اللون الاصفر**")
      .setFooter(message.author.tag , message.author.avatarURL)

message.channel.sendEmbed(embed).then();


 
                               })
                               
                               //الون الاخضر

let dgFilter = (reaction, user) => reaction.emoji.name === '💚' && user.id === message.author.id;
     
       let dg = msg.createReactionCollector(dgFilter, { time: 15000 });
      
                                                    
                               dg.on("collect", r => {
                                   message.member.addRole(message.guild.roles.find("name", "D-Green"))
                                   
                                   
                            
                                 

     const embed = new Discord.RichEmbed() 
      .setColor("#09fa2a")

      .setDescription("**:art:تم اعطائك اللون الاخضر**")
      .setFooter(message.author.tag , message.author.avatarURL)

message.channel.sendEmbed(embed).then();
 })
    //الون اللبني

let aqFilter = (reaction, user) => reaction.emoji.name === '💙' && user.id === message.author.id;
     
       let aq = msg.createReactionCollector(aqFilter, { time: 15000 });
      
                                                    
                               aq.on("collect", r => {
                                   message.member.addRole(message.guild.roles.find("name", "Aqua"))
                                   
                                   
                            
                                 

     const embed = new Discord.RichEmbed() 
      .setColor("#00BFFF")

      .setDescription("**:art:تم اعطائك اللون اللبني**")
      .setFooter(message.author.tag , message.author.avatarURL)

message.channel.sendEmbed(embed).then();
})
   //الون الازرق فاتح

let grFilter = (reaction, user) => reaction.emoji.name === '🐸' && user.id === message.author.id;
     
       let gr = msg.createReactionCollector(grFilter, { time: 15000 });
      
                                                    
                               gr.on("collect", r => {
                                   message.member.addRole(message.guild.roles.find("name", "Green"))
                                   
                                   
                            
                                 

     const embed = new Discord.RichEmbed() 
      .setColor("#00FF00")

      .setDescription("**:art:تم اعطائك اللون الأخضر**")
      .setFooter(message.author.tag , message.author.avatarURL)

message.channel.sendEmbed(embed).then();

})
          
let brFilter = (reaction, user) => reaction.emoji.name === '💩' && user.id === message.author.id;
     
       let br = msg.createReactionCollector(brFilter, { time: 15000 });
      
                                                    
                               br.on("collect", r => {
                                   message.member.addRole(message.guild.roles.find("name", "Brown"))
                                   
                                   
                            
                                 

     const embed = new Discord.RichEmbed() 
      .setColor("#3B170B")

      .setDescription("**:art:تم اعطائك اللون البني**")
      .setFooter(message.author.tag , message.author.avatarURL)

message.channel.sendEmbed(embed).then();

})

let reFilter = (reaction, user) => reaction.emoji.name === '😡' && user.id === message.author.id;
     
       let re = msg.createReactionCollector(reFilter, { time: 15000 });
      
                                                    
                               re.on("collect", r => {
                                   message.member.addRole(message.guild.roles.find("name", "Red"))
                                   
                                   
                            
                                 

     const embed = new Discord.RichEmbed() 
      .setColor("#FF0000")

      .setDescription("**:art:تم اعطائك اللون الأحمر**")
      .setFooter(message.author.tag , message.author.avatarURL)

message.channel.sendEmbed(embed).then();

})
          
let prFilter = (reaction, user) => reaction.emoji.name === '😈' && user.id === message.author.id;
     
       let pr = msg.createReactionCollector(prFilter, { time: 15000 });
      
                                                    
                               pr.on("collect", r => {
                                   message.member.addRole(message.guild.roles.find("name", "Purple"))
                                   
                                   
                            
                                 

     const embed = new Discord.RichEmbed() 
      .setColor("#A901DB")

      .setDescription("**:art:تم اعطائك اللون الأرجواني**")
      .setFooter(message.author.tag , message.author.avatarURL)

message.channel.sendEmbed(embed).then();

})

let whFilter = (reaction, user) => reaction.emoji.name === '💀' && user.id === message.author.id;
     
       let wh = msg.createReactionCollector(whFilter, { time: 15000 });
      
                                                    
                               wh.on("collect", r => {
                                   message.member.addRole(message.guild.roles.find("name", "White"))
                                   
                                   
                            
                                 

     const embed = new Discord.RichEmbed() 
      .setColor("#ffffff")

      .setDescription("**:art:تم اعطائك اللون الأبيض**")
      .setFooter(message.author.tag , message.author.avatarURL)

message.channel.sendEmbed(embed).then();

})

let orFilter = (reaction, user) => reaction.emoji.name === '😜' && user.id === message.author.id;
     
       let or = msg.createReactionCollector(orFilter, { time: 15000 });
      
                                                    
                               or.on("collect", r => {
                                   message.member.addRole(message.guild.roles.find("name", "Orange"))
                                   
                                   
                            
                                 

     const embed = new Discord.RichEmbed() 
      .setColor("#FFBF00")

      .setDescription("**:art:تم اعطائك اللون الأرجواني**")
      .setFooter(message.author.tag , message.author.avatarURL)

message.channel.sendEmbed(embed).then();

})

let y6Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
     
       let y6 = msg.createReactionCollector(y6Filter, { time: 15000 });
      
                                                    
                               y6.on("collect", r => {
                                   message.member.removeRole(message.guild.roles.find("name", "black"))
                                   message.member.removeRole(message.guild.roles.find("name", "D-Red")) 
                                   message.member.removeRole(message.guild.roles.find("name", "Yellow"))
                                   message.member.removeRole(message.guild.roles.find("name", "D-Green"))
                                   message.member.removeRole(message.guild.roles.find("name", "Aqua"))
                                   message.member.removeRole(message.guild.roles.find("name", "Green"))
                                   message.member.removeRole(message.guild.roles.find("name", "Brown"))
                                   message.member.removeRole(message.guild.roles.find("name", "Red"))
                                   message.member.removeRole(message.guild.roles.find("name", "Purple"))
                                   message.member.removeRole(message.guild.roles.find("name", "White"))
                                   message.member.removeRole(message.guild.roles.find("name", "Orange"))                
                                 

     const embed = new Discord.RichEmbed() 
      .setColor("RANDOM")

      .setDescription("**:art:تم ازالة اللون**")
      .setFooter(message.author.tag , message.author.avatarURL)

message.channel.sendEmbed(embed).then();


                               })
        })
})
})
        
})
})
})
})
})
})
})
})
})                             
                                   })
       }
                                   
                                   }); 


//botinfo
client.on('message', message => {
    if(message.content.startsWith(prefix + 'infobot')) {
      message.channel.send({
 embed: new Discord.RichEmbed() 
    .setThumbnail(message.author.avatarURL)
    .setColor('RED')
    .addField('**الذاكرة المستخدمة 💾**', `${(process.memoryUsage().rss / 1000000).toFixed()}MB`, true)
         .addField('**سرعة الاتصال📡**' , `${Date.now() - message.createdTimestamp}` + ' ms')
        .addField('**وقت الاقلاع⌚**', timeCon(process.uptime()), true)
        .addField('**استخدام المعالج💿**', `${(process.cpuUsage().rss / 10000).toFixed()}%`, true)
     })
    }
  });
  function timeCon(time) {
    let days = Math.floor(time % 31536000 / 86400)
    let hours = Math.floor(time % 31536000 % 86400 / 3600)
    let minutes = Math.floor(time % 31536000 % 86400 % 3600 / 60)
    let seconds = Math.round(time % 31536000 % 86400 % 3600 % 60)
    days = days > 9 ? days : '0' + days
    hours = hours > 9 ? hours : '0' + hours
    minutes = minutes > 9 ? minutes : '0' + minutes
    seconds = seconds > 9 ? seconds : '0' + seconds
    return `${days > 0 ? `${days}:` : ''}${(hours || days) > 0 ? `${hours}:` : ''}${minutes}:${seconds}`
};

client.on('message', async message => {
   if(message.content === res[message.guild.id].msg) {
       message.channel.send(res[message.guild.id].response);
   }
});

//admins
client.on('message', (message) => {
    if (message.content.startsWith('(kick')) {
      if(!message.member.hasPermission('KICK_MEMBERS')) return message.reply('هذا الخاصية للدارة فقط');
        var member= message.mentions.members.first();
        member.kick().then((member) => {
            message.channel.send(member.displayName + ' تم طرد هذا الشخص من السيرفر');
        }).catch(() => {
            message.channel.send(":x:");
        });
    }
}); 


client.on('message', (message) => {
    if (message.content.startsWith('(ban ')) {
      if(!message.member.hasPermission('BAN_MEMBERS')) return message.reply('هذا الخاصية للدارة فقط');
        var member= message.mentions.members.first();
        member.ban().then((member) => {
         message.channel.send(member.displayName + 'تم طرد هذا الشخص من السيرفر');
        }).catch(() => {
            message.channel.send(':x:');
        });
    }
});
  
  client.on("message", (message) => {
    if (message.content.startsWith('(delet')) {
        if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");

        let args = message.content.split(' ').slice(1);
        let channel = message.client.channels.find('name', args.join(' '));
        if (!channel) return message.reply('**There is no room like this name -_-**').catch(console.error);
        channel.delete()
    }
});

client.on("message", (message) => {
if (message.content.startsWith("(ct")) {
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
        let args = message.content.split(" ").slice(1);
    message.guild.createChannel(args.join(' '), 'text');
message.channel.sendMessage('تـم إنـشاء روم كـتابـي')

}
});
client.on("message", (message) => {
if (message.content.startsWith("(cv")) {
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
        let args = message.content.split(" ").slice(1);
    message.guild.createChannel(args.join(' '), 'voice');
    message.channel.sendMessage('تـم إنـشاء روم صـوتي')
    
}
});

client.on('message', message => {
  if (true) {
if (message.content === '(support') {
      message.author.send(' |https://discord.gg/dbzxbC7| لـ أي استفسار').catch(e => console.log(e.stack));

    }
   } 
  });
  
  

client.on('message', message => {
     if (message.content === "(support") {
     let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#9B59B6")
  .addField(" Done | تــــم" , " |  تــــم ارســالك في الخــاص")
     
     
     
  message.channel.sendEmbed(embed);
    }
});

client.on("message", message => {
  if (message.author.bot) return;
  
  let command = message.content.split(" ")[0];
  
  if (command === prefix + "mute") {
        if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("**⚠ | `[MANAGE_ROLES]`لا يوجد لديك صلاحية**").catch(console.error);
  let user = message.mentions.users.first();
  let modlog = client.channels.find('name', 'log');
  let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
  if (!muteRole) return message.reply("**`'Muted'`لا توجد رتبة** \n Muted سوي رتبة ").catch(console.error);
  if (message.mentions.users.size < 1) return message.reply('**.mute <منشن الشخص> **').catch(console.error);
  
  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .addField('الأستعمال:', 'اسكت')
    .addField('تم ميوت:', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('بواسطة:', `${message.author.username}#${message.author.discriminator}`)
   
   if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('** :cry: `Manage Roles` لا يوجد لدي برمشن**').catch(console.error);
 
  if (message.guild.member(user).roles.has(muteRole.id)) {
return message.reply("**:mute: تم إعطاء العضو ميوت**").catch(console.error);
} else {
    message.guild.member(user).addRole(muteRole).then(() => {
return message.reply("**:white_check_mark: تم إعطاء العضو ميوت كتابي**").catch(console.error);
});
  }
};
});

   client.on("message", message => {
  if (message.author.bot) return;
  
  let command = message.content.split(" ")[0];
  
  if (command === prefix + "unmute") {
        if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("**⚠ | `[MANAGE_ROLES]`لا يوجد لديك صلاحية**").catch(console.error);
  let user = message.mentions.users.first();
  let modlog = client.channels.find('name', 'log');
  let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
  if (!muteRole) return message.reply("**⚠ | `[MUTE_ROLES]`لا يوجد لديك صلاحية**").catch(console.error);
  if (message.mentions.users.size < 1) return message.reply('**.unmute <منشن الشخص>**').catch(console.error);
  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .addField('الأستعمال:', 'اتكلم')
    .addField('تم فك الميوت عن:', `${user.username}#${user.discriminator} (${user.id})`)
    .addField('بواسطة:', `${message.author.username}#${message.author.discriminator}`)

  if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('** ⚠ | `[MANAGE_ROLES_OR_PERMISSIONS]`لا يوجد لديك صلاحية **').catch(console.error);

  if (message.guild.member(user).removeRole(muteRole.id)) {
return message.reply("**:speaker: تم فك الميوت عن الشخص **").catch(console.error);
} else {
    message.guild.member(user).removeRole(muteRole).then(() => {
return message.reply("**:white_check_mark: تم فك الميوت عن الشخص **").catch(console.error);
});
  }

};

});

client.on('roleCreate', role => {
  client.setTimeout(() => {
    role.guild.fetchAuditLogs({
        limit: 1,
        type: 30
      })
      .then(audit => {
        let exec = audit.entries.map(a => a.executor.username)
        try {

          let log = role.guild.channels.find('name', 'log');
          if (!log) return;
          let embed = new Discord.RichEmbed()
            .setTitle('➕ RoleCreated')
            .addField('Role Name', role.name, true)
            .addField('Role ID', role.id, true)
            .addField('By', exec, true)
            .setTimestamp()
          log.send(embed).catch(e => {
            console.log(e);
          });
        } catch (e) {
          console.log(e);
        }
      })
  }, 1000)
})

client.on('voiceStateUpdate', (oldM, newM) => {
  let m1 = oldM.serverMute;
  let m2 = newM.serverMute;

  let d1 = oldM.serverDeaf;
  let d2 = newM.serverDeaf;

  let ch = oldM.guild.channels.find('name', 'log')
  if(!ch) return;

    oldM.guild.fetchAuditLogs()
    .then(logs => {

      let user = logs.entries.first().executor

    if(m1 === false && m2 === true) {
       let embed = new Discord.RichEmbed()
       .setAuthor(`${newM.user.tag}`, newM.user.avatarURL)
       .setDescription(`${newM} تم اضافه ميوت ل`)
       .addField('بواسطة',`${user}`)

       ch.send(embed)
    }
    if(m1 === true && m2 === false) {
       let embed = new Discord.RichEmbed()
       .setAuthor(`${newM.user.tag}`, newM.user.avatarURL)
       .setDescription(`${newM} تم ازاله الميوت من`)
       .addField('بواسطة',`${user}`)
       .setTimestamp()

       ch.send(embed)
    }
    if(d1 === false && d2 === true) {
       let embed = new Discord.RichEmbed()
       .setAuthor(`${newM.user.tag}`, newM.user.avatarURL)
       .setDescription(`${newM} تم اضافه دفين ل`)
       .addField('بواسطة',`${user}`)
       .setTimestamp()

       ch.send(embed)
    }
    if(d1 === true && d2 === false) {
       let embed = new Discord.RichEmbed()
       .setAuthor(`${newM.user.tag}`, newM.user.avatarURL)
       .setDescription(`${newM} تم ازاله الدفين ل`)
       .addField('بواسطة',`${user}`)
       .setTimestamp()

       ch.send(embed)
    }
  })
})
client.on('guildMemberAdd', member => {
    if (!member || !member.id || !member.guild) return;
    const guild = member.guild;
	
    const channel = member.guild.channels.find('name', 'log');
    if (!channel) return;
    let memberavatar = member.user.avatarURL
    const isNew = (new Date() - member.user.createdTimestamp) < 900000 ? '🆕' : '';
    
    let embed = new Discord.RichEmbed()
       .setAuthor(`${member.user.tag}`, member.user.avatarURL)
	   .setThumbnail(memberavatar)
       .setColor('GREEN')
       .setDescription(`📥 <@${member.user.id}> **دخل السيرفر**\n\n`)
       .setTimestamp();
     channel.send({embed:embed});
});
//

//
client.on('guildMemberRemove', member => {
    if (!member || !member.id || !member.guild) return;
    const guild = member.guild;
	
    const channel = member.guild.channels.find('name', 'log');
    if (!channel) return;
    let memberavatar = member.user.avatarURL
    
    let embed = new Discord.RichEmbed()
       .setAuthor(`${member.user.tag}`, member.user.avatarURL)
	   .setThumbnail(memberavatar)
       .setColor('RED')
       .setDescription(`📤 <@${member.user.id}> **خرج من السيرفر**\n\n`)
       .setTimestamp();
     channel.send({embed:embed});
});


client.on('messageDelete', message => {
    if (!message || !message.id || !message.content || !message.guild || message.author.bot) return;
    const channel = message.guild.channels.find('name', 'log');
    if (!channel) return;
    
    let embed = new Discord.RichEmbed()
       .setAuthor(`${message.author.tag}`, message.author.avatarURL)
       .setColor('BLACK')
       .setDescription(`🗑️ **حذف رساله**
**ارسلها <@${message.author.id}>                                                                                                                        تم حذفها في شات** <#${message.channel.id}>\n\n \`${message.cleanContent}\``)
       .setTimestamp();
     channel.send({embed:embed});

});


client.on('messageUpdate', (message, newMessage) => {
    if (message.content === newMessage.content) return;
    if (!message || !message.id || !message.content || !message.guild || message.author.bot) return;
    const channel = message.guild.channels.find('name', 'log');
    if (!channel) return;
    
    let embed = new Discord.RichEmbed()
       .setAuthor(`${message.author.tag}`, message.author.avatarURL)
       .setColor('SILVER')
       .setDescription(`✏ **تعديل رساله
ارسلها <@${message.author.id}>                                                                                                                         تم تعديلها في شات** <#${message.channel.id}>\n\nقبل التعديل:\n \`${message.cleanContent}\`\n\nبعد التعديل:\n \`${newMessage.cleanContent}\``)
       .setTimestamp();
     channel.send({embed:embed});

});
client.on("roleCreate", rc => {
  const channel = rc.guild.channels.find("name", "log") 
  if(channel) {
  var embed = new Discord.RichEmbed()
  .setTitle(rc.guild.name)
  .setDescription(`***Created Role Name : *** **${rc.name}** `)
  .setColor(`RANDOM`)
  .setTimestamp(); 
  channel.sendEmbed(embed)
  }
  });
  
  client.on("roleDelete",  rd => {
  const channel = rd.guild.channels.find("name", "log")
  if(channel) {
  var embed = new Discord.RichEmbed()
  .setTitle(rd.guild.name)
  .setDescription(`***Deleted Role Name : *** **${rd.name}** `)
  .setColor(`RANDOM`)
  .setTimestamp(); 
  channel.sendEmbed(embed)
  }
});

client.login("NDYzMjQ0MTM3Mzc0ODEwMTEz.DhtqfQ.WzY5S1TrnV1dlZGbdFzVoCQH6S4");

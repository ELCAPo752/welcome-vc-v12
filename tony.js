const express = require("express");
const app = express();

app.listen(() => console.log("tony"));

app.use('/ping', (req, res) => {
  res.send(new Date());
});

const Discord = require('discord.js'); 
const jano = new Discord.Client(); 
const { Canvas } = require('canvas-constructor');
const { get }  = require('node-superfetch');
const ytdl = require("ytdl-core");


tony.on("message", message => {
if (message.content === "help") {
const embed = new Discord.MessageEmbed()
.setColor("RED")
.setDescription(` 
زانیاری دەربارەی بۆتەکە

ئایدی چەناڵ دا ئەنێی

لینک  ئەهێنی هەتا بەخێرهاتنی نەفەر بکات 

Tb/ ئەبێ لینکەکە لە یوتیوب بێت ئەگەر نا نابێت
[\`my youtube\`](https://www.youtube.com/channel/UCDBlNBKYEqPkJ1HH1Hz44SA) • [\`Support\`](https://discord.gg/ttx9b2YcaP)
 `)
    
    .setFooter(` welcome vc ✨ | Coded by , Tony Bot`, jano.user.avatarURL)
    .setURL("https://discord.gg/ttx9b2YcaP")
      
    message.channel.send(embed);
  }
});







tony.on("ready", async () => {
  console.log(`${tony.user.username} Ready .`);
  console.log(`${tony.guilds.cache.size} Servers .`);
  console.log(`${tony.guilds.cache.reduce((a, g) => a + g.memberCount, 0)} Users .`);
tony.user.setStatus("invisible")
  tony.user.setActivity("help | welcome vc", {
    type: "PLAYING"
  });
});


tony.on("voiceStateUpdate", async(voiceOld, voiceNew) => {
  const c = "887544153511194664"
const cc = tony.channels.cache.get(c)
  if (
    voiceNew.channelID == cc
  ) {

const connection = await cc.join();
    connection.play(ytdl("https://youtu.be/yRXDQE-aBII", {
        audioonly: true
      })
);


  } else if (voiceNew.channelID !== cc) {
    cc.leave();
}

})










tony.login("");

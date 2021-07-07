const Discord = require("discord.js")
module.exports = (client, message, track) => {
    
    const embed = new Discord.MessageEmbed()
    .setTitle (`**NOW PLAYING**`)
    .setDescription (`${client.emotes.music} - Now playing ${track.title} into ${message.member.voice.channel.name} ...`)
    .setColor ("#3498DB")
    .setFooter(`NEXRO`)
    .setThumbnail('https://media.discordapp.net/attachments/822321276085469184/862185931121492028/ZEUX.png?width=434&height=434')
    .setTimestamp ();

message.channel.send(embed)
};
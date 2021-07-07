const Discord = require("discord.js")
module.exports = (client, message, queue, playlist) => {
    const embed = new Discord.MessageEmbed()
    .setTitle (`**PLAYLIST ADDED TO QUEUE**`)
    .setDescription (`${client.emotes.music} - ${playlist.title} has been added to the queue (**${playlist.tracks.length}** songs) !`)
    .setColor ("#3498DB")
    .setFooter(`NEXRO`)
    .setThumbnail('https://media.discordapp.net/attachments/822321276085469184/862185931121492028/ZEUX.png?width=434&height=434')
    .setTimestamp ();
 message.channel.send(embed);
};
const Discord = require("discord.js")
module.exports = {
    name: 'pause',
    aliases: ['pa'],
    category: 'Music',
    utilisation: '{prefix}pause',

 

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - You're not in a voice channel !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - You are not in the same voice channel !`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - No music currently playing !`);

        if (client.player.getQueue(message).paused) return message.channel.send(`${client.emotes.error} - The music is already paused !`);

        const embed = new Discord.MessageEmbed()
        .setTitle (`**PAUSED**`)
        .setDescription (`${client.emotes.success} - Song ${client.player.getQueue(message).playing.title} paused !`)
        .setColor ("#E67E22")
        .setFooter(`NEXRO`)
        .setThumbnail('https://media.discordapp.net/attachments/822321276085469184/862185931121492028/ZEUX.png?width=434&height=434')
        .setTimestamp ();

        const success = client.player.pause(message);

        if (success) message.channel.send(embed);
    },
};

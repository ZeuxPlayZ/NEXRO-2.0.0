const Discord = require("discord.js")
module.exports = {
    name: 'resume',
    aliases: ['re'],
    category: 'Music',
    utilisation: '{prefix}resume',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - You're not in a voice channel !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - You are not in the same voice channel !`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - No music currently playing !`);

        if (!client.player.getQueue(message).paused) return message.channel.send(`${client.emotes.error} - The music is already playing !`);

        const success = client.player.resume(message);

        const embed = new Discord.MessageEmbed()
        .setTitle (`**RESUMED**`)
        .setDescription (`${client.emotes.success} - Song ${client.player.getQueue(message).playing.title} RESUMED !`)
        .setColor ("#3498DB")
        .setFooter(`NEXRO`)
        .setThumbnail('https://media.discordapp.net/attachments/822321276085469184/862185931121492028/ZEUX.png?width=434&height=434')
        .setTimestamp ();

        if (success) message.channel.send(embed);
    },
};
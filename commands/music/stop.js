const Discord = require("discord.js")
module.exports = {
    name: 'stop',
    aliases: ['dc'],
    category: 'Music',
    utilisation: '{prefix}stop',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - You're not in a voice channel !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - You are not in the same voice channel !`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - No music currently playing !`);

        client.player.setRepeatMode(message, false);
        const success = client.player.stop(message);

        const embed = new Discord.MessageEmbed()
        .setTitle (`**STOPPED**`)
        .setDescription (`${client.emotes.success} - Music **stopped** into this server !`)
        .setColor ("#3498DB")
        .setFooter(`NEXRO`)
        .setThumbnail('https://media.discordapp.net/attachments/822321276085469184/862185931121492028/ZEUX.png?width=434&height=434')
        .setTimestamp ();

        if (success) message.channel.send(embed);
    },
};
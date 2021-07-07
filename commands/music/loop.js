const Discord = require("discord.js")
module.exports = {
    name: 'loop',
    aliases: ['lp', 'repeat'],
    category: 'Music',
    utilisation: '{prefix}loop',

    execute(client, message, args) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - You're not in a voice channel !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - You are not in the same voice channel !`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - No music currently playing !`);


        const embed1 = new Discord.MessageEmbed()
        .setTitle (`**LOOP DISABLED**`)
        .setDescription (`${client.emotes.music} **REPEAT MODE** IS DISABLED !,`)
        
        .setColor ("#3498DB")
        .setFooter(`NEXRO`)
        .setThumbnail('https://media.discordapp.net/attachments/822321276085469184/862185931121492028/ZEUX.png?width=434&height=434')
        .setTimestamp ();

        const embed2 = new Discord.MessageEmbed()
        .setTitle (`**LOOP (QUEUE) ENABLED**`)
        .setDescription (`${client.emotes.music} **THE CURRENT QUEUE** WILL REPEAT ENDLESSLY`)
        
        .setColor ("#3498DB")
        .setFooter(`NEXRO`)
        .setThumbnail('https://media.discordapp.net/attachments/822321276085469184/862185931121492028/ZEUX.png?width=434&height=434')
        .setTimestamp ();
        
        const embed3 = new Discord.MessageEmbed()
        .setTitle (`**LOOP (MUSIC) ENABLED**`)
        .setDescription (`${client.emotes.music} **THE CURRENT MUSIC** WILL REPEAT ENDLESSLY`)
    
        .setColor ("#3498DB")
        .setFooter(`NEXRO`)
        .setThumbnail('https://media.discordapp.net/attachments/822321276085469184/862185931121492028/ZEUX.png?width=434&height=434')
        .setTimestamp ();
        
        if (args.join(" ").toLowerCase() === 'queue') {
            if (client.player.getQueue(message).loopMode) {
                client.player.setLoopMode(message, false);
                return message.channel.send(embed1);
            } else {
                client.player.setLoopMode(message, true);
                return message.channel.send(embed2);
            };
        } else {
            if (client.player.getQueue(message).repeatMode) {
                client.player.setRepeatMode(message, false);
                return message.channel.send(embed1);
            } else {
                client.player.setRepeatMode(message, true);
                return message.channel.send(embed3);
            };
        };
    },
};
const Discord = require("discord.js")
module.exports = {
    name: 'filter',
    aliases: ['f'],
    category: 'Music',
    utilisation: '{prefix}filter [filter name]',

    execute(client, message, args) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - You're not in a voice channel !`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - You are not in the same voice channel !`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - No music currently playing !`);

        if (!args[0]) return message.channel.send(`${client.emotes.error} - Please specify a valid filter to enable or disable !`);

        const filterToUpdate = client.filters.find((x) => x.toLowerCase() === args[0].toLowerCase());

        if (!filterToUpdate) return message.channel.send(`${client.emotes.error} - This filter doesn't exist, try for example (8D, vibrato, pulsator...) !`);

        const filtersUpdated = {};

        filtersUpdated[filterToUpdate] = client.player.getQueue(message).filters[filterToUpdate] ? false : true;

        client.player.setFilters(message, filtersUpdated);

        const embed1 = new Discord.MessageEmbed()
        .setTitle (`**FILTERS UPDATED**`)
        .setDescription (`${client.emotes.music} **ADDED** the filter to the music,`)
        .addField(' Note : This may take a sec ' ,`**Current Filter:** ${filterToUpdate}`)
        .setColor ("#3498DB")
        .setFooter(`NEXRO`)
        .setThumbnail('https://media.discordapp.net/attachments/822321276085469184/862185931121492028/ZEUX.png?width=434&height=434')
        .setTimestamp ();

        const embed2 = new Discord.MessageEmbed()
        .setTitle (`**FILTER DISABLED**`)
        .setDescription (`${client.emotes.music} **DISABLED** the filter on the music`)
        .addField(' Note : This may take a sec ' ,`**REMOVED Filter:** ${filterToUpdate}`)
        .setColor ("#3498DB")
        .setFooter(`NEXRO`)
        .setThumbnail('https://media.discordapp.net/attachments/822321276085469184/862185931121492028/ZEUX.png?width=434&height=434')
        .setTimestamp ();
        if (filtersUpdated[filterToUpdate]) message.channel.send(embed1);
        else message.channel.send(embed2);
    },
};
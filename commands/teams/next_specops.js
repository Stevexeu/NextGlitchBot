const discord = require("discord.js");
module.exports = {
    name: 'specops',
    category: 'teams',
    description: 'specops',
    run: async (bot, message, args, guild) => {

        var botIcon = bot.user.displayAvatarURL;

        var botEmbed = new discord.MessageEmbed()
            .setTitle("[NEXT SPECOPS]")
            .setDescription(`    
            **Game:** League of Legends
            **Type:** Competitive
            **Organization:** NextGlitch - eSports
            **Team Name:** Next Specops
            
            If you are intrested in this team name.
            Then please click on the ✅ emoji to vote.
            `)
            .setThumbnail("https://cdn.discordapp.com/attachments/641704436657553419/808935643123286016/5.png")
            .setColor("#5a85f2")

        message.delete().catch(err => console.log(err));
        return message.channel.send(botEmbed);
    }
}

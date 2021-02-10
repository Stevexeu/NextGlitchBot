const discord = require("discord.js");
module.exports = {
    name: 'sky',
    category: 'teams',
    description: 'sky',
    run: async (bot, message, args, guild) => {

        var botIcon = bot.user.displayAvatarURL;

        var botEmbed = new discord.MessageEmbed()
            .setTitle("[NEXT SKY]")
            .setDescription(`    
            **Game:** League of Legends
            **Type:** Competitive
            **Organization:** NextGlitch - eSports
            **Team Name:** Next Sky
            
            If you are intrested in this team name.
            Then please click on the ✅ emoji to vote.
            `)
            .setThumbnail("https://cdn.discordapp.com/attachments/641704436657553419/808935644885155860/6.png")
            .setColor("#34cceb")

        message.delete().catch(err => console.log(err));
        return message.channel.send(botEmbed);
    }
}

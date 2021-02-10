const discord = require("discord.js");
module.exports = {
    name: 'order',
    category: 'teams',
    description: 'order',
    run: async (bot, message, args, guild) => {

        var botIcon = bot.user.displayAvatarURL;

        var botEmbed = new discord.MessageEmbed()
            .setTitle("[NEXT ORDER]")
            .setDescription(`    
            **Game:** League of Legends
            **Type:** Competitive
            **Organization:** NextGlitch - eSports
            **Team Name:** Next Order
            
            If you are intrested in this team name.
            Then please click on the ✅ emoji to vote.
            `)
            .setThumbnail("https://cdn.discordapp.com/attachments/721405053893607484/808912044824199168/elements-client-img-4.png")
            .setColor("#c379e8")

        message.delete().catch(err => console.log(err));
        return message.channel.send(botEmbed);
    }
}

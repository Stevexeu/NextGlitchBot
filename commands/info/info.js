const discord = require("discord.js");
module.exports = {
    name: 'i1',
    category: 'server',
    description: 'i1',
    run: async (bot, message, args, guild) => {

        var botIcon = bot.user.displayAvatarURL;

        var botEmbed = new discord.MessageEmbed()
            .setTitle("Information")
            .setDescription(`    
            **About us**
            Welcome to our discord. NextGlich is a returning org.
            We have experienced and active staff. This is one of the reason that we can manage to help you all out so well.
            Creating teams, Hosting events, and even some fun gaming stuff!
            We play a few games in here, 2 of them on a competitive level. (League of Legends) and (Valorant).
            We are also planning to host some cool tournaments for those games. 
            Everyone is welcome, every skill level and every one.
            If you have any questions, please go to the channel: create-ticket to make a ticket.
            We will try to help you out asap.

            **Invite link**
            IF you would like to game with your friends in here,
            Please feel free to invite them using the following link:
            https://discord.gg/wQd4ejD8r9

            **Website**
            visit our website to see some of our cool things.
            We have team pages, news updates, and alot of more cool addons displayed on our website.
            Also, if you want to sign up for a tournament, you will have to go to our site aswell.
            https://www.nextglitch.eu

            Also we have our cool custom made Discord bot.
            If you want a invite link, You can type:
            "invite link" in any chat. 
            `)
            .setColor("#f1b8ff")

        message.delete().catch(err => console.log(err));
        return message.channel.send(botEmbed);
    }
}

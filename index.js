﻿const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
                                                                         

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.categories = fs.readdirSync("./commands/");

["command", "event"].forEach(handler=> {

  require(`./handlers/${handler}`)(client);


});

client.on("message", (message) => {
  if (message.content.startsWith("i am banned")) {
    message.channel.send("That would be your own fault!");
  } else

  if (message.content.startsWith("I am banned")) {
    message.channel.send("That would be your own fault!");
  } 

  if (message.content.startsWith("I Am banned")) {
    message.channel.send("That would be your own fault!");
  }

  if (message.content.startsWith("I Am Banned")) {
    message.channel.send("That would be your own fault!");
  }

  if (message.content.startsWith("Good bot")) {
    message.channel.send("Prrrrrrr!");
  }

  if (message.content.startsWith("good bot")) {
    message.channel.send("Prrrrrrr!");
  }

  if (message.content.startsWith("Good Bot")) {
    message.channel.send("Prrrrrrr!");
  }

  if (message.content.startsWith("Bad bot")) {
    message.channel.send("Sorry papa!");
  }

  if (message.content.startsWith("bad bot")) {
    message.channel.send("Sorry papa!");
  }

  if (message.content.startsWith("Bad Bot")) {
    message.channel.send("Sorry papa!");
  }

  if (message.content.startsWith("join a team")) {
    message.channel.send("You can find the information about joining a team in: #join-a-team");
  }

  if (message.content.startsWith("Join a team")) {
    message.channel.send("You can find the information about joining a team in: #join-a-team");
  }

  if (message.content.startsWith("join A team")) {
    message.channel.send("You can find the information about joining a team in: #join-a-team");
  }

  if (message.content.startsWith("join a Team")) {
    message.channel.send("You can find the information about joining a team in: #join-a-team");
  }

  if (message.content.startsWith("invite link")) {
    message.channel.send("Here is a link to invite people: https://discord.gg/wQd4ejD8r9");
  }

  if (message.content.startsWith("Invite link")) {
    message.channel.send("Here is a link to invite people: https://discord.gg/wQd4ejD8r9");
  }

  if (message.content.startsWith("Invite Link")) {
    message.channel.send("Here is a link to invite people: https://discord.gg/wQd4ejD8r9");
  }
  
  if (message.content.startsWith("How do i join a team")) {
    message.channel.send("You can find this information in the chat named: join-a-team");
  }

  if (message.content.startsWith("how do i join a team")) {
    message.channel.send("You can find this information in the chat named: join-a-team");
  }

  if (message.content.startsWith("How do i join a Team")) {
    message.channel.send("You can find this information in the chat named: join-a-team");
  }

  if (message.content.startsWith("How do i join a team?")) {
    message.channel.send("You can find this information in the chat named: join-a-team");
  }

  if (message.content.startsWith("how do i join a team?")) {
    message.channel.send("You can find this information in the chat named: join-a-team");
  }

  if (message.content.startsWith("How do i join a team!")) {
    message.channel.send("You can find this information in the chat named: join-a-team");
  }

  if (message.content.startsWith("how do i join a team!")) {
    message.channel.send("You can find this information in the chat named: join-a-team");
  }
    client.user.setActivity('www.nextglitch.eu!', { type: 'PLAYING' });

});

client.login(process.env.token);

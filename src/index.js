const discord = require('discord.js');
const client = new discord.Client({
    intents: 32767
});
require('dotenv').config();
var token = process.env.token;

client.once('ready', async () => {
    console.log('logged in as ' + client.user.tag)
});

client.on('messageCreate', async message => {
       if(message.content.toLowerCase().startsWith('ping')) {
           message.reply('Pong!')
       }
});

client.login(token)

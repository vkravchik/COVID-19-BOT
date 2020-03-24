require('dotenv').config();

const { Client } = require('discord.js');
const client = new Client();

client.login(process.env.BOT_TOKEN).then(res => {
    console.info('Bot activated success');
}, err => {
    console.info(err);
});

const help = require('./modules/help.commands');
const covid = require('./modules/covid.statistic');
const fucks = require('./modules/fucked.user');

client.on('message', (msg) => {
    help(msg);
    covid(msg);
    fucks(msg);
});
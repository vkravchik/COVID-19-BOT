require('dotenv').config();


const { Client } = require('discord.js');
const client = new Client();
const rp = require('request-promise');
const cheerio = require('cheerio');
require('http').createServer((req, res) => {
    res.writeHead(200, {
        'Content-type': 'text/plain'
    });
        res.write('Hey');
        res.end();
    }).listen(4000);

const URL = process.env.COVID_URL;

client.login(process.env.BOT_TOKEN).then(res => {
    console.info(res);
}, err => {
    console.info(err);
});

client.on('message', (msg) => {
    // Uncomment code below if Roma pedik
    // if (msg.author.username === 'krampi') {
    //     msg.delete();
    // }
    if (msg.content === '!covid' || msg.content === '!covid-19') {
        msg.channel.send('Parsing info... Please wait!');

        let str = '';

        rp(URL).then(html => {
            const $ = cheerio.load(html);
    
            $(".maincounter-number span").each((i, el) => {
                if(i === 0) {
                    str += `At the moment we have ${el.children[0].data.replace(/\s/g,'')} cases around the world \n`;
                    console.log(str);
                } else if (i === 1) {
                    str += `Deaths: ${el.children[0].data} and `;
                    console.log(str);
                } else if (i === 2) {
                    str += `Recovered: ${el.children[0].data}`;
                    console.log(str);
                }
            })
            msg.reply(str);
        })
    }
});
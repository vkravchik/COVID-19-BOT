const rp = require('request-promise');
const cheerio = require('cheerio');

const URL = process.env.COVID_URL;

module.exports = (msg) => {
    if (msg.content === '!covid' || msg.content === '!covid-19') {
        msg.channel.send('Parsing info... Please wait!');

        let str = '';

        rp(URL).then(html => {
            const $ = cheerio.load(html);
    
            $(".maincounter-number span").each((i, el) => {
                if(i === 0) {
                    str += `At the moment we have ${el.children[0].data.replace(/\s/g,'')} cases around the world \n`;
                } else if (i === 1) {
                    str += `Deaths: ${el.children[0].data} and `;
                } else if (i === 2) {
                    str += `Recovered: ${el.children[0].data}`;
                }
            })
            msg.reply(str);
        })
    }
}
module.exports = (msg) => {
    if (msg.content === '!help') {
        msg.channel.send(`
            COVID Live statistic:
            \t!covid or !covid-19
        `)
    }
}
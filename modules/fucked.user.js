module.exports = (msg) => {
    if (msg.content.startsWith('!fucks')) {
        if (msg.member.roles.cache.some(el => (el.name === 'Batya' || el.name === 'God'))) {
            msg.mentions.users.forEach(el => {
                msg.channel.send(`Fuck u <@${el.id}>`);
            })
        } else {
            msg.reply(`Cu, U have a gread pi-pi`)
        }
    }
}
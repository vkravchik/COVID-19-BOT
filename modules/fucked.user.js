module.exports = (msg) => {
    if (msg.content.startsWith('!fucks')) {
        if (checkRole) {
            msg.mentions.users.forEach(el => {
                msg.channel.send(`Fuck u <@${el.id}>`);
            })
        }
    }
}

const checkRole = () => {
    return msg.member.roles.cache.some(el => (el.name === 'Batya' || el.name === 'God'));
}
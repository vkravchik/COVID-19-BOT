const { Permission } = require('../helpers/index');

module.exports = (msg) => {
    if (msg.content.startsWith('!fucks')) {
        if (Permission.isAdmin(msg)) {
            msg.mentions.users.forEach(el => {
                msg.channel.send(`Fuck u <@${el.id}>`);
            })
        } else {
            msg.reply(`Fuck U. U don't have permissions for fucked someone`)
        }
    }
}
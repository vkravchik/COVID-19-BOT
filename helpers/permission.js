module.exports.isAdmin = (msg) => {
    return msg.member.roles.cache.some(el => (el.name === 'Batya' || el.name === 'God'))
}
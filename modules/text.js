module.exports = function(message){
    if(message.channel.name === 'bot-channel')
    {
        if(message.content.charAt(0) !== '!' && !message.author.bot)
        {
            message.delete()
            .then(msg => console.log(`Deleted message from ${msg.author.username}`))
            .catch(console.error);
        }
    }
};
const Discord = require("discord.js")
const ms = require('ms')

module.exports = {
    name: "unmute",
    description: "permet de unmute un membre",
    permission: Discord.PermissionFlagsBits.ModerateMembers,
    dm: false,
    category: "Modération",
    options: [
        {
            type: "user",
            name: "membre",
            description: "Le membre à unmute",
            required: true,
            autocomplete: false
        },
        
        {
            type: "string",
            name: "raison",
            description: "La raison du unmute",
            required: false,
            autocomplete: false
        }
    ],

    async run(bot, message, args) {
        let user = args.getUser("membre")
        if (!user) return message.reply('Aucun membre existant !')
        let member = message.guild.members.cache.get(user.id)
        if (!member) return message.reply('Aucun membre existant !')
       

        let raison = args.getString("raison")
        if (!raison) raison = "Pas de raison particulière fournie !"
        
        if (member && !member?.moderatable) return message.reply("Je ne peux pas unmute ce membre")
        if (member && message.member.roles.highest.comparePositionTo(member.roles.highest) <= 0) return message.reply('Tu ne peux pas unmute cette personne')
        if (!member.isCommunicationDisabled()) return message.reply('Ce membre n\'est pas mute')

        try { await user.send(`Tu es unmute du serveur ${message.guild.name} par ${message.user.tag} pour la raison : \`${raison}\``) } catch (error) { }

        await member.timeout(null, raison)
        await message.reply(`${message.user} a unmute ${user.tag} pour la raison : \`${raison}\``)
    }
}
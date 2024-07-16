const Discord = require("discord.js")
const ms = require('ms')

module.exports = {
    name: "mute",
    description: "permet de mute un membre",
    permission: Discord.PermissionFlagsBits.ModerateMembers,
    dm: false,
    category: "Modération",
    options: [
        {
            type: "user",
            name: "membre",
            description: "Le membre à mute",
            required: true,
            autocomplete: false
        },
        {
            type: "string",
            name: "temps",
            description: "Le temps du mute",
            required: true,
            autocomplete: false
        },
        {
            type: "string",
            name: "raison",
            description: "La raison du mute",
            required: false,
            autocomplete: false
        }
    ],

    async run(bot, message, args) {
        let user = args.getUser("membre")
        if (!user) return message.reply('Aucun membre existant !')
        let member = message.guild.members.cache.get(user.id)
        if (!member) return message.reply('Aucun membre existant !')

        let time = args.getString("temps")
        if (!time) return message.reply('Aucun temps saisie !')
        if (isNaN(ms(time))) return message.reply('Le format du temps n\'est pas bon !')
        if (ms(time) > 86400000) return message.reply('Le mute ne peut point durer + de 28 jours !')

        let raison = args.getString("raison")
        if (!raison) raison = "Pas de raison particulière fournie !"

        if (message.user.id === user.id) return message.reply("Tu ne peux pas te mute !")
        if ((await message.guild.fetchOwner()).id === user.id) return message.reply('Tu ne peux pas mute le Owner !')
        if (member && !member?.moderatable) return message.reply("Je ne peux pas mute ce membre")
        if (member && message.member.roles.highest.comparePositionTo(member.roles.highest) <= 0) return message.reply('Tu ne peux pas mute cette personne')
        if (member.isCommunicationDisabled()) return message.reply('Ce membre est déjà mute')

        try { await user.send(`Tu es mute du serveur ${message.guild.name} par ${message.user.tag} pendant ${time} pour la raison : \`${raison}\``) } catch (error) { }

        await member.timeout(ms(time), raison)
        await message.reply(`${message.user} a mute ${user.tag} pendant ${time} pour la raison : \`${raison}\``)
    }
}
const Discord = require("discord.js")

module.exports = {
    name: "kick",
    description: "permet de kick un membre",
    permission: Discord.PermissionFlagsBits.KickMembers,
    dm: false,
    category: "Modération",
    options: [
        {
            type: "user",
            name: "membre",
            description: "Le membre à kick",
            required: true,
            autocomplete: false
        },
        {
            type: "string",
            name: "raison",
            description: "La raison du kick",
            required: false,
            autocomplete: false
        }
    ],

    async run(bot, message, args) {
        try {
            let user = await bot.users.fetch(args._hoistedOptions[0].value)
            if (!user) return message.reply("Aucun membre à kick")
            let member = message.guild.members.cache.get(user.id)

            let raison = args.get("raison").value
            if (!raison) raison = "Pas de raison particulière fournie !"

            if (message.user.id === user.id) return message.reply("Tu ne peux pas te kick !")
            if ((await message.guild.fetchOwner()).id === user.id) return message.reply('Tu ne peux pas kick le Owner !')
            if (member && !member?.kickable) return message.reply("Je ne peux pas kick ce membre")
            if (member && message.member.roles.highest.comparePositionTo(member.roles.highest) <= 0) return message.reply('Tu ne peux pas kick cette personne')

            try { await user.send(`Tu es kick du serveur ${message.guild.name} par ${message.user.tag} pour la raison : \`${raison}\``) } catch (error) { }

            await member.kick(raison)
            await message.reply(`${message.user} a kick ${user.tag} pour la raison : \`${raison}\``)
            

        } catch (error) {
            return message.reply("Aucun membre à kick ")
        }
    }
}
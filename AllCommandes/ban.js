const Discord = require("discord.js")

module.exports = {
    name: "ban",
    description: "permet de bannir un membre",
    permission: Discord.PermissionFlagsBits.BanMembers,
    dm: false,
    category: "Modération",
    options: [
        {
            type: "user",
            name: "membre",
            description: "Le membre à bannir",
            required: true,
            autocomplete: false
        },
        {
            type: "string",
            name: "raison",
            description: "La raison du bannissement",
            required: false,
            autocomplete: false
        }
    ],

    async run(bot, message, args) {
        try {
            let user = await bot.users.fetch(args._hoistedOptions[0].value)
            if (!user) return message.reply("Aucun membre à bannir")
            let member = message.guild.members.cache.get(user.id)

            let raison = args.get("raison").value
            if (!raison) raison = "Pas de raison particulière fournie !"

            if (message.user.id === user.id) return message.reply("Tu ne peux pas te bannir !")
            if ((await message.guild.fetchOwner()).id === user.id) return message.reply('Tu ne peux pas bannir le Owner !')
            if (member && !member?.bannable) return message.reply("Je ne peux pas bannir ce membre")
            if (member && message.member.roles.highest.comparePositionTo(member.roles.highest) <= 0) return message.reply('Tu ne peux pas bannir cette personne')
            if ((await message.guild.bans.fetch()).get(user.id)) return message.reply('Ce membre a été déjà ban !')

            try { await user.send(`Tu es ban du serveur ${message.guild.name} par ${message.user.tag} pour la raison : \`${raison}\``) } catch (error) { }

            await message.guild.bans.create(user.id, {reason: raison})
            await message.reply(`${message.user} a banni ${user.tag} pour la raison : \`${raison}\``)
            

        } catch (error) {
            return message.reply("Aucun membre à bannir ")
        }
    }
}
const Discord = require("discord.js")

module.exports = {
    name: "unban",
    description: "permet de unban un membre",
    permission: Discord.PermissionFlagsBits.BanMembers,
    dm: false,
    category: "Modération",
    options: [
        {
            type: "user",
            name: "membre",
            description: "Le membre à unban",
            required: true,
            autocomplete: false
        },
        {
            type: "string",
            name: "raison",
            description: "La raison du unban",
            required: false,
            autocomplete: false
        }
    ],

    async run(bot, message, args) {
        try {
            let user = await args.getUser('membre')
            if (!user) return message.reply("Aucun membre à bannir")

            let raison = args.getString('raison')
            if (!raison) raison = "Pas de raison particulière fournie !"

            if(!(await message.guild.bans.fetch()).get(user.id)) return message.reply("Le membre n'est pas ban !")
            
                

            try { await user.send(`Tu es unban du serveur ${message.guild.name} par ${message.user.tag} pour la raison : \`${raison}\``) } catch (error) { }

            await message.guild.members.unban(user, raison)
            await message.reply(`${message.user} a unban ${user.tag} pour la raison : \`${raison}\``)
            

        } catch (error) {
            return message.reply("Aucun membre à bannir ")
        }
    }
}
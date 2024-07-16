const fs = require('fs');
const path = require('path');
const Discord = require("discord.js");

module.exports = {
    name: "createcategorie",
    description: "permet de créer une catégorie sous un design choisi !",
    permission: Discord.PermissionFlagsBits.ManageGuild,
    dm: false,
    category: "Création-modération",
    options: [
        {
            type: "string",
            name: "nom",
            description: "Le nom de la catégorie a construire !",
            required: true,
            autocomplete: false
        }
    ],

    async run(bot, message, args) {
        const catname = args.getString('nom')
        if (!catname) return message.reply("Aucun nom pour la catégorie")

        let design;
        try {
            const cancelButton = new Discord.ButtonBuilder()
                .setLabel('Annuler')
                .setStyle(Discord.ButtonStyle.Danger)
                .setEmoji("❎")
                .setCustomId('cancelbutton');
            const chooseModelButton = new Discord.ButtonBuilder()
                .setLabel('Choisir le design')
                .setStyle(Discord.ButtonStyle.Primary)
                .setEmoji("🕵️")
                .setCustomId('choosemodel');

            const buttonRow = new Discord.ActionRowBuilder().addComponents(cancelButton, chooseModelButton);

            const embed = new Discord.EmbedBuilder()
                .setColor("Random")
                .setAuthor({ name: bot.user.tag, iconURL: bot.user.displayAvatarURL({ dynamic: true }) })
                .setTitle(`Modélisation de la catégorie ${catname} !`)
                .setDescription("Merci d'avoir choisi Structura Manager ! Configurons ensemble la catégorie !")
                .setTimestamp()
                .setImage("https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExdDJidGwxb3FpOGF5dDl1a2t5czN4dG8xM24wamlnd2xqaHZxampybCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/gFKG5o0ZngEhwnV6pP/giphy.gif");

            await message.reply({ embeds: [embed], components: [buttonRow] });

            const filter = (i) => i.user.id === message.user.id;
            const collector = message.channel.createMessageComponentCollector({ filter, time: 60000 });

            collector.on('collect', async interaction => {
                if (interaction.customId === 'choosemodel') {

                    const designpath = path.join(__dirname, '..', 'designs');
                    const designfiles = fs.readdirSync(designpath).filter(file => file.endsWith('.js'));
                    const selectMenu = new Discord.StringSelectMenuBuilder()
                        .setCustomId('selectDesign')
                        .setPlaceholder('Choisissez un design')
                        .addOptions(designfiles.map(file => {
                            const designName = path.basename(file, '.js');
                            return {
                                label: designName,
                                value: designName,
                            };
                        }));

                    const menuRow = new Discord.ActionRowBuilder().addComponents(selectMenu);
                    const embed = new Discord.EmbedBuilder()
                        .setColor("Random")
                        .setAuthor({ name: bot.user.tag, iconURL: bot.user.displayAvatarURL({ dynamic: true }) })
                        .setTitle("Choix du design !")
                        .setDescription("Le choix est primordial pour pouvoir créer votre catégorie !")
                        .setTimestamp()
                        .setImage("https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExdDJidGwxb3FpOGF5dDl1a2t5czN4dG8xM24wamlnd2xqaHZxampybCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/gFKG5o0ZngEhwnV6pP/giphy.gif");

                    await interaction.update({ embeds: [embed], components: [menuRow] });

                }  else if (interaction.customId === "selectDesign") {
                    design = interaction.values[0];

                    const embed = new Discord.EmbedBuilder()
                        .setColor("Random")
                        .setAuthor({ name: bot.user.tag, iconURL: bot.user.displayAvatarURL({ dynamic: true }) })
                        .setTitle("Préparation et configuration terminé ✅")
                        .setDescription("La configuration va commencer !")
                        .setTimestamp()
                        .setImage("https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExdDJidGwxb3FpOGF5dDl1a2t5czN4dG8xM24wamlnd2xqaHZxampybCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/gFKG5o0ZngEhwnV6pP/giphy.gif");

                    await interaction.update({ embeds: [embed], components: [] });

                    
                    const designPath = path.join(__dirname, '..', 'designs', `${design}.js`);
                    const designObj = require(designPath);
                    
                    await createCatego(catname, designObj, message.guild);

                } else if (interaction.customId === "cancelbutton") {
                    const embed = new Discord.EmbedBuilder()
                        .setColor("Random")
                        .setAuthor({ name: bot.user.tag, iconURL: bot.user.displayAvatarURL({ dynamic: true }) })
                        .setTitle("Préparation et configuration annulé !")
                        .setDescription("Vous avez annulé la configuration de la catégorie !")
                        .setTimestamp()
                        .setImage("https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExMmNuNmM0NXhneDAybW54OHZiZndkNTF6NHNmamJrcGlyNWg1MzV0aSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/chVgEkHr9oYz4ZPGeU/giphy.gif");
                    await interaction.update({ embeds: [embed], components: [] });
                }
            });
        } catch (error) {
            console.error(error);
            return message.reply("Une erreur est survenue !");
        }
    }
};



async function createCatego(name, design, guild) {
    
        const categoryName = design.nameTemplates.category.replace('{name}', name);
         await guild.channels.create({
            name: categoryName,
            type: Discord.ChannelType.GuildCategory
        });

        
        
    
}

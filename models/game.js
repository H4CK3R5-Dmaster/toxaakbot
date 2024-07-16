module.exports = {
    name: 'game',
    description: 'Modèle pour un serveur de jeu',
    categories: [
        {
            name: 'Informations',
            channels: [
                { type: 'text', name: 'announcements', options: { topic: 'Annonces importantes' } },
                { type: 'text', name: 'rules', options: { topic: 'Règles du serveur' } },
                { type: 'text', name: 'welcome', options: { topic: 'Bienvenue aux nouveaux membres' } },
            ]
        },
        {
            name: 'Général',
            channels: [
                { type: 'text', name: 'general-chat', options: { topic: 'Discussion générale' } },
                { type: 'text', name: 'introductions', options: { topic: 'Présentez-vous ici' } },
                { type: 'voice', name: 'General Voice' },
            ]
        },
        {
            name: 'Gaming',
            channels: [
                { type: 'text', name: 'game-discussion', options: { topic: 'Discussion sur les jeux' } },
                { type: 'text', name: 'game-updates', options: { topic: 'Mises à jour des jeux' } },
                { type: 'voice', name: 'Game Voice 1' },
                { type: 'voice', name: 'Game Voice 2' },
            ]
        },
        {
            name: 'Jeux Spécifiques',
            channels: [
                { type: 'text', name: 'game-1-chat', options: { topic: 'Discussion pour Jeu 1' } },
                { type: 'text', name: 'game-2-chat', options: { topic: 'Discussion pour Jeu 2' } },
                { type: 'voice', name: 'Game 1 Voice' },
                { type: 'voice', name: 'Game 2 Voice' },
            ]
        },
        {
            name: 'Équipe',
            channels: [
                { type: 'text', name: 'team-chat', options: { topic: 'Discussion de l\'équipe' } },
                { type: 'voice', name: 'Team Voice' },
            ]
        },
        {
            name: 'Clips et Médias',
            channels: [
                { type: 'text', name: 'clips', options: { topic: 'Partagez vos clips de jeu' } },
                { type: 'text', name: 'screenshots', options: { topic: 'Partagez vos captures d\'écran' } },
                { type: 'text', name: 'fan-art', options: { topic: 'Partagez vos créations artistiques' } },
            ]
        },
        {
            name: 'Support',
            channels: [
                { type: 'text', name: 'support', options: { topic: 'Obtenez de l\'aide ici' } },
                { type: 'text', name: 'faq', options: { topic: 'Questions fréquentes' } },
            ]
        },
        {
            name: 'Divers',
            channels: [
                { type: 'text', name: 'memes', options: { topic: 'Partagez vos memes' } },
                { type: 'text', name: 'off-topic', options: { topic: 'Discussion hors sujet' } },
            ]
        }
    ],
};

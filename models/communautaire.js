module.exports = {
    name: 'communautaire',
    description: 'Modèle pour un serveur communautaire',
    categories: [
        {
            name: 'Informations',
            channels: [
                { type: 'text', name: 'announcements', options: { topic: 'Annonces importantes' } },
                { type: 'text', name: 'rules', options: { topic: 'Règles du serveur' } },
                { type: 'text', name: 'welcome', options: { topic: 'Bienvenue aux nouveaux membres' } },
                { type: 'text', name: 'server-news', options: { topic: 'Nouvelles du serveur' } },
            ]
        },
        {
            name: 'Général',
            channels: [
                { type: 'text', name: 'general-chat', options: { topic: 'Discussion générale' } },
                { type: 'text', name: 'introductions', options: { topic: 'Présentez-vous ici' } },
                { type: 'text', name: 'suggestions', options: { topic: 'Proposez des idées pour améliorer le serveur' } },
                { type: 'voice', name: 'General Voice' },
            ]
        },
        {
            name: 'Discussions Thématiques',
            channels: [
                { type: 'text', name: 'technology', options: { topic: 'Discussion sur la technologie' } },
                { type: 'text', name: 'gaming', options: { topic: 'Discussion sur les jeux vidéo' } },
                { type: 'text', name: 'movies-and-tv', options: { topic: 'Discussion sur les films et séries TV' } },
                { type: 'text', name: 'music', options: { topic: 'Discussion sur la musique' } },
                { type: 'text', name: 'books', options: { topic: 'Discussion sur les livres' } },
                { type: 'text', name: 'art', options: { topic: 'Partagez et discutez d\'art' } },
            ]
        },
        {
            name: 'Canaux Vocaux',
            channels: [
                { type: 'voice', name: 'Chat Général' },
                { type: 'voice', name: 'Gaming' },
                { type: 'voice', name: 'Musique' },
                { type: 'voice', name: 'Films et TV' },
            ]
        },
        {
            name: 'Activités de la Communauté',
            channels: [
                { type: 'text', name: 'events', options: { topic: 'Annonces et organisation d\'événements' } },
                { type: 'text', name: 'contests', options: { topic: 'Concours et compétitions' } },
                { type: 'text', name: 'collabs', options: { topic: 'Collaborations entre membres' } },
                { type: 'voice', name: 'Event Voice' },
            ]
        },
        {
            name: 'Créations des Membres',
            channels: [
                { type: 'text', name: 'fan-art', options: { topic: 'Partagez vos créations artistiques' } },
                { type: 'text', name: 'writing', options: { topic: 'Partagez vos écrits' } },
                { type: 'text', name: 'photography', options: { topic: 'Partagez vos photographies' } },
            ]
        },
        {
            name: 'Support et Aide',
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

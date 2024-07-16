module.exports = {
    name: 'projets-informatique',
    description: 'Modèle pour un serveur dédié aux projets informatiques',
    categories: [
        {
            name: 'Informations',
            channels: [
                { type: 'text', name: 'announcements', options: { topic: 'Annonces importantes' } },
                { type: 'text', name: 'rules', options: { topic: 'Règles du serveur' } },
                { type: 'text', name: 'welcome', options: { topic: 'Bienvenue aux nouveaux membres' } },
                { type: 'text', name: 'news', options: { topic: 'Nouvelles et mises à jour' } },
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
            name: 'Projets',
            channels: [
                { type: 'text', name: 'project-ideas', options: { topic: 'Idées de projets' } },
                { type: 'text', name: 'current-projects', options: { topic: 'Projets en cours' } },
                { type: 'text', name: 'completed-projects', options: { topic: 'Projets terminés' } },
                { type: 'voice', name: 'Project Voice' },
            ]
        },
        {
            name: 'Développement',
            channels: [
                { type: 'text', name: 'coding-help', options: { topic: 'Aide à la programmation' } },
                { type: 'text', name: 'code-reviews', options: { topic: 'Revue de code' } },
                { type: 'text', name: 'development-tips', options: { topic: 'Astuces de développement' } },
                { type: 'voice', name: 'Dev Voice' },
            ]
        },
        {
            name: 'Technologies',
            channels: [
                { type: 'text', name: 'frontend', options: { topic: 'Discussion sur le développement front-end' } },
                { type: 'text', name: 'backend', options: { topic: 'Discussion sur le développement back-end' } },
                { type: 'text', name: 'database', options: { topic: 'Discussion sur les bases de données' } },
                { type: 'text', name: 'devops', options: { topic: 'Discussion sur le DevOps' } },
            ]
        },
        {
            name: 'Ressources',
            channels: [
                { type: 'text', name: 'shared-code', options: { topic: 'Partage de fragments de code' } },
                { type: 'text', name: 'learning-resources', options: { topic: 'Ressources d\'apprentissage' } },
                { type: 'text', name: 'useful-links', options: { topic: 'Liens utiles pour le développement' } },
            ]
        },
        {
            name: 'Collaborations',
            channels: [
                { type: 'text', name: 'team-formation', options: { topic: 'Formation des équipes' } },
                { type: 'text', name: 'collab-projects', options: { topic: 'Projets collaboratifs' } },
                { type: 'voice', name: 'Collab Voice 1' },
                { type: 'voice', name: 'Collab Voice 2' },
            ]
        },
        {
            name: 'Détente',
            channels: [
                { type: 'text', name: 'off-topic', options: { topic: 'Discussion hors sujet' } },
                { type: 'text', name: 'memes', options: { topic: 'Partage de memes et d\'humour' } },
                { type: 'text', name: 'tech-news', options: { topic: 'Actualités technologiques' } },
                { type: 'voice', name: 'Chill Voice' },
            ]
        }
    ],
};

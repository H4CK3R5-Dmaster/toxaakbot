module.exports = {
    name: 'etudes',
    description: 'Modèle pour un serveur dédié aux études',
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
            name: 'Cours',
            channels: [
                { type: 'text', name: 'homework-help', options: { topic: 'Aide aux devoirs' } },
                { type: 'text', name: 'study-tips', options: { topic: 'Astuces pour étudier' } },
                { type: 'text', name: 'exam-preparation', options: { topic: 'Préparation aux examens' } },
                { type: 'voice', name: 'Study Group' },
            ]
        },
        {
            name: 'Discussions par Matière',
            channels: [
                { type: 'text', name: 'math', options: { topic: 'Discussion sur les mathématiques' } },
                { type: 'text', name: 'science', options: { topic: 'Discussion sur les sciences' } },
                { type: 'text', name: 'literature', options: { topic: 'Discussion sur la littérature' } },
                { type: 'text', name: 'history', options: { topic: 'Discussion sur l\'histoire' } },
                { type: 'text', name: 'languages', options: { topic: 'Discussion sur les langues étrangères' } },
            ]
        },
        {
            name: 'Ressources d\'Étude',
            channels: [
                { type: 'text', name: 'shared-notes', options: { topic: 'Partage de notes de cours' } },
                { type: 'text', name: 'study-resources', options: { topic: 'Ressources pour étudier' } },
                { type: 'text', name: 'useful-links', options: { topic: 'Liens utiles pour les études' } },
            ]
        },
        {
            name: 'Sessions de Révision',
            channels: [
                { type: 'text', name: 'revision-schedule', options: { topic: 'Planning des sessions de révision' } },
                { type: 'voice', name: 'Revision Voice 1' },
                { type: 'voice', name: 'Revision Voice 2' },
            ]
        },
        {
            name: 'Projets et Groupes de Travail',
            channels: [
                { type: 'text', name: 'project-ideas', options: { topic: 'Idées de projets' } },
                { type: 'text', name: 'group-projects', options: { topic: 'Organisation de projets de groupe' } },
                { type: 'voice', name: 'Group Work 1' },
                { type: 'voice', name: 'Group Work 2' },
            ]
        },
        {
            name: 'Détente',
            channels: [
                { type: 'text', name: 'off-topic', options: { topic: 'Discussion hors sujet' } },
                { type: 'text', name: 'memes', options: { topic: 'Partage de memes et d\'humour' } },
                { type: 'text', name: 'hobbies', options: { topic: 'Discussion sur les hobbies et les loisirs' } },
                { type: 'voice', name: 'Chill Voice' },
            ]
        }
    ],
};

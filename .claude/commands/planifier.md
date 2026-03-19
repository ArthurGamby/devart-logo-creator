Lis le ticket Linear "$ARGUMENTS" et génère un plan de développement structuré.

**Étapes :**

1. Récupère le ticket Linear via l'outil MCP `linear-server` (`get_issue` avec l'ID "$ARGUMENTS")
2. Analyse le ticket : titre, description, critères d'acceptation
3. Explore les fichiers du projet pertinents pour comprendre le contexte technique
4. Produis un plan structuré :
   - **Résumé** : ce que la tâche accomplit en une phrase
   - **Fichiers à créer ou modifier** : liste des fichiers concernés
   - **Étapes de développement** : ordonnées, actionnables
   - **Points d'attention** : risques, dépendances, cas limites

Présente le plan clairement en français. Une fois validé, l'utilisateur pourra lancer `/coder` pour démarrer le développement.

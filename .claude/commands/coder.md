Démarre le développement en te basant sur le plan établi lors de `/planifier`.

**Étapes :**

1. `git pull origin main` — synchronise avec la branche principale
2. Détermine le numéro de ticket et le nom de la feature depuis le contexte de la conversation (ou demande à l'utilisateur si absent)
3. Crée et checkout une nouvelle branche au format : `DEV-XXXX-nom-de-la-feature` (kebab-case, sans accents, sans caractères spéciaux)
4. Développe la fonctionnalité selon le plan : crée ou modifie les fichiers nécessaires
5. Lance le lint : `npm run lint` — corrige les erreurs si nécessaire
6. **Demande explicitement à l'utilisateur de vérifier manuellement le rendu avant de continuer**

⚠️ Ne passe pas à l'étape suivante sans la validation explicite de l'utilisateur. Une fois validé, l'utilisateur pourra lancer `/pr` pour créer la Pull Request.

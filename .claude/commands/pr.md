Commit, push et crée une Pull Request GitHub à partir du travail en cours.

**Étapes :**

1. `git status` — vérifie les fichiers modifiés
2. `git add` sur les fichiers concernés (jamais `git add .` à l'aveugle)
3. Commit avec message conventionnel : `feat(DEV-XXXX): description courte en anglais`
4. `git push -u origin <branche-courante>`
5. Crée une Pull Request **Draft** via l'outil MCP `github` (`create_pull_request`) avec :
   - **Titre** : `[DEV-XXXX] Description courte de la feature`
   - **Base** : `main`
   - **Body** : utilise de **vrais sauts de ligne** dans la chaîne (jamais de `\n` littéraux échappés) — structure :

```
## Context

Closes [DEV-XXXX](lien_linear) — description de la tâche en une phrase.

## Changes

- Point 1
- Point 2
- Point 3

## Checklist

- [ ] Item 1
- [ ] Item 2
- [ ] Tests
- [ ] Vérification rendu desktop
```

6. Partage le lien de la PR créée

⚠️ Important : passe le body comme une chaîne avec de vrais retours à la ligne, pas des séquences `\n` échappées — sinon GitHub affiche le texte brut. Une fois la PR créée, l'utilisateur pourra lancer `/notifier` pour prévenir l'équipe.

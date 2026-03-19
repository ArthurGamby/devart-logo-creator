Envoie un message Slack à l'équipe pour annoncer la nouvelle Pull Request.

**Étapes :**

1. Récupère depuis le contexte de la conversation : titre de la feature, lien PR GitHub, lien ticket Linear, 2-3 points résumant les changements
2. Cherche le canal Slack de l'équipe via `slack_search_channels` (cherche "dev", "team", "engineering" ou similaire) — ne pas envoyer en DM
3. Envoie le message dans le canal équipe avec ce format exact (en anglais) :

---
Hi Team ! New PR about : [titre court de la feature]

• [changement principal 1]
• [changement principal 2]
• [changement principal 3 si pertinent]

PR :point_right: [lien PR GitHub]
Linear issue :point_right: [lien ticket Linear]
---

**Règles du message :**
- Court et professionnel
- En anglais
- 2 à 3 bullet points maximum
- Pas de markdown complexe, pas d'emojis excessifs
- Pas de headers (##), pas de séparateurs (---)

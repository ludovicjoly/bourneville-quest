# Bourneville Quest - Jeu de piste

Site statique pour jouer au jeu de piste depuis un téléphone ou un ordinateur.

## Fonctionnement

- Le parcours comporte 7 étapes.
- Les réponses, les étapes complétées et le message final sont sauvegardés dans le navigateur.
- La sauvegarde utilise `localStorage`, donc elle reste sur le même appareil et le même navigateur.
- Aucun compte, serveur ou base de données n'est nécessaire.

## Publication GitHub Pages

1. Créer un dépôt GitHub, par exemple `bourneville-quest`.
2. Pousser ce dossier sur la branche principale du dépôt.
3. Dans GitHub, ouvrir `Settings > Pages`.
4. Choisir `Deploy from a branch`.
5. Sélectionner la branche principale et le dossier `/root`.
6. Enregistrer.

Le site sera publié à une adresse du type :

`https://ludovicjoly.github.io/bourneville-quest/`

## Fréquentation

GitHub Traffic mesure surtout les visites du dépôt GitHub, pas les joueurs sur GitHub Pages.

Le site charge GoatCounter sur `ludovicjoly.github.io` avec le code `bourneville-quest`. Créer un site GoatCounter avec ce code pour activer les statistiques :

`https://bourneville-quest.goatcounter.com`

Les paramètres d'URL comme `?v=...` et `?admin=true` sont ignorés dans le chemin envoyé à GoatCounter afin de regrouper les visites sur une seule page.

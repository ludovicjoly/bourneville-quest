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

## Historique de fréquentation

Le workflow `Archive GitHub traffic` récupère chaque soir les statistiques GitHub Traffic des 14 derniers jours et les fusionne dans `data/github-traffic-history.json`.

Le fichier conserve les vues et visiteurs uniques par jour au-delà de la limite de 14 jours de GitHub. GitHub n'autorise pas le token automatique des Actions à lire ces statistiques : créer un secret GitHub `TRAFFIC_TOKEN` avec un token personnel finement limité au dépôt et la permission `Administration: read`.

Une page de lecture simple est disponible à l'adresse `/traffic.html`.

## Fréquentation réelle du jeu

GitHub Traffic mesure surtout les visites du dépôt GitHub, pas les joueurs sur GitHub Pages.

Le site charge GoatCounter sur `ludovicjoly.github.io` avec le code `bourneville-quest`. Créer un site GoatCounter avec ce code pour activer les statistiques :

`https://bourneville-quest.goatcounter.com`

Les paramètres d'URL comme `?v=...` et `?admin=true` sont ignorés dans le chemin envoyé à GoatCounter afin de regrouper les visites sur une seule page.

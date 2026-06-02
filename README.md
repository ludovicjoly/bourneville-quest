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

Le fichier conserve les vues et visiteurs uniques par jour au-delà de la limite de 14 jours de GitHub. Si le workflow échoue avec une erreur d'autorisation, créer un secret GitHub `TRAFFIC_TOKEN` avec un token personnel ayant accès en lecture aux statistiques du dépôt.

Une page de lecture simple est disponible à l'adresse `/traffic.html`.

# uca-quality-tools-project

Projet web sur les Outils de Dev

### Groupe

- Julien REYNAUD
- Esteban VIGOUROUX
- Adrien WYRWAL
- Mathis BÉAL

## Avant tout

Lancer cette commande :

```shell
npm install
```

## Mise en place de commitlint et Husky

### commitlint

Ce package permet de vérifier le respect de règles dans le message d'un commit.
Pour tester sur du texte directement, on peut executer :

```shell
echo "<message de commit>" | npx commitlint;
```

Pour le tester sur le contenu d'un fichier, on execute :

```shell
npx commitlint --edit <chemin vers le fichier>;
```

Pour tester, on peut lancer le script [`test_commitlint.ps1`](test_commitlint.ps1)

### Avec Husky

Husky utilise les hooks de git, on utilise alors `commit-msg` pour lancer une vérification sur `./.git/COMMIT_EDITMSG`, qui contient notre message de commit avant de le créer dans l'arborescence git.

## Prettier

### Mise en place

On ajoute le package Prettier au projet en tant que dependance de dev, puis on lui crée ses fichier de config (`.prettierrc.yaml` et `.prettierignore`).

### Formattage OnSave

Pour mettre en place le formattage automatique dans VS Code :

1. On installe l'extension [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
1. On ouvre les paramètres
1. On va dans Text Editor>Formatting
1. On coche "Format On Save"

Et c'est opérationnel !

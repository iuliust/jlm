# Jlm

Voici mon idée : Et s'il y avait une nouvelle façon de débattre de la politique ? D'imaginer les programmes politiques ? De les construire... Ensemble ?

Voici donc mon idée (géniale, comme d'habitude) : D'abord, on corrige toutes les fautes de frappe en crowd-sourcing. Puis on ajoute, on amende tout ce que l'on souhaite et les diffs sont votés. Faites-en ce que vous voulez. Bref, prenez le pouvoir... Pour de vrai ! Stop complaining and start DOING something, 4 the LULZ. #onVautMieuxQueÇa

Le programme politique se trouve dans `src/assets/programme`. Je l'ai entièrement retranscrit en documents HTML. Ces derniers sont en fait réutilisables comme des templates pour être insérés dans une application angular2. Par la suite, je compte ajouter des métadonnées aux propositions pour qu'on puisse les consulter de façon non-linéaire, faire du fact-checking, chiffrer les mesures, ajouter des liens vers des articles de journaux, des études, des vidéos, bref, plein de trucs pour que les gens puissent se dire «bon sang, mais en fait, c'est possible...» (ou pas, le cas échéant), mais bref, plutôt que de s'y opposer, si vous n'êtes pas d'accord, n'est-il pas plus constructif d'expliquer son point de vue ? Je pense que tant que les gens sont capables de se mettre d'accord sur la couleur du ciel, ils sont capables de trouver un terrain d'entente.

Le meilleur moyen de savoir si nos idées sont justes, ce n'est pas d'en discuter entre gens convaincus, mais c'est de les confronter avec celles des autres. C'est une part essentielle de la pensée scientifique et de la zététique et je crois sincèrement que ce principe presque philosophique est applicable à la vie de tous les jours, et encore plus à la politique. Changer d'avis, c'est génial. Êtes-vous le même que celui (ou celle) que vous étiez il y a dix ans ? Et s'il y a des choses sur lesquelles votre opinion a changé, n'êtes-vous pas heureux d'avoir changé d'avis ? Si tel est le cas, nous devrions tous être impatients de nous rendre compte que nous nous sommes égarés sur certains points. Gardez l'esprit ouvert. Car c'est ça, être jeune.

Cordialement,
iuliust

## À destination des développeurs.

Attention, quand j'installe les dépendances avec `yarn install`, la compilation Ahead-of-Time ne fonctionne pas et rencontre des problèmes divers.
En revanche, quand j'installe les dépendances avec `npm install`, cette dernière fonctionne sans poser de problème.

Pour lancer le serveur : `ng serve`

Pour tester le site sur une autre machine que la votre, lancez le serveur avec : `ng serve --host=0.0.0.0`

Enfin, sachez qu'il faut lancer le serveur avec l'option --ssl pour pouvoir tester les fonctionnalités d'enregistrement audio/video :
`ng serve --ssl`, ou encore `ng serve --host=0.0.0.0 --ssl`.
Votre navigateur affichera un message d'avertissement sur le certificat auto-signé, choisissez de passer outre l'avertissement.

L'autre but de ce site est de mettre en avant la pile technologique la plus moderne possible. C'est une véritable défi.
Voici la pile que j'espère réussir à implémenter :
côté front :
- [x] Angular2 pour le framework front-end
- [ ] Angular2 a11y (accessibility) pour que le site soit un modèle d'accessibilité, parce qu'il est toujours important de ne pas oublier nos amis malvoyants... Tout le monde n'a pas la chance d'avoir des yeux qui fonctionnent.
- [ ] Angular2 i18n (internationnalization) pour que l'interface du site soit également disponible en anglais, voire d'autres langages que je sais parler (allemand, italien...)
- [ ] Angular2/platform-webworker // angular-cli n'intègre pas encore cette fonctionnalité
- [x] Ahead-of-Time compilation
- [x] ngrx/store pour gérer tous les états de l'application
- [ ] ngrx/db (si besoin, et si ils font une doc)
- [x] Material Design pour... bah, le design, évidemment !
- [ ] PWA (Progressive Web App) // à étudier
- [ ] utiliser les ServiceWorker
- [ ] images responsives
- [ ] getUserMedia (ou la nouvelle spec, mais je ne l'ai pas encore étudiée)
- [ ] Le site pourrait utiliser un système de notifications
- [ ] Le site pourrait s'adapter à la luminosité ambiante (histoire de rigoler un coup) // mal géré par Chrome pour l'instant
- [ ] utiliser le client GraphQL pour limiter les échanges client/serveur
- [ ] JWT (une intégration avec Auth0 ?)
- [ ] Peut-être utiliser NativeScript pour déployer l'application sur le Play Store, Windows Universal, Linux, OSX, Windows, etc...


côté backend :
- [ ] Meteor
- [ ] Apollo Stack
- [ ] GraphQL (normal, quoi !)
- [ ] quasi-impérativement utiliser Angular Universal
- [ ] HTTP2 (ce qui rend un peu inutiles certaines optimisations des assets)
- [ ] Redis, mongo ou autre un SGDB de style NoSQL, quoique ce n'est pas forcément nécessaire

idéalement, il serait intéressant de mettre en place un environnement d'intégration continue avec Travis CI ou autre, plus Docker etc...

pour mettre à jour la console de développement, la commande qui colle le mieux au projet est :

`ng init --prefix=jlm --style=scss --name=jlm-front`

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.17.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/). Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to Github Pages

Run `ng github-pages:deploy` to deploy to Github Pages.

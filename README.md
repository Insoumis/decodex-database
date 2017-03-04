# decodex-database
Base de données du decodex insoumis.

## Contribuer
Pour contribuer, demander les droits d'accès à [la base de données (google sheets)](https://docs.google.com/spreadsheets/d/1WJ1c9y8hHECdkVbBYULGR8XWrCv9YRtw2LoCM6LCAew/edit#gid=0)

 * Remplir en priorité les sites mieux notés par décodex (colonne note originelle, mieux = 4 puis 3 etc.)
 * Propriétaires : [Organigramme du Monde Diplomatique http://www.monde-diplomatique.fr/cartes/ppa](http://www.monde-diplomatique.fr/cartes/ppa)
 * **Aides à la presse** : 
   * Prendre comme unique source la suivante : [Aides à la presse 2015](http://www.culturecommunication.gouv.fr/content/download/149093/1595779/version/1/file/2016.09.30%20-%20Tableau%20des%20titres%20aid%C3%A9s%20en%202015.pdf)
   * Remplir le tableur avec comme donnée du PDF la colonne "Total des aides individuelles" (à droite)
 * Exemples d'influence : faire une recherche avec le nom du journal sur [Acrimed](http://acrimed.org)
 * Notation 
   

Code | Couleur | Description | Critères
------------ | ------------- | ------------- | -------------
0 | `gris  #A2A9AE`  | NSPP | Aucune information connue ou suffisamment fiable pour se prononcer / impossible de statuer;
1 | `rouge #F5A725`  | Complètement soumis | Possédé par l'état ou grands groupes industriels/financiers ou de grande fortunes, ou subventions > `1 000 000 €`.
2 | `jaune #D50303`  | Plutôt soumis | Pas vert, pas bleu. Quelques liens avec des grands groupes Subventions < `1 000 000 €`. 
3 | `bleu #129AF0` | Plutôt insoumis | Appartient à ses rédacteurs ET subventions < `200 000 €` / an
4 | `vert #468847` | Insoumis | Appartient à ses rédacteurs ET Pas de publicité ET Subventions < `20 000 €` / an

 Exemples :
 
 Nom | Description | Propriétaire | Intérets | Exemples d'influence | Subventions annuelles | Sources | Note | Note decodex | Adresses
 ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------ | ------
Direct matin | Un quotidien gratuit et site Internet d'information généraliste qui appartient au groupe de médias de Vincent Bolloré, également propriétaire de Canal. | Groupe Bolloré (10 milliards €) | Industrie des transports et de l'énergie, dépend de marché public (ex: autolib) | Auto-promotion d'autolib. |  13770 | http://www.acrimed.org/Direct-Matin-Autolib-et-Bollore-une-annee-d-autopromotion, http://www.acrimed.org/Direct-Matin-traque-les-chomeurs-a-7-000-euros-mensuels, http://www.acrimed.org/Direct-matin-reecrit-l-histoire-et-oublie-que  | 1 | 4 | directmatin.fr


## Description

Cette extension est idéale pour compléter l'extension très pratique «décodex»
des décodeurs du monde.

Le decodex indique la fiabilité (selon les journalistes de Le Monde / Les
Décodeurs) / Les Décodeurs) d'un site internet. Plus un site aura (dans le
passé ou le présent) indiqué de fausses informations, plus celui ci aura une
mauvaise note invitant le visiteur à vérifier les informations sur d'autres
source.

Nous fournissons son complément essentiel : le décodex insoumis, afin de
mettre en avant les puissances financières ou politique derrière un site que
vous visitez. Cela ne veut pas dire que les informations que vous y lirez sont
fausses ou incorrecte, mais peuvent influencer la ligne éditoriale générale du
site, ainsi que la présentation des informations.

Attention ! Un site indépendant n'est pas forcément plus fiable qu'un site
soumis à de grande fortune ou des capitaux financiers. Cela ne signifie pas
non plus que tous les journalistes d'un média sont forcément soumis à la
finance, corrompu, etc… . Gardez à l'esprit que la plupart des journalistes
ont une certaine éthique et une déontologique, et qu'un article partisant
n'est pas représentatif de toute la profession.

Attention aussi à ne pas tomber dans les théories complotistes du «tous
pourri» ! Si vous remarquez une information manifestement erronée ou partisane,
il est de bon ton d'appliquer <a
href="https://fr.wikipedia.org/wiki/Rasoir_d'Hanlon">le rasoir d'Hanlon</a>
qui invite à «Ne jamais attribuer à la malveillance ce que la stupidité ou
l'incompétence suffit à expliquer». Autrement dit, si un journaliste se
trompe, il est plus probable que ce soit une <a
href="https://fr.wiktionary.org/wiki/autocensure">auto-censure</a>
inconsciente ou un <a
href="https://fr.wikipedia.org/wiki/Biais_de_confirmation">biais de
confirmation</a>, qu'une réelle volontée de désinformer.


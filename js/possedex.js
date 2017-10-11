/***** constants and variables *****/
let col_note_decodex  = 0;
let col_desc          = 1;
let col_nom           = 2;
let col_slug          = 3;
let col_note_insoumis = 4;
let col_pub           = 5;
let col_subventions   = 6;
let col_sources       = 7;

let col_proprietaire1 =  8;
let col_fortune1      =  9;
let col_marque1       = 10;
let col_influence1    = 11;

let col_proprietaire2 = 12;
let col_fortune2      = 13;
let col_marque2       = 14;
let col_influence2    = 15;

let col_proprietaire3 = 16;
let col_fortune3      = 17;
let col_marque3       = 18;
let col_influence3    = 19;

let messages = [
    // gris
    //"Nous n'avons pas encore évalué ce média selon nos critères, ou nous n'avons pas pu trouver d'information suffisamment fiable pour l'indiquer.",
    "non classé",
    // rouge
    //"Selon les critères retenus, ce média n'est pas indépendant. Cette catégorie regroupe les médias appartenant a de grands groupes industriels ou puissance financières qui peuvent influencer le traitement de l'information ou la ligne éditoriale. Quoi qu'il en soit, nous vous conseillons de chercher une ou plusieurs source alternative à l'information que vous lisez, voir opposée, en particulier si cette presse confirme vos idées.en particulier si cette presse confirme vos idées.",
    "Ce média est contrôlé par un ou plusieurs groupes d'intérêts industriels, financiers, ou de presse.",
    // jaune
    "Ce média est contrôlé par un ou plusieurs états",
    //"Selon les critères retenus, ce média n'est pas vraiment indépendant. Cette catégorie regroupe les médias gérés par l'état français ou un état étranger. Ce type de média est en général moins soumis aux sphères financières, mais cela ne veut pas dire qu'il ne faut pas chercher une ou plusieurs source alternative à l'information que vous lisez, en particulier si cette presse confirme la version officielle de l'état concerné.",
    // bleu
    "????",
    // vert
    "Indépendant des états et des marchés financiers",
    //"Selon les critères retenus, ce média est insoumis, indépendant ! Il appartient en majorité à ses rédacteurs (et/ou abonnés) et ne fait pas ou très peu de recettes publicitaires ! Ces médias bénéficient en général d'assez peu de subventions publicitaires. L'indépendance éditoriale est nécessaire pour une information de qualité. Merci à eux, et merci à vous de les lire ! N'hésitez pas à comparer le traitement de l'information qu'en fait un autre média, plus soumis à l'oligarchie ou au capital… vous pourriez être surpris !",
    // insoumis !
    "Hé hé, on va pas vous mentir hein : Vous êtes sur un site clairement partisan des Insoumis ! Donc de notre point de vue, c'est un chouette site, vous pouvez lire tout ce que vous y trouvez, et comparer les informations avec des sites un peu plus soumis à l'oligarchie pour voir la différence de traitement !"
];
let icones = [
    // gris
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAH1SURBVHjapNRLiM5hFMfxz5jXzMLKYhYsXCaXIsMkt+xGWYwlRhxKaoopY2M2ysLGwrBhIRuXzEOTDCVlZTVNUSgbSkLJJZeUjcZlbJ63Hn/vzChnc57b+Z7fczlP08TEhEaWUurADnRhPh5hb0R8MIXVGoBacQL70VJMzcFq3JkK2FQqTCnNwjC25KG3aMuJX2N5Vrwb7fiMixExVGfMqCQ4XsBOZpU1/EAfjuIGtqITm3A5pXTwL2BKaWUOgrMRMYDbOJRVrcfh+jy2YST3B1NKK6oK9xRbOwIR8TMiTuMlBvK6UxHRFxHXsRMP0Zp38wdwY/Y3I+JL5Sj6MRNvcKw+GBHjuFLGl8D27J9Wbr2G7iLZ10qyF9nPrQKbs/9eCViIxbk90uCl1OMmqsB3xXsrrTNv9wseNwAuKeNL4Gj23ZWANcXWPlaOoxnbc/d+FTiUZa9NKfUW4wuyfx4R1Trtw0r8woU/gBExmqsEzqSUenK7rQ6sqAsM1sVExFijWu7HMnRgOKW0GYvy3KeUUgs24ED+OOBefvx/13LOPC/L76oke4VvWFqM3UJvRLyfFFgc9r6sZBWaiulxPMC5iLg05W/TAFzDWL7pazifL+fZP31fk0CH0YOrEbHLNDbD9PYk+3X5Uv4beDd/pDXMnm7x7wEA2Vudl/vKGmcAAAAASUVORK5CYII=',
    // rouge
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAIESURBVHjapNRLiI9RGMfxz5g/FlYWFizcciliSO9BdqMsWLwLt4SSUkwZGzbKwsbCZcNCNi6RmmQ4SVlZSXnfUDaUhJJLLk3ZiGFszr+Od/7+Fs7mObfn+/zO5Xl6xsbGdGpVWSzFVvRjFh5jV4j1R11aqwNoMo5jLyZlS9OxAne6AXtyhVVZTMEQNqSpd5iWAr/B4qR4B+biCy6GWF9pMyY0AhzLYCeTyhZGMYAjuIGNWI61uFyVxf5xwKos+pITnA2xPoTbOJBUrcLB9jo2YTiNT1RlsaSpcGd2tMMQYv0zxPo0XuFQ2ncqxHogxPo6tuERJqfT/AFck+zNEOuRxlUMYiLe4mh7MsT6O67m/jlwbrLPGq/ewvos2NdGsJfJzmgCe5P90XCYg/mpP9zhp7T9xprA99l/y9vydNwRPOkAXJD758B7ya5vOBTZ0T41rqMXm9vDJvBKkh2qstiTzc9O9kWIdTNPB9CHX7jwBzDE+l7KEjhTlcWW1J/WBjbUbceJtpgQ6/udcnkQi7AUQ1VZrMO8tPa5KotJWI19qXDAg/T5x+dyijwzye9vBHuNb1iYzd3CnhDrD38FZpe9OylZhp5s+Tse4lyI9aWu1aYDuIX76aWv4Xx6nOd/85nQrbaFWI9mmTAaYn2nG+yfwNSeJrsyPYr/Bd5NhbSFqf/a/HsAGnieeoDVMFcAAAAASUVORK5CYII=",
    // jaune
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAH8SURBVHjapNQ7aFRREMbx303WWNhokULBV/AByk0UiSKCRQqR2AkqqIUIAY0QGys7W00jQYKNDwhCEESxSaONIaAYhL2FgoiI4gMfBGw0Bo/FHtezN5tN4YFl7p3Z+c93ztw5WQhB01Vk3TiCPqzFM5yQh89arEoT0FJcxCl0JJGV2IGJVsCsQWGRLcM4DkTPB3TGwu+wNSo+ji58ww15GFsIeBlD8W0Yj3APcziIvTjXRNiQPIw0AousB0+jmlF5GFRk7TgTz28/zkfAKB7gaCz0E73yUAgh1H5Vw6EqhKq3oWp53V+LrQ5VszE+nPg7QtV09F8JIWhLZO+J9q48zMzbEkvwHhfq3jzM4laanwK7on1R6noF/Umx76Vir6NdVQa2R/urlLAeG+PznSYN+ZsXysCPyfeWru1xuzOoNgFuSvNT4GS0/aWE3mRrX0rH0Y5D8e1JGTgWZe9UZAOJf120r+Tz5nQQPfiN643APEzGKYERRXY4PnfWgY3qjuFSXUwepprN8hC2oBvjimwfNsTYV0XWgd04HS8OeIyzzUevVnlNlN9XKvYGP7A58d3HgDx8Whj477BPRiXbkCXRWUzjqjzcbH3bzAdXMBU7fRvXYnNeLpTS1upuk4e5ZBLm5GGiFWxxYG09j3ZXbIr/BT6MF2kFKxb7858BAMnDvzDzyJQxAAAAAElFTkSuQmCC",
    // bleu
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAIHSURBVHjapNQ9iJVHFMbx3+veaJEqxRZJoWaJCkr8mOBHCFhsIYx2wSiSBIKwYLbYNNqks3W1UIslTaKwCIsoCSFcKxtlIYKvYGMghCQQYoIaFmzErI7NWZh9vXstnObM1/mfZ+bMmaaUYlBr+u1WHMY41uEOvig5PTCk9QaA1uAUjmF1tfQ2PsC1YcCmVtj02zcxhwMxdR+jEfgvbAnFn2EM/+FCyWl2JeBZTMXwNG7gByziY+zF8QHCpkpO52FVBduGyRjOlJxO4Cd8Far2VLAZHMTVGE83/fb9ZUB8Xh3tayg5PSs5ncMfOBH7zpScJktOV3AELdbEnS8DfhT2+5LTQvdIeAN/4+TSZMnpKS7V/jVwLOwvnaz3sL8K9rgT7Pew73SBI2H/7zi8iw3RvzogIUt+pQv8p3pvddsRx13A3QHAjbV/DbwZdn/HYWd1tIed6xjBJzG81QXOhuxdTb+dqObXh/2t5NSt00lsw3N8twxYcroZVQLnm357KPqjS8COuk8xvSSm5DQ/qJansBlbMdf02314L9YeNf12NT7El/FxwM/x+F8uvYi8NuSPd4L9iSfYVM39iImS078rAqvLPhpKtqOplp/iNr4pOV0c+tsMAPcwH5m+jG8jOb+u5LNq2N9WclqsKmGx5HRtGOyVwGj3wu6OpHhd4PX4SHt461WbXwwABPGiThCuZUYAAAAASUVORK5CYII=",
    // vert
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAIQSURBVHjapNQ/aJ5VFMfxz5O8pi84OWTQwT9BKygkirQigkOGInETarG2IOUGbApxaZdsXasdaocgvNgWghBEUbpk0cUQsKgFOyiU0hZKtbSWgMs1jb0u54WbxzdvBu9ynvvnfM/v3vOc05RSDBrdXjOJA5jGU7iM93Mqdw0ZnQGgXTiFDzBWbT2OV7AyDNjUCru95lEs461Y+h3jEfgWXgzFhzCB+zifU1naDngG8zH9GN/jG2zibbyB4wOEzedUzm4BdnvNFH4MNYs5lblurxnFsXi/N7EQgEV8i4MR6G/syalcGamiHK6utgA5lX9yKp/gBk7EudM5lbmcypd4Fz9jV7y5Gvh62K9zKuvtK+ER3MbJ/mJOZQOf1/41cCLsb62sdzBTBfurFex62CfawNGwD1oOz+C5+P5qQEL6fqUN/KP63+rxclx3Hb8MAO6u/WvgatiZlsOe6mr3Ws8xiv0xvdQGLoXsvd1eM1utPx32Wk7/qdM5TOEhzm0B5lRWo0rgbLfXvBPf431gS917+KgvJqeyNqiW5/ECJrHc7TX78Gzs/dntNWN4DUejccAP+HBg6UXkJ0P+dCvYTWQ8X61dxGxO5c62wOqxj4SSl9BU2xv4CZ/mVC4M7TYDwB2sRaa/wGeRnKvb+YwM6205lc2qEjZzKivDYDsCY/wa9tVIiv8L/C4aaQeP7XT43wEAbqCsQF3eczAAAAAASUVORK5CYII=",
    // vert
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAIQSURBVHjapNQ/aJ5VFMfxz5O8pi84OWTQwT9BKygkirQigkOGInETarG2IOUGbApxaZdsXasdaocgvNgWghBEUbpk0cUQsKgFOyiU0hZKtbSWgMs1jb0u54WbxzdvBu9ynvvnfM/v3vOc05RSDBrdXjOJA5jGU7iM93Mqdw0ZnQGgXTiFDzBWbT2OV7AyDNjUCru95lEs461Y+h3jEfgWXgzFhzCB+zifU1naDngG8zH9GN/jG2zibbyB4wOEzedUzm4BdnvNFH4MNYs5lblurxnFsXi/N7EQgEV8i4MR6G/syalcGamiHK6utgA5lX9yKp/gBk7EudM5lbmcypd4Fz9jV7y5Gvh62K9zKuvtK+ER3MbJ/mJOZQOf1/41cCLsb62sdzBTBfurFex62CfawNGwD1oOz+C5+P5qQEL6fqUN/KP63+rxclx3Hb8MAO6u/WvgatiZlsOe6mr3Ws8xiv0xvdQGLoXsvd1eM1utPx32Wk7/qdM5TOEhzm0B5lRWo0rgbLfXvBPf431gS917+KgvJqeyNqiW5/ECJrHc7TX78Gzs/dntNWN4DUejccAP+HBg6UXkJ0P+dCvYTWQ8X61dxGxO5c62wOqxj4SSl9BU2xv4CZ/mVC4M7TYDwB2sRaa/wGeRnKvb+YwM6205lc2qEjZzKivDYDsCY/wa9tVIiv8L/C4aaQeP7XT43wEAbqCsQF3eczAAAAAASUVORK5CYII="
];

let bandeau_msgs = [
    "Inconnu",
    "Liens capitalistiques forts",
    "Liens étatiques fort",
    "plutôt indépendant (vis à vis des intérets d'état et/ou de la finance)",
    "Média indépendant (des états et de la finance)",
    "France Insoumise  \\o/"
];

let owner_msgs = [
    "Ce site n'est pas référencé dans notre base de données.",
    "Voici les liens capitalistiques avec les principaux actionnaires du média que vous consultez :",
    "Ce média est la propriété du ou des états suivants :",
    "plutôt indépendant (vis à vis des intérets d'état et/ou de la finance)",
    "Ce site n'a pas de lien capitalistique ou étatique.",
    "L'Avenir en Commun est un programme qui a été rédigé par plus de 3 000 bénévoles, il contient 357 propositions qui ont toutes été amendées"
];

// vars to show in prefs
var colors = [
    "#A2A9AE", // gris
    "#D50303", // rouge
    "#F5A725", // jaune
    "#129AF0", // bleu
    "#468847", // vert
    "#468847"  // INSOUMIS AUSSI :D
];
let decodex_colors = [
    "#A2A9AE", "#129AF0", "#D50303", "#F5A725", "#468847"
];
let decodex_descs = [
    "inclassable", "parodique", "pas fiable du tout", "peu fiable", "fiable"
];

var base_url = "http://decodex.insoumis.online/database.json";
var _debug = 5;

console && console.log("POUET");
$(document).ready(function(){
    $("#form-possedex").on("submit", function(e){
        e.preventDefault();
        var url = $("#url").val();
        if (url.length > 0) {
            document.location.hash = url;
            $.getJSON(base_url, function(data){
                debunkSite(url, data);
            });
        } else {
            alert("Saisissez d'abord une url :) ");
        }
    });

    $("#submit-possedex").on("click", function(e){
        e.preventDefault();
        $("#form-possedex").submit();
    });

    var current_location = document.location.href; // full url;
    if ((pos = current_location.indexOf('#')) > -1) {
        url = current_location.substring(pos+1);
        $("#url").val(url);
        $("#submit-possedex").click();
    }

});

function removeAfterLastSlash(url){
    if(url.lastIndexOf('/') !== -1) {
        return url.substring(0, url.lastIndexOf('/'));
    }
    else {
        return url;
    }
}
function lastSlash(url){ // remove the last slash at the end of the string
    if(url.lastIndexOf('/') == url.length-1) {
        return url.substring(0, url.length-1);
    }
    else {
        return url;
    }
}
function url_cleaner(url){
    return url
        .replace("http://", "")
        .replace('www.', "")
        .replace("https://", "")
        .replace("\n", "");
}
function youtubeChannel(url){
    var elms = url.split('/');
    if(elms.length > 2){
        return elms[0] + '/' + elms[1] + "/" + elms[2];
    }
    else{
        return url;
    }
}
function debunkSite(url, data){
    // INIT vars

    var owner_msg = '';

    var proprietaires = '';
    var fortunes      = '';
    var marques       = '';
    var influences    = '';
    var proprietaires = '';
    var interets      = '';
    var conflits      = '';
    var subventions   = '';
    var publicite     = '';
    var sources       = [];

    var note          = '';
    var decodex_note  = '';
    var color         = '';
    var decodex_color = '';
    var decodex_desc  = '';
    var message       = '';
    var bandeau_msg   = '';
    var icone         = '';
    // end INIT vars
    if (3 <= _debug) {
        console && console.group('STARRT debunk site '+url);
    }

    if (3 <= _debug) {
        console && console.info("debunkSite : var results");
        console && console.log("results");
    }

    urls = data.urls;
    sites = data.sites;
    url = lastSlash(url);
    url = url_cleaner(url);
    has_info = urls.hasOwnProperty(url);
    // si le site est trouvé direct
    if (has_info == true) {
        site_id = urls[url];
        if (2 <= _debug) {
            console && console.log('site FOUND ! ', site_id);
        }
        try {
            site_actif     = sites[site_id][col_nom];                    // nom du site
            decodex_note   = parseInt(sites[site_id][col_note_decodex]); // note decodex
            insoumis_note     = parseInt(sites[site_id][col_note_insoumis]);   // note insoumis
            notule         = sites[site_id][col_desc];                   // description originale
            slug           = sites[site_id][col_slug];                   // nom normalisé

            owner_msg      = owner_msgs[insoumis_note];               // message "ce media est la propriété ..."

            var proprietaire1 = sites[site_id][col_proprietaire1];      // propriétaires
            var fortunes1      = sites[site_id][col_fortune1     ];      // propriétaires
            var marque1        = sites[site_id][col_marque1      ];      // propriétaires
            var influence1     = sites[site_id][col_influence1   ];      // propriétaires

            var proprietaire2 = sites[site_id][col_proprietaire2];      // propriétaires
            var fortunes2      = sites[site_id][col_fortune2     ];      // propriétaires
            var marque2        = sites[site_id][col_marque2      ];      // propriétaires
            var influence2     = sites[site_id][col_influence2   ];      // propriétaires

            var proprietaire3 = sites[site_id][col_proprietaire3];      // propriétaires
            var fortunes3      = sites[site_id][col_fortune3     ];      // propriétaires
            var marque3        = sites[site_id][col_marque3      ];      // propriétaires
            var influence3     = sites[site_id][col_influence3   ];      // propriétaires

            proprietaires = [proprietaire1, proprietaire2, proprietaire3];
            fortunes      = [fortunes1    , fortunes2    , fortunes3    ];
            marques       = [marque1     , marque2       , marque3      ];
            influences    = [influence1  , influence2    , influence3   ];

            subventions    = sites[site_id][col_subventions];            // Montant des subventions d'état
            publicite      = sites[site_id][col_pub];                    // Pub ?

            var raw_sources = sites[site_id][col_sources];                // Nos sources (urls séparés par virgule et/ou espace)

            if (3 <= _debug) {
                console && console.info("sources avant markdown", raw_sources);
            }
            // Markdown style
            var regex = new RegExp(/\[([^\]]*?)\]\(([^\)]*?)\)[, ]{0,2}/gm);
            match = regex.exec(raw_sources);
            sources = [];
            while (match != null) {
                title = match[1];
                url   = match[2];
                sources.push({"url":url, "title":title});
                match = regex.exec(raw_sources);
            }

            if (3 <= _debug) {
                console && console.log("sources apres markdown", sources);
            }

            // URL toute seule
            var regex = new RegExp(/^(http[s]?:\/\/([^/]+)\/[^" ,]+)[^"]{1,2}$/g);

                    match = regex.exec(raw_sources);
                    while (match != null) {
                    url   = match[1];
                    title = match[2];
                    sources.push({"url":url, "title":title});
                    match = regex.exec(raw_sources);
                    }

                    if (3 <= _debug) {
                    console && console.log("sources apres urls simples", sources);
                    }

                    note          = insoumis_note;
                    color         = colors[insoumis_note];
                    message       = messages[insoumis_note];
                    decodex_color = decodex_colors[decodex_note];
                    decodex_desc  = decodex_descs[decodex_note];
                    bandeau_msg   = bandeau_msgs[insoumis_note];
                    icone         = icones[insoumis_note];

                    if (2 <= _debug) {
                        console && console.group("tout s'est bien passé");
                        console && console.log('site_actif     =',site_actif     );
                        console && console.log('decodex_note   =',decodex_note   );
                        console && console.log('insoumis_note  =',insoumis_note );
                        console && console.log('notule         =',notule         );
                        console && console.log('slug           =',slug           );
                        console && console.log('proprietaires  =',proprietaires  );
                        console && console.log('interets       =',interets       );
                        console && console.log('conflits       =',conflits       );
                        console && console.log('subventions    =',subventions    );
                        console && console.log('sources        =',sources        );
                        console && console.groupEnd();
                    }
                    // display results
                    $("#result").html('<dl id="infos">');
                    $("#infos").append("<label>Nom</label>");
                    $("#infos").append("<p>"+site_actif+"</p>");
                    $("#result").append("<label>Note LeMonde (outdated)</label><p>"+decodex_note+"</p>");
                    $("#result").append("<label>Note possédex(à définir)</label><p>"+insoumis_note+"</p>");
                    $("#result").append("<label>Description</label><p>"+notule+"</p>");
                    $("#result").append("<label>identifiant(à masquer plus tard)</label><p>"+slug+"</p>");
                    $("#result").append("<label>Propriétaires</label><p>"+proprietaires+"</p>");
                    $("#result").append("<label>Intérêts</label><p>"+interets+"</p>");
                    $("#result").append("<label>Conflits</label><p>"+conflits+"</p>");
                    $("#result").append("<label>Subventions</label><p>"+subventions+"</p>");
                    $("#result").append(sources);
        } catch(e) {
            if (1 <= _debug) {
                console && console.error("ERREUR has_info");
                console && console.error(e);
                console && console.log(sites[site_id]);
            }
        }


        //if(results.infobulles[insoumis_note] == true){  // note
        //    browser.tabs.query({active: true, currentWindow: true}, function(tabs) {
        //        // sendMessage to the content.js listener
        //        browser.tabs.sendMessage(tabs[0].id, {
        //            show_popup  : true,
        //            note        : insoumis_note,
        //            color       : colors[insoumis_note],
        //            message     : messages[insoumis_note],
        //            bandeau_msg : bandeau_msgs[insoumis_note],
        //            icone       : icones[insoumis_note],
        //        }, function(response) { // note
        //        });
        //    });
        //}
    }
    else {
        $("#result").html('Nous n\'avons actuellement aucune information sur ce site.');
        if (2 <= _debug) {
            console && console.info("site non trouvé", url);
            console && console.log(url);
        }
        // Optional : add a badge text and badge bg with the icon
        //browser.browserAction.setBadgeText({"text" : "Soumis :p"});
        //browser.browserAction.setBadgeBackgroundColor({'color' : "#D50303"});
    }

    if (url.match(/youtube.com/)) {

        if (null == insoumis_note)
            insoumis_note  = 0;                             // propriétaires


        if ("" == proprietaires)
            proprietaires  = "Youtube est une propriété de la Holding Alphabet (Google)";                             // propriétaires
        if ("" == interets)
            interets       = "Le groupe Alphabet(Google) a de nombreux intérêts internationnaux. Son business model est fortement basé sur la publicité et son quasi-monopole de la publicité. Google exerce de nombreuses pressions sur les états et l'Union Européenne.";                               // intérets
        if ("" == conflits)
            conflits       = "Youtube peut être un outil de partage de connaissances. Les vidéastes et utilisateurs de la plateforme youtube ne sont pas forcément soumis à Google, mais… ";  // exemple de conflits / complicité idéologique
        if ("" == subventions)
            subventions    = "";             // Montant des subventions d'état
        if ("" == sources)
            sources        = "";             // Nos sources (urls séparés par virgule et/ou espace)
    }

    //var today = new Date();
    //if(always_refresh || (today.getTime() - results.last_update)/1000/60/60 >= 24) {

    //    if (1 <= _debug) {
    //        console && console.log("refresh every hour or refresh forced");
    //    }
    //    loadData();
    //} else {
    //    if (2 <= _debug) {
    //        console && console.log("(not refresh) use data found in cache");
    //    }
    //}

    if (3 <= _debug) {
        console && console.groupEnd();
    }
}


import requests
import csv
import json

def slugify(value):
    """
    Normalizes string, converts to lowercase, removes non-alpha characters,
    and converts spaces to hyphens.
    """
    import unicodedata
    import re
    value = unicode(value.decode("utf-8"))
    value = unicodedata.normalize('NFKD', value).encode('ascii', 'ignore')
    value = unicode(re.sub('[^\w\s-]', '', value).strip().lower())
    value = unicode(re.sub('[-\s]+', '-', value))
    return str(value)

response = requests.get('https://docs.google.com/spreadsheets/export?id=1WJ1c9y8hHECdkVbBYULGR8XWrCv9YRtw2LoCM6LCAew&exportFormat=csv')
response.encoding = 'UTF-8'
assert response.status_code == 200, 'failed to download csv file'

text_file = open('tmp.csv', 'w')
text_file.write(response.content)
text_file.close()

database = {'sites': {}, 'urls': {}}

id = 0

col_nom          = 0+1
col_desc         = 1+1
col_proprietaire = 2+1
col_interet      = 3+1
col_exemple      = 4+1
col_subventions  = 5+1
col_sources      = 6+1
col_insoumis     = 7+1
col_note_decodex = 8+1




with open('tmp.csv', 'rb') as csvfile:
    reader = csv.reader(csvfile, delimiter=',', quotechar='"')
    for row in reader:
        if len(row) < 4:
            continue

        id = id + 1

        if id == 1:
            continue

        entry = []
        note = -1
        node_decodex = -1

        try:
            if row[col_insoumis] == '0-inconnu':
                note = 0
            elif row[col_insoumis] == '1-completement-soumis':
                note = 1
            elif row[col_insoumis] == '2-plutot-soumis':
                note = 2
            elif row[col_insoumis] == '3-plutot-insoumis':
                note = 3
            elif row[col_insoumis] == '4-completement-insoumis':
                note = 4
            elif row[col_insoumis] == '5-site-insoumis':
                note = 5
            else:
                print "note insoumise manquante pour "+row[col_nom]
                continue
        except:
            pass

        try:
            note_decodex = int(row[col_note_decodex])
        except:
            pass

        entry.append(note_decodex)                    # 0  - note originale decodex
        entry.append(row[col_desc])                   # 1  - Description originale
        entry.append(row[col_nom])                    # 2  - Nom
        entry.append(slugify(row[col_nom]))           # 3  - Nom normalise
        entry.append(note)                            # 4  - Notre note
        entry.append(row[col_proprietaire])           # 5  - Proprietaires
        entry.append(row[col_interet])                # 6  - Interet des proprietaires
        entry.append(row[col_exemple])                # 7  - Exemples d'influence / complicite ideologique
        entry.append(row[col_subventions])             # 8  - Montant des subventions d'etat
        entry.append(row[col_sources])                # 9 - Sources
        
        database['sites'][id] = entry

        for i in range(9, len(row)-1):
            if row[i]:
                database['urls'][row[i]] = id

with open('decodex_data.json', 'wb') as outfile:
    json.dump(database, outfile, indent=4)

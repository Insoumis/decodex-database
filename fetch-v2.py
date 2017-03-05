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

response = requests.get('https://docs.google.com/spreadsheets/export?id=1WJ1c9y8hHECdkVbBYULGR8XWrCv9YRtw2LoCM6LCAew&exportFormat=csv&gid=90145853')
response.encoding = 'UTF-8'

assert response.status_code == 200, 'failed to download csv file'

text_file = open('tmp.csv', 'w')
text_file.write(response.content)
text_file.close()

database = {'sites': {}, 'urls': {}}

id = 0

col_nom           = 0
col_desc          = 1
col_decodex       = 2
col_soumission    = 3

col_proprietaire1 = 4
col_fortune1      = 5
col_marque1       = 6
col_influence1    = 7

col_proprietaire2 = 8
col_fortune2      = 9
col_marque2       =10
col_influence2    =11

col_proprietaire3 =12
col_fortune3      =13
col_marque3       =14
col_influence3    =15

col_subventions  = 16
col_pub          = 17
col_sources      = 18

col_urls         = 19 # colonne de la 1ere url




with open('tmp.csv', 'rb') as csvfile:
    reader = csv.reader(csvfile, delimiter=',', quotechar='"')
    for row in reader:
        if len(row) < 4:
            continue

        id = id + 1

        if id == 1:
            continue

        entry = []
        note_soumission = -1
        node_decodex = -1

        try:

            if row[col_insoumis] == '0-inconnu':
                note_soumission = 0
            elif row[col_insoumis] == '1-soumis-capital':
                note_soumission = 1
            elif row[col_insoumis] == '2-soumis-etat':
                note_soumission = 2
            elif row[col_insoumis] == '4-insoumis-independant':
                note_soumission = 4
            elif row[col_insoumis] == '5-site-insoumis':
                note_soumission = 5
            else:
                print "note insoumise manquante pour "+row[col_nom]
                print "note insoumise manquante pour "+row[0]
                print "note insoumise manquante pour "+row[1]
                continue
        except:
            pass

        try:
            note_decodex = int(row[col_decodex])
        except:
            pass

        entry.append(note_decodex)                    # 0  - note originale decodex
        entry.append(row[col_desc])                   # 1  - Description originale
        entry.append(row[col_nom])                    # 2  - Nom
        entry.append(slugify(row[col_nom]))           # 3  - Nom normalise
        entry.append(note_soumission)                 # 4  - Notre note

        entry.append(row[col_pub])                    # 5  - Pub ?
        entry.append(row[col_subventions])            # 6  - subventions

        entry.append(row[col_sources])                # 7 - Sources

        entry.append(row[col_proprietaire1])          # 8
        entry.append(row[col_fortune1])               # 9
        entry.append(row[col_marque1])                # 10
        entry.append(row[col_influence1])             # 11

        entry.append(row[col_proprietaire2])          # 12
        entry.append(row[col_fortune2])               # 13
        entry.append(row[col_marque2])                # 14
        entry.append(row[col_influence2])             # 15

        entry.append(row[col_proprietaire3])          # 16
        entry.append(row[col_fortune3])               # 17
        entry.append(row[col_marque3])                # 18
        entry.append(row[col_influence3])             # 19


        database['sites'][id] = entry

        for i in range(col_urls, len(row)-1):
            if row[i]:
                database['urls'][row[i]] = id

with open('database.json', 'wb') as outfile:
    json.dump(database, outfile, indent=4)


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
with open('tmp.csv', 'rb') as csvfile:
    reader = csv.reader(csvfile, delimiter=',', quotechar='"')
    for row in reader:
        if len(row) < 4:
            continue

        id = id + 1

        if id == 1:
            continue

        entry = []
        note = 0
        node_decodex = -1

        try:
            note = int(row[3])
        except:
            continue

        try:
            note_decodex = int(row[4])
        except:
            pass

        entry.append(note_decodex)
        entry.append(row[1])
        entry.append(row[0])
        entry.append(slugify(row[0]))
        entry.append(note)
        entry.append(row[2])
        
        database['sites'][id] = entry

        for i in range(5, len(row)-1):
            if row[i]:
                database['urls'][row[i]] = id
        
        
print json.dumps(database, indent=4)

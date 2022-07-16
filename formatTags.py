# Save csv from spreadsheet as tags.csv
# Outputs the json object as stickerlabels.txt

import csv

with open('tags.csv', newline='') as csvfile:
    tagreader = csv.reader(csvfile, delimiter=',')
    next(tagreader)  # skip header row
    stickerlabels = {}
    for row in tagreader:
        code = row[1]
        tags = row[3:]
        for tag in tags:
            if len(tag) == 0:
                break
            elif tag in stickerlabels:
                stickerlabels[tag].append(code)
            else:
                stickerlabels[tag] = [code]
with open('stickerlabels.txt', 'w') as output:
    output.write(str(stickerlabels))
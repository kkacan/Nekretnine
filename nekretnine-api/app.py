from flask import Flask, jsonify, request, abort
import sqlite3

conn = sqlite3.connect('database.db')
c = conn.cursor()
app = Flask(__name__)

# Upit na bazu podataka za dohvat kuća
qry = 'SELECT kuce.id, kuce.mjesto, kuce.adresa, kuce.kvadratura, kuce.cijena, kuce.opis, osobe.ime, osobe.prezime, osobe.email, slike.slika1, slike.slika2, slike.slika3, slike.slika4 FROM kuce LEFT JOIN osobe ON kuce.prodavatelj = osobe.id LEFT JOIN slike ON kuce.slike = slike.id GROUP BY kuce.id'

cursor = conn.cursor()
cursor.execute(qry)
rows = [x for x in cursor]
cols = [x[0] for x in cursor.description]
kuce_list = []
for row in rows:
    item = {}
    for prop, val in zip(cols, row):
        item[prop] = val
    kuce_list.append(item)

# Upit na bazu podataka za dohvat stanova
qry = 'SELECT stanovi.id, stanovi.mjesto, stanovi.adresa, stanovi.kvadratura, stanovi.cijena, osobe.ime, osobe.prezime, osobe.email, slike.slika1, slike.slika2, slike.slika3, slike.slika4 FROM stanovi LEFT JOIN osobe ON stanovi.prodavatelj = osobe.id LEFT JOIN slike ON stanovi.slike = slike.id GROUP BY stanovi.id'

cursor = conn.cursor()
cursor.execute(qry)
rows = [x for x in cursor]
cols = [x[0] for x in cursor.description]
stanovi_list = []
for row in rows:
    item = {}
    for prop, val in zip(cols, row):
        item[prop] = val
    stanovi_list.append(item)

# Upit na bazu podataka za dohvat zemljišta
qry = 'SELECT zemljista.id, zemljista.mjesto, zemljista.adresa, zemljista.kvadratura, zemljista.cijena, osobe.ime, osobe.prezime, osobe.email, slike.slika1, slike.slika2, slike.slika3, slike.slika4 FROM zemljista LEFT JOIN osobe ON zemljista.prodavatelj = osobe.id LEFT JOIN slike ON zemljista.slike = slike.id GROUP BY zemljista.id'

cursor = conn.cursor()
cursor.execute(qry)
rows = [x for x in cursor]
cols = [x[0] for x in cursor.description]
zemljista_list = []
for row in rows:
    item = {}
    for prop, val in zip(cols, row):
        item[prop] = val
    zemljista_list.append(item)


# (Kuće) Dohvat kuća i pretvaranje u Json
@app.route('/api/v1/kuce', methods=['GET'])
def get_kuce():
    return jsonify(kuce_list)

# (Stanovi) Dohvat stanova i pretvaranje u Json
@app.route('/api/v1/stanovi', methods=['GET'])
def get_stanovi():
    return jsonify(stanovi_list)

# (Zemljišta) Dohvat zemljišta i pretvaranje u Json
@app.route('/api/v1/zemljista', methods=['GET'])
def get_zemljista():
    return jsonify(zemljista_list)


if __name__ == '__main__':
    app.run(debug=True)

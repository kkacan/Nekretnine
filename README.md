# Nekretnine
##### Aplikacija za evidenciju nekretnina  
---
Nekretnine je web aplikacija namjenjena agencijama koje se bave prometom nekretnina, da bi svoju ponudu predstavili potencijalnim kupcima.  
Sastoji se od REST servisa koji je izrađen u Flask Web Frameworku, gdje se iz SQLite baze podataka izvlače podaci koji se pretvaraju u JSON format i serviraju front-end dijelu koji je izrađen u Angularu.  
  
Podaci o nekretninama se dijele na tri skupine:

- Kuće
- Stanovi
- Zemljišta
 
Za svaku skupinu prikazuju se ovi podaci:

- ID - indetifikacijski broj nekretnine
- Mjesto - mjesto gdje se nekretnina nalazi
- Adresa - adresa nekretnine
- Kvadratura - površina nekretnine
- Cijena
- Opis
- Prodavatelj - ime i prezime prodavatelja i njegova email adresa (klikom na email šalje se poruka sa id brojem nekretnine)
- Slike

Za potrebe prezentacije aplikacija je deployana na [GitHub Pages][ln1].  
Back-end ove prezentacije radi preko [JSON Servera][ln2] i nalazi se [ovdje][ln3].


### Korištene tehnike / tehnologije

  - Python
  - SQLite
  - TypeScript
  - HTML, CSS, JavaScript
  - Predlošci
  - REST servisi
  - Deployment
  - Bootstrap  
  
  
>Autor: Kristijan Kačan

[ln1]: <https://kkacan.github.io/nekretnine-angular>
[ln2]: <https://github.com/typicode/json-server>
[ln3]: <https://github.com/kkacan/nekretnine-api>

# RideShare — Java 4 · Neon dhe PostgreSQL

## Çfarë ndërtova
U shtua `schema.sql` për tabelën e udhëtimeve dhe u përgatit leximi i listës dhe detajeve përmes `@neondatabase/serverless`, duke përdorur `DATABASE_URL` në anën e serverit. Kodi ka të dhëna rezervë demonstrative kur leximi nga databaza dështon.

## Provat që bëra
### Prova 1: Ndryshimi në databazë shfaqet në aplikacion
Nuk u verifikua ndryshimi i orës së ID 2 nga 08:15 në 08:25 në Neon dhe kthimi i saj në 08:15. Prandaj nuk po pretendohet se rezultatet e listës dhe detajeve janë konfirmuar nga Neon.

### Prova 2: Lista bosh dhe rikthimi
Nuk u krye prova me `WHERE false`.

### Prova 3: Lidhja mungon, rikthimi dhe siguria
Nuk u çaktivizua përkohësisht `DATABASE_URL` për të provuar sjelljen. U kontrollua që skedari `.env` përjashtohet nga Git; vlera e tij nuk përfshihet në këtë raport.

## Ku gjendet puna
Skedari `aplikacioni/schema.sql` dhe leximi në `aplikacioni/src/lib/db.ts` dhe `aplikacioni/src/lib/udhetimet.ts`. Repository: https://github.com/fjjollaa/rideshare-mobile

## Çfarë mbetet për përmirësim
Duhet kryer verifikimi real me Neon dhe të kontrollohet nëse aplikacioni dallon qartë gabimin e lidhjes nga lista bosh. Kërkesa “Në pritje” mbetet simulim; nuk ka rezervim real.

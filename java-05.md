# RideShare — Java 5 · Hyrja dhe lejet

## Çfarë ndërtova
GitHub OAuth jep identitetin e përdoruesit. Roli (`udhetar` ose `shofer`) ruhet veçmas në tabelën `profilet`, ndërsa `shofer_id` tregon pronësinë e udhëtimit. Veprimi në server kontrollon sesionin, rolin, formatin e të dhënave dhe pronësinë përpara ndryshimit të orës.

## Provat që bëra
### Prova 1: Hyrja, rifreskimi dhe dalja
Nuk u përfundua prova e hyrjes, rifreskimit dhe daljes me GitHub.

### Prova 2: Shoferi ndryshon udhëtimin e vet
Nuk u provua ndryshimi i orës së ID 2 në 08:25 nëpërmjet llogarisë shofer në aplikacion dhe verifikimi në Neon.

### Prova 3: Veprimi pa leje refuzohet
Nuk u provua refuzimi i ndryshimit të ID 1 në aplikacion.

## Ku gjendet puna
Skedarët për hyrjen, lejet dhe panelin janë në `aplikacioni/src/lib/`, `aplikacioni/src/components/` dhe `aplikacioni/src/app/panel/`. Skema shtesë është në `aplikacioni/schema-java05.sql`. Repository: https://github.com/fjjollaa/rideshare-mobile

## Çfarë mbetet për përmirësim
Duhet konfiguruar dhe provuar OAuth sipas udhëzuesit, ekzekutuar skema në Neon dhe kryer tri provat. Kërkesa për vend mbetet simulim.

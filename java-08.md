# RideShare — Java 8

## Çfarë ndërtova
Shtova në faqen e detajeve një komponent për pikën e nisjes. Vendndodhja kërkohet vetëm kur përdoruesi klikon butonin “Përdor vendndodhjen time”. Gjithashtu shtova alternativën manuale “Shkruaj vendtakimin” për rastet kur leja refuzohet ose pajisja nuk mbështet vendndodhjen.

## Provat që bëra
### Prova 1: Leja nuk kërkohet sapo hapet faqja.
Hapa faqen e detajeve dhe kontrollova që vendndodhja nuk kërkohet në ngarkim. Leja fillon vetëm pas klikimit të butonit për vendndodhjen.

### Prova 2: Refuzimi i lejes nuk e bllokon përdoruesin.
Kur vendndodhja refuzohet nga shfletuesi, shfaqet një mesazh që lejon vazhdimin me fushën manuale të vendtakimit. Nuk u ruajt vendndodhja reale në GitHub.

### Prova 3: Dëshmitë në GitHub nuk tregojnë adresën time reale.
Dëshmia për kodin dhe raportin nuk përfshin koordinata reale. Komponenti mund të shfaqë koordinata të përmbledhura vetëm gjatë provës lokale.

## Ku gjendet puna
Komponenti gjendet te `aplikacioni/src/components/Vendndodhja.tsx` dhe është përdorur te `aplikacioni/src/app/udhetimi/[id]/page.tsx`. Repository: https://github.com/fjjollaa/rideshare-mobile

## Çfarë mbetet për përmirësim
Duhet kryer prova në pajisje dhe shfletues ku mbështeten të tre rastet: pranimi, refuzimi dhe mungesa e mbështetjes së vendndodhjes.

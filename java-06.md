# RideShare — Java 6 · PWA dhe puna offline

## Çfarë ndërtova
U shtuan manifesti, ikonat e aplikacionit, service worker-i dhe një faqe offline që kërkon vetëm listën publike të udhëtimeve. Service worker-i ruan kopjen lokale të listës për lexim; ajo mund të jetë e vjetër dhe nuk kryen rezervime.

## Provat që bëra
### Prova 1: Manifesti dhe vizita online
U hap `/manifest.webmanifest`; u pa emri “RideShare AAB” dhe ikonat 192×192 dhe 512×512. Faqja `/offline.html` u hap online dhe shfaqi tri udhëtime me një kohë ruajtjeje. Nuk u provua instalimi nga shfletuesi.

### Prova 2: Pa internet dhe pas rifreskimit
Nuk u simulua ndërprerja e internetit. Prandaj nuk po pretendohet se tri kartat u rihapën nga kopja lokale pas rifreskimit.

### Prova 3: Lidhja rikthehet
Nuk u provua ndryshimi i orës së ID 2 në Neon gjatë gjendjes offline ose rifreskimi pas rikthimit të lidhjes.

## Ku gjendet puna
Manifesti, API-ja dhe komponenti PWA janë te `aplikacioni/src/`; service worker-i, faqja offline dhe ikonat janë te `aplikacioni/public/`. Repository: https://github.com/fjjollaa/rideshare-mobile

## Çfarë mbetet për përmirësim
Duhet provuar vizita e parë pa kopje: lista nuk mund të shfaqet derisa të ketë një kopje të ruajtur. Edhe pas ruajtjes, lista offline mund të jetë e vjetruar dhe është vetëm për lexim.

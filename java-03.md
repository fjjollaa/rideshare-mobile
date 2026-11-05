# RideShare — Java 3

## Çfarë ndërtova
Faqen e listës me tri udhëtime, kartën e ripërdorshme, faqen e detajeve, kërkesën demonstrative dhe faqen për udhëtim që nuk gjendet.

## Provat që bëra
### Prova 1: Lista në telefon
Hapa faqen lokale në një viewport me gjerësi CSS 375 px; pashë tri karta dhe nuk pati lëvizje horizontale. Ky ishte kontroll në shfletues, jo test në telefon fizik.

### Prova 2: Detajet e udhëtimit të dytë
Klikova kartën 2; `/udhetimi/2` tregoi Fushë Kosovë → AAB, orën 08:15 dhe vendtakimin “Te stacioni kryesor”. ID 3 tregoi zero vende dhe butonin “Nuk ka vende të lira” të çaktivizuar. `/udhetimi/99` tregoi “Udhëtimi nuk u gjet”.

### Prova 3: Kërkesa në pritje
Klikova “Kërko vend” në udhëtimin 2; u shfaq “Simulim: Në pritje” dhe mesazhi se kërkesa nuk i është dërguar shoferit. U ktheva te detajet dhe pastaj te lista. Nuk u krijua rezervim real.

## Çfarë do të përmirësoj
Provoje rrjedhën edhe në telefon fizik me një koleg; kontrolli 375 px në shfletuesin lokal përfundohet për këtë raport.

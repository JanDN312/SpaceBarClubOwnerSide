# Allgemeine Anmerkung zum Projekt
Grundsätzlich ist zu uns zu sagen, dass keiner von uns Vorerfahrung in der Programmiersprache Typescript oder Svelte hat und wir dahingehend uns erst reinarbeiten mussten. Auch sonst haben wir keine relevante Vorerfahrung.
Ursprünglicher Plan des Projektes war es, das Gegenstück des Fallstudienprojektes zu coden.
(Hier haben wir mit Flutter eine Android-App entwickelt, die die Auslastung von Clubs und Bars in der Nähe anzeigt.)
Die Realisierung würde eine graphische Oberfläche für den Zugriff und Änderungen an der zugrundeliegenden Datenbank beinhalten, welche über eine Login-Page erreicht werden kann. 
Die dafür benötigten Elemente wurden teilweise gecoded, auch in verschiedenen Varianten. 
Im Laufe der Zeit haben wir uns dann aber entschieden zumindest jeder mal ein Deno-Modul(auch losgelöst von dem Projekt) zu publishen. Dann haben wir beschlossen auch so weiter zu verfahren, da wir individuell an anderen Dingen Interesse bekommen haben. 
Währenddessen haben wir uns bei Problemen untereinander jedoch auch in diesen Themen geholfen.

# Veröffentlichte Deno-Module:
Physics Formulas (Jan Neifeld): https://deno.land/x/physics_formulas      
K-Means (Jan Neifeld): https://deno.land/x/k_means_algorithm
Distance Calculator (Jan Neifeld): https://deno.land/x/distance_calculator   
DB-Scan Algorithm (Jan Neifeld): https://deno.land/x/db_scan     
Encryption (Constantin Rech): https://deno.land/x/encryption_lib            
Currency-Converter (Michel Medved): https://deno.land/x/currency_converter 

Die älteren Versionen der Module sind noch in dem https://github.com/JanDN312/SpaceBarClubOwnerSide Repo enthalten, zur Betrachtung bitten wir jedoch die aktuellsten Versionen in den seperaten Repositories zu betrachten.

# Auflistung der anderen Aktivitäten:

Michel:
- Erstellung einer Landing Page für Spacebar(Html,CSS)              -> Ordner: LandingPage
- Vorprogrammierung der Loginpage mit middleware framework oak      -> Ordner: login_registration
- Svelte Calendar als feature für unsere Webpage (Svelte)           -> Ordner: Calendar


Jan:
- Anfangsaufbau eines Backends(http) für den Zugriff über die GUI   -> Ordner: SpaceBar/Backend
- Bau einer Login-Page mit Angular(Node)                            -> Ordner: login_with_angular
- Bau und Vergleich mit dem Pendant in Deno(Oak)                    -> Ordner: login_registration

Constantin:
- Verbesserung an Deno Modul: https://deno.land/x/ethereum@v1.3.0 --> https://deno.land/x/ethereum@v1.3.1
- Am Anfang hatte ich auch eine Svelte Feedbackseite mithilfe eines YT-Videos gebaut. Habe diese dann aber nicht mehr erweitert, da wir dann auf Deno-Module umgeschwenkt sind. Dementsprechend ist das Repo auch nicht gepflegt. Svelte Feedbackseite (https://github.com/Coreprog/svelte-app) (Muss nicht umbedingt bewertet werden falls es die Note runterzieht, dachte nur ich pack alles rein was ich bezüglich der Vorlesung gemacht habe)



# Changelog — Registro

## v1.24.1
- **Disattivato lo zoom con le dita (pinch e doppio tap)**: il meta viewport da solo (`maximum-scale=1, user-scalable=no`) non basta su iOS Safari, che lo ignora volutamente per motivi di accessibilità. Aggiunto anche `touch-action: manipulation` via CSS e un piccolo script che intercetta i gesti di pinch e il doppio tap, per bloccare lo zoom in modo affidabile su tutti i dispositivi.

## v1.24.0
- **Barra in basso semplificata**: ora ha solo Dashboard, Transazioni, Categorie, Risparmi (prima 6 tab, troppo strette). Analisi e Backup si aprono da un menu dedicato.
- **Nuovo tasto menu (☰)** in alto a destra nell'header, più grande e prominente del vecchio ingranaggio: apre un menu con Analisi, Backup e Impostazioni (tema, nome, data di nascita — quello che prima era dietro l'icona ⚙). Il pallino d'avviso per problemi di sincronizzazione, prima sulla tab Backup, ora compare sia sul tasto menu che sulla voce Backup al suo interno, così resta visibile anche senza aprire il menu.

## v1.23.0
- **Analisi più approfondita**, tre aggiunte alla scheda Analisi:
  - **Andamento categorie**: ora puoi selezionare più categorie insieme (chip cliccabili) e confrontarle sullo stesso grafico, invece di vederne una alla volta.
  - **Spese fuori dal solito**: individua automaticamente le transazioni nettamente sopra il valore tipico della loro categoria. Usa mediana e scarto assoluto mediano invece di media/deviazione standard — un singolo valore molto estremo altrimenti "gonfia" la media al punto da rendersi quasi invisibile alla soglia (verificato con un caso di test dedicato prima di rilasciarlo).
  - **Ricorrenze rilevate**: individua pattern tipo abbonamento — stessa categoria e importo simile (±0,50€) presenti in almeno 3 mesi diversi, per almeno metà dei mesi coperti — con stima della spesa annua.

## v1.22.0
- **⚠️ Richiede un aggiornamento manuale dello script Google**: questa versione cambia lo script Apps Script (aggiunge il profilo). Vai su Backup → guida in fondo, copia il nuovo codice e rifai il deployment (Esegui il deployment → Gestisci i deployment → matita → Versione: Nuova versione → Deploy). Senza questo passaggio nome e data di nascita non si sincronizzano, il resto dell'app funziona comunque.
- **Corretto "Andamento categoria" in Analisi**: mostrava un intervallo di 12 mesi che poteva sconfinare nell'anno precedente — ma un anno chiuso/archiviato perde le transazioni singole (restano solo i totali per categoria), quindi il grafico poteva risultare vuoto o fuorviante per quei mesi. Ora mostra sempre e solo l'anno corrente, gennaio-dicembre.
- **Nome e data di nascita personalizzabili**, in Impostazioni (icona ⚙ in alto): il nome sostituisce "SIMONE" (prima fisso nel codice) nell'intestazione, rendendo l'app generica per chiunque la usi. Entrambi i campi si sincronizzano tra i dispositivi tramite una nuova tab "Profilo" nel foglio Google (se collegato) — stesso comportamento di categorie e risparmi, inclusa la coda offline se manca la rete. La data di nascita non compare in Dashboard: resta in Impostazioni, pensata per eventuali funzionalità future (es. proiezioni legate all'età, quando si arriverà a parlare di investimenti).

## v1.21.0
- **Nuova scheda "Analisi"**, dedicata all'analisi approfondita delle spese (separata dalla Dashboard, che resta per la lettura veloce quotidiana):
  - **Andamento categoria**: grafico degli ultimi 12 mesi per la categoria di spesa scelta.
  - **Proiezione fine mese**: speso finora, media giornaliera, proiezione a fine mese basata sul ritmo attuale, e confronto con lo stesso punto del mese scorso.
  - **Spesa media per giorno della settimana**: media di spesa per ciascun giorno (Lun-Dom), calcolata sull'effettivo numero di occorrenze di quel giorno nel periodo storico — non solo sui giorni in cui hai speso — per un confronto feriali/weekend più corretto.
  - Tutto calcolato sui dati già presenti in locale, nessuna sincronizzazione aggiuntiva richiesta.

## v1.20.1
- **Transazioni ordinate per data, più recenti in alto.** Prima l'ordine seguiva solo l'inserimento/sincronizzazione (con dati importati o sync poteva uscire fuori ordine); ora è sempre per data decrescente, con le voci dello stesso giorno ordinate per aggiunta più recente.

## v1.20.0
- **Categoria di entrata "Altro" rinominata in "Paghetta".** Migrazione automatica anche per chi ha già dei dati salvati (locale + sincronizzata sul foglio Google al primo avvio di questa versione) — tocca solo quella categoria di sistema specifica, non un'eventuale categoria "Altro" creata a mano in seguito.
- **Corretta la tabella "Confronto per anno" (Categorie) su telefono**: con 4 o più anni le colonne si stringevano troppo e i numeri si accavallavano. Ora la larghezza minima della tabella si adatta al numero di anni presenti — con pochi anni resta compatta, con più anni scorre in orizzontale invece di schiacciarsi.

## v1.19.1
- **Corretto bug del fuso orario sulla data "oggi".** La data precompilata su nuove transazioni/movimenti, il nome del file di backup e il "mese corrente" usato per gli avvisi budget e il confronto categorie si basavano su UTC invece che sull'ora locale. Nella finestra tra mezzanotte e le 1-2 di notte (a seconda di ora solare/legale), l'app avrebbe mostrato ancora il giorno/mese precedente come "oggi". Ora usa sempre la data del calendario locale del dispositivo. (I timestamp tecnici di sincronizzazione/archiviazione restano invece in UTC, correttamente: sono istanti assoluti, non giorni di calendario.)

## v1.19.0
- **Nuovo: confronto col mese precedente in "Categorie principali"** (Dashboard, vista "mese"). Ogni categoria mostra un badge con la variazione % rispetto al mese scorso: rosso se sali, verde se scendi, "=" se la variazione è sotto il 3% (variazione ritenuta poco significativa), "nuovo" se il mese scorso non c'era spesa in quella categoria. Nessuna sincronizzazione aggiuntiva richiesta: usa i dati transazioni già presenti in locale.

## v1.18.1
- **Corrette incoerenze cromatiche nel tema Scuro** (testo poco o per nulla leggibile):
  - Popup/toast di sincronizzazione: sfondo chiaro con testo bianco, quasi invisibile — ora il testo si adatta correttamente.
  - Pulsante di conferma eliminazione (Transazioni e Risparmi): scarso contrasto in Scuro — ora leggibile.
  - Box del codice Apps Script nella guida (scheda Backup): sfondo che si invertiva col tema, testo chiaro su chiaro — ora resta sempre un riquadro scuro leggibile, come un editor di codice.
  - Tooltip dei grafici (Andamento mensile, Categorie principali): restavano bianchi fissi anche in tema Scuro, stonando con il resto dell'interfaccia — ora seguono il tema.

## v1.18.0
- **Ricostruita dopo un problema tecnico dell'ambiente di lavoro** che ha cancellato la copia di lavoro del codice — ricreata da zero riprendendo tutte le funzioni fino alla v1.17.0.
- **Nuovo: eliminare a mano una riga direttamente su Google Sheets ora si riflette nell'app.** Prima la sincronizzazione automatica sapeva solo aggiungere il nuovo e rimuovere ciò che l'app stessa aveva "marchiato" come eliminato — una cancellazione manuale sul foglio (senza passare dall'app) restava invisibile. Ora, se qualcosa che risulta già inviato sparisce dal foglio, viene considerato eliminato anche in locale (transazioni, categorie, risparmi).
- Aggiunta nella guida in-app una nota sul passaggio "Nuova versione" del deployment su Apps Script, per non dimenticarlo nei prossimi aggiornamenti.

## v1.17.0
- Tema Chiaro / Scuro / Sistema, con icona ⚙ accanto al titolo.

## v1.16.2
- Rimossa la riga di diagnosi temporanea usata per individuare il bug della sincronizzazione dei Risparmi.

## v1.16.1
- Sincronizzazione verificata per davvero (lettura della risposta del foglio, non più una richiesta "cieca").
- Tolto l'alone blu al tocco dei pulsanti.

## v1.16.0
- Popup di sincronizzazione visibile su ogni scheda, e pulsante "sincronizza ora" in alto.

## v1.15.0
- "Chiudi un anno" e "Correggi le entrate" diventati pannelli richiudibili in fondo a Categorie.
- Scheda Backup riorganizzata: automatico vs azioni manuali, con spiegazioni chiare.

## v1.14.0
- Eliminazione "morbida" (soft delete) su ogni tab del foglio.
- Risparmi sincronizzati col foglio Google per la prima volta.

## v1.13.0
- Categorie (nomi, icone, colori, budget) sincronizzate col foglio Google.

## v1.12.1
- Le card Entrate/Uscite in Dashboard mostrano l'anno in corso, non più il totale storico.

## v1.12.0
- Tolta l'opzione "sempre" dal grafico Categorie principali.
- "Andamento mensile" diventato andamento cumulato del mese in corso.
- "Aggiusta saldo" in Risparmi.

## v1.10.x
- Barra di navigazione fissa in basso su telefono, barra laterale su computer.
- Vari bug di visualizzazione legati alla barra corretti (margine di sicurezza, rimbalzo elastico, stile rimasto da versione precedente).

## Versioni precedenti
- App base con Dashboard, Transazioni, Categorie, Backup su Google Sheets, chiusura automatica degli anni, tag Viaggio, sezione Risparmi.

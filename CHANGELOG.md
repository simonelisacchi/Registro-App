# Changelog — Registro

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

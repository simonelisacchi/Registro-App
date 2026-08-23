# Changelog — Registro

## v1.3.0
- **Tasto rapido**: pulsante flottante "+" sempre visibile (anche in Dashboard) per aggiungere una transazione senza cambiare scheda.
- **Risolto lo zoom automatico su iPhone**: Safari ingrandisce da solo la pagina quando tocchi un campo con testo sotto i 16px — tutti i campi dell'app sono stati portati a 16px, quindi non serve più fare pinch per tornare alla dimensione normale dopo aver scritto.
- **Sincronizzazione periodica**: oltre all'invio immediato ad ogni transazione, ogni 5 minuti l'app riprova automaticamente a inviare qualunque cosa fosse rimasta in sospeso (es. per mancanza di rete), senza bisogno di riaprire l'app.

## v1.2.3 — correzione seria
- **Trovata la vera causa dello schermo bianco**, confermata guardando dal vivo la console del tuo browser: (1) Babel, la libreria che traduce il codice, era rilasciata "senza numero di versione" e ha silenziosamente ricevuto un aggiornamento importante (versione 8) incompatibile con l'app; (2) il servizio da cui scaricavo le librerie (unpkg) stava rispondendo con errori temporanei proprio sul pacchetto dei grafici.
- **Cambiato fornitore delle librerie esterne**: da unpkg a jsDelivr, più stabile.
- **Tutte le versioni ora sono bloccate a un numero preciso** (React 18.3.1, Recharts 2.15.4, Babel 7.28.1, ecc.) — non prenderanno mai più aggiornamenti automatici a mia insaputa che potrebbero rompere l'app.
- Verificato dal vivo, nel browser, prima di consegnarlo: caricamento delle librerie, traduzione del codice e disegno a schermo, tutti confermati funzionanti.

## v1.2.2
- Icona dell'app sostituita con il tuo vero logo (Logo_Dark, dal progetto) al posto del segnaposto disegnato prima.

## v1.2.1 — correzione
- **Risolto: schermo bianco.** Mancava una libreria di supporto (`react-is`) richiesta da Recharts per disegnare i grafici; senza quella l'intera app si bloccava prima di mostrare qualsiasi cosa. Aggiunta allo script e alla cache offline.

## v1.2.0
- Nuova icona dell'app: moneta stilizzata con "R" e un rigo (richiama il registro contabile), negli stessi colori dell'app.
- Guida di pubblicazione passata da Vercel a **GitHub Pages** (un account in meno, incorporato in GitHub).

## v1.1.0
- **Offline reale**: un service worker mette in cache l'app e le sue librerie al primo avvio online, così dopo si apre anche senza rete.
- **Coda di sincronizzazione**: se un invio al foglio Google fallisce per mancanza di rete, resta in attesa e riparte da solo appena il dispositivo torna online (o al successivo avvio dell'app). Contatore visibile nella scheda Backup.
- Numero di versione visibile in fondo all'app.

## v1.0.0
- Prima versione dell'app web indipendente (senza dipendenza da Claude), dati salvati nel browser del dispositivo.
- Dashboard con andamento mensile, categorie principali, riepilogo mensile.
- Budget mensili per categoria con avvisi automatici.
- Backup su Google Sheets (invio automatico ad ogni transazione, tab per anno per restare leggero, caricamento/ripristino da foglio).
- Chiusura automatica degli anni passati: totale per categoria conservato per sempre, transazioni di dettaglio eliminate.
- Sezione Investimenti con percorso di studio, risorse personali e appunti.

# Pubblicare Registro con GitHub Pages

Un solo account (GitHub), nessun servizio esterno in più.

## 1. Crea il repository

1. Vai su [github.com](https://github.com) e accedi (o crea un account gratuito).
2. In alto a destra, **+** → **New repository**.
3. Nome, es. `registro`. Lascialo **Public**. **Create repository**.

## 2. Carica i file

1. Nella pagina del repository → **Add file → Upload files**.
2. Trascina dentro `index.html`, `sw.js` e `manifest.json` (tutti alla radice, non dentro cartelle).
3. **Commit changes**.

## 3. Attiva GitHub Pages

1. Nel repository, in alto: **Settings**.
2. Nel menu a sinistra: **Pages**.
3. Sotto "Build and deployment" → **Source**: scegli **Deploy from a branch**.
4. **Branch**: `main`, cartella `/ (root)` → **Save**.
5. Aspetta un paio di minuti, poi in cima alla stessa pagina comparirà il link, del tipo:
   `https://tuonome.github.io/registro/`

## 4. Aggiornamenti futuri

1. Vai sul repository su GitHub.
2. Apri il file da aggiornare → icona della matita (Edit), oppure **Add file → Upload files** per sostituirlo.
3. **Commit changes**.
4. GitHub Pages si aggiorna da solo in un paio di minuti — non serve toccare nient'altro.

> Nota tecnica: se aggiorni `sw.js` ricordati che dentro c'è una riga `CACHE_NAME` con un numero di versione — quando cambi qualcosa, io la aggiorno già nelle versioni che ti mando, ma se un giorno editi tu direttamente il file, cambia anche quel numero: è quello che dice ai telefoni "scarica la versione nuova" invece di continuare a mostrare quella salvata offline.

## 5. Installarla sul telefono

Apri il link `.github.io` da Safari su iPhone → **Condividi → Aggiungi a Home**. Diventa un'icona a schermo intero, come un'app vera — con la nuova icona che abbiamo disegnato.

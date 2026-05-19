# Lektion 13: Dateisystem-Zugriff mit Node.js (fs)

Im Browser haben wir keinen direkten Zugriff auf Dateien aus Sicherheitsgründen. Aber in Node.js ist das unser wichtigstes Werkzeug: das `fs`-Modul (File System).

## Konzepte
- **`fs`**: Ein eingebautes Modul in Node.js, um Dateien zu lesen oder zu schreiben.
- **`writeFile`**: Damit kannst du Daten in eine Datei speichern.
- **`promises`**: Wir nutzen das `fs/promises`-Modul, damit wir auch hier `async/await` verwenden können, genau wie bei `fetch`.

### Beispiel
```javascript
const fs = require('fs/promises');

async function saveFile() {
    let data = "Das ist mein Textinhalt.";
    await fs.writeFile('meine_datei.txt', data);
    console.log("Datei gespeichert!");
}
```

## Aufgabe
Erstelle eine Datei `js_file_system.js` im Ordner `javascript_baseline/` (da dies wieder Node.js-Logik ist, nicht Browser):

1. Nutze `require('fs/promises')`, um das Dateisystem-Modul zu laden.
2. Kopiere deine Logik zum Abrufen der Benutzer-Daten (`fetch`).
3. Anstatt die Daten nur in der Konsole auszugeben, wandle sie mit `JSON.stringify(users, null, 2)` in einen schönen Text um.
4. Speichere diesen Text in einer Datei namens `users.json`.
5. Nutze `try...catch`, um Fehler beim Speichern abzufangen.

*Tipp: `null, 2` bei `JSON.stringify` sorgt dafür, dass die Datei ordentlich formatiert ist und nicht nur in einer langen Zeile steht.*

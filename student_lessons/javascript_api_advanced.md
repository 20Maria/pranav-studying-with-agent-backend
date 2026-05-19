# Lektion 10: Fehlerbehandlung und Daten senden (POST)

In echten Apps kann das Internet ausfallen oder der Server kann Fehler zurückgeben. Deshalb brauchen wir `try...catch` und für das Senden von Daten nutzen wir eine `POST`-Anfrage.

## Fehlerbehandlung mit `try...catch`
`try` versucht den Code auszuführen. Wenn ein Fehler auftritt, springt das Programm sofort in den `catch`-Block, anstatt abzustürzen.

```javascript
async function safeFetch() {
    try {
        let response = await fetch('https://invalid-url');
    } catch (error) {
        console.log("Fehler aufgetreten: " + error.message);
    }
}
```

## Daten senden mit `POST`
Standardmäßig sendet `fetch` nur eine `GET`-Anfrage (Daten lesen). Für `POST` (Daten senden) müssen wir zusätzliche Optionen angeben:

```javascript
await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({ title: 'Hallo Welt', body: 'Das ist mein Post', userId: 1 }),
    headers: { 'Content-Type': 'application/json' }
});
```

## Aufgabe
Erstelle die Datei `js_api_advanced.js` im Ordner `javascript_baseline/`:

1. Schreibe eine `async`-Funktion `createPost()`.
2. Sende einen neuen Post an `https://jsonplaceholder.typicode.com/posts` mit `POST`.
3. Nutze `try...catch`, um die Anfrage zu umschließen.
4. Gib im `try` den Status der Antwort aus und im `catch` den Fehler.
5. Rufe `createPost()` auf.

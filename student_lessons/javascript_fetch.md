# Lektion 9: Daten von einer API abrufen (Fetch API)

In der echten Welt kommen Daten oft von externen Servern. Die `fetch()`-Funktion ist der Standardweg, um diese Daten abzurufen.

## Konzepte
- **API**: Eine Schnittstelle (Application Programming Interface), über die dein Programm mit anderen Diensten kommunizieren kann.
- **fetch()**: Eine eingebaute Funktion, die eine Anfrage an eine URL sendet und ein `Promise` mit der Antwort (`Response`) zurückgibt.
- **json()**: Da die Rohdaten oft als Text (JSON) ankommen, wandelt die `.json()`-Methode diesen Text in ein JavaScript-Objekt um. Da dieser Vorgang Zeit braucht, muss auch hier `await` verwendet werden.

### Beispiel
```javascript
async function getData() {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    let data = await response.json();
    console.log(data.title);
}
```

## Aufgabe
Erstelle eine Datei `js_fetch.js` im Ordner `javascript_baseline/`, die Folgendes tut:

1. Nutze die URL: `https://jsonplaceholder.typicode.com/users/1`.
2. Schreibe eine `async`-Funktion `fetchUserData()`.
3. Lade die Daten mit `fetch()`, wandle die Antwort in JSON um und gib den `name` und die `email` des Benutzers in der Konsole aus.

# Lektion 8: Asynchrones JavaScript (Promises & Async/Await)

In der realen Welt müssen Programme oft warten (z. B. auf Daten aus dem Internet). JavaScript erledigt das asynchron, damit das Programm nicht "einfriert".

## Konzepte
- **Promise**: Ein Objekt, das ein Ergebnis verspricht, das in der Zukunft eintritt. Stell es dir wie einen Gutschein vor: Du hast ihn jetzt, aber das Essen bekommst du erst später.
- **async/await**: Ermöglicht es, asynchronen Code so zu schreiben, dass er sich wie synchroner Code liest.

### Beispiel: Ein einfaches Promise
```javascript
let myPromise = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Daten sind da!"); // Hier wird das Versprechen erfüllt
    }, 1000);
});

// So nutzt man es:
myPromise.then((result) => console.log(result));
```

### Beispiel: async/await
`async` macht eine Funktion asynchron, `await` sagt: "Warte hier, bis das Promise fertig ist".

```javascript
async function getData() {
    let result = await myPromise; // Code wartet hier, ohne den Rest zu blockieren
    console.log(result);
}
```

## Aufgabe
Erstelle eine Datei `js_async.js` im Ordner `javascript_baseline/`, die Folgendes tut:

1. Definiere eine Funktion `simulateLogin(username)`, die ein `Promise` zurückgibt. Dieses Promise soll nach einer Sekunde (`setTimeout`) ein Objekt zurückgeben: `{ status: "success", user: username }`.
   *Tipp:* Nutze `new Promise((resolve) => { setTimeout(() => resolve(...), 1000); });`
2. Definiere eine `async`-Funktion namens `handleLogin(username)`, die `simulateLogin` aufruft (nutze dabei `await`).
3. Gib das Ergebnis des Logins in `handleLogin` mit `console.log` aus.
4. Rufe `handleLogin` mit einem beliebigen Benutzernamen auf.

# Lektion 11: Die Abschlussherausforderung

Du hast bisher alles gelernt, was man für den Einstieg in die Backend-Programmierung braucht! Jetzt kombinieren wir alles in einer finalen Aufgabe.

## Die Aufgabe: "Der API-Daten-Manager"

Erstelle die Datei `js_capstone.js` im Ordner `javascript_baseline/`. Ziel ist es, eine Liste von Benutzern von einer API zu laden, sie zu filtern und einen neuen Benutzer zu "registrieren".

### Anforderungen:

1. **Daten abrufen**: Lade eine Liste aller Benutzer von `https://jsonplaceholder.typicode.com/users` mit einem `fetch` (GET). Umschließe dies mit einem `try...catch`.
2. **Filtern**: Schreibe eine Funktion, die das geladene Array entgegennimmt und nur Benutzer zurückgibt, deren `username` länger als 6 Zeichen ist. (Nutze eine Schleife oder `.filter()`).
3. **Analyse**: Gib für jeden dieser "gefilterten" Benutzer den Namen und die Firma (`company.name`) mit einem `console.log` aus.
4. **Registrierung**: Sende am Ende einen "Dummy-Benutzer" (ein Objekt mit `name` und `email`) mit einer `POST`-Anfrage an `https://jsonplaceholder.typicode.com/users`.
5. **Fehlerbehandlung**: Sorge dafür, dass bei allen Netzwerkaufrufen Fehler abgefangen werden.

### Tipps:
- Gehe schrittweise vor: Erst Daten laden, dann filtern, dann ausgeben, zuletzt POST.
- Nutze `async/await` durchgehend für eine saubere Struktur.
- Überprüfe mit `console.log`, ob die API-Daten so ankommen, wie du sie erwartest.

Viel Erfolg! Das ist der "große Test", um zu sehen, ob du die Konzepte flüssig miteinander verknüpfen kannst. Wenn du fertig bist, schauen wir uns den Code gemeinsam an.

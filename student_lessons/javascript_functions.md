# Lektion 6: Funktionen

Funktionen sind die Bausteine echter Anwendungen. Sie ermöglichen es dir, Code in wiederverwendbare Blöcke zu gruppieren, die spezifische Aufgaben ausführen. Anstatt dieselbe Logik zu wiederholen, definierst du eine Funktion einmal und "rufst" sie immer dann auf, wenn du sie brauchst.

## Anatomie einer Funktion
```javascript
function begruessung(name) {
  return "Hallo, " + name + "!";
}

let nachricht = begruessung("Masha");
console.log(nachricht);
```

### Kernkonzepte
1. **Definition**: Das Schlüsselwort `function`, ein Name und Parameter innerhalb von `()`.
2. **Körper**: Der Code, der ausgeführt wird, wenn die Funktion aufgerufen wird (innerhalb von `{}`).
3. **Return**: Das Schlüsselwort `return` sendet einen Wert an die Stelle zurück, von der die Funktion aufgerufen wurde.

## Sechste Aufgabe
Erstelle eine Datei `js_functions.js` im Ordner `javascript_baseline/`, die Folgendes tut:
1. Definiere eine Funktion `calculateArea`, die `width` (Breite) und `height` (Höhe) als Parameter entgegennimmt und die Fläche zurückgibt.
2. Definiere eine Funktion `isAdult`, die das `age` (Alter) entgegennimmt und `true` zurückgibt, wenn die Person 18 Jahre oder älter ist, ansonsten `false`.
3. Rufe beide Funktionen mit verschiedenen Werten auf und gib die Ergebnisse mit `console.log` aus.

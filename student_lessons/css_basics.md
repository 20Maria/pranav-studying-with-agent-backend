# Lektion 12: CSS Grundlagen (Design & Layout)

HTML definiert die Struktur deiner Seite, aber CSS definiert das Aussehen.

## Die drei Wege für CSS
Wir nutzen am besten eine externe Datei, damit der Code sauber bleibt.
1. Erstelle eine Datei namens `style.css` im Ordner `web_baseline/`.
2. Verknüpfe sie in deiner `index.html` innerhalb des `<head>`-Bereichs:
   `<link rel="stylesheet" href="style.css">`

## Wichtige Konzepte
- **Selektoren**: Du wählst aus, was du stylen willst (z.B. `h2 { color: blue; }`).
- **Box-Modell**: Jedes Element ist eine Box mit `margin` (Abstand außen), `border` (Rahmen) und `padding` (Abstand innen).
- **Display**: `display: block` macht ein Element zu einer eigenen Zeile, `display: inline` lässt es im Textfluss.

## Aufgabe
1. Erstelle `style.css`.
2. Gib dem `h2`-Element eine andere Farbe und einen Rahmen (`border`).
3. Setze `h2` auf `display: inline`, damit es nicht mehr automatisch in die nächste Zeile springt.
4. Ändere die Hintergrundfarbe deines `div#output` Containers.

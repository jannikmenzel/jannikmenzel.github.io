---
title: "wie lernen chatbots das sprechen"
slug: "chatbots"
date: 2025-03-13
image: "/cover-images/Artikel-15.jpg"
teaser: "Tauche ein in die Welt der Chatbots! Lerne, wie Large Language Models Wörter in Vektoren umwandeln und durch geometrische Beziehungen tiefere Bedeutungen entdecken, um Sprache auf beeindruckende Weise zu verstehen."
readingtime: "9 min"
type: "default"
---

![Blogbild](/cover-images/Artikel-15.jpg)

# Wie lernen Chatbots das Sprechen?

**Veröffentlicht am: 13. März 2025**

---

### Large Language Models

Large Language Models (LLMs) wie GPT-4, DeepSeek oder Google Gemini sind beeindruckende Beispiele für moderne Künstliche Intelligenz (KI). Sie simulieren menschenähnliche Kommunikation, sprechen mehr Sprachen als ein Mensch je könnte und verfassen kreative Texte, Gedichte und Lieder. Für viele ist die Existenz von LLMs ein beunruhigender Beweis für den rasanten Fortschritt und die wachsende Präsenz künstlicher Intelligenz. In diesem Artikel entschlüsseln wir die Funktionsweise dieser künstlichen Intelligenzen und lichten die Ungewissheit, die seit jeher über solche Technologien vorherrscht.

---

### Ein Blick hinter die Kulissen: Wie ein LLM Text verarbeitet

Um zu verstehen, wie LLMs arbeiten, müssen wir zunächst erörtern, wie sie Texte verarbeiten. Statt Worte oder ganze Sätze als geschlossene Einheit zu betrachten, zerlegen sie diese in kleinere, bedeutungstragende Teile – sogenannte **Tokens**. Dabei kann ein Token ein ganzes Wort, ein Wortteil oder lediglich ein einzelnes Zeichen beinhalten. Ein Beispiel: Der Satz „Die Sonne geht im Westen unter“ wird in die folgenden Tokens zerlegt:

	“Die” “Sonne” “geht” “im” “Westen” “unter”

Diese Tokens werden anschließend durch ein Verfahren namens **Embedding** in numerische Vektoren umgewandelt. Ein Embedding ist eine mathematische Darstellung eines Tokens, die seine Bedeutung im Kontext des Textes widerspiegelt. Man kann sich diesen Prozess als das Anordnen von Punkten in einem hochdimensionalen Raum vorstellen, wobei semantisch ähnliche Tokens nahe beieinander liegen, sich also in Bedeutungsclustern sammeln. Das Token „Sonne“ liegt dabei beispielsweise in der Nähe von Tokens wie „Licht“, „Tag“ oder „Himmel“.

Ein wichtiger Bestandteil dieser Technik ist die **Self-Attention**, die es dem Modell ermöglicht, verschiedene Bereiche eines Textes miteinander zu verbinden – unabhängig davon, wie weit sie voneinander entfernt sind. So kann beispielsweise eine Verbindung zwischen „Sonne“ und „Westen“ hergestellt werden, selbst wenn „Westen“ erst weiter hinten im Satz auftritt. Durch diesen Mechanismus wird es dem LLM ermöglicht, den gesamten Kontext eines Satzes zu erfassen und präzise Vorhersagen über die Bedeutung zu treffen.

---

### Ein Gedankenspiel: Das semantische Verständnis der KI

Um das Verständnis von LLMs noch weiter zu vertiefen, können wir ein Gedankenexperiment wagen. Man stelle sich vor, dass Wörter als Vektoren in einem hochdimensionalen Raum interpretiert werden, wobei jeder Vektor eine bestimmte semantische Bedeutung repräsentiert. Interessanterweise können die Beziehungen zwischen diesen Vektoren durch geometrische Abstände und Richtungen erfasst werden. So lässt sich durch algebraische Operationen wie der Addition und Differenz zweier oder mehrerer Vektoren ein tieferes semantisches Verständnis ableiten.

Beispielsweise ergibt die Differenz der Embeddings von „Mann“ und „Frau“ in Kombination mit dem Token „Onkel“ einen Vektor, der dem Token „Tante“ sehr nahekommt. Ein weiteres Beispiel kann durch die Vektoren für Deutschland und Italien illustriert werden. Wenn man die Differenz dieser beiden Vektoren zum Embedding des Tokens Hitler addiert, ergibt sich ein Vektor, der dem Token Mussolini sehr nahekommt. Solche semantischen Beziehungen sind nicht nur faszinierend, sondern auch essenziell für das tiefere Sprachverständnis, das LLMs durch Training erlernen. [[1]](#Referenzen)

---

### Von der Theorie zur Praxis: Wie LLMs lernen

Damit ein LLM die Fähigkeit zur "Sprache" entwickeln kann, wird es mit Milliarden von Texten aus verschiedenen Quellen, wie Artikeln, Büchern oder Websites trainiert. Dieser Trainingsprozess, auch als **Pretraining** bezeichnet, beinhaltet das probabilistische Vorhersagen des nächsten Wortes in einem Satz. Ein einfaches Beispiel:

    Eingabe: "Die Sonne geht im …"
    
    Vorhersage: "Westen unter."

Durch Milliarden solcher Vorhersagen entwickelt das Modell ein tiefes Verständnis der Sprache. Jede Vorhersage und jedes erzeugte Wort basiert auf Wahrscheinlichkeiten, die aus den gelernten Daten abgeleitet werden und im Lernprozess gewichtet werden. 

Es ist wichtig zu betonen, dass LLMs keine Vorkenntnisse, Logik oder gesunden Menschenverstand besitzen. Sie treffen Entscheidungen auf Basis der Daten, mit denen sie trainiert wurden. Wenn zum Beispiel wichtige Informationen über eine bekannte Person wie Albert Einstein fehlen, kann das Modell falsche oder ungenaue Verbindungen herstellen. In einem solchen Fall könnte eine Vorhersage wie folgt aussehen:

    Eingabe: "Albert Einstein war ein …"
    
    Vorhersage: "Koch."

In diesem Fall wählte das LLM **Koch** als die am wahrscheinlichsten zutreffende Fortsetzung des Satzes. Aus einem grammatikalischen Standpunkt gesehen, ist das auch richtig – lediglich die Assoziation der Person Albert Einstein fehlte in der Evaluation.

---

### Wie LLMs zu Experten werden

Nachdem ein LLM das Pretraining abgeschlossen hat, folgt oft eine Feinabstimmung (Fine-Tuning), bei der das Modell auf spezifische Aufgaben oder Daten angepasst wird. In dieser Phase wird das Modell mit gezielten Datensätzen trainiert, um seine Leistung in bestimmten Bereichen zu verbessern. Beispielsweise könnte ein Modell für die medizinische Textverarbeitung oder die juristische Dokumentenanalyse feinjustiert werden, um in diesen spezialisierten Bereichen präziser und effizienter zu arbeiten.

---

### Fazit: Chancen und Herausforderungen der LLMs

Die Entwicklung von Large Language Models zeigt, wie weit die KI-Technologie bereits fortgeschritten ist. LLMs sind in der Lage, komplexe sprachliche Zusammenhänge zu verstehen, Text zu generieren und in unterschiedlichen Bereichen beeindruckende Leistungen zu erbringen. Gleichzeitig bringen sie aber auch Herausforderungen mit sich. Die Qualität der Trainingsdaten und die Gefahr von Fehlinformationen sind nur zwei der vielen Fragestellungen, die im Umgang mit LLMs bedacht werden müssen. Es ist wichtig zu verinnerlichen, dass LLMs im Grunde nichts weiter als Vorhersagemaschinen sind. Sie analysieren Muster in großen Datenmengen und treffen Entscheidungen basierend auf Wahrscheinlichkeiten, ohne echtes Verständnis oder Kontext.

---

### Referenzen

1. [Transformers (how LLMs work) explained visually | DL5](https://www.youtube.com/watch?v=wjZofJX0v4M) von 3Blue1Brown
2. [ScadsAI](https://scads.ai/)

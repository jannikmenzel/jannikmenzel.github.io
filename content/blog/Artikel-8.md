---
title: "Wie Algorithmen unsere Leben bestimmen"
slug: "algorithmen-im-alltag"
date: 2025-02-02
image: "/cover-images/Artikel-8.jpg"
teaser: "Algorithmen beeinflussen viele Entscheidungen im Alltag – von der Jobsuche bis hin zu persönlichen Beziehungen. Entdecke, was es mit der magischen Zahl 37 auf sich hat und warum die guten immer gewinnen."
readingtime: "8 min"
type: "default"
---

![Blogbild](/cover-images/Artikel-8.jpg)

# Wie Algorithmen unsere Leben bestimmen

**Veröffentlicht am: 02. Februar 2025**

---

### Ein Geständnis und die magische Zahl 37

Auch wenn viele bisher nicht darüber nachgedacht haben, die Wahrheit ist: Algorithmen verbergen sich hinter einer Vielzahl alltäglicher Entscheidungen – vom Projektmanagement über die Jobsuche bis hin zur Konfliktlösung. Das Schöne daran: Wer die dahinterliegenden Prinzipien versteht, kann sie gezielt für sich nutzen und so die Oberhand gewinnen. Ein besonders bekanntes Problem in diesem Zusammenhang ist das *Optimal-Stopping-Problem*. Es hilft uns, im scheinbar endlosen Dschungel an Möglichkeiten den perfekten Zeitpunkt für eine Entscheidung zu finden – sei es bei der Wohnungssuche, der Jobwahl oder der Partnersuche. Viele kennen das Gefühl, aus Angst, eine noch bessere Option zu verpassen, keine endgültige Entscheidung treffen zu können – eine klassische Folge der *Fear of Missing Out* (FOMO).

Hier kommt die magische Zahl 37 ins Spiel. Mathematiker haben herausgefunden, dass diese Zahl den wahrscheinlich besten Ausgang des Problems liefert. Das Prinzip ist einfach: Betrachtet man beispielsweise 100 Jobangebote, sollte man die ersten 37 % nur analysieren und bewerten – etwa anhand von Kriterien wie Gehalt, Urlaubstagen oder Arbeitsweg. Hat man ein besonders gutes Referenzangebot gefunden, gilt es, ab diesem Punkt das nächstbeste Angebot zu wählen, das die zuvor bewerteten übertrifft. Dieses mathematische Konzept bietet uns eine kluge Strategie, die uns helfen kann, bessere Entscheidungen zu treffen – ganz ohne endloses Grübeln oder Angst, etwas zu verpassen.

---

### Die Kohäsion der Spieltheorie

Das nächste und wohl noch bekanntere Beispiel ist das Forschungsgebiet der Game Theory – besser bekannt als Prisoner’s Dilemma (Gefangenendilemma). Die Spieltheorie selbst ist zwar kein Algorithmus, bietet jedoch ein strukturiertes System, in dem sich verschiedene algorithmische Strategien bewähren können. Bevor wir uns tiefer mit diesen Konzepten befassen, werfen wir zunächst einen Blick auf das berühmte Prisoner’s Dilemma.

Die Grundidee besteht darin, dass zwei Verdächtige eines Verbrechens unabhängig voneinander von der Polizei verhört werden. Ihnen wird ein Deal angeboten: Wenn einer von ihnen den anderen verrät, während der andere schweigt, geht der Verräter straffrei aus, während der Schweigende die volle Strafe erhält. Entscheiden sich beide für den Verrat, erhalten sie eine mittlere Strafe. Wenn jedoch beide schweigen, fällt ihre Strafe am geringsten aus. Die Spieltheorie beschäftigt sich genau mit dieser Dynamik zwischen Kooperation und Verrat und findet in zahlreichen Bereichen Anwendung – von wirtschaftlichem Wettbewerb über politische Beziehungen und Soziologie bis hin zur Evolutionstheorie.

Besonders spannend wird es, wenn man nach Strategien zur Lösung dieses Problems sucht. Einer der Pioniere auf diesem Gebiet ist *Robert Axelrod*. Ende der 1970er Jahre führte er ein Experiment durch, bei dem 15 verschiedene Algorithmen unter den Regeln des Prisoner’s Dilemma gegeneinander antraten. Jeder Algorithmus verfolgte dabei eine eigene Strategie. Einige setzten auf die Naughty-Methode, bei der sie die Kooperationsbereitschaft ihres Gegners systematisch ausnutzten, indem sie so oft wie möglich verrieten. Andere wiederum gehörten zur Nice-Kategorie und setzten konsequent auf Kooperation, um das Risiko eines gegenseitigen Punkteverlusts durch Verrat zu minimieren.

---

### Tit for Tat – The winning strategy

Im Folgenden wollen wir die Dynamiken des Experiments näher betrachten und einige lehrreiche Erkenntnisse daraus gewinnen. Doch zuvor ein wichtiger Hinweis: Im Gegensatz zum klassischen Prisoner’s Dilemma wurden die Algorithmen nicht nur einmalig vor die Entscheidung gestellt, sondern mussten über eine festgelegte Anzahl von Iterationen hinweg die bestmögliche Strategie entwickeln. Es gilt: Bei einmaligem Kontakt ist Verrat fast immer die effizientere Strategie. Axelrod schrieb dazu in seinem Buch: "What makes it possible for cooperation to emerge is the fact that the players might meet again." [[1]](#Referenzen) Betrachten wir nun einige der im Experiment getesteten Strategien:

> **Friedman**: Beginnt mit Kooperation, bis er von seinem Gegenspieler verraten wird. Ab diesem Punkt verrät Friedmann seinen Gegner bis zum Ende des Spiels.

> **Tester**: Beginnt mit Verrat, um die Strategie seines Gegners zu testen. Wenn der Gegner ebenfalls mit Verrat antwortet, kopiert Tester ab sofort jeden Zug seines Gegners. Andernfalls wird Tester seinen Gegner fortan in jedem zweiten Zug verraten.

> **Tit for Tat**: Beginnt mit Kooperation und imitiert anschließend stets den letzten Zug seines Gegners.

Es stellte sich heraus, dass die erfolgreichsten Strategien allesamt der Kategorie nice angehörten, das heißt, sie waren nicht die ersten, die ihren Gegner verrieten. Zudem gewann unvorhergesehenerweise die simpelste Strategie **Tit for Tat** das Experiment. Die Gründe dafür sind umso interessanter.

---

### Freundlichkeit, Vergeltung, Vergebung und Transparenz

Die Erfolgsstrategie von Tit for Tat lässt sich durch einige wesentliche Eigenschaften zusammenfassen. Zunächst agierte der Algorithmus freundlich, was bedeutet, dass er niemals als Erster Verrat beging. Stattdessen setzte er auf Kooperation als Ausgangspunkt. Darüber hinaus reagierte Tit for Tat auf Verrat stets mit sofortiger Vergeltung, was ein klares Signal setzte, dass unkooperatives Verhalten nicht toleriert wird. Doch ebenso schnell zeigte Tit for Tat die Fähigkeit zur Vergebung und setzte die Kooperation fort, sobald der Gegner ebenfalls kooperierte. Ein weiterer Schlüsselpunkt dieser Strategie ist ihre Transparenz: Jeder Schritt, den Tit for Tat unternahm, war deterministisch, was die Wahrscheinlichkeit einer langfristigen Kooperation erhöhte, da der Gegner wusste, dass er durch eine kooperative Haltung auch kooperative Reaktionen zu erwarten hatte.

---

### Eine Lektion in Sachen Zusammenarbeit

Aus den Ergebnissen von Axelrods Experiment lassen sich verschiedene Schlüsse ziehen. Es steht jedoch fest, dass die **Tit for Tat**-Strategie in jedem Fall die Oberhand behält. Selbst als Axelrod das Experiment unter veränderten Bedingungen wiederholte und Algorithmen hinzufügte, die gezielt darauf abzielten, **Tit for Tat** zu schlagen, blieb das Ergebnis unverändert. Daraus können wir ableiten, dass uns eine freundliche, vergebende und transparente Haltung, verbunden mit klaren Grenzen und angemessenen Reaktionen, im Leben einige Vorteile verschaffen kann. Übrigens: Die Gesamtheit der freundlichen Algorithmen konnte, als Axelrod sie gegeneinander spielen ließ, stets die nasty Algorithmen besiegen. Es kann sich also durchaus lohnen, sich mit Menschen zu umgeben, die diese Eigenschaften teilen.

---

### Referenzen {#Referenzen}

1. **Die Evolution der Kooperation** von Robert Axelrod
2. **Algorithms to Live By** von Brian Christian & Tom Griffiths

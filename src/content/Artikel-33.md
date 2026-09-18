---
title: "Die KI-Blase: eine aktuelle Risikobewertung"
seoTitle: "KI-Blase 2026: Wo die Risiken wirklich liegen"
slug: "ki-blase-oder-boom"
date: 2026-09-18
image: "../images/cover-images/Artikel-33.jpg"
teaser: "Nvidia macht Rekordgewinne, Oracle baut auf Kredit, und laut MIT zeigen 95 Prozent der Firmen-KI-Projekte keine Wirkung. Wo in der KI-Branche das Blasenrisiko steckt, was es antreibt und wer die Rechnung zahlt, wenn die Blase platzt."
readingtime: "7 min"
type: "default"
---

# Die KI-Blase: eine aktuelle Risikobewertung

**Veröffentlicht am: 18. September 2026**

---

## Einleitung

In kaum einem Jahr wurde so hitzig über eine mögliche Finanzblase diskutiert wie 2026. Auslöser sind die enormen Investitionen in Künstliche Intelligenz. Der Internationale Währungsfonds (IWF) und die Bank für Internationalen Zahlungsausgleich (BIZ), eine Art Dachorganisation der Zentralbanken, warnen offiziell vor Risiken für die weltweite Finanzstabilität [[1]](#1) [[2]](#2). US-Notenbankchef Jerome Powell widerspricht: Laut Anders als die Internetfirmen der Jahrtausendwende können die großen KI-Unternehmen bereits echte, wachsende Umsätze vorweisen [[3]](#3).

Beide Positionen können aus ihrer jeweiligen Perspektive gut begründet werden, ein einfaches Ja oder Nein greift also zu kurz. Deshalb prüft dieser Artikel, ob und wo in der KI-Branche eine Blase besteht, was das Risiko antreibt, welche Erwartungen der Markt schon eingepreist hat und was ein Platzen für die Realwirtschaft bedeuten würde.

---

## Wo sitzt das Risiko?

Wer pauschal von "der KI-Blase" spricht, behandelt die Branche, als hätte sie eine einheitliche Bewertung. Tatsächlich lassen sich zwei unterschiedliche Entwicklungen beobachten: **Buildout**, also ein solide finanzierter Ausbau, bei dem Nachfrage und Einnahmen mitwachsen, und **Bubble Risk**, also Bereiche, in denen die Bewertungen den zugrunde liegenden Geschäftszahlen bereits deutlich vorausgeeilt sind. Beide bestehen parallel, verteilen sich aber sehr ungleich auf die Wertschöpfungskette [[4]](#4).

Chip-Hersteller wie Nvidia sowie die großen Cloud-Konzerne (Microsoft, Google, Amazon, Meta) verzeichnen reale, zahlende Nachfrage bei hohen und weitgehend stabilen Margen. Energie- und Rechenzentrumsprojekte wie Oracle und CoreWeave, KI-Modellanbieter wie OpenAI und Anthropic sowie die meisten KI-Anwendungen tragen hingegen ein deutlich höheres Risiko. Sie sind teilweise kreditfinanziert, operieren mit unsicheren Margen oder verfügen über Geschäftsmodelle, die sich vergleichsweise leicht kopieren lassen.

Wie groß das Gefälle ist, zeigt Nvidia: Der Konzern steigerte seinen Rechenzentrumsumsatz im vergangenen Geschäftsjahr um 68 Prozent auf 193,7 Milliarden Dollar, bei unverändert hohen Margen [[5]](#5). Die Nachfrage schlägt sich hier unmittelbar in Gewinnen nieder. In den Risikosegmenten ist dieser Zusammenhang deutlich weniger gesichert. Der Kursverlauf von Nvidia und Oracle macht das sichtbar:

```echarts
{
  "title": { "text": "Aktienkurse von Nvidia und Oracle im Vergleich" },
  "color": ["#16a34a", "#dc2626"],
  "xAxis": {
    "type": "category",
    "data": ["Okt 24", "Nov 24", "Dez 24", "Jan 25", "Feb 25", "Mär 25", "Apr 25", "Mai 25", "Jun 25", "Jul 25", "Aug 25", "Sep 25", "Okt 25", "Nov 25", "Dez 25", "Jan 26", "Feb 26", "Mär 26", "Apr 26", "Mai 26", "Jun 26", "Jul 26", "Aug 26", "Sep 26"],
    "axisLabel": { "interval": 3 }
  },
  "yAxis": { "type": "value", "name": "US-Dollar", "min": 100 },
  "series": [
    {
      "name": "Nvidia",
      "type": "line",
      "showSymbol": false,
      "lineStyle": { "width": 3 },
      "data": [132.76, 138.25, 134.29, 120.07, 124.92, 108.38, 108.92, 135.13, 157.99, 177.87, 174.18, 186.58, 202.49, 177.00, 186.50, 191.13, 177.19, 174.40, 199.57, 211.14, 200.09, 200.75, 220.78, 219.58]
    },
    {
      "name": "Oracle",
      "type": "line",
      "showSymbol": false,
      "lineStyle": { "width": 3 },
      "data": [167.84, 184.84, 166.64, 170.06, 166.06, 139.81, 140.72, 165.53, 218.63, 253.77, 226.13, 281.24, 262.61, 201.95, 194.91, 164.58, 145.40, 147.11, 161.39, 225.78, 146.55, 129.87, 149.12, 145.68]
    }
  ]
}
```

<small>Quelle: Yahoo Finance ([NVDA](https://finance.yahoo.com/quote/NVDA/history/), [ORCL](https://finance.yahoo.com/quote/ORCL/history/)), Monatsschlusskurse in US-Dollar, Stand: 18. September 2026.</small>

Seit Ende Oktober 2024 hat die Nvidia-Aktie rund 65 Prozent zugelegt. Oracle erreichte im September 2025 den Höchststand innerhalb dieses Zeitraums, hat seitdem jedoch 48 Prozent verloren und notiert inzwischen 13 Prozent unter dem Niveau von Ende Oktober 2024. Drei Faktoren erklären diese unterschiedliche Entwicklung.

---

## Was das Risiko antreibt

### Schuldenfinanzierung

Oracle zeigt, was passiert, wenn der Ausbau auf Kredit läuft: Die Kosten für neue Rechenzentren stiegen schneller als die Einnahmen des Unternehmens. Im Juni 2026 erlebte der Konzern seine schlechteste Börsenwoche seit dem Platzen der Dotcom-Blase 2001, und S&P stufte die Kreditwürdigkeit auf die unterste Stufe des Investment-Grade-Bereichs herab [[6]](#6).

### Erlöslücke

Auch auf der Anwenderseite fehlt bislang der Nachweis, dass sich die Ausgaben auszahlen. Einer vielzitierten MIT-Untersuchung zufolge zeigen 95 Prozent der unternehmensinternen KI-Pilotprojekte trotz Milliardeninvestitionen keine messbare Wirkung auf Umsatz oder Gewinn [[7]](#7). Solche Pilotphasen sind naturgemäß ein frühes Stadium, dennoch deutet der Befund darauf hin, dass der Nutzen selten bei den zahlenden Unternehmen ankommt. Von deren Zahlungsbereitschaft leben jedoch die KI-Modellanbieter und -Anwendungen.

### Investitionstempo

Dazu kommt das Tempo, mit dem die Investitionen wachsen. Goldman Sachs schätzt, dass sich die weltweiten KI-Investitionsausgaben von rund 765 Milliarden Dollar im Jahr 2026 auf etwa 1,6 Billionen Dollar im Jahr 2031 mehr als verdoppeln dürften [[8]](#8):

```echarts
{
  "title": { "text": "Geschätzte weltweite KI-Investitionsausgaben" },
  "xAxis": { "type": "category", "data": ["2026", "2031 (Prognose)"] },
  "yAxis": { "type": "value", "name": "Mrd. US-Dollar" },
  "series": [{ "type": "bar", "data": [765, 1600] }]
}
```

Je mehr Kapital fließt, desto höher muss der spätere Umsatz der KI-Anwendungen ausfallen, damit sich die Rechnung trägt. Schließt sich die Erlöslücke nicht, wächst der Abstand jedes Jahr weiter.

---

## Wie viel Kapital ist bereits eingepreist?

Einen Blick auf die Erwartungen des Gesamtmarkts liefert das sogenannte Shiller-KGV. Vereinfacht gesagt zeigt es, wie teuer Aktien im Vergleich zu den langjährigen Durchschnittsgewinnen der Unternehmen sind. Ein hoher Wert bedeutet: Anleger zahlen heute schon für Gewinne, die eigentlich erst noch kommen müssten. Mit rund 41 liegt der Wert nur noch knapp unter dem bisherigen Rekord von 44,2 kurz vor dem Platzen der Dotcom-Blase im Jahr 2000, und weit über dem langfristigen Durchschnitt von 17 seit 1881 [[9]](#9).

```echarts
{
  "title": { "text": "Shiller-KGV im historischen Verlauf", "subtext": "Stand jeweils 1. Januar, zusätzlich der Rekordwert vom Dezember 1999" },
  "xAxis": { "type": "category", "data": ["1999", "Dez 1999", "2000", "2003", "2007", "2009", "2013", "2018", "2021", "2023", "2026"] },
  "yAxis": { "type": "value", "name": "Shiller-KGV" },
  "series": [{ "type": "line", "data": [40.57, 44.19, 43.77, 22.9, 27.21, 15.17, 21.9, 33.31, 34.51, 28.34, 39.65], "smooth": true }]
}
```

Für die Risikobewertung heißt das: Die Erwartungen sind hoch, enttäuschende Zahlen träfen also auf wenig Puffer. Ein hohes Shiller-KGV ist allerdings kein verlässliches Timing-Signal für kurzfristige Kursbewegungen. Und es sagt nichts darüber, welcher Teil der Branche, solider Ausbau oder Bubble-Risiko, diese Preise rechtfertigt.

---

## Was passiert, wenn die Blase platzt?

Im 19. Jahrhundert verlegten britische und amerikanische Investoren in kurzer Zeit viel zu viele Eisenbahnschienen. Ganze Landstriche wurden mit Gleisen überzogen, finanziert von Anlegern, die auf immer weiter steigende Gewinne hofften. Für die meisten von ihnen ging die Rechnung nicht auf: Zahlreiche Eisenbahngesellschaften gingen bankrott, viele Anleger verloren ihr gesamtes Kapital. Trotzdem war die Eisenbahn-Manie im Rückblick kein reiner Verlust für die Gesellschaft. Die Schienen blieben liegen. Jahrzehntelang transportierten sie Güter und Menschen und trugen erheblich zum Wirtschaftswachstum bei, ganz unabhängig davon, wer am Ende das Geld verloren hatte.

Genau dieses Muster hat der Ökonom Ricardo Caballero in einem Modell für die heutige KI-Situation durchgerechnet [[10]](#10). Ob das Platzen einer Finanzblase der Realwirtschaft schadet, hängt demnach von zwei Fragen ab:

- **Wie stark war die Übertreibung?** Nur ein hinreichend großer Boom schafft die Voraussetzungen für einen substanziellen Ausbau realer Infrastruktur.
- **Wie lange hielt die Übertreibung an?** Platzt die Blase zu früh, verrotten halb fertige Anlagen wie verlassene Gleise in der Wüste. Kommt das Ende erst, nachdem ausreichend Infrastruktur entstanden ist, bleibt ihr Nutzen auch dann bestehen, wenn die Aktienkurse einbrechen.

Im zweiten Fall konzentrieren sich die Verluste vor allem bei den Kapitaleignern, während der reale Nutzen einem größeren Kreis zugutekommt, etwa durch höhere Löhne, zusätzliche Beschäftigung und eine produktivere Infrastruktur. Ob schon genug investiert wurde, damit dieser Nutzen eine Korrektur der Finanzmärkte übersteht, lässt sich heute nicht belastbar beantworten.

---

## Fazit

Das Risiko ist real, aber ungleich verteilt. Chips und ein Großteil der Cloud-Infrastruktur sind heute solider Ausbau, real nachgefragt und real bezahlt. Kreditfinanzierte Rechenzentrumsprojekte, KI-Modellanbieter und viele Anwendungen tragen dagegen ein echtes Risiko, sich als Fehlinvestition zu erweisen, besonders dort, wo Schulden im Spiel sind und die Erlöse hinterherhinken. Der Gesamtmarkt ist zudem historisch teuer bewertet. Das Shiller-KGV liegt nahe am Dotcom-Rekord, enttäuschende Zahlen träfen auf wenig Puffer. Wie hart ein Platzen die Realwirtschaft träfe, hängt davon ab, wie viel Infrastruktur bis dahin gebaut ist.

---

## Referenzen

```references
[
  {
    "id": "1",
    "type": "study",
    "title": "Global Financial Stability Report – April 2026",
    "authors": "Internationaler Währungsfonds",
    "year": 2026,
    "url": "https://www.imf.org/en/publications/gfsr/issues/2026/04/14/global-financial-stability-report-april-2026"
  },
  {
    "id": "2",
    "type": "study",
    "title": "Annual Economic Report 2026",
    "authors": "Bank for International Settlements",
    "year": 2026,
    "url": "https://www.bis.org/publ/arpdf/ar2026e.pdf"
  },
  {
    "id": "3",
    "type": "article",
    "title": "Powell says that, unlike the dotcom boom, AI spending isn't a bubble",
    "authors": "Fortune",
    "year": 2025,
    "url": "https://fortune.com/2025/10/29/powell-says-ai-is-not-a-bubble-unlike-dot-com-federal-reserve-interest-rates/"
  },
  {
    "id": "4",
    "type": "study",
    "title": "Boom, Bubble, or Buildout? A Multi-Method Evaluation of Whether Artificial Intelligence Is in an Ongoing Financial Bubble",
    "authors": "Wang, Q. & Chen, Z",
    "year": 2026,
    "url": "https://arxiv.org/abs/2606.01575"
  },
  {
    "id": "5",
    "type": "article",
    "title": "NVIDIA Announces Financial Results for Fourth Quarter and Fiscal 2026",
    "authors": "NVIDIA Newsroom",
    "year": 2026,
    "url": "https://nvidianews.nvidia.com/news/nvidia-announces-financial-results-for-fourth-quarter-and-fiscal-2026"
  },
  {
    "id": "6",
    "type": "article",
    "title": "Oracle stock ends worst week since 2001 as investors dwell on finances",
    "authors": "CNBC",
    "year": 2026,
    "url": "https://www.cnbc.com/2026/06/26/oracle-stock-ends-worst-week-since-2001-as-investors-dwell-on-finances.html"
  },
  {
    "id": "7",
    "type": "article",
    "title": "MIT report: 95% of generative AI pilots at companies are failing",
    "authors": "Fortune",
    "year": 2025,
    "url": "https://fortune.com/2025/08/18/mit-report-95-percent-generative-ai-pilots-at-companies-failing-cfo"
  },
  {
    "id": "8",
    "type": "study",
    "title": "Tracking Trillions: The Assumptions Shaping the Scale of the AI Build-Out",
    "authors": "Goldman Sachs Global Institute",
    "year": 2026,
    "url": "https://www.goldmansachs.com/insights/articles/tracking-trillions-the-assumptions-shaping-scale-of-the-ai-build-out"
  },
  {
    "id": "9",
    "type": "website",
    "title": "Shiller PE Ratio by Year",
    "authors": "Multpl",
    "year": 2026,
    "url": "https://www.multpl.com/shiller-pe/table/by-year"
  },
  {
    "id": "10",
    "type": "study",
    "title": "Speculative Growth and the AI 'Bubble'",
    "authors": "Caballero, R. J",
    "year": 2026,
    "url": "https://www.nber.org/papers/w34722"
  }
]
```

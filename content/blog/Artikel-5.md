---
title: "Die gefährlichste Ransomware der Welt"
slug: "not-petya"
date: 2025-01-29
image: "/cover-images/Artikel-5.jpg"
teaser: "NotPetya gilt als die gefährlichste Ransomware der Welt und sie hatte nur ein einziges Ziel: Chaos. Ein Cyberangriff, der Milliarden kostete und die Welt in eine neue Ära der digitalen Bedrohungen katapultierte."
readingtime: "15 min"
type: "default"
---

![Blogbild](/cover-images/Artikel-5.jpg)

# Die gefährlichste Ransomware der Welt

**Veröffentlicht am: 29. Januar 2025**

---

### Was ist eigentlich NotPetya?

An einem sonnigen Dienstagnachmittag vor fünf Jahren bricht in der Ukraine ohne Vorwarnung das Chaos aus. Eine Vielzahl an staatlichen Einrichtungen, Unternehmen oder Banken verlieren einen Großteil ihrer Daten. Ganze Reihen an Computern schalten sich plötzlich ab und es ist lediglich eine in Rot geschriebene Meldung mit den Worten „Ooops, your important files are encrypted“ [[1]](#Referenzen) zu sehen. Ursache für den milliardenschweren Vorfall ist „NotPetya“ – der folgenschwerste Hackerangriff in der Geschichte der Menschheit.

Auch vor internationalen Grenzen macht die gefährliche Malware nicht halt. Maersk, das größte Schiffsfahrtunternehmen der Welt mit seinem Hauptsitz in Kopenhagen, verlor durch „NotPetya“ an diesem Tag ganze 300 Millionen US-Dollar. Die IT-Infrastruktur des
Unternehmens brach fast vollständig zusammen. So sagt der IT-Administrator der Firma Maersk, Henrik Jensen, in einem Interview mit der Technik-Zeitschrift „Wired“: „Ich sah eine Welle von Bildschirmen, die schwarz wurden. Schwarz, schwarz, schwarz. Schwarz, schwarz, schwarz, schwarz, schwarz.“ [[1]](#Referenzen) Maersk war allerdings nicht das einzige Unternehmen, welches an diesem Tag Opfer des verheerendsten Hackerangriffs jemals wurde. Das deutsche Pharmaunternehmen Merck beispielsweise dokumentierte Schäden in Höhe von 870 Millionen US-Dollar. Das Lieferunternehmen FedEx und das französische Bauunternehmen Saint-Gobain, jeweils 400 und 384 Millionen US-Dollar.

Der Trojaner „NotPetya“ zählt zu der Gruppe der sogenannten Ransomware. Das deutsche Bundesamt für Sicherheit in der Informationstechnik beschreibt diese Art Hack folgendermaßen: „Der Begriff Ransomware steht für eine Art von Schadprogrammen, die den Zugriff auf Daten und Systeme einschränken oder unterbinden. Für die Freigabe wird dann ein Lösegeld […] verlangt.“ [[2]](#Referenzen)

Die Drahtzieher hinter diesem Cyberangriff forderten eine Zahlung von 300 US-Dollar in
Bitcoin, um die verschlüsselten Daten eines PCs wieder freizugeben. Mit der Frage, warum diese Lösegeldforderung ein Fake ist, wie „NotPetya“ zu seinem Namen kam und welche wahren Absichten die Hacker mit ihrem Angriff hatten, beschäftigt sich dieser Artikel. Zudem werfen wir einen Blick auf die Funktionsweise der gefährlichsten Malware der Welt.

---

### Der Tathergang

Wir schreiben den 27. Juni 2017, als einer der Updateserver des ukrainischen Softwareunternehmens „Linkos Group“ von einer Hackergruppe gekapert wird. Infolgedessen diente der Server den Hackern als Kurier eines unheilvollen Datenpakets: „NotPetya“. Ziel dieser als Update getarnten Schadsoftware war das ukrainische Buchhaltungsprogramm MEDoc, das zum Zeitpunkt des Cyberangriffes von einem Großteil der ukrainischen Steuerzahler verwendet wurde. Egal ob staatliche Institution oder Privatunternehmen. Das Scheinupdate infiltrierte an diesem Tag Tausende Netzwerke.

Aber wie ging es nun weiter? Wie hat der Wurm es geschafft, weltweit die Kontrolle über Dutzende IT-Netzwerke zu erlangen. Grob gesagt nutzte „NotPetya“ hierzu die Hilfe von zwei Exploits des Betriebssystems Windows. „EternalBlue“ ist die Erste der zwei Schwachstellen. Sie wurde bereits einen Monat zuvor am 11. Mai 2017 von der Ransomware „WannaCry“ genutzt, um sich durch einen Fehler im Server-Message-Block-Protokoll von Windows-Netzwerken unerlaubten Zugang zu verschaffen. Dieses ursprünglich von der NSA entdeckte Datenleck war zum Zeitpunkt der „NotPetya“-Attacke bereits von Windows behoben worden. Allerdings waren die IT-Infrastrukturen vieler Unternehmen noch nicht auf dem neusten Softwarestand. Dieser Fehler wurde ihnen letztendlich zum Verhängnis.

Phase zwei des Cyberangriffs stellte das „Mimikatz“-Programm dar. Dieser vom französischen IT-Spezialisten Benjamin Delpy entwickelte Algorithmus ermöglichte es den Hackern, Passwörter und Benutzerdaten aus dem RAM-Speicher des Windows Systems zu extrahieren. Mithilfe dieser Informationen konnte sich „NotPetya“ mit Leichtigkeit in den Netzwerken großer Unternehmen verbreiten. Zur zerstörerischen Macht des „NotPetya“-Hacks sagt der Entwickler von „Mimikatz“ beispielsweise „Sie können Computer infizieren, die nicht gepatcht sind, und sich dann die Passwörter dieser Computer schnappen, um andere Computer zu infizieren, die gepatcht sind“ [[1]](#Referenzen)

Nachdem der Trojaner nun alle benötigten Informationen und Zugriffe erlangt hat, fährt er mit der finalen Phase fort. Die „Petya“-Malware, so heißt die eingesetzte Ransomware, gab dem Wurm seinen Namen. Für die Opfer der Cyberattacke wirkte der Angriff wie eine Lösegeldforderung. Jedoch stellte sich heraus, dass es nie Ziel der Hacker war, die Daten gegen Entschädigung wieder freizugeben. Sie waren irreversibel unkenntlich gemacht – pure Verwüstung. Das war das eigentliche Ziel von „NotPetya“.

---

### Der Quelltext im Verhör

Nach dem Hackerangriff vom 27. Juni 2017 setzten sich IT-Spezialisten aus der ganzen Welt an den Quellcode des „NotPetya“ Hacks und versuchten herauszufinden, was den Wurm so zerstörerisch machte. Dieses sogenannte „Reversed Engineering“ ist eine wichtige Maßnahme, um sich vor zukünftigen Attacken schützen zu können. Das „International Journal of Recent Technology and Engineering“ kurz IJRTE veröffentlichte eine dieser Studien, anhand derer wir uns im Folgenden genauer mit der Funktionsweise von „NotPetya“ beschäftigen.

Die Malware „NotPetya“, so schreibt es das IJRTE, kombiniert herkömmliche Ransomware mit der Fähigkeit, sich willkürlich in Netzwerken zu verbreiten. [[3]](#Referenzen) Nachdem der Trojaner durch ein Update der Steuersoftware MEDoc ein System befällt, generiert „NotPetya“ die Ausführungsdatei „Run32dll.exe“, welche die im Update enthaltene „payload.dll“ Datei ausführt. Die sogenannten Dynamic Link Library (dll) Dateien sind Bibliotheken, die in Windows-Betriebssystemen Code enthalten und ausführen können. Anschließend überprüft der Hack, ob es sich bei dem Betriebssystem um ein geupdatetes System handelt oder ob der „EternalBlue“ Exploit funktionsfähig ist, da die installierte Windows Version nicht auf dem neusten Stand ist. Ist dies der Fall, entschlüsselt „EternalBlue“ den „Master Boot Record“ (MBR) des betroffenen PCs und ersetzt diesen durch eine modifizierte Kopie – die „Ransom Note“. Der MBR ist ein spezifischer Bootsektor, der den für den Start des Betriebssystems benötigten Code beinhaltet. Wird dieser modifiziert, hat der Hack volle Kontrolle über den PC samt der darauf beinhalteten Daten.

Falls das System jedoch über eine aktuelle Windows Version verfügt und „EternalBlue“ nicht eingesetzt werden kann, wird der „Mimikatz“-Algorithmus eingesetzt, um die Passwörter des Computers vom sogenannten LSASS (Local Security Authority Subsystem Service) zu übernehmen. War dies erfolgreich, nutzt „NotPetya“ ein Programm namens „PsExec“, welches als Remote-Control fungiert, um den Hackern per Fernsteuerung Zugang zum System zu verschaffen. Diese Anwendung ist übrigens frei zugänglich und sogar auf der offiziellen Website von Microsoft downloadbar. [[4]](#Referenzen)

„NotPetya“ ist eine hocheffektive, fehlerfreie und perfekt durchdachte Malware, die binnen Sekunden ganze Netzwerke infiltrieren konnte. „Bis heute war es einfach die sich am schnellsten verbreitende Malware, die wir je gesehen haben“ [[1]](#Referenzen), sagt der „Director of Outreach“ beim Cybersicherheitsunternehmen Cisco, Craig Williams. Die Hackergruppe hinter dem Cyberangriff konnte einen Erfolg auf ganzer Linie verzeichnen. Aber welche Organisation nun genau hinter den IT-Anschlägen von 2017 steckt, wird im Folgenden erörtert.

---

### Motive

Der Hackerangriff „NotPetya“ ist das Ergebnis eines langjährigen Krieges. „Am 18. März 2014 annektierte Russland völkerrechtswidrig die zum Staatsgebiet der Ukraine gehörige Halbinsel Krim mit ihren über zwei Millionen Einwohnern.“ [[4]](#Referenzen) Das war der Beginn der russischen Eroberungskriege, in dessen Folge Tausende Menschen ihr Leben lassen mussten. Doch Putins Regime kämpft nicht nur mit Panzern, Bombern und Bodentruppen. Auch die digitale Kriegsführung hat in den letzten Jahren stark an Bedeutung gewonnen. Mit dem Ziel, die Ukraine von innen heraus zu schwächen, führt Russland einen rücksichtslosen Cyberkrieg.

So soll das Regime unter Putin bereits „Hunderte von Computern und Terabytes an Regierungsdaten zerstört sowie zweimal die allerersten durch Hacker ausgelösten Stromausfälle verursacht haben.“ [[1]](#Referenzen) Der Wurm „NotPetya“ ist dabei die erschreckende Krönung des russischen Hackerfeldzugs.

Die ersten Anschuldigungen gegen das russische Militär wurden vom Weißen Haus ausgesprochen. Sowohl die britische als auch die dänische Regierung schlossen sich dieser Vermutung an, die jedoch bis heute nicht belegt wurden konnte. [[6]](#Referenzen) Zudem bestreitet die russische Regierung jegliche Beteiligung an der „NotPetya“-Attacke. Eine Vielzahl unterschiedlicher Sicherheitsunternehmen wie beispielsweise die ukrainische Firma ISSP sowie das slowakische Unternehmen ESET brachten den Trojaner schon nach kurzer Zeit mit dem mutmaßlich russischen Team an Hackern namens „Sandworm“ in Verbindung. Auch der amerikanische Geheimdienst CIA machte den russischen Militärdienst GRU für „NotPetya“ verantwortlich.

Der russische Cyberkrieg hatte erstmals internationale Ausmaße angenommen. Der ehemalige Heimatschutzberater der USA Tom Bossert sagt dazu: „Es war das Äquivalent zum Einsatz einer Atombombe, um einen kleinen taktischen Sieg zu erringen.“ [[1]](#Referenzen) Dieser Sieg kostete Unternehmen weltweit über 10 Milliarden US-Dollar. Hätte sich „NotPetya“ beispielsweise über Turbotax, das amerikanische Äquivalent zu MEDoc verbreitet, wären die Schäden unvorstellbaren Ausmaßes. Ein weiteres klares Zeichen dafür, aktiver gegen den Cyberkrieg Russlands vorzugehen.

---

### Fazit

Der milliardenschwere Hackerangriff „NotPetya“ hat uns abermals gezeigt, wie verehrend digitale Kriegsführung sein kann. Ein als Ransomware getarnter Wurm hat an nur einem Tag die komplette Infrastruktur weltweiter Banken, Telekommunikationsfirmen, Bahngesellschaften, Flughäfen und Unternehmen zerstört. So wurde sogar der Domain-Controller, also die zentrale Schnittstelle der Schifffahrtsgesellschaft Maersk unwiderruflich verschlüsselt. „NotPetya“ löschte alle 150 Backups der Serverdateien gleichzeitig. Das Unternehmen kann von Glück sprechen, dass eines der Backups durch einen Stromausfall des Servers, auf dem es gespeichert war, verschont geblieben ist. Viele der betroffenen Unternehmen hatten nicht so viel Glück und verzeichneten in der Folge millionenschwere Verluste.

Meiner Meinung nach ist „NotPetya“ ein aktiver Schritt in Richtung der modernen Cyberkriegsführung. Die Regeln auf dem Schlachtfeld haben sich als Folge der Digitalisierung geändert und skrupellose Regierungen nutzen das neue Angriffsfeld gnadenlos aus. Aus diesen Geschehnissen muss unsere Gesellschaft lernen. Es müssen klare Regeln, Grenzen und Strafen aufgestellt werden, damit so etwas wie „NotPetya“ nicht noch einmal geschieht. Zudem müssen Unternehmen und staatliche Einrichtungen dringend im Bereich der Cybersicherheit nachziehen. Benutzersystem müssen regelmäßig geupdatet werden, ältere Windows Versionen gegen neuere ausgetauscht werden und menschliche Fehler, die Hackern Zugang zu internen Netzwerken ermöglicht, minimiert werden.

Während meiner Recherche habe ich mich hauptsächlich auf die in der technischen Fachzeitschrift „Wired“ veröffentlichten Artikel zu „NotPetya“ sowie auf offizielle Websites der Bundesregierung bezogen. Zudem habe ich mir eine Folge des englischen Podcasts „Darknet Diaries“ angehört, die mit Andy Greenberg, dem Autor des „Wired“ Artikels zu „NotPetya“ als Gast circa eine Stunde lang ausführlich über den Trojaner berichtet. Greenberg ist zudem Verfasser des englischsprachigen Buchs „Sandworm“, welches sich noch eingehender mit der Thematik „NotPetya“ und einigen anderen gefährlichen Cyberwaffen beschäftigt.

---

### Referenzen

1. [Wired (2018). “NotPetya: How a Cyberattack on Ukraine Spread Around the World.”](https://www.wired.com/story/notpetya-cyberattack-ukraine-russia-code-crashed-the-world/)
2. [Bundesamt für Sicherheit in der Informationstechnik (BSI) (2022). “Ransomware: Bedrohung für Unternehmen und Verbraucher.”](https://www.bsi.bund.de/DE/Themen/Verbraucherinnen-und-Verbraucher/Cyber-Sicherheitslage/Methoden-der-Cyber-Kriminalitaet/Schadprogramme/Ransomware/ransomware_node.html)
3. [International Journal of Recent Technology and Engineering (IJRTE) (2019). “Cyber Security: A Study of Ransomware Attacks and Their Impact.”](https://www.ijrte.org/wp-content/uploads/papers/v7i6s/F03120376S19.pdf)
4. [Microsoft (2021). “PsExec – Sysinternals.”](https://docs.microsoft.com/en-us/sysinternals/downloads/psexec)
5. [Bundesregierung Deutschland (2014). “Annexion der Krim durch Russland.”](https://www.bundesregierung.de/breg-de/suche/annexion-der-krim-durch-1876950)
6. [Wired (2018). “White House Blames Russia for NotPetya Cyberattack.”](https://www.wired.com/story/white-house-russia-notpetya-attribution/)
7. [Sichere Industrie (2020). “NotPetya-Angriff: Schaden und Versicherung.”](https://www.sichere-industrie.de/notpetya-angriff-schaden-versicherung/)
8. [Proofpoint (2021). “WannaCry and Ransomware: What You Need to Know.”](https://www.proofpoint.com/de/threat-reference/wannacry)
9. [YouTube (2019). “Darknet Diaries: Episode 54 – The NotPetya Attack.”](https://www.youtube.com/watch?v=KODpP29AHD4)
10. [Darknet Diaries (2020). “The NotPetya Attack: A Cybersecurity Nightmare.”](https://darknetdiaries.com/episode/54/)

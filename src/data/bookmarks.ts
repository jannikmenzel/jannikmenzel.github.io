export type BookmarkCategory = "website" | "video" | "reading" | "podcast" | "repository";

export interface Bookmark {
    title: string;
    url: string;
    category: BookmarkCategory;
    description: { de: string; en: string };
}

export const bookmarks: Bookmark[] = [
    {
        title: "Anytype",
        url: "https://anytype.io/",
        category: "website",
        description: {
            de: "Lokale, verschlüsselte All-in-One-App für Notizen, Wissen und Projekte – ohne Cloud-Zwang.",
            en: "A local-first, encrypted all-in-one app for notes, knowledge and projects.",
        },
    },
    {
        title: "Penpot",
        url: "https://penpot.app/",
        category: "website",
        description: {
            de: "Open-Source-Tool für Design und Prototyping – die freie Alternative zu Figma.",
            en: "Open-source design and prototyping tool — the free alternative to Figma.",
        },
    },
    {
        title: "Codewars",
        url: "https://www.codewars.com/",
        category: "website",
        description: {
            de: "Coding-Kata-Plattform, um Programmierfähigkeiten spielerisch zu trainieren.",
            en: "A coding kata platform for sharpening programming skills through practice.",
        },
    },
    {
        title: "Papers with Code",
        url: "https://paperswithcode.co/",
        category: "website",
        description: {
            de: "Aktuelle Forschungs Papers mit Open Source Code und Benchmarks.",
            en: "Trending Research papers paired with their code implementations and benchmarks.",
        },
    },
    {
        title: "Code Bullet",
        url: "https://www.youtube.com/@CodeBullet",
        category: "video",
        description: {
            de: "Chaotisch-unterhaltsame KI- und Programmier-Experimente von Code Bullet.",
            en: "Chaotic, entertaining AI and programming experiments from Code Bullet.",
        },
    },
    {
        title: "Sebastian Lague",
        url: "https://www.youtube.com/@SebastianLague",
        category: "video",
        description: {
            de: "Wunderschön visualisierte Coding-Abenteuer zu Algorithmen und Simulationen.",
            en: "Beautifully visualized coding adventures on algorithms and simulations.",
        },
    },
    {
        title: "WIRED",
        url: "https://www.youtube.com/@WIRED",
        category: "video",
        description: {
            de: "Tech-, Wissenschafts- und Kultur-Videos von WIRED, u. a. die Reihe „5 Levels“.",
            en: "Tech, science and culture videos from WIRED, including the '5 Levels' series.",
        },
    },
    {
        title: "3Blue1Brown",
        url: "https://www.youtube.com/@3blue1brown",
        category: "video",
        description: {
            de: "Mathematik visuell und intuitiv erklärt – von linearer Algebra bis neuronalen Netzen.",
            en: "Math explained visually and intuitively — from linear algebra to neural networks.",
        },
    },
    {
        title: "Die Kunst des klugen Fragens",
        url: "https://www.goodreads.com/en/book/show/17978134-a-more-beautiful-question",
        category: "reading",
        description: {
            de: "Wie die richtigen Fragen Ideen zum Sprühen bringen.",
            en: "How the right questions spark ideas and creativity.",
        },
    },
    {
        title: "The Gift of Not Belonging",
        url: "https://www.goodreads.com/book/show/220175484-the-gift-of-not-belonging",
        category: "reading",
        description: {
            de: "Wie Außenseiter in einer Welt der Vereinsmeier aufblühen.",
            en: "How outsiders thrive in a world of joiners.",
        },
    },
    {
        title: "Artificial Intelligence for Learning",
        url: "https://www.goodreads.com/book/show/54905028-artificial-intelligence-for-learning",
        category: "reading",
        description: {
            de: "Wie KI und generative KI die Entwicklung von Lernenden unterstützen.",
            en: "Using AI and generative AI to support learner development.",
        },
    },
    {
        title: "How to Improvise Like Dr. Martin Luther King Jr",
        url: "https://timharford.com/",
        category: "reading",
        description: {
            de: "Wer mit seinen Reden wirklich wirken will, muss das Skript loslassen.",
            en: "If you want your public speaking to make a real impact, you need to let go of the script.",
        },
    },
    {
        title: "Dunkle Materie und Dinosaurier",
        url: "https://www.goodreads.com/book/show/24805680-dark-matter-and-the-dinosaurs",
        category: "reading",
        description: {
            de: "Die erstaunlichen Zusammenhänge des Universums.",
            en: "The astonishing connections of the universe.",
        },
    },
    {
        title: "Die Würde ist antastbar",
        url: "https://www.goodreads.com/book/show/22923549-die-w-rde-ist-antastbar",
        category: "reading",
        description: {
            de: "Essays über Recht, Moral und Menschenwürde.",
            en: "Essays on law, morality and human dignity.",
        },
    },
    {
        title: "Goethes Faust und Einsteins Haken",
        url: "https://www.goodreads.com/book/show/52007212-goethes-faust-und-einsteins-haken",
        category: "reading",
        description: {
            de: "Der Kampf der Wissenschaften.",
            en: "The battle of the sciences.",
        },
    },
    {
        title: "Das Gen",
        url: "https://www.goodreads.com/book/show/27276428-the-gene",
        category: "reading",
        description: {
            de: "Eine sehr persönliche Geschichte der Genetik.",
            en: "A very personal history of genetics.",
        },
    },
    {
        title: "Atomic Habits",
        url: "https://www.goodreads.com/book/show/40121378-atomic-habits",
        category: "reading",
        description: {
            de: "Eine einfache, bewährte Methode, um gute Gewohnheiten aufzubauen und schlechte loszuwerden.",
            en: "An easy and proven way to build good habits and break bad ones.",
        },
    },
    {
        title: "Building a Second Brain",
        url: "https://www.goodreads.com/book/show/59616977-building-a-second-brain",
        category: "reading",
        description: {
            de: "Eine bewährte Methode, das digitale Leben zu organisieren und kreatives Potenzial freizusetzen.",
            en: "A proven method to organize your digital life and unlock your creative potential.",
        },
    },
    {
        title: "How To Live An Extraordinary Life",
        url: "https://www.goodreads.com/book/show/213344681-how-to-live-an-extraordinary-life",
        category: "reading",
        description: {
            de: "Die Schlüssel zu einem Leben mit Sinn, Wachstum und Resilienz.",
            en: "Discover the keys to living with purpose, growth and resilience.",
        },
    },
    {
        title: "Wie man vorhersieht, womit keiner rechnet",
        url: "https://www.goodreads.com/book/show/124625929-how-to-expect-the-unexpected",
        category: "reading",
        description: {
            de: "Richtige Prognosen treffen und unnütze vermeiden.",
            en: "How to make good predictions and avoid useless ones.",
        },
    },
    {
        title: "How to Take Smart Notes",
        url: "https://www.goodreads.com/book/show/34507927-how-to-take-smart-notes",
        category: "reading",
        description: {
            de: "Eine einfache Technik, um Schreiben, Lernen und Denken zu verbessern.",
            en: "One simple technique to boost writing, learning and thinking.",
        },
    },
    {
        title: "Algorithms to Live By",
        url: "https://www.goodreads.com/book/show/25666050-algorithms-to-live-by",
        category: "reading",
        description: {
            de: "Die Informatik menschlicher Entscheidungen.",
            en: "The computer science of human decisions.",
        },
    },
    {
        title: "Der Seestern und die Spinne",
        url: "https://www.goodreads.com/book/show/21314.The_Starfish_and_the_Spider",
        category: "reading",
        description: {
            de: "Die beständige Stärke einer kopflosen Organisation.",
            en: "The enduring power of leaderless organizations.",
        },
    },
    {
        title: "Bevor ich jetzt gehe",
        url: "https://www.goodreads.com/en/book/show/25899336-when-breath-becomes-air",
        category: "reading",
        description: {
            de: "Was am Ende wirklich zählt – das Vermächtnis eines jungen Arztes.",
            en: "What truly matters in the end — the legacy of a young doctor.",
        },
    },
    {
        title: "Das All und das Nichts",
        url: "https://www.goodreads.com/book/show/36295451-das-all-und-das-nichts---von-der-sch-nheit-des-universums",
        category: "reading",
        description: {
            de: "Von der Schönheit des Universums.",
            en: "On the beauty of the universe.",
        },
    },
    {
        title: "Grundformen der Angst",
        url: "https://www.goodreads.com/book/show/1698600.Grundformen_der_Angst",
        category: "reading",
        description: {
            de: "Eine tiefenpsychologische Studie über die Angst.",
            en: "A depth-psychology study of fear.",
        },
    },
    {
        title: "Antifragilität",
        url: "https://www.goodreads.com/book/show/13530973-antifragile",
        category: "reading",
        description: {
            de: "Anleitung für eine Welt, die wir nicht verstehen.",
            en: "A guide for a world we don't understand.",
        },
    },
    {
        title: "Die Diagnose",
        url: "https://www.goodreads.com/book/show/35440680-die-diagnose",
        category: "reading",
        description: {
            de: "Wenn Ärzte zu Detektiven werden – rätselhafte Krankheiten und ihre Ursachen.",
            en: "When doctors become detectives — mysterious illnesses and their causes.",
        },
    },
    {
        title: "Was Atheisten glauben",
        url: "https://www.goodreads.com/book/show/24532947-was-atheisten-glauben",
        category: "reading",
        description: {
            de: "Wie es sich lebt in einer Welt ohne Gott.",
            en: "What it's like to live in a world without God.",
        },
    },
    {
        title: "Storytelling",
        url: "https://www.buecher.de/artikel/buch/storytelling/45756281/",
        category: "reading",
        description: {
            de: "Geschichten für Marketing und PR-Arbeit entwickeln.",
            en: "Developing stories for marketing and PR work.",
        },
    },
    {
        title: "Freelance to Founder",
        url: "https://freelancetofounder.com/",
        category: "podcast",
        description: {
            de: "Podcast über den Weg vom Freelancer zum Gründer eines eigenen Unternehmens.",
            en: "A podcast about the journey from freelancer to founder.",
        },
    },
    {
        title: "Cautionary Tales",
        url: "https://timharford.com/articles/cautionarytales/",
        category: "podcast",
        description: {
            de: "Tim Harford erzählt Geschichten über folgenschwere Fehler – und was wir daraus lernen können.",
            en: "Tim Harford tells stories of catastrophic mistakes — and what we can learn from them.",
        },
    },
    {
        title: "Brave New Work",
        url: "https://www.theready.com/brave-new-work",
        category: "podcast",
        description: {
            de: "Podcast über moderne Arbeitsorganisation und neue Formen der Zusammenarbeit.",
            en: "A podcast about modern work organization and new forms of collaboration.",
        },
    },
    {
        title: "Creative Elements",
        url: "https://podcasts.apple.com/us/podcast/creator-science-with-jay-clouse/id1498801064",
        category: "podcast",
        description: {
            de: "Jay Clouse spricht mit Creators über den Aufbau eines kreativen Business.",
            en: "Jay Clouse talks with creators about building a creative business.",
        },
    },
    {
        title: "UpSide",
        url: "https://upside.fm/",
        category: "podcast",
        description: {
            de: "Podcast über Persönlichkeitsentwicklung, Mindset und ein erfülltes Leben.",
            en: "A podcast about personal growth, mindset and living a fulfilling life.",
        },
    },
    {
        title: "Daily Stoic",
        url: "https://dailystoic.com/podcast/",
        category: "podcast",
        description: {
            de: "Tägliche stoische Weisheit für ein bewussteres, ruhigeres Leben.",
            en: "Daily Stoic wisdom for a more mindful, grounded life.",
        },
    },
    {
        title: "Ctrl Alt Delete",
        url: "https://www.emmagannon.co.uk/podcast",
        category: "podcast",
        description: {
            de: "Emma Gannon spricht über Kreativität, Technologie und die Neudefinition von Erfolg.",
            en: "Emma Gannon on creativity, technology and redefining success.",
        },
    },
    {
        title: "Revisionist History",
        url: "https://www.pushkin.fm/podcasts/revisionist-history",
        category: "podcast",
        description: {
            de: "Malcolm Gladwell hinterfragt vergessene oder missverstandene Ereignisse der Geschichte.",
            en: "Malcolm Gladwell revisits misunderstood or overlooked moments in history.",
        },
    },
    {
        title: "Simplify",
        url: "https://simplify.simplecast.com/",
        category: "podcast",
        description: {
            de: "Podcast über ein einfacheres, bewussteres Leben mit weniger Ballast.",
            en: "A podcast about simpler, more intentional living with less clutter.",
        },
    },
    {
        title: "FUTURES",
        url: "https://futurespodcast.net/",
        category: "podcast",
        description: {
            de: "Gespräche über Zukunftstechnologien und wie sie unser Leben verändern.",
            en: "Conversations about emerging technologies and how they're shaping the future.",
        },
    },
];

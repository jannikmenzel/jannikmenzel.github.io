export type BookmarkCategory = "tool" | "video" | "reading" | "podcast" | "repository";

export interface Bookmark {
    title: string;
    url?: string;
    category: BookmarkCategory;
    isbn?: string;
}

export const bookmarks: Bookmark[] = [
    {
        title: "Anytype",
        url: "https://anytype.io/",
        category: "tool",
    },
    {
        title: "Penpot",
        url: "https://penpot.app/",
        category: "tool",
    },
    {
        title: "Codewars",
        url: "https://www.codewars.com/",
        category: "tool",
    },
    {
        title: "Zotero",
        url: "https://www.zotero.org/",
        category: "tool",
    },
    {
        title: "Obsidian",
        url: "https://obsidian.md/",
        category: "tool",
    },
    {
        title: "Texifier",
        url: "https://www.texifier.com/",
        category: "tool",
    },
    {
        title: "A life-changing habit",
        url: "https://youtube.com/watch?v=T4FWTQJcW4U",
        category: "video",
    },
    {
        title: "Explaining Zero-Knowledge Proofs",
        url: "https://youtube.com/watch?v=fOGdb1CTu5c",
        category: "video",
    },
    {
        title: "A Math Problem No One Can Solve",
        url: "https://youtube.com/watch?v=094y1Z2wpJg",
        category: "video",
    },
    {
        title: "Chess Programming Tournament!",
        url: "https://www.youtube.com/watch?v=Ne40a5LkK6A",
        category: "video",
    },
    {
        title: "Mathematical Pattern Breaks",
        url: "https://youtube.com/watch?v=YtkIWDE36qU",
        category: "video",
    },
    {
        title: "Papers with Code",
        url: "https://paperswithcode.co/",
        category: "reading",
    },
    {
        title: "Billion Dollar PDFs",
        url: "https://billiondollarpdf.com/",
        category: "reading",
    },
    {
        title: "The Gift of Not Belonging",
        category: "reading",
        isbn: "9780316576086",
    },
    {
        title: "Die Würde ist antastbar",
        category: "reading",
        isbn: "9783442715008",
    },
    {
        title: "Atomic Habits",
        category: "reading",
        isbn: "9780735211292",
    },
    {
        title: "Building a Second Brain",
        category: "reading",
        isbn: "9781982167387",
    },
    {
        title: "How To Live An Extraordinary Life",
        category: "reading",
        isbn: "9780857199928",
    },
    {
        title: "How to Take Smart Notes",
        category: "reading",
        isbn: "9781542866507",
    },
    {
        title: "Algorithms to Live By",
        category: "reading",
        isbn: "9781627790369",
    },
    {
        title: "Der Seestern und die Spinne",
        category: "reading",
        isbn: "9783527503452",
    },
    {
        title: "Bevor ich jetzt gehe",
        category: "reading",
        isbn: "9783328101208",
    },
    {
        title: "Das All und das Nichts",
        category: "reading",
        isbn: "9783103972610",
    },
    {
        title: "Grundformen der Angst",
        category: "reading",
        isbn: "9783497007493",
    },
    {
        title: "Antifragilität",
        category: "reading",
        isbn: "9783442744695",
    },
    {
        title: "Storytelling",
        category: "reading",
        isbn: "9783800654123",
    },
    {
        title: "Hacker News Love",
        url: "https://hackernews.love/",
        category: "reading",
    },
    {
        title: "Ideas – Noah Zender",
        url: "https://www.noahzender.com/ideas",
        category: "reading",
    },
    {
        title: "Anthropic: Labor Market Impacts",
        url: "https://www.anthropic.com/research/labor-market-impacts",
        category: "reading",
    },
    {
        title: "Freelance to Founder",
        url: "https://freelancetofounder.com/",
        category: "podcast",
    },
    {
        title: "Cautionary Tales",
        url: "https://timharford.com/articles/cautionarytales/",
        category: "podcast",
    },
    {
        title: "Brave New Work",
        url: "https://www.theready.com/brave-new-work",
        category: "podcast",
    },
    {
        title: "UpSide",
        url: "https://upside.fm/",
        category: "podcast",
    },
    {
        title: "Daily Stoic",
        url: "https://dailystoic.com/podcast/",
        category: "podcast",
    },
    {
        title: "Ctrl Alt Delete",
        url: "https://www.emmagannon.co.uk/podcast",
        category: "podcast",
    },
    {
        title: "Revisionist History",
        url: "https://www.pushkin.fm/podcasts/revisionist-history",
        category: "podcast",
    },
    {
        title: "Simplify",
        url: "https://simplify.simplecast.com/",
        category: "podcast",
    },
    {
        title: "FUTURES",
        url: "https://futurespodcast.net/",
        category: "podcast",
    },
];

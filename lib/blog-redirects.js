const BLOG_URL = "https://blog.jannikmenzel.me";

const slugs = [
    "algorithmen-im-alltag",
    "antifragilitaet",
    "art-of-design",
    "blackrock",
    "chatbots",
    "cleo",
    "collatz-vermutung",
    "computerkurse",
    "denken-in-modellen",
    "eine-leber-drucken",
    "feedback-loops",
    "frontend-development",
    "generalist-vs-spezialist",
    "generation-chat-gpt",
    "glueck-verstehen",
    "ki-blase-oder-boom",
    "kosmische-irrtuemer",
    "lying-with-statistics",
    "not-petya",
    "nowitschok",
    "perfektionismus",
    "philosophische-gespraeche",
    "rhetorik",
    "schach",
    "science",
    "science-of-harmony",
    "second-brain",
    "software-is-eating-the-world",
    "sterbehilfe",
    "storytelling",
    "systeme-statt-ziele",
    "tierhaltung-und-umwelt",
    "zero-knowledge-proof",
];

export const blogRedirects = {
    "/blog": `${BLOG_URL}/`,
    "/en/blog": `${BLOG_URL}/`,
    ...Object.fromEntries(
        slugs.flatMap((slug) => [
            [`/blog/${slug}`, `${BLOG_URL}/${slug}/`],
            [`/en/blog/${slug}`, `${BLOG_URL}/${slug}/`],
        ])
    ),
};

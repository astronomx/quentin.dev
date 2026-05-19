export type AboutPart = {
    text: string;
    highlight?: boolean;
};

export type AboutParagraph = {
    id: string;
    muted?: boolean;
    parts: AboutPart[];
};

export const aboutParagraphs: AboutParagraph[] = [
    {
        id: "intro",
        parts: [
            {
                text: "Hi, I'm Quentin — a software engineering student based in the Netherlands with a thing for building products that actually ",
            },
            { text: "feel", highlight: true },
            { text: " like something." },
        ],
    },
    {
        id: "craft",
        muted: true,
        parts: [
            {
                text: "What keeps me hooked on development is the mix of creativity and logic. I love crafting interactive experiences that resonate with people and I find the puzzle side of programming just as satisfying — there's always a better way to solve something and finding it never gets old.",
            },
        ],
    },
    {
        id: "creative",
        muted: true,
        parts: [
            {
                text: "Outside of code I'm a creative at heart whether that's sketching, dancing or just getting lost in music. If it involves making or experiencing something, I'm in. Boring ",
            },
            { text: "doesn't", highlight: true },
            { text: " really exist in my world." },
        ],
    },
    {
        id: "open",
        muted: true,
        parts: [
            {
                text: "I'm currently open to internships as part of my studies, as well as junior developer roles where I can keep growing and building things worth using.",
            },
        ],
    },
];

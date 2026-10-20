export type ProjectLinkKind = "npm" | "releases";

export interface ProjectLink {
    kind: ProjectLinkKind;
    href: string;
}

export interface OpenSourceProject {
    id: string;
    title: string;
    year: string;
    license: string;
    repo: string;
    install?: string;
    links: ProjectLink[];
}

export const openSourceProjects: OpenSourceProject[] = [
    {
        id: "midnight",
        title: "Midnight",
        year: "2026",
        license: "AGPL-3.0",
        repo: "https://github.com/jannikmenzel/midnight",
        links: [{ kind: "releases", href: "https://github.com/jannikmenzel/midnight/releases" }],
    },
    {
        id: "vortix",
        title: "Vortix CLI",
        year: "2026",
        license: "MIT",
        repo: "https://github.com/jannikmenzel/vortix-cli",
        install: "npm install -D vortix-cli",
        links: [{ kind: "npm", href: "https://www.npmjs.com/package/vortix-cli" }],
    },
    {
        id: "sveltiaRbac",
        title: "Sveltia RBAC",
        year: "2026",
        license: "MIT",
        repo: "https://github.com/jannikmenzel/sveltia-rbac",
        links: [],
    },
];

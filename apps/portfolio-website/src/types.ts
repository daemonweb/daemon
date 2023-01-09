export type Project = {
    title: string;
    thumbnail: string;
    description: string;
    repoUrl?: string;
    url: string;
    publishDate: Date;
    type: ProjectType;
    features: ProjectFeature[];
    tech: ProjectTech[];
    roles: ProjectRole[];
}

export const enum ProjectType {
    Website = "Website",
    App = "App",
    SaaS = "SaaS",
    Game = "Game",
}

export const enum ProjectFeature {
    Blog = "Blog",
    CMS = "CMS",
    Ecommerce = "Ecommerce",
    Localization = "Localization",
    Newsletter = "Newsletter",
    VideoHosting = "Video Hosting",
    LeadGen = "Lead Generation",
    UserManagement = "User Management",
}

export const enum ProjectTech {
    React = "React",
    SolidJS = "SolidJS",
    Angular = "Angular",
    Webflow = "Webflow",
    Gatsby = "Gatsby",
    Angular1 = "Angular1",
    Angular2 = "Angular2",
    Postgres = "Postgres",
    AWS = "AWS",
    NextJS = "NextJS",
    LoopbackJS = "LoopbackJS",
    MongoDB = "MongoDB",
    Express = "Express",
    NodeJS = "NodeJS",
    Docker = "Docker",
}

export const enum ProjectRole {
    Frontend = "Frontend",
    Backend = "Backend",
    Fullstack = "Fullstack",
    Design = "Design",
    ProjectManager = "Project Manager",
    QA = "QA",
    DevOps = "DevOps",
    ProductOwner = "Product Owner",
}
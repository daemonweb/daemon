import { Project, ProjectFeature, ProjectRole, ProjectTech, ProjectType } from "../types";


export default [
    {
        title: "Muskoka Marketing Website",
        thumbnail: "/muskoka.png",
        description: "A website for a local business in Muskoka, Ontario.",
        repoUrl: "https://github.com/JoshElias/muskoka-website_2022",
        url: "https://www.muskokacabco.com",
        publishDate: new Date("2021-01-01"),
        type: ProjectType.Website,
        features: [
            ProjectFeature.CMS,
            ProjectFeature.Blog
        ],
        tech: [
            ProjectTech.Webflow,
        ],
        roles: [
            ProjectRole.Fullstack,
            ProjectRole.Design,
        ]
    },
    {
        title: "ICPNC Website",
        thumbnail: "/icpnc.png",
        description: "A website for the International Council of Psychiatric Nurses of Canada.",
        url: "https://www.icpnc.org",
        publishDate: new Date("2021-01-01"),
        type: ProjectType.Website,
        features: [
            ProjectFeature.CMS,
            ProjectFeature.Blog,
            ProjectFeature.Localization,
            ProjectFeature.Newsletter,
        ],
        tech: [
            ProjectTech.Webflow,
        ],
        roles: [
            ProjectRole.Fullstack,
            ProjectRole.ProjectManager,
        ]
    },
    {
        title: "SMART Marketing Website",
        thumbnail: "/smart.png",
        description: "A website for the Society of Manufacturing and Automation Robotics Technologists.",
        repoUrl: "https://github.com/JoshElias/smart-website",
        url: "https://www.smartmrp.com",
        publishDate: new Date("2018-01-01"),
        type: ProjectType.Website,
        features: [
            ProjectFeature.VideoHosting,
            ProjectFeature.Blog
        ],
        tech: [
            ProjectTech.Angular2,
            ProjectTech.AWS
        ],
        roles: [
            ProjectRole.Fullstack,
            ProjectRole.Design,
            ProjectRole.ProjectManager
        ]
    },
    {
        title: "AVA Product Suite",
        thumbnail: "/ava.png",
        description: "A suite of products for the AVA platform.",
        url: "https://www.autocorp.ai",
        publishDate: new Date("2020-01-01"),
        type: ProjectType.SaaS,
        features: [
            ProjectFeature.CMS,
            ProjectFeature.LeadGen,
            ProjectFeature.UserManagement,
        ],
        tech: [
            ProjectTech.React,
            ProjectTech.NextJS,
            ProjectTech.Postgres,
            ProjectTech.AWS,
            ProjectTech.NodeJS,
            ProjectTech.Express,
            ProjectTech.Docker,
        ],
        roles: [
            ProjectRole.ProjectManager,
            ProjectRole.ProductOwner
        ]
    },
    {
        title: "Car Loans Canada Marketing Website",
        url: "https://web.archive.org/web/20200810074356/https://www.carloanscanada.com/",
        description: "A website for Car Loans Canada.",
        publishDate: new Date("2018-01-01"),
        type: ProjectType.Website,
        features: [
            ProjectFeature.CMS,
            ProjectFeature.Blog,
            ProjectFeature.LeadGen,
            ProjectFeature.VideoHosting,
        ],
        tech: [
            ProjectTech.Gatsby,
            ProjectTech.React,
        ],
        roles: [
            ProjectRole.Fullstack,
            ProjectRole.Design,
            ProjectRole.ProjectManager,
            ProjectRole.ProductOwner,
        ]
    },
    {
        title: "Car Loans Canada Credit Application",
        url: "https://web.archive.org/web/20200810074356/https://www.carloanscanada.com/",
        description: "A website for Car Loans Canada.",
        publishDate: new Date("2018-01-01"),
        type: ProjectType.Website,
        features: [
            ProjectFeature.LeadGen,
        ],
        tech: [
            ProjectTech.Gatsby,
            ProjectTech.React,
            ProjectTech.AWS,
        ],
        roles: [
            ProjectRole.Fullstack,
            ProjectRole.Design,
            ProjectRole.ProjectManager,
            ProjectRole.ProductOwner,
        ]
    },
    {
        title: "Tempostorm Website",
        url: "https://www.tempostorm.com/",
        description: "A website for Car Loans Canada.",
        repoUrl: "https://github.com/JoshElias/esports-website",
        publishDate: new Date("2015-01-01"),
        type: ProjectType.Website,
        features: [
            ProjectFeature.LeadGen,
            ProjectFeature.UserManagement,
            ProjectFeature.Newsletter,
            ProjectFeature.CMS,
            ProjectFeature.Blog,
        ],
        tech: [
            ProjectTech.Angular1,
            ProjectTech.LoopbackJS,
            ProjectTech.MongoDB,
            ProjectTech.NodeJS,
            ProjectTech.Express,
        ],
        roles: [
            ProjectRole.Backend,
            ProjectRole.ProjectManager,
        ]
    },
    {
        title: "Deck Builder",
        url: "https://web.archive.org/web/20200810074356/https://www.carloanscanada.com/",
        description: "A website for Car Loans Canada.",
        repoUrl: "https://github.com/JoshElias/esports-website",
        publishDate: new Date("2016-01-01"),
        type: ProjectType.Game,
        features: [
            ProjectFeature.UserManagement,
        ],
        tech: [
            ProjectTech.LoopbackJS,
            ProjectTech.Angular1,
            ProjectTech.MongoDB,
            ProjectTech.NodeJS,
            ProjectTech.Express,
        ],
        roles: [
            ProjectRole.Backend,
        ]
    }
] as Project[];
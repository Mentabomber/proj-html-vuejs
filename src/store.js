import { reactive } from 'vue'

export const store = reactive({
header: [
            {
                title: "",
                text: "",
                button: ""
            },
            {
                img: "../images/logo_seo_w_1x.png",
                listOfLinksName:    [
                    {   
                        linkType: "basic",
                        linkName: "Home",
                        linkButtonName: ""
                    },
                    {   
                        linkType: "basic",
                        linkName: "Who We Are",
                        linkButtonName: ""
                    },
                    {   
                        linkType: "basic",
                        linkName: "What We Do",
                        linkButtonName: ""
                    },
                    {   
                        linkType: "basic",
                        linkName: "Where We Work",
                        linkButtonName: ""
                    },
                    {   
                        linkType: "basic+button",
                        linkName: "Careers ",
                        linkButtonName: "Apply"
                    },
                    {   
                        linkType: "basic",
                        linkName: "News",
                        linkButtonName: ""
                    },
                    {   
                        linkType: "button",
                        linkName: "GET IN TOUCH NOW",
                        linkButtonName: ""
                    }

                    
                                    ],
                listOfCopyrights: [],
                socialLinks: []
            }
        ],
jumbotron:  {   
                id: "jumbotronSection",
                backgroundImg: "../images/1-hero-image.png",
                intestazione:   {
                                    title: "SEM Campaigns Made Simple With Avada",
                                    text: "Sed ut persiiatis und eomnis iste natus error sit voluptatem accusantium doloremque laudentium.",
                                },
                cardType: "basic",
                cards:  [
                            {
                                img: "",
                                cardTitle: "",
                                p: "",
                                button: "",
                            },
                            {
                                img: "",
                                cardTitle: "",
                                p: "",
                                button: "",
                            }, 
                            {
                                img: "",
                                cardTitle: "",
                                p: "",
                                button: "",
                            }

                        ],
                buttons: ["BUY AVADA NOW","CONTACT US"]   
            },
footer: [
            {
                title: "",
                text: "",
                button: ""
            },
            {
                img: "",
                listOfLinks: [],
                listOfCopyrights: [],
                socialLinks: []
            }
    
        ],
sections:   [   
                
                {   id: "newAgencySection",
                    backgroundImg: "../images/1-hero-image.png",
                    intestazione:   {
                                        title: "Meet The New Agency SEO Template From The Avada Team",
                                        text: "Sed ut persiiatis und eomnis iste natus error sit voluptatem accusantium doloremque laudentium.",
                                    },
                    cardType: "basic",
                    sectionType: "cards",
                    cards:  [
                                {
                                    img: "./images/icons/gear-solid.svg",
                                    cardTitle: "Ciao",
                                    cardText: ""
                                },
                                {
                                    img: "",
                                    cardTitle: "Ciaone",
                                    cardText: "Prova delle prove"
                                }, 
                                {
                                    img: "./images/icons/gear-solid.svg",
                                    cardTitle: "",
                                    cardText: "Prova delle proveProva delle proveProva delle proveProva delle proveProva delle proveProva delle proveProva delle proveProva delle proveProva delle proveProva delle proveProva delle proveProva delle proveProva delle proveProva delle prove"
                                }

                            ],
            
                },
                                
                {   
                    id: "services",
                    backgroundImg: "../images/1-hero-image.png",
                    intestazione:   {
                                        title: "See Our Top Notch Services",
                                        text: "Sed ut persiiatis und eomnis iste natus error sit voluptatem accusantium doloremque laudentium.",
                                    },
                    cardType: "basic",
                    sectionType: "cards",
                    cards:  [
                                {
                                    img: "./images/icons/gear-solid.svg",
                                    cardTitle: "Google SEO",
                                    cardText: "Sed ut persiiatis und eomnis iste natus error sit voluptatem accusantium doloremque laudentium.Sed ut persiiatis und eomnis iste natus error sit voluptatem accusantium doloremque laudentium.",
                                    cardLink: "Read More >"
                                },
                                {
                                    img: "./images/icons/gear-solid.svg",
                                    cardTitle: "Brand Strategy",
                                    cardText: "Sed ut persiiatis und eomnis iste natus error sit voluptatem accusantium doloremque laudentium.Sed ut persiiatis und eomnis iste natus error sit voluptatem accusantium doloremque laudentium.",
                                    cardLink: "Read More >"
                                }, 
                                {
                                    img: "./images/icons/gear-solid.svg",
                                    cardTitle: "Local SEO",
                                    cardText: "Sed ut persiiatis und eomnis iste natus error sit voluptatem accusantium doloremque laudentium.Sed ut persiiatis und eomnis iste natus error sit voluptatem accusantium doloremque laudentium.",
                                    cardLink: "Read More >"
                                },
                                {
                                    img: "./images/icons/gear-solid.svg",
                                    cardTitle: "SEO Analysis",
                                    cardText: "Sed ut persiiatis und eomnis iste natus error sit voluptatem accusantium doloremque laudentium.Sed ut persiiatis und eomnis iste natus error sit voluptatem accusantium doloremque laudentium.",
                                    cardLink: "Read More >"
                                }

                            ],

                    
                },
                {   
                    id: "ourWork",
                    backgroundImg: "../images/1-hero-image.png",
                    intestazione:   {
                                        title: "Meet The New Agency SEO Template From The Avada Team",
                                        text: "Sed ut persiiatis und eomnis iste natus error sit voluptatem accusantium doloremque laudentium.",
                                    },
                    cardType: "basic",
                    sectionType: "pictures",
                    imgs:  [
                              "./images/case-study-gallery-2.jpg","./images/case-study-gallery-1-1.jpg","./images/case-study-gallery-1-1.jpg","./images/case-study-gallery-1-1.jpg","./images/case-study-gallery-1-1.jpg","./images/case-study-gallery-1-1.jpg"  
                            ],
                    button: {
                                name: "VIEW OUR WORK",
                                link: "",
                            }
                    
                },
                {   
                    id: "ourPlans",
                    backgroundImg: "../images/1-hero-image.png",
                    intestazione:   {
                                        title: "Our Plans",
                                        text: "Sed ut persiiatis und eomnis iste natus error sit voluptatem accusantium doloremque laudentium.",
                                    },
                    cardType: "plans",
                    sectionType: "cards",
                    cards:  [
                                {
                                    cardTitle: "Standard",
                                    cardText: "",
                                    cardPrice: "19,99",
                                    cardInfos: ["5 Projects", "5 GB Storage", "Unlimited Users"],
                                    cardLink: "START TODAY"
                                },
                                {
                                    cardTitle: "Premium",
                                    cardText: "",
                                    cardPrice: "29,99",
                                    cardInfos: ["10 Projects", "15 GB Storage", "Unlimited Users"],
                                    cardLink: "START TODAY"
                                },
                                {
                                    cardTitle: "Professional",
                                    cardText: "",
                                    cardPrice: "39,99",
                                    cardInfos: ["15 Projects", "30 GB Storage", "Unlimited Users"],
                                    cardLink: "START TODAY"
                                },
                                {
                                    cardTitle: "Extreme",
                                    cardText: "",
                                    cardPrice: "59,99",
                                    cardInfos: ["Unlimited Projects", "Unlimited Storage", "Unlimited Users"],
                                    cardLink: "START TODAY"
                                },
                            ],
                    
                },
                {   
                    id: "ourNews",
                    backgroundImg: "../images/1-hero-image.png",
                    intestazione:   {
                                        title: "Our News",
                                        text: "Sed ut persiiatis und eomnis iste natus error sit voluptatem accusantium doloremque laudentium.",
                                    },
                    cardType: "basic",
                    sectionType: "cards",
                    cards:  [
                                {
                                    img: "./images/related-service-2-320x202.jpg",
                                    cardTitle: "Why You Need A SEO Agency Now",
                                    cardText: "Sed ut persiiatis und eomnis iste natus error sit voluptatem accusantium doloremque laudentium.",
                                    cardDate: "November 1st, 2017",
                                },
                                {
                                    img: "./images/related-service-4-320x202.jpg",
                                    cardTitle: "SEO Tips For Your Startup",
                                    cardText: "Sed ut persiiatis und eomnis iste natus error sit voluptatem accusantium doloremque laudentium.",
                                    cardDate: "November 1st, 2017",
                                }, 
                                {
                                    img: "./images/blog-post-6-320x202.jpg",
                                    cardTitle: "Image Optimization For Your Site",
                                    cardText: "Sed ut persiiatis und eomnis iste natus error sit voluptatem accusantium doloremque laudentium.",
                                    cardDate: "November 1st, 2017",
                                }

                            ],
                    button: {
                                name: "GO TO NEWS",
                                link: "",
                            }
                    
                },
                {   
                    id: "clientsFeedback",
                    backgroundImg: "../images/1-hero-image.png",
                    intestazione:   {
                                        title: "What Our Clients Say",
                                        text: "",
                                    },
                    cardType: "basic",
                    sectionType: "cards",
                    cards:  [
                                {
                                    img: "./images/testimonials-2.jpg",
                                    cardTitle: "",
                                    cardText: "Ability proceeds from a fusion of skills, knowledge, understanding and imagination, consolidated by experience.",
                                    cardDate: "",
                                    credentials: ["Luis Desalvo, ", "CREO TECH",],
                                },
                                {
                                    img: "./images/testimonials-1.jpg",
                                    cardTitle: "Why You Need A SEO Agency Now",
                                    cardText: "Ability proceeds from a fusion of skills, knowledge, understanding and imagination, consolidated by experience.",
                                    cardDate: "",
                                    credentials: ["Giorgia Rossi, ", "CREO TECH",],
                                }, 
                                
                            ],
                    
                },
            ],
avadaLogos: [
                "./images/clients_partner_5-200x202.png",
                "./images/clients_partner_6-200x202.png", "./images/clients_partner_1-200x202.png", "./images/clients_partner_2-200x202.png"
            ],


});
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
                        linkButtonName: "",
                        active: true
                    },
                    {   
                        linkType: "basic",
                        linkName: "Who We Are",
                        linkButtonName: "",
                        active: false
                    },
                    {   
                        linkType: "basic",
                        linkName: "What We Do",
                        linkButtonName: "",
                        active: false
                    },
                    {   
                        linkType: "basic",
                        linkName: "Where We Work",
                        linkButtonName: "",
                        active: false
                    },
                    {   
                        linkType: "basic+button",
                        linkName: "Careers ",
                        linkButtonName: "Apply",
                        active: false
                    },
                    {   
                        linkType: "basic",
                        linkName: "News",
                        linkButtonName: "",
                        active: false
                    },
                    {   
                        linkType: "button",
                        linkName: "GET IN TOUCH NOW",
                        linkButtonName: "",
                        active: false
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
                intestazione:{
                                title: "Start Your Free Consultation",
                                text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
                    
                            },
                button:     {
                                name: "CONTACT US NOW",
                                link: ""
                            },
               
            },
            {
                img: "../images/logo_seo_1x.png",
                listOfLinks: [],
                listOfCopyrights:   [
                                        "© Copyright 2012 - 2020    |    ",
                                        "Avada Them by Themefusion    |    ","All Rights Reserved    |    ","Powered by WordPress"
                                    ],      
                socialLinks: [
                                {
                                    id: "facebook",
                                    img: "./images/icons/facebook-f.svg",
                                    link: ""
                                },
                                {
                                    id: "instagram",
                                    img: "./images/icons/instagram.svg",
                                    link: ""
                                },
                                {
                                    id: "twitter",
                                    img: "./images/icons/twitter.svg",
                                    link: ""
                                },
                                {
                                    id: "youtube",
                                    img: "./images/icons/youtube.svg",
                                    link: ""
                                },
                            ]
            }
    
        ],
sections:   [   
                
                {   id: "newAgencySection",
                    img: "../images/agency-seo-desk-front.jpg",
                    intestazione:   {
                                        title: "Meet The New Agency SEO Template From The Avada Team",
                                        text: "Sed ut persiiatis und eomnis iste natus error sit voluptatem accusantium doloremque laudentium.",
                                    },
                    cardType: "basic",
                    sectionType: "cards",
                    cards:  [
                                {
                                    img: "./images/icons/road-solid.svg",
                                    cardTitle: "Establish Goals",
                                    cardText: "Aliquam non elit lacus. Praesent aliquet, ipsum id scelerisque vonaliis, mi liula eusimod odio, vel dicutm mi risus a mi."
                                },
                                {
                                    img: "./images/icons/video-solid.svg",
                                    cardTitle: "Work With a Team",
                                    cardText: "Aliquam non elit lacus. Praesent aliquet, ipsum id scelerisque vonaliis, mi liula eusimod odio, vel dicutm mi risus a mi."
                                }, 
                                {
                                    img: "./images/icons/droplet-solid.svg",
                                    cardTitle: "Get Results",
                                    cardText: "Aliquam non elit lacus. Praesent aliquet, ipsum id scelerisque vonaliis, mi liula eusimod odio, vel dicutm mi risus a mi."
                                }

                            ],
            
                },
                                
                {   
                    id: "services",
                    img: "",
                    intestazione:   {
                                        title: "See Our Top Notch Services",
                                        text: "Sed ut persiiatis und eomnis iste natus error sit voluptatem accusantium doloremque laudentium.",
                                    },
                    cardType: "basic",
                    sectionType: "cards",
                    cards:  [
                                {
                                    img: "./images/icons/google.svg",
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
                                    img: "./images/icons/building-solid.svg",
                                    cardTitle: "Local SEO",
                                    cardText: "Sed ut persiiatis und eomnis iste natus error sit voluptatem accusantium doloremque laudentium.Sed ut persiiatis und eomnis iste natus error sit voluptatem accusantium doloremque laudentium.",
                                    cardLink: "Read More >"
                                },
                                {
                                    img: "./images/icons/chart-column-solid.svg",
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
                                        title: "Our Work",
                                        text: "Sed ut persiiatis und eomnis iste natus error sit voluptatem accusantium doloremque laudentium.",
                                    },
                    cardType: "basic",
                    sectionType: "pictures",
                    imgs:  [
                              "./images/case-study-gallery-3-1.jpg","./images/case-study-gallery-2.jpg","./images/case-study-gallery-1-1.jpg","./images/case-study-gallery-4-1.jpg","./images/case-study-gallery-5-1.jpg","./images/case-study-gallery-6-1.jpg"  
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
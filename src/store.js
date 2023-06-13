import { reactive } from 'vue'

export const store = reactive({
 
jumbotron:      {   
                    id: "jumbotronSection",
                    backgroundImg: "../images/1-hero-image.png",
                    intestazione:   {
                                        title: "SEM Campaigns Made Simple With Avada",
                                        text: "Sed ut persiiatis und eomnis iste natus error sit voluptatem accusantium doloremque laudentium.",
                                    },
                    cardType: "",
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
sections:   [   
                
                {   id: "newAgencySection",
                    backgroundImg: "../images/1-hero-image.png",
                    intestazione:   {
                                        title: "Meet The New Agency SEO Template From The Avada Team",
                                        text: "Sed ut persiiatis und eomnis iste natus error sit voluptatem accusantium doloremque laudentium.",
                                    },
                    cardType: "",
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
                    button: {
                        name: "gianni",
                        link: "",
                            }
            
                },
                                
                {   
                    id: "services",
                    backgroundImg: "../images/1-hero-image.png",
                    intestazione:   {
                                        title: "See Our Top Notch Services",
                                        text: "Sed ut persiiatis und eomnis iste natus error sit voluptatem accusantium doloremque laudentium.",
                                    },
                    cardType: "",
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
                    cardType: "",
                    sectionType: "pictures",
                    imgs:  [
                              "./images/case-study-gallery-2.jpg","./images/case-study-gallery-1-1.jpg","./images/case-study-gallery-1-1.jpg","./images/case-study-gallery-1-1.jpg","./images/case-study-gallery-1-1.jpg","./images/case-study-gallery-1-1.jpg"  
                            ],
                    button: {
                                name: "giorgio",
                                link: "",
                            }
                    
                 },
            ]


});
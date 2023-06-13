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
                    id: "giorgione",
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
                                name: "ciao",
                                link: "",
                            }
                    
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
                              "./images/case-study-gallery-2.jpg","./images/case-study-gallery-1-1.jpg"   
                            ],
                    button: {
                                name: "giorgio",
                                link: "",
                            }
                    
                 },
            ]


});
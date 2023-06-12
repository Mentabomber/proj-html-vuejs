import { reactive } from 'vue'

export const store = reactive({
sections:   [
                {   id: "newAgencySection",
                    backgroundImg: "1-hero-image.png",
                    intestazione:   {
                                        h1: "Meet The New Agency SEO Template From The Avada Team",
                                        p: "Sed ut persiiatis und eomnis iste natus error sit voluptatem accusantium doloremque laudentium.",
                                    },
                    cards:  [
                                {
                                    img: "./images/icons/gear-solid.svg",
                                    h1: "Ciao",
                                    p: ""
                                },
                                {
                                    img: "",
                                    h1: "Ciaone",
                                    p: "Prova delle prove"
                                }, 
                                {
                                    img: "./images/icons/gear-solid.svg",
                                    h1: "",
                                    p: "Prova delle proveProva delle proveProva delle proveProva delle proveProva delle proveProva delle proveProva delle proveProva delle proveProva delle proveProva delle proveProva delle proveProva delle proveProva delle proveProva delle prove"
                                }

                            ]
                    
                },
                {   id: "giorgione",
                    intestazione:   {
                                        h1: "Meet The New Agency SEO Template From The Avada Team",
                                        p: "Sed ut persiiatis und eomnis iste natus error sit voluptatem accusantium doloremque laudentium.",
                                    },
                    cards:  [
                                {
                                    img: "./images/icons/gear-solid.svg",
                                    h1: "Ciao",
                                    p: ""
                                },
                                {
                                    img: "",
                                    h1: "Ciaone",
                                    p: "Prova delle prove"
                                }, 
                                {
                                    img: "./images/icons/gear-solid.svg",
                                    h1: "",
                                    p: "Prova delle proveProva delle proveProva delle proveProva delle proveProva delle proveProva delle proveProva delle proveProva delle proveProva delle proveProva delle proveProva delle proveProva delle proveProva delle proveProva delle prove"
                                }

                            ]
                    
                },
            ]


});
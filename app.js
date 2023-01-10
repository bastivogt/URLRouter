"use strict"

import { ContentLoader } from "./modules/ContentLoader.js";
import { URLRouter } from "./modules/URLRouter.js";
import routes from "./routes.js"



const elements = {
    navigationLinks: document.querySelectorAll("#navigation > li > a"),
    content: document.getElementById("content"),
    desc: document.querySelector("meta[name='description']"),
    main: document.getElementById("main")
}

const baseTitle = "URLRouter"




URLRouter.onRoute = (route) => {
    ContentLoader.onLoadInit = (container) => {
        console.log("onLoadInit")
        elements.main.style.visibility = "hidden"
        elements.main.style.opacity = 0

    }

    ContentLoader.onLoadFinish = (container) => {
        console.log("onLoadFinish")
        elements.main.style.visibility = "visible"
        elements.main.style.opacity = 1
    }
    ContentLoader.load(route.path, elements.content, 200)


    document.title = `${route.title} - ${baseTitle}`
    elements.desc.setAttribute("content", route.desc)
}

URLRouter.init(routes)
elements.navigationLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault()
        URLRouter.setRoute(link.href)
    })
})



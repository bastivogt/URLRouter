"use strict"

import { ContentLoader } from "./modules/ContentLoader.js";
import { URLRouter } from "./modules/URLRouter.js";
import routes from "./routes.js"



const elements = {
    navigationLinks: document.querySelectorAll("#navigation > li > a"),
    content: document.getElementById("content"),
    desc: document.querySelector("meta[name='description']")
}

const baseTitle = "URLRouter"




URLRouter.onRoute = (route) => {
    ContentLoader.onLoadInit = (container) => {
        console.log("onLoadInit")
    }

    ContentLoader.onLoadFinish = (container) => {
        console.log("onLoadFinish")
    }
    ContentLoader.load(route.path, elements.content)
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



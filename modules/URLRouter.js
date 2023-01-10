"use strict"

export class URLRouter {
    constructor() {}

    static routes;
    static onRoute = null // URLRouter.onRoute = (route) => {}

    static init(routes) {
        URLRouter.routes = routes

        URLRouter.handleRoute()
        window.addEventListener("popstate", (e) => {
            e.preventDefault()
            URLRouter.handleRoute()
        })
    }

    static setRoute(route) {
        window.history.pushState({}, "", route)
        URLRouter.handleRoute()
    }

    static handleRoute() {
        const path = window.location.pathname
        const route = URLRouter.routes[path] || URLRouter.routes["/404"]
        if(URLRouter.onRoute != null) URLRouter.onRoute(route)

    }
}
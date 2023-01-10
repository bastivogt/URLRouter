"use strict"

export class URLRouter {
    constructor() {}

    static routes
    static onRoute = null // URLRouter.onRoute = (route) => {}
    static currentRoute = ""
    static _404 = "/404"

    static init(routes) {
        URLRouter.routes = routes
        URLRouter.currentRoute = window.location.href


        URLRouter.handleRoute()
        window.addEventListener("popstate", (e) => {
            e.preventDefault()
            URLRouter.handleRoute()
        })
    }

    static setRoute(route) {
        if(URLRouter.currentRoute !== route) {
            window.history.pushState({}, "", route)
            URLRouter.currentRoute = route
            URLRouter.handleRoute()         
        }

    }

    static handleRoute() {
        const path = window.location.pathname
        const route = URLRouter.routes[path] || URLRouter.routes[URLRouter._404]
        if(URLRouter.onRoute != null) URLRouter.onRoute(route)
    }
}
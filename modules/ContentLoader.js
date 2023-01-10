"use strict"

export class ContentLoader {
    constructor() {}

    static errorMSG = "Fehler beim Laden!"
    static onLoadFinish = null // ContentLoader.onLoadFinish = (container) => {}
    static onLoadInit = null // ContentLoader.onLoadInit = (container) => {}




    static load(file, container, delay = 0) {
        if(ContentLoader.onLoadInit != null) ContentLoader.onLoadInit(container)
        fetch(file)
            .then((res) => {
                if(res.ok) {
                    return res.text()
                }
                return this.errorMSG
            })
            .then((data) => {
                container.innerHTML = data
                if(ContentLoader.onLoadFinish != null) {
                    window.setTimeout(() => {
                        ContentLoader.onLoadFinish(container)
                    }, delay)
            }
                

            })
        
    }
}
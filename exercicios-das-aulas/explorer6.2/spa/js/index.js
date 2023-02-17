// import Router from './router.js'

// const router = new Router()
// router.add('/', '/pages/home.html')
// router.add('/about', '/pages/about.html')
// router.add('/404', '/pages/error404.html')
// router.add('/contact', '/pages/contact.html')

// handle()

// window.onpopstate = () => handle()
// window.route = () => route()

class Passaro {
    voar() {
        alert('voar')
    }
}

class Pato extends Passaro {
    constructor() {
        super()
    }
}
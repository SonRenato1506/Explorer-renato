export class Favorites {
    constructor(root) {
        this.root = document.querySelector(root)
        this.load()
    }

    load() {
    
        this.entries = [
            {
                login: 'sonrenato1506',
                name: "Renato Matos",
                public_repos: '22',
                followers: '4'
            },
            {
                login: 'maykbrito',
                name: "Mayk Brito",
                public_repos: '76',
                followers: '120000'
            }
        ]
    }
}



export class FavoritesView extends Favorites {
    constructor(root) {
        super(root)

        this.tbody = this.root.querySelector("table tbody")

        this.uptade()
    }

    uptade() {
        this.removeAllTr()


        this.entries.forEach(user => {
            const row = this.createRow()
            row.querySelector('.user img')
            .src = `https://github.com/${user.login}.png`
            this.tbody.append(row)
        })
    }

    createRow() {
        const tr = document.createElement('tr')
        tr.innerHTML = `
            <td class="user">
                <img src="https://github.com/SonRenato1506.png" alt="Imagem de Renato Matos">
                <a href="https://github.com/SonRenato1506" target="_blank">
                    <p>Renato Matos</p>
                    <span>SonRenato1506</span>
                </a>
            </td>
            <td class="repositories">22</td>
            <td class="followers">4</td>
            <td><button class="remove">&times;</button></td>
        `

        return tr
    }

    removeAllTr() {
       

        this.tbody.querySelectorAll('tr')
            .forEach((tr) => {

                tr.remove()
            })
    }
}
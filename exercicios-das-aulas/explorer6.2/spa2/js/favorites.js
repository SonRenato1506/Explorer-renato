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
                login: 'MarcioTanan',
                name: "Marcio Tanan",
                public_repos: '16',
                followers: '19'
            }
        ]
    }

    delete(user) {
        const filteredEntries = this.entries
        .filter(entry => entry.login !== user.login)

        this.entries = filteredEntries
        this.uptade()
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
            row.querySelector('.user img').alt = `Imagem de ${user.name}`
            row.querySelector('.user p').textContent = user.name
            row.querySelector('.user span').textContent = user.login
            row.querySelector('.repositories').textContent = user.public_repos
            row.querySelector('.followers').textContent = user.followers

    //         row.querySelector('./remove').onclick = () => {
    //             const isok = confirm('Tem certeza que deseja deletar essa linha?')
    //             if(isok) {
    //                 this.delete(user)
    //             }
    // }
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
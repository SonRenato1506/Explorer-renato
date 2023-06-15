import { Header } from "../../components/Header"
import { Input } from "../../components/Input"
import { Textarea } from "../../components/Textarea"
import { NoteItem } from "../../components/NoteItem"
import { Section } from "../../components/Section"
import { Button } from "../../components/Button"
import { Container, Form } from "./styles"
import { Link } from "react-router-dom"
import { useState } from "react"
import { api } from "../../services/api"
import { useNavigate } from "react-router-dom"


export function New() {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    const [links, setLinks] = useState([])
    const [newLink, setNewLink] = useState("")

    const [tags, setTags] = useState([])
    const [newTag, setNewTag] = useState("")
    const navigate = useNavigate()

    function handleAddLink() {
        setLinks(prevState => [...prevState, newLink])
        setNewLink("")
    }

    function handleRemoveLink(deleted) {
        setLinks(prevState => prevState.filter(link => link !== deleted))
    }

    function handleAddTag() {
        setTags(prevState => [...prevState, newTag])
    }

    function handleRemoveTag(deleted) {
        setTags(prevState => prevState.filter(tag => tag !== deleted))
    }

    async function handleNewNote() {
        if (!title) {
            return alert("Digite o título da nota")
        }

        if (!description) {
            return alert("Digite a descrição")
        }

        if (!links) {
            return alert("Digite os link da nota")
        }

        if (!tags) {
            return alert("Digite as tags da nota")
        }


        if (newLink) {
            return alert("Você deixou um link no campo para adcionar, mas não clicou em adcionar. Clique para adcionar ou deixe o campo vazio.")
        }

        if (newTag) {
            return alert("Você deixou uma tag no campo para adcionar, mas não clicou em adcionar. Clique para adcionar ou deixe o campo vazio.")
        }





        await api.post("/notes/", {
            title,
            description,
            tags,
            links
        })

        alert("Nota criada com sucesso")
        navigate("/")
    }
    return (
        <Container>
            <Header />
            <main>

                <Form>

                    <header>

                        <h1>Criar Nota</h1>
                        <Link to="/">voltar</Link>

                    </header>

                    <Input
                        placeholder="Titulo"
                        onChange={e => setTitle(e.target.value)}
                    />
                    <Textarea
                        placeholder="Observações"
                        onChange={e => setDescription(e.target.value)}
                    />

                    <Section title="Links Úteis">
                        {
                            links.map((Link, index) => (
                                <NoteItem
                                    key={String(index)}
                                    value={Link}
                                    onClick={() => handleRemoveLink(Link)}
                                />
                            ))
                        }

                        <NoteItem
                            isNew
                            placeholder="Novo Link"
                            value={newLink}
                            onChange={e => setNewLink(e.target.value)}
                            onClick={handleAddLink}
                        />
                    </Section>

                    <Section title="Marcadores">
                        <div className="tags">
                            {
                                tags.map((tag, index) => (
                                    <NoteItem
                                        key={String(index)}
                                        value={tag}
                                        onClick={() => handleRemoveTag(tag)}
                                    />
                                ))
                            }
                            <NoteItem
                                isNew
                                placeholder="Nova Tag"
                                onChange={e => setNewTag(e.target.value)}
                                value={newTag}
                                onClick={handleAddTag}
                            />
                        </div>
                    </Section>

                    <Button
                        title="Salvar"
                        onClick={handleNewNote}
                    />

                </Form>

            </main>

        </Container>
    )
}
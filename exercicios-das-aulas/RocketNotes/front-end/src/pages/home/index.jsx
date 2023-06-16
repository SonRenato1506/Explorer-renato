import { FiPlus } from "react-icons/fi"
import { Container, Brand, Menu, Search, Content, NewNote } from "./styles"
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Section } from "../../components/Section";
import { Note } from "../../components/Note/index";
import { Header } from "../../components/Header"
import { ButtonText } from "../../components/ButtonText"
import { Input } from "../../components/Input"
import { api } from "../../services/api";

export function Home() {
    const [tags, setTags] = useState([])
    const [tagsSelected, setTagsSelected] = useState([])
    const [search, setSearch] = useState("")
    const [notes, setNotes] = useState([])


    function handleTagSelected(tagName) {
        const alreadySelected = tagsSelected.includes(tagName)

        if (alreadySelected) {
            const filteredTags = tagsSelected.filter(tag => tag !== tagName)
            setTagsSelected(filteredTags)
        } else {
            setTagsSelected(prevState => [...prevState, tagName])
        }

    }


    useEffect(() => {

        async function fetchTags() {
            const response = await api.get("/tags")
            setTags(response.data)
        }

        fetchTags()
    }, [])

    useEffect(() => {
        async function fetchNotes() {
            const response = await api.get(`/notes?title=${search}&tags=${tagsSelected}`)
            setNotes(response.data)
        }
        fetchNotes()
    }, [tagsSelected, search])
    return (
        <Container>
            <Brand>
                <h1>Renato Notes</h1>
            </Brand>
            <Header />
            <Menu>
                <li>
                    <ButtonText
                        title="Todos"
                        onClick={() => handleTagSelected("all")}
                        isActive={tagsSelected.length === 0}
                    />
                </li>
                {
                    tags && tags.map(tag => (

                        <li
                            key={String(tag.id)}
                        >
                            <ButtonText
                                title={tag.name}
                                onClick={() => handleTagSelected(tag.name)}
                                isActive={tagsSelected.includes(tag.name)}
                            />
                        </li>
                    ))
                }

            </Menu>
            <Search>
                <Input
                    placeholder="Pesquisar pelo título"
                    onChange={() => setSearch(e.target.value)}
                />
            </Search>
            <Content>
                <Section title="Minhas notas">
                    <Link to="details/1">
                        {

                            notes.map(note => (
                                <Note
                                    key={String(note.id)}
                                    data={note}
                                />
                            ))
                        }
                    </Link>

                </Section>
            </Content>

            <NewNote to="/new">

                <FiPlus />
                Criar nota

            </NewNote>

        </Container>
    )
}
import { FiPlus } from "react-icons/fi"
import { Container, Brand, Menu, Search, Content, NewNote } from "./styles"
import { Link } from "react-router-dom";

import { Section } from "../../components/Section";
import { Note } from "../../components/Note/index";
import { Header } from "../../components/Header"
import { ButtonText } from "../../components/ButtonText"
import { Input } from "../../components/Input"

export function Home() {
    return (
        <Container>
            <Brand>
                <h1>Renato Notes</h1>
            </Brand>
            <Header />
            <Menu>
                <li><ButtonText title="Todos" isActive /></li>
                <li><ButtonText title="React" /></li>
                <li><ButtonText title="Node" /></li>
            </Menu>
            <Search>
                <Input placeholder="Pesquisar pelo título" />
            </Search>
            <Content>
                <Section title="Minhas notas">
                    <Link to="details/1">
                        <Note data={{
                            title: "React",
                            tags: [
                                { id: "1", name: "react" },
                                { id: "2", name: "rocketseat" }
                            ]
                        }} />
                    </Link>

                </Section>
            </Content>

            <NewNote>
                <Link to="/new">
                    <FiPlus />
                    Criar nota
                </Link>
            </NewNote>

        </Container>
    )
}
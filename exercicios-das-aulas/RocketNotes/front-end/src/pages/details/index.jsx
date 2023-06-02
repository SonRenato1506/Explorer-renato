import { Container, Links, Content } from "./styles"
import { Header } from "../../components/Header"
import { Button } from "../../components/Button"
import { Section } from "../../components/Section"
import { ButtonText } from "../../components/ButtonText"
import { Tag } from "../../components/Tag"
export function Details() {
  return (
    <Container>
      <Header />
      <main>
        <Content>
          <h1>Introdução ao React</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi dolores deleniti Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Quasi dolores deleniti optio expedita vitae totam, ipsa molestias, numquam eveniet, doloribus accusamus tempore. Dignissimos repellendus, 
            provident veritatis blanditiis qui autem consequatur. optio expedita vitae totam, ipsa molestias, numquam eveniet, doloribus accusamus tempore. 
            Dignissimos repellendus, provident veritatis blanditiis qui autem consequatur. Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            Accusantium ducimus asperiores quasi dolor consequuntur unde illum libero earum autem commodi in at blanditiis, itaque nobis ad dolorem 
            voluptas temporibus doloribus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque praesentium incidunt itaque voluptate, 
            in voluptatibus quisquam enim dolor optio nihil hic ea accusantium perspiciatis beatae, aliquid dolorum quasi similique obcaecati?</p>
          <ButtonText title="Excluir nota" />
          <Section title="Links Úteis">
            <Links>
              <li><a href="#">https://www.rocketseat.com.br</a></li>
              <li><a href="#">https://www.rocketseat.com.br</a></li>
            </Links>
          </Section>
          <Section title="Marcadores">
            <Tag title="express" />
            <Tag title="node" />
          </Section>

          <Button title="Voltar" />

        </Content>
      </main>
    </Container>
  )
}
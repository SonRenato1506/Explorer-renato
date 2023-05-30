import { Container } from "./styles"
import { Button } from "../../components/Button"
export function Details() {
  return (
    <Container>
      <h1>Hello Word</h1>
      <span>Renato Matos</span>
      <Button title="Entrar" loading/>
      <Button title="Cadastrar" />
      <Button  title="Voltar" />
    </Container>
  )
}
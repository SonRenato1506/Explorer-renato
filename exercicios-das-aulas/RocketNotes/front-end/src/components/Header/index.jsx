import { RiShutDownLine } from 'react-icons/ri';
import {useAuth} from "../../hooks/auth";
import { Container, Profile, Logout } from "./styles";
import { Link } from 'react-router-dom';
export function Header() {
    const { signOut} = useAuth();
    return (
        <Container>
            <Profile>
                <Link to="/profile"><img src="https://github.com/SonRenato1506.png" alt="Foto do usuário" /></Link>
                <div>
                    <span>Bem vindo!</span>
                    <strong>Renato Matos</strong>
                </div>
            </Profile>
            <Logout onClick={signOut}>
                <RiShutDownLine />
            </Logout>
        </Container>
    )
}
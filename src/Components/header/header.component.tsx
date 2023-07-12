//Styles
import { HeaderContainer, HeaderItems, HeaderItem, HeaderTitle } from './header.styles'
import { userContext } from '../../contexts/user.context';
import { useContext } from 'react';

// Utils
import { BsCart3 } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import { signOut } from 'firebase/auth';
import { auth } from '../../config/firebase.config';


const Header = () => {

    const navigate = useNavigate();
    
    const handleLogoClick = () => {
        navigate('/')
    }
    const handleLoginClick = () =>{
        navigate('/login')
    };
    const handleExplorarClick = () => {
        navigate('/explore')
    }
    const handleSignUpClick = () => {
        navigate('/sign-up')
    }

    const {isAuthenticated} = useContext(userContext)

    return (
        <HeaderContainer>
            <HeaderTitle onClick={handleLogoClick}>CLUB CLOTHING</HeaderTitle>
            
            <HeaderItems>
                <HeaderItem onClick={handleExplorarClick}>Explorar</HeaderItem>
                {
                    !isAuthenticated && (
                        <>
                            <HeaderItem onClick={handleLoginClick}>Login</HeaderItem>
                            <HeaderItem onClick={handleSignUpClick}>Criar Conta</HeaderItem>
                        </>
                    )
                }
                {
                    isAuthenticated && (
                        <>
                            <HeaderItem onClick={() => signOut(auth)}>Sair</HeaderItem>
                        </>
                    )
                }
                <HeaderItem>
                    <BsCart3 size={25}/>
                    <p style={{marginLeft: 5}}>5</p>
                </HeaderItem>
            </HeaderItems>

        </HeaderContainer>
            
        
    )
}

export default Header;
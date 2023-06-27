// Styles
import { LoginContainer, LoginContent, LoginHeadline, LoginInputContainer, LoginSubtitle } from "./login.styles";

// Components
import CustomButton from "../../Components/custom-button/custom-button.component";
import Header from "../../Components/header/header.component";

// Utilities
import { BsGoogle } from 'react-icons/bs'
import { FiLogIn } from 'react-icons/fi'
import CustomInput from "../../Components/custom-input/custom-input.component";

const LoginPage = () => {
    return ( 
        <>
            <Header />

            <LoginContainer>
                <LoginContent>
                    <LoginHeadline>Entre com a sua conta</LoginHeadline> 
                    <CustomButton startIcon={<BsGoogle size={18}/>}>Entrar com o Google</CustomButton>

                    <LoginSubtitle>Ou entre com seu e-mail</LoginSubtitle>

                    <LoginInputContainer>
                        <p>E-mail</p>
                        <CustomInput placeholder="Digite seu E-mail"  />
                    </LoginInputContainer>
                    <LoginInputContainer>
                        <p>Senha</p>
                        <CustomInput placeholder="Digite sua senha" />
                    </LoginInputContainer>

                    <CustomButton startIcon={ <FiLogIn size={18}/> }>Entrar</CustomButton>
                </LoginContent>
                
            </LoginContainer>
        </>
     );
}
 
export default LoginPage;
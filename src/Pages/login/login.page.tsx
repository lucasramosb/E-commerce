// Styles
import { LoginContainer, LoginContent, LoginHeadline, LoginInputContainer, LoginSubtitle } from "./login.styles";

// Components
import CustomButton from "../../Components/custom-button/custom-button.component";
import Header from "../../Components/header/header.component";

// Utilities
import { BsGoogle } from 'react-icons/bs'
import { FiLogIn } from 'react-icons/fi'

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
                        {/* Email Input */}
                    </LoginInputContainer>
                    <LoginInputContainer>
                        {/* password Input */}
                    </LoginInputContainer>

                    <CustomButton startIcon={ <FiLogIn size={18}/> }>Entrar</CustomButton>
                </LoginContent>
                
            </LoginContainer>
        </>
     );
}
 
export default LoginPage;
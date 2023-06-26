import Header from "../../Components/header/header.component";
import { LoginContainer, LoginContent, LoginHeadline, LoginInputContainer, LoginSubtitle } from "./login.styles";

const LoginPage = () => {
    return ( 
        <>
            <Header />

            <LoginContainer>
                <LoginContent>
                    <LoginHeadline>Entre com a sua conta</LoginHeadline> 
                    {/* Buttom */}

                    <LoginSubtitle>Ou entre com seu e-mail</LoginSubtitle>

                    <LoginInputContainer>
                        {/* Email Input */}
                    </LoginInputContainer>
                    <LoginInputContainer>
                        {/* password Input */}
                    </LoginInputContainer>

                    {/* Buttom */}
                </LoginContent>
                
            </LoginContainer>
        </>
     );
}
 
export default LoginPage;
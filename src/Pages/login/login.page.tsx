// Styles
import { LoginContainer, LoginContent, LoginHeadline, LoginInputContainer, LoginSubtitle } from "./login.styles";

// Components
import CustomButton from "../../Components/custom-button/custom-button.component";
import Header from "../../Components/header/header.component";
import InputErrorMessage from "../../Components/input-error-message/input-error-message.component";
import CustomInput from "../../Components/custom-input/custom-input.component";

// Utilities
import { BsGoogle } from 'react-icons/bs'
import { FiLogIn } from 'react-icons/fi'
import { useForm } from 'react-hook-form'
import validator from "validator";

const LoginPage = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();

    const handleSubmitPress = (data: any) =>{
        console.log({ data })
    }

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
                        <CustomInput hasError={!!errors.email} placeholder="Digite seu E-mail" {...register('email', {required: true, 
                            validate: (value) => {
                                return validator.isEmail(value)
                            }
                        })} />
                        {errors?.email?.type === 'required' && (<InputErrorMessage>O e-mail é obrigatória</InputErrorMessage>)}
                        {errors?.email?.type === 'validate' && (<InputErrorMessage>Insira um E-mail valido</InputErrorMessage>)}

                    </LoginInputContainer>

                    <LoginInputContainer>
                        <p>Senha</p>
                        <CustomInput hasError={!!errors.password} placeholder="Digite sua senha" {...register('password', {required: true})} />
                        {errors?.password?.type === 'required' && (<InputErrorMessage>A senha é obrigatória</InputErrorMessage>)}
                    </LoginInputContainer>

                    <CustomButton startIcon={ <FiLogIn size={18}/> } onClick={() => handleSubmit(handleSubmitPress)()} >Entrar</CustomButton>

                </LoginContent>               
            </LoginContainer>
        </>
     );
}
 
export default LoginPage;
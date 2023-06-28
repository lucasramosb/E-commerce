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
import { AuthError, AuthErrorCodes, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase.config";

interface LoginForm {
    email: string
    password: string
}

const LoginPage = () => {

    const { register, formState: { errors }, handleSubmit, setError } = useForm<LoginForm>();

    const handleSubmitPress = async (data: LoginForm) =>{
        try{
            const userCredentials = await signInWithEmailAndPassword(auth, data.email, data.password)

            console.log({userCredentials})

        }catch(error) {
            const _error = error as AuthError

            if(_error.code === AuthErrorCodes.INVALID_PASSWORD){
                return setError('password', {type: 'incorrect'})
            }

            if (_error.code === AuthErrorCodes.USER_DELETED){
                return setError('email', {type: 'notFound'})
            }
        }
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
                        {errors?.email?.type === 'notFound' && (<InputErrorMessage>O E-mail não foi encontrado</InputErrorMessage>)}

                    </LoginInputContainer>

                    <LoginInputContainer>
                        <p>Senha</p>
                        <CustomInput type="password" hasError={!!errors.password} placeholder="Digite sua senha" {...register('password', {required: true})} />
                        {errors?.password?.type === 'required' && (<InputErrorMessage>Digite uma senha</InputErrorMessage>)}
                        {errors?.password?.type === 'incorrect' && (<InputErrorMessage>Senha Incorreta</InputErrorMessage>)}
                    </LoginInputContainer>

                    <CustomButton startIcon={ <FiLogIn size={18}/> } onClick={() => handleSubmit(handleSubmitPress)()} >Entrar</CustomButton>

                </LoginContent>               
            </LoginContainer>
        </>
     );
}
 
export default LoginPage;
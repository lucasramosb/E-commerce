/* eslint-disable @typescript-eslint/no-unused-vars */
// Styles
import { LoginContainer, LoginContent, LoginHeadline, LoginInputContainer, LoginSubtitle } from "./login.styles";

// Components
import CustomButton from "../../Components/custom-button/custom-button.component";
import Header from "../../Components/header/header.component";
import InputErrorMessage from "../../Components/input-error-message/input-error-message.component";
import CustomInput from "../../Components/custom-input/custom-input.component";
import Loading from "../../Components/loading/loading.components";

// Utilities
import { BsGoogle } from 'react-icons/bs'
import { FiLogIn } from 'react-icons/fi'
import { useForm } from 'react-hook-form'
import validator from "validator";
import { AuthError, AuthErrorCodes, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, db, googlePorvider } from "../../config/firebase.config";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useContext, useState } from 'react'
import { userContext } from "../../contexts/user.context";
import { useNavigate } from "react-router-dom";

interface LoginForm {
    email: string
    password: string
}

const LoginPage = () => {

    const { register, formState: { errors }, handleSubmit, setError } = useForm<LoginForm>();

    const [isLoading, setIsLoading] = useState(false)

    const handleSubmitPress = async (data: LoginForm) =>{
        try{
            setIsLoading(true);

            const userCredentials = await signInWithEmailAndPassword(auth, data.email, data.password);

            // console.log({userCredentials})

        }catch(error) {
            const _error = error as AuthError

            if(_error.code === AuthErrorCodes.INVALID_PASSWORD){
                return setError('password', {type: 'incorrect'})
            }

            if (_error.code === AuthErrorCodes.USER_DELETED){
                return setError('email', {type: 'notFound'})
            }
        }finally{
            setIsLoading(false);
        }
    }
    
    //Login Google
    const handleSignWithGoogle = async () => {
        try{
            setIsLoading(true)

            //adiciona o login com o google
            const userCredentials = await signInWithPopup(auth, googlePorvider)

            //retorna o usario se ele existir no banco
            const querySnapshot = await getDocs(query(collection(db, 'users'), where('id', '==', userCredentials.user.uid)))

            //pega os dados do usuario 
            const user = querySnapshot.docs[0]?.data()

            //se o usuario não existir ele sera cadastrado no banco
            if(!user){
                //split para dividir o objeto displayName e atribui-lo a uma variavel
                const firstName = userCredentials.user.displayName?.split(' ')[0]
                const lastName = userCredentials.user.displayName?.split(' ')[1]
                await addDoc(collection(db, 'users'), {
                    id: userCredentials.user.uid, 
                    email: userCredentials.user.email,
                    firstName,
                    lastName,
                    provider: 'google',
                    photoUrl: userCredentials.user.photoURL
                })
            }
        }catch(error) {

        }finally{
            setIsLoading(false)
        }
    }

    const {isAuthenticated} = useContext(userContext);

    const navigate = useNavigate();

    useEffect(() => {
        if(isAuthenticated){
            navigate('/')
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[isAuthenticated])

    return ( 
        <>
            <Header />

            {/* quando o Loading for true, Renderizar o carregamento de tela */}
            {isLoading && <Loading/>}

            <LoginContainer>
                <LoginContent>

                    <LoginHeadline>Entre com a sua conta</LoginHeadline>

                    <CustomButton onClick={handleSignWithGoogle} startIcon={<BsGoogle size={18}/>}>Entrar com o Google</CustomButton>

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
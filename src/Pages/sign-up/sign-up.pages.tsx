// Styles
import { SignUpContainer, SignUpContent, SignUpHeadline, SignUpInputContainer } from "./sign-up.styles";

// Components
import CustomButton from "../../Components/custom-button/custom-button.component";
import CustomInput from "../../Components/custom-input/custom-input.component";
import Header from "../../Components/header/header.component";
import InputErrorMessage from "../../Components/input-error-message/input-error-message.component";
import Loading from "../../Components/loading/loading.components";

//Utilities
import { useForm } from "react-hook-form";
import validator from "validator";
import { auth, db } from "../../config/firebase.config";
import { addDoc, collection } from "firebase/firestore";
import { AuthError, AuthErrorCodes, createUserWithEmailAndPassword } from "firebase/auth";
import { userContext } from "../../contexts/user.context";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
interface SignUpForm {
    firstName: string, 
    lastName: string,
    email: string,
    password: string,
    passwordConfirmation: string
}

const SingUpPage = () => {

    const { register, handleSubmit, formState: {errors}, watch, setError } = useForm<SignUpForm>();

    const [isLoading, setIsLoading] = useState(false)

    const handleSubmitPress = async (data: SignUpForm) => {
        try{
            setIsLoading(true)

            const userCredentials = await createUserWithEmailAndPassword(auth, data.email, data.password)

            console.log({userCredentials})

            await addDoc(collection(db, 'users'), {
                id: userCredentials.user.uid,
                email: userCredentials.user.email,
                firstName: data.firstName,
                lastName: data.lastName,
                provider: 'firebase'
            })

        }catch(error) {
            const _error = error as AuthError

            if(_error.code === AuthErrorCodes.EMAIL_EXISTS) {
                return setError('email', {type: 'alreadyInUse'} )
            }
        } finally{
            setIsLoading(false)
        }
    }

    const watchPassword = watch('password');

    const {isAuthenticated} = useContext(userContext);

    const navigate = useNavigate();

    useEffect(() => {
        if(isAuthenticated){
            navigate('/')
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isAuthenticated])

    return ( 
        <>
            <Header/>

            {isLoading && <Loading/>}

            <SignUpContainer>
                <SignUpContent>
                    <SignUpHeadline>Crie sua Conta</SignUpHeadline>

                    <SignUpInputContainer>
                        <p>Nome</p>
                        <CustomInput hasError={!!errors?.firstName} placeholder="Digite seu nome" 
                        {...register('firstName', { required: true })} />
                        {errors?.firstName?.type === 'required' && (<InputErrorMessage>Digite um nome</InputErrorMessage>)}
                    </SignUpInputContainer>

                    <SignUpInputContainer>
                        <p>Sobrenome</p>
                        <CustomInput hasError={!!errors?.lastName} placeholder="Digite seu Sobrenome"
                        {...register('lastName', { required: true })} />
                        {errors?.lastName?.type === 'required' && (<InputErrorMessage>Digite um sobrenome</InputErrorMessage>)}
                    </SignUpInputContainer>

                    <SignUpInputContainer>
                        <p>E-mail</p>
                        <CustomInput hasError={!!errors?.email} placeholder="Digite seu E-mail"
                        {...register('email', { required: true,
                            validate: (value) => {
                                return validator.isEmail(value) 
                            }
                        })} />
                        {errors?.email?.type === 'required' && (<InputErrorMessage>O e-mail é obrigatória</InputErrorMessage>)}
                        {errors?.email?.type === 'validate' && (<InputErrorMessage>Insira um E-mail valido</InputErrorMessage>)}
                        {errors?.email?.type === 'alreadyInUse' && (<InputErrorMessage>Este E-mail já esta sendo utilizado</InputErrorMessage>)}
                    </SignUpInputContainer>

                    <SignUpInputContainer>
                        <p>Senha</p>
                        <CustomInput hasError={!!errors?.password} type="password" placeholder="Digite sua Senha"
                        {...register('password', { required: true, minLength: 6 })} />
                        {errors?.password?.type === 'required' && (<InputErrorMessage>Digite uma Senha</InputErrorMessage>)}
                        {errors?.password?.type === 'minLength' && (<InputErrorMessage>A senha precisa ter pelo menos 6 caracteres</InputErrorMessage>)}
                    </SignUpInputContainer>

                    <SignUpInputContainer>
                        <p>Confirmação de Senha</p>
                        <CustomInput hasError={!!errors?.passwordConfirmation} type="password" placeholder="Confirme sua Senha"
                        {...register('passwordConfirmation', { required: true, minLength: 6,
                            validate: (value) =>{
                                return value === watchPassword
                            } })} />

                        {errors?.passwordConfirmation?.type === 'required' && (<InputErrorMessage>Confirme sua senha</InputErrorMessage>)}
                        {errors?.passwordConfirmation?.type === 'validate' && (<InputErrorMessage>As duas senha devem ser iguais</InputErrorMessage>)}
                        {errors?.password?.type === 'minLength' && (<InputErrorMessage>A senha precisa ter pelo menos 6 caracteres</InputErrorMessage>)}
                    </SignUpInputContainer>

                    <CustomButton onClick={() => handleSubmit(handleSubmitPress)()}>Criar conta</CustomButton>

                </SignUpContent>
            </SignUpContainer>
        </>
    );
}
 
export default SingUpPage;
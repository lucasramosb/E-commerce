// Components
import CustomButton from "../../Components/custom-button/custom-button.component";
import CustomInput from "../../Components/custom-input/custom-input.component";
import Header from "../../Components/header/header.component";
import InputErrorMessage from "../../Components/input-error-message/input-error-message.component";

// Styles
import { SignUpContainer, SignUpContent, SignUpHeadline, SignUpInputContainer } from "./sign-up.styles";

//Utilities
import { useForm } from "react-hook-form";
import validator from "validator";

interface SignUpForm {
    name: string, 
    lastName: string,
    email: string,
    password: string,
    passwordConfirmation: string
}

const SingUpPage = () => {

    const { register, handleSubmit, formState: {errors}, watch } = useForm<SignUpForm>();

    const handleSubmitPress = (data: SignUpForm) => {
        console.log(data)
    }

    const watchPassword = watch('password')

    console.log({errors})

    return ( 
        <>
            <Header/>

            <SignUpContainer>
                <SignUpContent>
                    <SignUpHeadline>Crie sua Conta</SignUpHeadline>

                    <SignUpInputContainer>
                        <p>Nome</p>
                        <CustomInput hasError={!!errors?.name} placeholder="Digite seu nome" 
                        {...register('name', { required: true })} />
                        {errors?.name?.type === 'required' && (<InputErrorMessage>Digite um nome</InputErrorMessage>)}
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
                    </SignUpInputContainer>

                    <SignUpInputContainer>
                        <p>Senha</p>
                        <CustomInput hasError={!!errors?.password} type="password" placeholder="Digite sua Senha"
                        {...register('password', { required: true })} />
                        {errors?.password?.type === 'required' && (<InputErrorMessage>Digite uma Senha</InputErrorMessage>)}
                    </SignUpInputContainer>

                    <SignUpInputContainer>
                        <p>Confirmação de Senha</p>
                        <CustomInput hasError={!!errors?.passwordConfirmation} type="password" placeholder="Confirme sua Senha"
                        {...register('passwordConfirmation', { required: true,
                            validate: (value) =>{
                                return value === watchPassword
                            } })} />

                        {errors?.passwordConfirmation?.type === 'required' && (<InputErrorMessage>Confirme sua senha</InputErrorMessage>)}
                        {errors?.passwordConfirmation?.type === 'validate' && (<InputErrorMessage>As duas senha precisão ser iguais</InputErrorMessage>)}
                    </SignUpInputContainer>

                    <CustomButton onClick={() => handleSubmit(handleSubmitPress)()}>Criar conta</CustomButton>

                </SignUpContent>
            </SignUpContainer>
        </>
    );
}
 
export default SingUpPage;
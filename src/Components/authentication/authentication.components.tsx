import { FunctionComponent, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

//Utilities
import { userContext } from "../../contexts/user.context";

//Components
import Header from "../header/header.component";
import Loading from "../loading/loading.components";

interface AuthenticationProps{
    children: any
}

const Authentication: FunctionComponent<AuthenticationProps> = ({ children }) => {

    const {isAuthenticated} = useContext(userContext)

    const navigate = useNavigate()

    //Se o usuario não estiver autenticado
    useEffect(() => {
        if(!isAuthenticated){
            setTimeout(() => {
                navigate('/login')
            }, 3000)
        }
    }, [isAuthenticated, navigate])

    if(!isAuthenticated){
        return (
            <>
                <Header/>
                <Loading message="Você precisa estar logado para finalizar a compra" />
            </>
        )
    }

    //Se o usuario estiver autenticado
    return (
        <>
            {children}
        </>
    )
}

export default Authentication;
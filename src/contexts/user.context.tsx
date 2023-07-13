import { FunctionComponent, createContext, useState,  } from "react";
import User from "../Types/user.types";

interface IUserContext {
    currentUser: User | null,
    isAuthenticated: boolean,
    loginUser: (user: User) => void
    logoutUser: () => void
}
interface userContextProps {
    children: any
}

export const userContext = createContext<IUserContext>({
    currentUser: null,
    isAuthenticated: false,
    loginUser: () => {},
    logoutUser: () => {}
});

const UserContextProvider: FunctionComponent<userContextProps> = ({children}) =>{

    const [currentUser, setCurrentUser] = useState<User | null>(null)

    //se current user for diferente de null, significa que ele esta autenticado
    const isAuthenticated = currentUser !== null

    const loginUser = (user: User) => {
        setCurrentUser(user)
    }

    const logoutUser = () => {
        setCurrentUser(null)
    }


    return(
        <userContext.Provider value={{ currentUser, isAuthenticated, loginUser, logoutUser }} >
            {children}
        </userContext.Provider>
    )
}

export default UserContextProvider;
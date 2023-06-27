import { FunctionComponent } from 'react'

import { InputErrorMessageContainer } from './input-error-message.styles';

interface InputError {
    children: string
}

const InputErrorMessage: FunctionComponent<InputError> = ({ children }) => {
    return ( 
        <InputErrorMessageContainer>{children}</InputErrorMessageContainer>
    );
}
 
export default InputErrorMessage;
import { FunctionComponent, InputHTMLAttributes } from "react";
import { CustomInputContainer } from "./custom-input.styles";

interface CustominputProps extends InputHTMLAttributes<HTMLInputElement> {
    hasError?: boolean
}

//...res guarda todas as props que um input tem, vinda do inputHTMLAtrributes para ser passada para uma div pai
const CustomInput: FunctionComponent<CustominputProps> = ({hasError, ...rest}) => {
    return ( 
       <CustomInputContainer hasError={hasError} {...rest} />

       
    );
}
 
export default CustomInput;
import React, { FunctionComponent, InputHTMLAttributes } from "react";
import { CustomInputContainer } from "./custom-input.styles";

interface CustominputProps extends InputHTMLAttributes<HTMLInputElement> {
    hasError?: boolean
}

//...res guarda todas as props que um input tem, vinda do inputHTMLAtrributes para ser passada para uma div pai
const CustomInput: FunctionComponent<CustominputProps> = React.forwardRef (
    (props, ref ) => {
        return ( 
            <CustomInputContainer {...props} ref={ref as any} />
         );
    }
)

CustomInput.displayName = 'CustomInput'
 
export default CustomInput;
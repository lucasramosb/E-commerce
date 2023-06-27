import React, { FunctionComponent, ButtonHTMLAttributes } from "react";
import { CustomButtonContainer, IconContainer } from "./custom-button.style";


//usando ButtonHTMLAtrributes para dar ao componente pai atributos de buttons
interface CustomButonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    startIcon?: React.ReactNode,
    children: string
}
const CustomButton:FunctionComponent<CustomButonProps> = ({ children, startIcon, ...rest }) => {
    return ( 
        <CustomButtonContainer {...rest}>
            {startIcon && <IconContainer>{startIcon}</IconContainer>}

            {children}
        </CustomButtonContainer>
    );
}
 
export default CustomButton;
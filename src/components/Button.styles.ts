import styled, { css } from 'styled-components';

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success';

interface ButtonContainerProps {
    variant: ButtonVariant;
}

const ButtonVariant = {
    primary: 'purple',
    secondary: 'orange',
    danger: 'red',
    success: 'green'
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
    width: 100px;
    height: 40px;

    background-color: ${props => props.theme['green-500']};
    color: ${props => props.theme.white};
    border-radius: 4px;
    margin: 8px;

    /* ${props => {
        return css`
        background-color: ${ButtonVariant[props.variant]}
        `
    }} */
`
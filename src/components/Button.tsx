import { ButtonContainer, ButtonVariant } from './Button.styles.ts';

interface ButtonProps {
    variant: ButtonVariant;
}

export function Button({variant = 'primary'}: ButtonProps) {
    return <ButtonContainer variant={variant}>Send</ButtonContainer>
}
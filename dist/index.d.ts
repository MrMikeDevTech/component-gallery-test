import * as react_jsx_runtime from 'react/jsx-runtime';
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    /**
     * Define el tipo de boton
     */
    variant?: 'primary' | 'secondary';
    /**
     * Texto del boton
     */
    label: string;
}
/**
 * Boton personalizado
 * @param variant - Define el tipo de boton
 * @param label - Texto del boton
 * @param props - Props del boton
 * @returns Boton personalizado
 */
declare const Button: ({ variant, label, ...props }: ButtonProps) => react_jsx_runtime.JSX.Element;

export { Button };

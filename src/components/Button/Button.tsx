import React from 'react';
import './Button.css';

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
export const Button = ({ variant = 'primary', label, ...props }: ButtonProps) => {
  return (
    <button 
      className={`empresa-button empresa-button-${variant}`} 
      {...props}
    >
      {label}
    </button>
  );
};
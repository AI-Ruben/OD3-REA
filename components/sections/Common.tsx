
import React from 'react';

export const TabActions: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="text-right mt-8 pt-4 border-t">
        {children}
    </div>
);

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary';
    children: React.ReactNode;
}
export const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', ...props }) => {
    const baseClasses = "border-none py-3 px-8 rounded-md text-base font-bold tracking-wider shadow-md transition-colors duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed ml-4";
    const variantClasses = {
        primary: "bg-[#6080A3] text-white hover:bg-[#436184] active:bg-[#223046]",
        secondary: "bg-gray-200 text-gray-700 hover:bg-gray-300"
    };

    return (
        <button className={`${baseClasses} ${variantClasses[variant]}`} {...props}>
            {children}
        </button>
    );
};

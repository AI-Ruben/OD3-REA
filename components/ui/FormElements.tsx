import React from 'react';

interface FormLabelProps {
    htmlFor: string;
    children: React.ReactNode;
}

export const FormLabel: React.FC<FormLabelProps> = ({ htmlFor, children }) => (
    <label htmlFor={htmlFor} className="block mt-5 mb-2 font-bold text-[#223046]">
        {children}
    </label>
);

const baseInputClasses = "w-full p-3 border border-[#b3c5de] rounded-md bg-[#f6f8fb] focus:ring-2 focus:ring-[#6080A3] focus:border-transparent transition";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}
export const Input: React.FC<InputProps> = (props) => (
    <input {...props} className={baseInputClasses} />
);

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {}
export const Select: React.FC<SelectProps> = (props) => (
    <select {...props} className={baseInputClasses + " appearance-none"} />
);

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}
export const Textarea: React.FC<TextareaProps> = (props) => (
    <textarea {...props} className={baseInputClasses + " min-h-[70px] resize-vertical"} />
);

interface CheckboxGroupProps {
    name: string;
    options: { value: string; label: string }[];
    selectedValues: string[];
    onChange: (name: string, value: string) => void;
}

export const CheckboxGroup: React.FC<CheckboxGroupProps> = ({ name, options, selectedValues, onChange }) => (
    <div className="bg-[#eef3fb] border border-[#d0d8e5] rounded-lg p-4">
        {options.map(option => (
            <label key={option.value} className="flex items-start font-normal text-gray-800 my-3 cursor-pointer">
                <input
                    type="checkbox"
                    name={name}
                    value={option.value}
                    checked={selectedValues.includes(option.value)}
                    onChange={() => onChange(name, option.value)}
                    className="mr-3 accent-[#6080A3] w-5 h-5 flex-shrink-0 mt-1"
                />
                <span>{option.label}</span>
            </label>
        ))}
    </div>
);

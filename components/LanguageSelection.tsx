
import React from 'react';
import { Language } from '../types';

interface Props {
    onSelectLanguage: (lang: Language) => void;
}

const LanguageSelection: React.FC<Props> = ({ onSelectLanguage }) => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-[#f4f7fa] text-[#223046]">
            <header className="bg-[#6080A3] text-white p-8 text-center text-3xl font-bold tracking-wider border-b-4 border-[#436184] w-full">
                Simulador REA / ODE3 - ikasNOVA
            </header>
            <main className="flex-grow flex flex-col items-center justify-center text-center p-8">
                <h1 className="text-4xl font-bold mb-4">Bienvenido / Ongi etorri</h1>
                <p className="text-xl mb-8">Selecciona un idioma / Aukeratu hizkuntza bat</p>
                <div className="flex space-x-4">
                    <button
                        onClick={() => onSelectLanguage('es')}
                        className="bg-[#6080A3] text-white hover:bg-[#436184] active:bg-[#223046] border-none py-4 px-10 rounded-md text-xl font-bold tracking-wider shadow-md transition-colors duration-200 cursor-pointer"
                    >
                        Español
                    </button>
                    <button
                        onClick={() => onSelectLanguage('eu')}
                        className="bg-[#6080A3] text-white hover:bg-[#436184] active:bg-[#223046] border-none py-4 px-10 rounded-md text-xl font-bold tracking-wider shadow-md transition-colors duration-200 cursor-pointer"
                    >
                        Euskara
                    </button>
                </div>
            </main>
            <footer className="text-center text-sm text-gray-400 py-6 px-4 bg-white border-t w-full">
                Simulador ODE3 &copy; 2025 ikasNOVA - Gobierno de Navarra | Basado en requisitos INTEF 2025
            </footer>
        </div>
    );
};

export default LanguageSelection;

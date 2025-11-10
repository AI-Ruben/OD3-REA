
import React from 'react';
import { SectionId } from '../types';

interface NavBarProps {
    navItems: { id: SectionId; label: string }[];
    activeSection: SectionId;
    onSectionChange: (sectionId: SectionId) => void;
}

const NavBar: React.FC<NavBarProps> = ({ navItems, activeSection, onSectionChange }) => {
    return (
        <nav className="flex justify-center bg-[#e6eaf0] border-b-2 border-[#6080A3] flex-wrap sticky top-0 z-10">
            {navItems.map(({ id, label }) => (
                <button
                    key={id}
                    onClick={() => onSectionChange(id)}
                    className={`bg-transparent border-none text-lg font-bold py-4 px-6 cursor-pointer transition-all duration-200 ease-in-out hover:bg-[#d0d8e5] hover:text-[#223046] focus:outline-none focus:ring-2 focus:ring-[#6080A3]
                        ${activeSection === id ? 'bg-[#d0d8e5] text-[#223046] border-b-[3px] border-[#6080A3]' : 'text-[#6080A3] border-b-[3px] border-transparent'}`}
                >
                    {label}
                </button>
            ))}
        </nav>
    );
};

export default NavBar;

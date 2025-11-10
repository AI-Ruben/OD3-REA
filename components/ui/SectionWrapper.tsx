
import React from 'react';

interface SectionWrapperProps {
    title: string;
    children: React.ReactNode;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ title, children }) => {
    return (
        <section className="bg-white shadow-lg rounded-lg p-8 animate-fade-in">
            <h2 className="text-[#6080A3] text-2xl font-bold tracking-wider mb-6 pb-2 border-b">{title}</h2>
            {children}
        </section>
    );
};

export default SectionWrapper;

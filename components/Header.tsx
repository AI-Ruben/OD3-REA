
import React from 'react';
import { Translation } from '../i18n';

interface Props {
    t: Translation;
}

const Header: React.FC<Props> = ({ t }) => {
    return (
        <header className="bg-[#6080A3] text-white p-8 text-center text-3xl font-bold tracking-wider border-b-4 border-[#436184]">
            {t.headerTitle}
        </header>
    );
};

export default Header;

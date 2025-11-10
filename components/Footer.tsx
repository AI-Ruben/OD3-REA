
import React from 'react';
import { Translation } from '../i18n';

interface Props {
    t: Translation;
}

const Footer: React.FC<Props> = ({ t }) => {
    return (
        <footer className="text-center text-sm text-gray-400 py-6 px-4 bg-white border-t">
            {t.footerText}
        </footer>
    );
};

export default Footer;

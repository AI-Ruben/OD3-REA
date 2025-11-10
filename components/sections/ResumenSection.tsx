
import React from 'react';
import SectionWrapper from '../ui/SectionWrapper';
import { TabActions, Button } from './Common';
import { Translation } from '../../i18n';

interface Props {
    summary: string | null;
    onPrevious: () => void;
    t: Translation;
}

const ResumenSection: React.FC<Props> = ({ summary, onPrevious, t }) => {
    return (
        <SectionWrapper title={t.sectionTitles.resumen}>
            {summary ? (
                 <div className="summary-box" dangerouslySetInnerHTML={{ __html: summary }} />
            ) : (
                <p>{t.summary.noSummary}</p>
            )}
           
            <TabActions>
                <Button onClick={onPrevious} variant="secondary">{t.buttons.previous}</Button>
                <Button onClick={() => window.print()}>{t.buttons.print}</Button>
            </TabActions>
        </SectionWrapper>
    );
};

export default ResumenSection;

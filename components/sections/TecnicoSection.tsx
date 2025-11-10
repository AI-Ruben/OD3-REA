
import React from 'react';
import { ChecklistState, Language } from '../../types';
import { I18N_TECNICO_ITEMS } from '../../constants';
import { Translation } from '../../i18n';
import SectionWrapper from '../ui/SectionWrapper';
import { ChecklistGroup } from '../ui/Checklist';
import { TabActions, Button } from './Common';

interface Props {
    checklistState: ChecklistState;
    setChecklistState: React.Dispatch<React.SetStateAction<ChecklistState>>;
    onPrevious: () => void;
    onGenerate: () => void;
    t: Translation;
    lang: Language;
}

const TecnicoSection: React.FC<Props> = ({ checklistState, setChecklistState, onPrevious, onGenerate, t, lang }) => {
    const handleCheckChange = (group: keyof ChecklistState) => (itemName: string, isChecked: boolean) => {
        setChecklistState(prev => ({
            ...prev,
            [group]: {
                ...prev[group],
                [itemName]: isChecked,
            }
        }));
    };

    const TECNICO_ITEMS = I18N_TECNICO_ITEMS[lang];

    return (
        <SectionWrapper title={t.sectionTitles.tecnico}>
             <ChecklistGroup 
                title={TECNICO_ITEMS[0].title} 
                items={TECNICO_ITEMS[0].items} 
                checkedState={checklistState.tecnico_interactividad} 
                onChange={handleCheckChange('tecnico_interactividad')} 
            />
             <ChecklistGroup 
                title={TECNICO_ITEMS[1].title} 
                items={TECNICO_ITEMS[1].items} 
                checkedState={checklistState.tecnico_requisitos} 
                onChange={handleCheckChange('tecnico_requisitos')} 
            />
             <ChecklistGroup 
                title={TECNICO_ITEMS[2].title} 
                items={TECNICO_ITEMS[2].items} 
                checkedState={checklistState.tecnico_licencias} 
                onChange={handleCheckChange('tecnico_licencias')} 
            />
            <TabActions>
                <Button onClick={onPrevious} variant="secondary">{t.buttons.previous}</Button>
                <Button onClick={onGenerate}>{t.buttons.generateSummary}</Button>
            </TabActions>
        </SectionWrapper>
    );
};

export default TecnicoSection;

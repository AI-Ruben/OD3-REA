
import React from 'react';
import { ChecklistState, Language } from '../../types';
import { I18N_DISENO_ITEMS } from '../../constants';
import { Translation } from '../../i18n';
import SectionWrapper from '../ui/SectionWrapper';
import { ChecklistGroup } from '../ui/Checklist';
import { TabActions, Button } from './Common';

interface Props {
    checklistState: ChecklistState;
    setChecklistState: React.Dispatch<React.SetStateAction<ChecklistState>>;
    onPrevious: () => void;
    onNext: () => void;
    t: Translation;
    lang: Language;
}

const DisenoSection: React.FC<Props> = ({ checklistState, setChecklistState, onPrevious, onNext, t, lang }) => {
    const handleCheckChange = (group: keyof ChecklistState) => (itemName: string, isChecked: boolean) => {
        setChecklistState(prev => ({
            ...prev,
            [group]: {
                ...prev[group],
                [itemName]: isChecked,
            }
        }));
    };
    
    const DISENO_ITEMS = I18N_DISENO_ITEMS[lang];

    return (
        <SectionWrapper title={t.sectionTitles.diseno}>
            <ChecklistGroup 
                title={DISENO_ITEMS[0].title} 
                items={DISENO_ITEMS[0].items} 
                checkedState={checklistState.diseno_presentacion} 
                onChange={handleCheckChange('diseno_presentacion')} 
            />
             <ChecklistGroup 
                title={DISENO_ITEMS[1].title} 
                items={DISENO_ITEMS[1].items} 
                checkedState={checklistState.diseno_formato} 
                onChange={handleCheckChange('diseno_formato')} 
            />
             <ChecklistGroup 
                title={DISENO_ITEMS[2].title} 
                items={DISENO_ITEMS[2].items} 
                checkedState={checklistState.diseno_guia} 
                onChange={handleCheckChange('diseno_guia')} 
            />
             <ChecklistGroup 
                title={DISENO_ITEMS[3].title} 
                items={DISENO_ITEMS[3].items} 
                checkedState={checklistState.diseno_accesibilidad} 
                onChange={handleCheckChange('diseno_accesibilidad')} 
            />
            <TabActions>
                <Button onClick={onPrevious} variant="secondary">{t.buttons.previous}</Button>
                <Button onClick={onNext}>{t.buttons.next}</Button>
            </TabActions>
        </SectionWrapper>
    );
};

export default DisenoSection;

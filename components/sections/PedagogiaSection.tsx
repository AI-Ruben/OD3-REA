
import React from 'react';
import { ChecklistState, Language } from '../../types';
import { I18N_PEDAGOGIA_ITEMS } from '../../constants';
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

const PedagogiaSection: React.FC<Props> = ({ checklistState, setChecklistState, onPrevious, onNext, t, lang }) => {
    const handleCheckChange = (group: keyof ChecklistState) => (itemName: string, isChecked: boolean) => {
        setChecklistState(prev => ({
            ...prev,
            [group]: {
                ...prev[group],
                [itemName]: isChecked,
            }
        }));
    };

    const PEDAGOGIA_ITEMS = I18N_PEDAGOGIA_ITEMS[lang];

    return (
        <SectionWrapper title={t.sectionTitles.pedagogia}>
            <ChecklistGroup 
                title={PEDAGOGIA_ITEMS[0].title} 
                items={PEDAGOGIA_ITEMS[0].items} 
                checkedState={checklistState.pedagogia_metodologia} 
                onChange={handleCheckChange('pedagogia_metodologia')} 
            />
            <ChecklistGroup 
                title={PEDAGOGIA_ITEMS[1].title} 
                items={PEDAGOGIA_ITEMS[1].items} 
                checkedState={checklistState.pedagogia_contenido}
                onChange={handleCheckChange('pedagogia_contenido')}
            />
            <ChecklistGroup 
                title={PEDAGOGIA_ITEMS[2].title} 
                items={PEDAGOGIA_ITEMS[2].items} 
                checkedState={checklistState.pedagogia_tareas}
                onChange={handleCheckChange('pedagogia_tareas')}
            />
            <TabActions>
                <Button onClick={onPrevious} variant="secondary">{t.buttons.previous}</Button>
                <Button onClick={onNext}>{t.buttons.next}</Button>
            </TabActions>
        </SectionWrapper>
    );
};

export default PedagogiaSection;


import React, { useState, useCallback, useMemo } from 'react';
import { SectionId, Language } from './types';
import { I18N_NAV_ITEMS } from './constants';
import { translations } from './i18n';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import LanguageSelection from './components/LanguageSelection';
import CatalogacionSection from './components/sections/CatalogacionSection';
import PedagogiaSection from './components/sections/PedagogiaSection';
import DisenoSection from './components/sections/DisenoSection';
import TecnicoSection from './components/sections/TecnicoSection';
import ResumenSection from './components/sections/ResumenSection';
import { FormData, initialFormData, ChecklistState, initialChecklistState } from './types';

const App: React.FC = () => {
    const [language, setLanguage] = useState<Language | null>(null);
    const [activeSection, setActiveSection] = useState<SectionId>('info');
    const [formData, setFormData] = useState<FormData>(initialFormData);
    const [checklistState, setChecklistState] = useState<ChecklistState>(initialChecklistState);
    const [summary, setSummary] = useState<string | null>(null);
    
    const t = useMemo(() => language ? translations[language] : translations.es, [language]);

    const handleLanguageSelect = (lang: Language) => {
        setLanguage(lang);
    };

    const handleSectionChange = useCallback((sectionId: SectionId) => {
        setActiveSection(sectionId);
        window.scrollTo(0, 0);
    }, []);

    const handleCreateSummary = useCallback(() => {
        if (!language) return;

        const {
            pedagogia_metodologia,
            pedagogia_contenido,
            pedagogia_tareas,
            diseno_presentacion,
            diseno_formato,
            diseno_guia,
            diseno_accesibilidad,
            tecnico_interactividad,
            tecnico_requisitos,
            tecnico_licencias
        } = checklistState;

        const getCheckedCount = (obj: Record<string, boolean>) => Object.values(obj).filter(Boolean).length;

        const countPed1 = getCheckedCount(pedagogia_metodologia);
        const countPed2 = getCheckedCount(pedagogia_contenido);
        const countPed3 = getCheckedCount(pedagogia_tareas);
        const countPedagogia = countPed1 + countPed2 + countPed3;

        const countDis1 = getCheckedCount(diseno_presentacion);
        const countDis2 = getCheckedCount(diseno_formato);
        const countDis3 = getCheckedCount(diseno_guia);
        const countDis4 = getCheckedCount(diseno_accesibilidad);
        const countDiseno = countDis1 + countDis2 + countDis3 + countDis4;

        const countTec1 = getCheckedCount(tecnico_interactividad);
        const countTec2 = getCheckedCount(tecnico_requisitos);
        const countTec3 = getCheckedCount(tecnico_licencias);
        const countTecnico = countTec1 + countTec2 + countTec3;
        
        const total = countPedagogia + countDiseno + countTecnico;

        const valid = total >= 40 && countPedagogia >= 16 && countDiseno >= 14 && countTecnico >= 10;
        
        const getSelectedValues = (values: string[]) => values.length > 0 ? values.join(', ') : t.summary.notSpecified;

        let summaryHtml = `
            <div class="${valid ? 'valid' : 'invalid'} p-6 rounded-lg border-l-4 ${valid ? 'bg-green-50 border-green-600' : 'bg-red-50 border-red-600'}">
                <b class="text-lg text-[#6080A3]">${t.summary.metadataTitle}</b><br/><br/>
                <b>${t.formLabels.titulo}:</b> ${formData.titulo || t.summary.notSpecified}<br/>
                <b>${t.formLabels.autoria}:</b> ${formData.autoria || t.summary.notSpecified}<br/>
                <b>${t.formLabels.idioma}:</b> ${formData.idioma || t.summary.notSpecified}<br/>
                <b>${t.formLabels.licencia}:</b> ${formData.licencia || t.summary.notSpecified}<br/>
                <b>${t.formLabels.descripcion}:</b> ${formData.descripcion || t.summary.notSpecified}<br/><br/>
                <b>${t.formLabels.etapa}:</b> ${formData.etapa || t.summary.notSpecified}<br/>
                <b>${t.formLabels.curso}:</b> ${formData.curso || t.summary.notSpecified}<br/>
                <b>${t.formLabels.materia}:</b> ${getSelectedValues(formData.materia)}<br/><br/>
                <b>${t.formLabels.comp_clave}:</b> ${getSelectedValues(formData.comp_clave)}<br/>
                <b>${t.formLabels.comp_esp}:</b> ${formData.comp_esp || t.summary.notSpecified}<br/>
                <b>${t.formLabels.saberes}:</b> ${formData.saberes || t.summary.notSpecified}<br/><br/>
                <b>${t.formLabels.metodologia}:</b> ${getSelectedValues(formData.metodologia)}<br/>
                <b>${t.formLabels.sesiones}:</b> ${formData.sesiones || t.summary.notSpecified}<br/>
                <b>${t.formLabels.agrupamientos}:</b> ${getSelectedValues(formData.agrupamientos)}<br/>
                <hr class="my-6 border-t-2 border-[#d0d8e5]" />
                <b class="text-lg text-[#6080A3]">${t.summary.requirementsTitle}</b><br/><br/>
                <b>${t.summary.category1}:</b> ${countPedagogia}/20 ítems<br/>
                &nbsp;&nbsp;• ${t.summary.cat1_1}: ${countPed1}/9<br/>
                &nbsp;&nbsp;• ${t.summary.cat1_2}: ${countPed2}/5<br/>
                &nbsp;&nbsp;• ${t.summary.cat1_3}: ${countPed3}/6<br/><br/>
                <b>${t.summary.category2}:</b> ${countDiseno}/17 ítems<br/>
                &nbsp;&nbsp;• ${t.summary.cat2_1}: ${countDis1}/3<br/>
                &nbsp;&nbsp;• ${t.summary.cat2_2}: ${countDis2}/3<br/>
                &nbsp;&nbsp;• ${t.summary.cat2_3}: ${countDis3}/4<br/>
                &nbsp;&nbsp;• ${t.summary.cat2_4}: ${countDis4}/7<br/><br/>
                <b>${t.summary.category3}:</b> ${countTecnico}/12 ítems<br/>
                &nbsp;&nbsp;• ${t.summary.cat3_1}: ${countTec1}/3<br/>
                &nbsp;&nbsp;• ${t.summary.cat3_2}: ${countTec2}/6<br/>
                &nbsp;&nbsp;• ${t.summary.cat3_3}: ${countTec3}/3<br/><br/>
                <b class="text-base">${t.summary.total}: ${total}/49 ítems cumplidos</b><br/><br/>
                ${valid ? `
                <b class="text-lg text-green-700">${t.summary.validationSuccess}</b><br/>
                ${t.summary.validationSuccessDesc1}<br/>
                ${t.summary.validationSuccessDesc2}
                ` : `
                <b class="text-lg text-red-700">${t.summary.validationFailure}</b><br/>
                ${t.summary.validationFailureDesc1}<br/>
                • ${t.summary.validationFailureReq1}<br/>
                • ${t.summary.validationFailureReq2}<br/>
                • ${t.summary.validationFailureReq3}<br/>
                ${t.summary.validationFailureDesc2}
                `}
            </div>
        `;

        setSummary(summaryHtml);
        handleSectionChange('resumen');
    }, [formData, checklistState, handleSectionChange, language, t]);
    
    const renderSection = useMemo(() => {
        if (!language) return null;
        switch (activeSection) {
            case 'info':
                return <CatalogacionSection lang={language} formData={formData} setFormData={setFormData} onNext={() => handleSectionChange('pedagogia')} t={t} />;
            case 'pedagogia':
                return <PedagogiaSection lang={language} checklistState={checklistState} setChecklistState={setChecklistState} onPrevious={() => handleSectionChange('info')} onNext={() => handleSectionChange('diseno')} t={t} />;
            case 'diseno':
                return <DisenoSection lang={language} checklistState={checklistState} setChecklistState={setChecklistState} onPrevious={() => handleSectionChange('pedagogia')} onNext={() => handleSectionChange('tecnico')} t={t} />;
            case 'tecnico':
                return <TecnicoSection lang={language} checklistState={checklistState} setChecklistState={setChecklistState} onPrevious={() => handleSectionChange('diseno')} onGenerate={handleCreateSummary} t={t} />;
            case 'resumen':
                return <ResumenSection summary={summary} onPrevious={() => handleSectionChange('tecnico')} t={t} />;
            default:
                return null;
        }
    }, [activeSection, formData, checklistState, summary, handleSectionChange, handleCreateSummary, language, t]);

    if (!language) {
        return <LanguageSelection onSelectLanguage={handleLanguageSelect} />;
    }

    return (
        <div className="min-h-screen flex flex-col text-[#223046]">
            <Header t={t}/>
            <NavBar navItems={I18N_NAV_ITEMS[language]} activeSection={activeSection} onSectionChange={handleSectionChange} />
            <main className="flex-grow">
                <div className="max-w-4xl mx-auto my-8 px-4 sm:px-6 lg:px-8">
                   {renderSection}
                </div>
            </main>
            <Footer t={t} />
        </div>
    );
};

export default App;

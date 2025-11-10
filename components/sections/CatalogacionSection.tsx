
import React, { useEffect, useState, useMemo } from 'react';
import { FormData, Language } from '../../types';
import { I18N_IDIOMAS, I18N_LICENCIAS, I18N_ETAPAS, I18N_CURSOS_POR_ETAPA, I18N_MATERIAS, I18N_COMPETENCIAS_CLAVE, I18N_METODOLOGIAS, I18N_AGRUPAMIENTOS } from '../../constants';
import { Translation } from '../../i18n';
import SectionWrapper from '../ui/SectionWrapper';
import { FormLabel, Input, Select, Textarea, CheckboxGroup } from '../ui/FormElements';
import { TabActions, Button } from './Common';

interface Props {
    formData: FormData;
    setFormData: React.Dispatch<React.SetStateAction<FormData>>;
    onNext: () => void;
    t: Translation;
    lang: Language;
}

const CatalogacionSection: React.FC<Props> = ({ formData, setFormData, onNext, t, lang }) => {
    const [cursos, setCursos] = useState<string[]>([]);
    
    const ETAPAS = useMemo(() => I18N_ETAPAS[lang], [lang]);
    const CURSOS_POR_ETAPA = useMemo(() => I18N_CURSOS_POR_ETAPA[lang], [lang]);
    const MATERIAS = useMemo(() => I18N_MATERIAS[lang], [lang]);

    useEffect(() => {
        if (formData.etapa && CURSOS_POR_ETAPA[formData.etapa]) {
            setCursos(CURSOS_POR_ETAPA[formData.etapa]);
        } else {
            setCursos([]);
        }
        
        const isEtapaInCurrentLang = ETAPAS.includes(formData.etapa);
        
        if (!isEtapaInCurrentLang) {
             setFormData(prev => ({ ...prev, etapa: '', curso: '' }));
        } else {
             setFormData(prev => ({ ...prev, curso: '' }));
        }
       
    }, [formData.etapa, ETAPAS, CURSOS_POR_ETAPA, setFormData]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleCheckboxGroupChange = (name: string, value: string) => {
        setFormData(prev => {
            const currentValues = prev[name as keyof FormData] as string[];
            const newValues = currentValues.includes(value)
                ? currentValues.filter(v => v !== value)
                : [...currentValues, value];
            return { ...prev, [name]: newValues };
        });
    };

    return (
        <SectionWrapper title={t.sectionTitles.catalogacion}>
            <FormLabel htmlFor="titulo">{t.formLabels.titulo}:</FormLabel>
            <Input id="titulo" name="titulo" type="text" placeholder={t.placeholders.titulo} value={formData.titulo} onChange={handleChange} />

            <FormLabel htmlFor="autoria">{t.formLabels.autoria}:</FormLabel>
            <Input id="autoria" name="autoria" type="text" placeholder={t.placeholders.autoria} value={formData.autoria} onChange={handleChange} />

            <div className="grid md:grid-cols-2 md:gap-4">
                <div>
                    <FormLabel htmlFor="idioma">{t.formLabels.idioma}:</FormLabel>
                    <Select id="idioma" name="idioma" value={formData.idioma} onChange={handleChange}>
                        {I18N_IDIOMAS[lang].map(lang => <option key={lang} value={lang}>{lang}</option>)}
                    </Select>
                </div>
                <div>
                    <FormLabel htmlFor="licencia">{t.formLabels.licencia}:</FormLabel>
                    <Select id="licencia" name="licencia" value={formData.licencia} onChange={handleChange}>
                        {I18N_LICENCIAS[lang].map(lic => <option key={lic.value} value={lic.value}>{lic.label}</option>)}
                    </Select>
                </div>
            </div>

            <FormLabel htmlFor="descripcion">{t.formLabels.descripcion}:</FormLabel>
            <Textarea id="descripcion" name="descripcion" placeholder={t.placeholders.descripcion} value={formData.descripcion} onChange={handleChange}></Textarea>
            
            <div className="grid md:grid-cols-2 md:gap-4">
                <div>
                    <FormLabel htmlFor="etapa">{t.formLabels.etapa}:</FormLabel>
                    <Select id="etapa" name="etapa" value={formData.etapa} onChange={handleChange}>
                        <option value="">{t.placeholders.selectEtapa}</option>
                        {ETAPAS.map(etapa => <option key={etapa} value={etapa}>{etapa}</option>)}
                    </Select>
                </div>
                <div>
                    <FormLabel htmlFor="curso">{t.formLabels.curso}:</FormLabel>
                    <Select id="curso" name="curso" value={formData.curso} onChange={handleChange} disabled={!formData.etapa}>
                        <option value="">{t.placeholders.selectCurso}</option>
                        {cursos.map(curso => <option key={curso} value={curso}>{curso}</option>)}
                    </Select>
                </div>
            </div>

            <FormLabel htmlFor="materia">{t.formLabels.materia}:</FormLabel>
            <div className="bg-[#eef3fb] border border-[#d0d8e5] rounded-lg p-4">
                {MATERIAS.map(group => (
                    <div key={group.label} className="mb-4 last:mb-0">
                        <h4 className="font-bold text-[#436184] mb-2 border-b border-[#d0d8e5] pb-1">{group.label}</h4>
                        {group.options.map(option => (
                            <label key={option} className="flex items-start font-normal text-gray-800 my-2 cursor-pointer">
                                <input
                                    type="checkbox"
                                    name="materia"
                                    value={option}
                                    checked={formData.materia.includes(option)}
                                    onChange={() => handleCheckboxGroupChange('materia', option)}
                                    className="mr-3 accent-[#6080A3] w-5 h-5 flex-shrink-0 mt-1"
                                />
                                <span>{option}</span>
                            </label>
                        ))}
                    </div>
                ))}
            </div>


            <FormLabel htmlFor="comp_clave">{t.formLabels.comp_clave}:</FormLabel>
            <CheckboxGroup
                name="comp_clave"
                options={I18N_COMPETENCIAS_CLAVE[lang].map(c => ({ value: c.label, label: c.label }))}
                selectedValues={formData.comp_clave}
                onChange={handleCheckboxGroupChange}
            />

            <FormLabel htmlFor="comp_esp">{t.formLabels.comp_esp}:</FormLabel>
            <Textarea id="comp_esp" name="comp_esp" placeholder={t.placeholders.comp_esp} value={formData.comp_esp} onChange={handleChange}></Textarea>

            <FormLabel htmlFor="saberes">{t.formLabels.saberes}:</FormLabel>
            <Textarea id="saberes" name="saberes" placeholder={t.placeholders.saberes} value={formData.saberes} onChange={handleChange}></Textarea>
            
            <FormLabel htmlFor="metodologia">{t.formLabels.metodologia}:</FormLabel>
             <CheckboxGroup
                name="metodologia"
                options={I18N_METODOLOGIAS[lang].map(m => ({ value: m.label, label: m.label }))}
                selectedValues={formData.metodologia}
                onChange={handleCheckboxGroupChange}
            />

            <div className="grid md:grid-cols-2 md:gap-4">
                <div>
                    <FormLabel htmlFor="sesiones">{t.formLabels.sesiones}:</FormLabel>
                    <Input id="sesiones" name="sesiones" type="number" min="1" max="50" placeholder={t.placeholders.sesiones} value={formData.sesiones} onChange={handleChange} />
                </div>
                <div>
                    <FormLabel htmlFor="agrupamientos">{t.formLabels.agrupamientos}:</FormLabel>
                    <CheckboxGroup
                        name="agrupamientos"
                        options={I18N_AGRUPAMIENTOS[lang].map(a => ({ value: a, label: a }))}
                        selectedValues={formData.agrupamientos}
                        onChange={handleCheckboxGroupChange}
                    />
                </div>
            </div>
            
            <TabActions>
                <Button onClick={onNext}>{t.buttons.next}</Button>
            </TabActions>
        </SectionWrapper>
    );
};

export default CatalogacionSection;

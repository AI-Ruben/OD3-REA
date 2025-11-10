
import { 
    I18N_PEDAGOGIA_ITEMS,
    I18N_DISENO_ITEMS,
    I18N_TECNICO_ITEMS
} from './constants';

export type SectionId = 'info' | 'pedagogia' | 'diseno' | 'tecnico' | 'resumen';
export type Language = 'es' | 'eu';

export interface FormData {
    titulo: string;
    autoria: string;
    idioma: string;
    licencia: string;
    descripcion: string;
    etapa: string;
    curso: string;
    materia: string[];
    comp_clave: string[];
    comp_esp: string;
    saberes: string;
    metodologia: string[];
    sesiones: string;
    agrupamientos: string[];
}

export const initialFormData: FormData = {
    titulo: '',
    autoria: '',
    idioma: 'Castellano',
    licencia: 'CC-BY',
    descripcion: '',
    etapa: '',
    curso: '',
    materia: [],
    comp_clave: [],
    comp_esp: '',
    saberes: '',
    metodologia: [],
    sesiones: '',
    agrupamientos: [],
};


const createInitialChecklist = (items: { title: string; items: string[] }[]) => {
    const state: Record<string, boolean> = {};
    items.forEach(group => {
        group.items.forEach(item => {
            state[item] = false;
        });
    });
    return state;
};

export interface ChecklistState {
    pedagogia_metodologia: Record<string, boolean>;
    pedagogia_contenido: Record<string, boolean>;
    pedagogia_tareas: Record<string, boolean>;
    diseno_presentacion: Record<string, boolean>;
    diseno_formato: Record<string, boolean>;
    diseno_guia: Record<string, boolean>;
    diseno_accesibilidad: Record<string, boolean>;
    tecnico_interactividad: Record<string, boolean>;
    tecnico_requisitos: Record<string, boolean>;
    tecnico_licencias: Record<string, boolean>;
}

export const initialChecklistState: ChecklistState = {
    pedagogia_metodologia: createInitialChecklist([I18N_PEDAGOGIA_ITEMS.es[0]]),
    pedagogia_contenido: createInitialChecklist([I18N_PEDAGOGIA_ITEMS.es[1]]),
    pedagogia_tareas: createInitialChecklist([I18N_PEDAGOGIA_ITEMS.es[2]]),
    diseno_presentacion: createInitialChecklist([I18N_DISENO_ITEMS.es[0]]),
    diseno_formato: createInitialChecklist([I18N_DISENO_ITEMS.es[1]]),
    diseno_guia: createInitialChecklist([I18N_DISENO_ITEMS.es[2]]),
    diseno_accesibilidad: createInitialChecklist([I18N_DISENO_ITEMS.es[3]]),
    tecnico_interactividad: createInitialChecklist([I18N_TECNICO_ITEMS.es[0]]),
    tecnico_requisitos: createInitialChecklist([I18N_TECNICO_ITEMS.es[1]]),
    tecnico_licencias: createInitialChecklist([I18N_TECNICO_ITEMS.es[2]]),
};

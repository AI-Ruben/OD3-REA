import { SectionId } from './types';

export const I18N_NAV_ITEMS: Record<'es' | 'eu', { id: SectionId; label: string }[]> = {
    es: [
        { id: 'info', label: '1. Catalogación' },
        { id: 'pedagogia', label: '2. Pedagogía' },
        { id: 'diseno', label: '3. Diseño' },
        { id: 'tecnico', label: '4. Técnico / Legal' },
        { id: 'resumen', label: '5. Resumen' },
    ],
    eu: [
        { id: 'info', label: '1. Katalogazioa' },
        { id: 'pedagogia', label: '2. Pedagogia' },
        { id: 'diseno', label: '3. Diseinua' },
        { id: 'tecnico', label: '4. Teknikoa / Legala' },
        { id: 'resumen', label: '5. Laburpena' },
    ]
};

export const I18N_IDIOMAS: Record<'es' | 'eu', string[]> = {
    es: ['Castellano', 'Euskera', 'Bilingüe (Castellano-Euskera)', 'Inglés', 'Francés', 'Alemán', 'Otros'],
    eu: ['Gaztelania', 'Euskara', 'Elebiduna (Gaztelania-Euskara)', 'Ingelesa', 'Frantsesa', 'Alemana', 'Beste batzuk'],
};

export const I18N_LICENCIAS: Record<'es' | 'eu', { value: string; label: string }[]> = {
    es: [
        { value: 'CC-BY', label: 'CC-BY (Más abierta - Recomendada)' },
        { value: 'CC-BY-SA', label: 'CC-BY-SA (Compartir Igual - Recomendada)' },
        { value: 'CC-BY-NC', label: 'CC-BY-NC (No Comercial)' },
        { value: 'CC-BY-NC-SA', label: 'CC-BY-NC-SA (No Comercial - Compartir Igual)' },
    ],
    eu: [
        { value: 'CC-BY', label: 'CC-BY (Irekiagoa - Gomendatua)' },
        { value: 'CC-BY-SA', label: 'CC-BY-SA (Berdin partekatu - Gomendatua)' },
        { value: 'CC-BY-NC', label: 'CC-BY-NC (Ez-komertziala)' },
        { value: 'CC-BY-NC-SA', label: 'CC-BY-NC-SA (Ez-komertziala - Berdin partekatu)' },
    ]
};

export const I18N_ETAPAS: Record<'es' | 'eu', string[]> = {
    es: [
        'Educación Infantil',
        'Educación Primaria',
        'Educación Secundaria Obligatoria',
        'Bachillerato',
        'Formación Profesional',
        'Educación de Personas Adultas',
        'Enseñanzas de Régimen Especial',
    ],
    eu: [
        'Haur Hezkuntza',
        'Lehen Hezkuntza',
        'Derrigorrezko Bigarren Hezkuntza',
        'Batxilergoa',
        'Lanbide Heziketa',
        'Helduen Hezkuntza',
        'Araubide Bereziko Irakaskuntzak',
    ]
};

export const I18N_CURSOS_POR_ETAPA: Record<'es' | 'eu', Record<string, string[]>> = {
    es: {
        'Educación Infantil': ['Primer ciclo (0-3 años)', 'Segundo ciclo (3-6 años)', '3 años', '4 años', '5 años'],
        'Educación Primaria': ['1º Primaria', '2º Primaria', '3º Primaria', '4º Primaria', '5º Primaria', '6º Primaria', 'Primer ciclo (1º-2º)', 'Segundo ciclo (3º-4º)', 'Tercer ciclo (5º-6º)'],
        'Educación Secundaria Obligatoria': ['1º ESO', '2º ESO', '3º ESO', '4º ESO', 'Primer ciclo (1º-3º ESO)', 'Segundo ciclo (4º ESO)'],
        'Bachillerato': ['1º Bachillerato', '2º Bachillerato'],
        'Formación Profesional': ['FP Básica', 'Ciclo Formativo Grado Medio', 'Ciclo Formativo Grado Superior', 'Curso de Especialización'],
        'Educación de Personas Adultas': ['Nivel I', 'Nivel II', 'Preparación pruebas acceso'],
        'Enseñanzas de Régimen Especial': ['Elemental', 'Profesional', 'Superior'],
    },
    eu: {
        'Haur Hezkuntza': ['Lehen zikloa (0-3 urte)', 'Bigarren zikloa (3-6 urte)', '3 urte', '4 urte', '5 urte'],
        'Lehen Hezkuntza': ['LH 1', 'LH 2', 'LH 3', 'LH 4', 'LH 5', 'LH 6', 'Lehen zikloa (1-2 maila)', 'Bigarren zikloa (3-4 maila)', 'Hirugarren zikloa (5-6 maila)'],
        'Derrigorrezko Bigarren Hezkuntza': ['DBH 1', 'DBH 2', 'DBH 3', 'DBH 4', 'Lehen zikloa (DBH 1-3)', 'Bigarren zikloa (DBH 4)'],
        'Batxilergoa': ['Batxilergoa 1', 'Batxilergoa 2'],
        'Lanbide Heziketa': ['Oinarrizko LH', 'Erdi Mailako Heziketa Zikloa', 'Goi Mailako Heziketa Zikloa', 'Espezializazio Ikastaroa'],
        'Helduen Hezkuntza': ['I Maila', 'II Maila', 'Sarbide-probak prestatzea'],
        'Araubide Bereziko Irakaskuntzak': ['Oinarrizkoa', 'Profesionala', 'Goi-mailakoa'],
    }
};

export const I18N_MATERIAS: Record<'es' | 'eu', { label: string; options: string[] }[]> = {
    es: [
        { label: 'Educación Infantil', options: ['Crecimiento en Armonía', 'Descubrimiento y Exploración del Entorno', 'Comunicación y Representación de la Realidad'] },
        { label: 'Educación Primaria', options: ['Conocimiento del Medio Natural, Social y Cultural', 'Educación Artística', 'Educación Física', 'Lengua Castellana y Literatura', 'Lengua Extranjera (Inglés/Francés)', 'Matemáticas', 'Euskera y Literatura', 'Educación en Valores Cívicos y Éticos'] },
        { label: 'ESO', options: ['Biología y Geología', 'Educación Física', 'Educación Plástica, Visual y Audiovisual', 'Física y Química', 'Geografía e Historia', 'Lengua Castellana y Literatura', 'Lengua Extranjera (Inglés/Francés)', 'Matemáticas', 'Música', 'Tecnología y Digitalización', 'Euskera y Literatura', 'Educación en Valores Cívicos y Éticos', 'Economía y Emprendimiento'] },
        { label: 'Bachillerato', options: ['Filosofía', 'Lengua Castellana y Literatura', 'Lengua Extranjera (Inglés/Francés)', 'Matemáticas I / II', 'Historia de España', 'Historia de la Filosofía', 'Biología, Geología y Ciencias Ambientales', 'Dibujo Técnico I / II', 'Física', 'Química', 'Tecnología e Ingeniería I / II', 'Economía', 'Historia del Arte', 'Latín I / II', 'Griego I / II'] },
        { label: 'Formación Profesional', options: ['Módulo Profesional (especificar en descripción)', 'Formación y Orientación Laboral (FOL)', 'Empresa e Iniciativa Emprendedora', 'Inglés Técnico', 'Digitalización Aplicada al Sector Productivo'] },
        { label: 'Transversal / Multidisciplinar', options: ['Proyecto Interdisciplinar', 'Tutoría', 'Multidisciplinar'] },
    ],
    eu: [
        { label: 'Haur Hezkuntza', options: ['Hazkuntza Harmonian', 'Ingurunearen Aurkikuntza eta Esplorazioa', 'Errealitatearen Komunikazioa eta Adierazpena'] },
        { label: 'Lehen Hezkuntza', options: ['Natur, Gizarte eta Kultura Ingurunearen Ezaguera', 'Hezkuntza Artistikoa', 'Gorputz Hezkuntza', 'Gaztelania eta Literatura', 'Atzerriko Hizkuntza (Ingelesa/Frantsesa)', 'Matematika', 'Euskara eta Literatura', 'Balio Zibiko eta Etikoetarako Hezkuntza'] },
        { label: 'DBH', options: ['Biologia eta Geologia', 'Gorputz Hezkuntza', 'Plastika, Ikus- eta Ikus-entzunezko Hezkuntza', 'Fisika eta Kimika', 'Geografia eta Historia', 'Gaztelania eta Literatura', 'Atzerriko Hizkuntza (Ingelesa/Frantsesa)', 'Matematika', 'Musika', 'Teknologia eta Digitalizazioa', 'Euskara eta Literatura', 'Balio Zibiko eta Etikoetarako Hezkuntza', 'Ekonomia eta Ekintzailetza'] },
        { label: 'Batxilergoa', options: ['Filosofia', 'Gaztelania eta Literatura', 'Atzerriko Hizkuntza (Ingelesa/Frantsesa)', 'Matematika I / II', 'Espainiako Historia', 'Filosofiaren Historia', 'Biologia, Geologia eta Ingurumen Zientziak', 'Marrazketa Teknikoa I / II', 'Fisika', 'Kimika', 'Teknologia eta Ingeniaritza I / II', 'Ekonomia', 'Artearen Historia', 'Latina I / II', 'Greziera I / II'] },
        { label: 'Lanbide Heziketa', options: ['Modulu Profesionala (deskribapenean zehaztu)', 'Laneko Prestakuntza eta Orientabidea (LPO)', 'Enpresa eta Ekimen Sortzailea', 'Ingeles Teknikoa', 'Sektore Produktiboari Aplikatutako Digitalizazioa'] },
        { label: 'Zeharkakoa / Diziplina Anitzekoa', options: ['Diziplinarteko Proiektua', 'Tutoretza', 'Diziplina Anitzekoa'] },
    ]
};

export const I18N_COMPETENCIAS_CLAVE: Record<'es' | 'eu', { value: string; label: string }[]> = {
    es: [
        { value: "CCL", label: "CCL - Competencia en Comunicación Lingüística" },
        { value: "CP", label: "CP - Competencia Plurilingüe" },
        { value: "STEM", label: "STEM - Competencia Matemática y en Ciencia, Tecnología e Ingeniería" },
        { value: "CD", label: "CD - Competencia Digital" },
        { value: "CPSAA", label: "CPSAA - Competencia Personal, Social y de Aprender a Aprender" },
        { value: "CC", label: "CC - Competencia Ciudadana" },
        { value: "CE", label: "CE - Competencia Emprendedora" },
        { value: "CCEC", label: "CCEC - Competencia en Conciencia y Expresión Culturales" },
    ],
    eu: [
        { value: "CCL", label: "HKH - Hizkuntza Komunikaziorako konpetentzia" },
        { value: "CP", label: "KH - Konpetentzia Plurilingüea" },
        { value: "STEM", label: "STEM - Matematika, Zientzia, Teknologia eta Ingeniaritzarako konpetentzia" },
        { value: "CD", label: "KD - Konpetentzia Digitala" },
        { value: "CPSAA", label: "NPII - Konpetentzia Pertsonala, Soziala eta Ikasten Ikasteko konpetentzia" },
        { value: "CC", label: "HH - Herritartasunerako konpetentzia" },
        { value: "CE", label: "KE - Konpetentzia Ekintzailea" },
        { value: "CCEC", label: "KKAE - Kontzientzia eta Adierazpen Kulturalerako konpetentzia" },
    ]
};

export const I18N_METODOLOGIAS: Record<'es' | 'eu', { value: string; label: string }[]> = {
    es: [
        { value: "ABP", label: "Aprendizaje Basado en Proyectos (ABP)" },
        { value: "ABProblemas", label: "Aprendizaje Basado en Problemas" },
        { value: "Cooperativo", label: "Aprendizaje Cooperativo" },
        { value: "DUA", label: "Diseño Universal para el Aprendizaje (DUA)" },
        { value: "Flipped", label: "Aula Invertida (Flipped Classroom)" },
        { value: "Gamificación", label: "Gamificación" },
        { value: "ApS", label: "Aprendizaje-Servicio (ApS)" },
        { value: "Rincones", label: "Trabajo por Rincones" },
        { value: "Centros", label: "Centros de Interés" },
        { value: "Investigación", label: "Aprendizaje por Investigación" },
        { value: "Pensamiento", label: "Rutinas de Pensamiento" },
        { value: "Visual", label: "Pensamiento Visual (Visual Thinking)" },
        { value: "STEAM", label: "Metodología STEAM" },
        { value: "Estudio", label: "Estudio de Casos" },
    ],
    eu: [
        { value: "PBL", label: "Proiektuetan Oinarritutako Ikaskuntza (POI)" },
        { value: "ABProblemas", label: "Problemetan Oinarritutako Ikaskuntza" },
        { value: "Cooperativo", label: "Ikaskuntza Kooperatiboa" },
        { value: "DUA", label: "Ikaskuntzarako Diseinu Unibertsala (IDU)" },
        { value: "Flipped", label: "Ikasgela Iraulia (Flipped Classroom)" },
        { value: "Gamificación", label: "Gamifikazioa" },
        { value: "ApS", label: "Zerbitzu-Ikaskuntza (ApS)" },
        { value: "Rincones", label: "Txokotako Lana" },
        { value: "Centros", label: "Interes Guneak" },
        { value: "Investigación", label: "Ikerketan Oinarritutako Ikaskuntza" },
        { value: "Pensamiento", label: "Pentsamendu-errutinak" },
        { value: "Visual", label: "Pentsamendu Bisuala (Visual Thinking)" },
        { value: "STEAM", label: "STEAM Metodologia" },
        { value: "Estudio", label: "Kasu Azterketa" },
    ]
};

export const I18N_AGRUPAMIENTOS: Record<'es' | 'eu', string[]> = {
    es: ["Individual", "Parejas", "Pequeño grupo (3-4 personas)", "Gran grupo / Grupo clase", "Grupos heterogéneos", "Grupos cooperativos"],
    eu: ["Banakakoa", "Binaka", "Talde txikia (3-4 pertsona)", "Talde handia / Ikasgela taldea", "Talde heterogeneoak", "Talde kooperatiboak"],
};

export const I18N_PEDAGOGIA_ITEMS: Record<'es' | 'eu', { title: string; items: string[] }[]> = {
    es: [
        { title: "1.1. Metodología Didáctica (9 ítems)", items: ["Aprendizaje competencial y metodologías activas", "Aprendizaje significativo y conexión con saberes previos", "Conexión con la realidad y contexto motivador", "Trabajo colaborativo y cooperativo", "Participación activa y protagonismo del alumnado", "Evaluación formativa con retroalimentación efectiva", "Reflexión y metacognición del proceso de aprendizaje", "Uso seguro de herramientas digitales (RGPD)", "Enfoque DUA (Diseño Universal para el Aprendizaje)"] },
        { title: "1.2. Contenido (5 ítems)", items: ["Secuenciación lógica con hilo conductor", "Materiales completos (instrucciones, plantillas, enlaces, instrumentos)", "Información veraz, rigurosa y actualizada", "ODS y educación en valores de forma transversal", "Comunicación inclusiva sin estereotipos ni sesgos"] },
        { title: "1.3. Tareas (6 ítems)", items: ["Diversidad de actividades, agrupamientos y estilos", "Fomento del pensamiento crítico (debates, problemas, análisis)", "Evaluación de tareas clara (cómo, quiénes, cuándo)", "Actividad inicial motivadora y activadora de conocimientos previos", "Propósito claro orientado al producto final", "Diseño progresivo con complejidad creciente"] },
    ],
    eu: [
        { title: "1.1. Metodologia Didaktikoa (9 item)", items: ["Ikaskuntza konpetentziala eta metodologia aktiboak", "Ikaskuntza esanguratsua eta aurretiko jakintzekiko lotura", "Errealitatearekiko eta testuinguru motibatzailearekiko lotura", "Lankidetzazko eta kooperaziozko lana", "Ikasleen parte-hartze aktiboa eta protagonismoa", "Ebaluazio hezigarria atzeraelikadura eraginkorrarekin", "Ikaskuntza-prozesuaren gaineko hausnarketa eta metakognizioa", "Tresna digitalen erabilera segurua (DBEO)", "IDU ikuspegia (Ikaskuntzarako Diseinu Unibertsala)"] },
        { title: "1.2. Edukia (5 item)", items: ["Sekuentziazio logikoa hari eroalearekin", "Material osoak (argibideak, txantiloiak, estekak, tresnak)", "Informazio egiazkoa, zehatza eta eguneratua", "GGEak eta balioetan oinarritutako hezkuntza zeharka", "Komunikazio inklusiboa, estereotiporik eta alborapenik gabea"] },
        { title: "1.3. Atazak (6 item)", items: ["Jarduera, taldekatze eta estilo aniztasuna", "Pentsamendu kritikoa sustatzea (eztabaidak, arazoak, analisiak)", "Atazen ebaluazio argia (nola, nork, noiz)", "Hasierako jarduera motibatzailea eta aurretiko ezagutzak aktibatzekoa", "Azken produktura bideratutako helburu argia", "Konplexutasun gero eta handiagoko diseinu progresiboa"] },
    ]
};

export const I18N_DISENO_ITEMS: Record<'es' | 'eu', { title: string; items: string[] }[]> = {
    es: [
        { title: "2.1. Presentación Inicial (3 ítems)", items: ["Título motivador, representativo y contextualizado", "Elementos visuales coherentes y motivadores", "Descripción y objetivos claros (propósito, materia, curso, producto final)"] },
        { title: "2.2. Formato y Estilo (3 ítems)", items: ["Estilo visual uniforme", "Diseño limpio, atractivo y con coherencia gráfica", "Redacción cercana, clara, correcta y adaptada al público objetivo"] },
        { title: "2.3. Guía Didáctica (4 ítems)", items: ["Información básica completa (título, curso, materia, descripción, tareas, agrupamientos, sesiones)", "Metodología utilizada claramente identificada", "Referencias curriculares Navarra (competencias clave/específicas, saberes, criterios evaluación)", "Propuesta de evaluación y seguimiento detallada"] },
        { title: "2.4. Accesibilidad (7 ítems)", items: ["Uso correcto de encabezados para jerarquizar contenido", "Hiperenlaces con título claro y apertura en ventana nueva", "Texto alternativo (título y descripción) en todas las imágenes", "Subtítulos en todos los vídeos", "Contraste visual adecuado entre texto/imagen/fondo", "Tipografía accesible sans-serif (Roboto Condensed ≥12pt)", "Navegación accesible y responsiva (móvil, tablet, ordenador)"] },
    ],
    eu: [
        { title: "2.1. Hasierako Aurkezpena (3 item)", items: ["Izenburu motibatzailea, adierazgarria eta testuinguruan kokatua", "Elementu bisual koherenteak eta motibatzaileak", "Deskribapen eta helburu argiak (xedea, ikasgaia, maila, azken produktua)"] },
        { title: "2.2. Formatua eta Estiloa (3 item)", items: ["Ikusizko estilo uniformea", "Diseinu garbia, erakargarria eta koherentzia grafikoa duena", "Idazkera hurbila, argia, zuzena eta xede-publikoari egokitua"] },
        { title: "2.3. Gida Didaktikoa (4 item)", items: ["Oinarrizko informazio osoa (izenburua, maila, ikasgaia, deskribapena, atazak, taldekatzeak, saioak)", "Erabilitako metodologia argi eta garbi identifikatuta", "Nafarroako curriculum-erreferentziak (gako-konpetentziak/espezifikoak, jakintzak, ebaluazio-irizpideak)", "Ebaluazio- eta jarraipen-proposamen zehatza"] },
        { title: "2.4. Irisgarritasuna (7 item)", items: ["Goiburuen erabilera zuzena edukia hierarkizatzeko", "Esteka argiak izenburuarekin eta leiho berrian irekitzea", "Testu alternatiboa (izenburua eta deskribapena) irudi guztietan", "Azpitituluak bideo guztietan", "Ikusizko kontraste egokia testu/irudi/hondoaren artean", "Tipografia irisgarria sans-serif (Roboto Condensed ≥12pt)", "Nabigazio irisgarria eta responsiboa (mugikorra, tableta, ordenagailua)"] },
    ]
};

export const I18N_TECNICO_ITEMS: Record<'es' | 'eu', { title: string; items: string[] }[]> = {
    es: [
        { title: "3.1. Interactividad (3 ítems)", items: ["Actividades interactivas que involucran activamente al alumnado", "Interfaz intuitiva y estructura de navegación clara", "Elementos multimedia dinámicos (vídeos, gráficos, animaciones)"] },
        { title: "3.2. Requisitos Técnicos (6 ítems)", items: ["Robustez técnica sin fallos durante el uso", "Enlaces funcionales y verificados", "Archivo fuente (.elp) incluido para edición con eXeLearning", "Exportable a formatos estándar (SCORM, HTML5, ePub)", "Acceso multiplataforma (ordenador, tablet, móvil)", "Metadatos catalogados correctamente según LOM-ES"] },
        { title: "3.3. Licencias y Derechos (3 ítems)", items: ["Licencias abiertas (CC-BY o CC-BY-SA preferentemente)", "Coherencia de licencias entre recurso y elementos contenidos", "Citas/créditos completos (autoría, fuente, licencia) + identificación transparente de contenido generado con IA"] },
    ],
    eu: [
        { title: "3.1. Interaktibitatea (3 item)", items: ["Ikasleen parte-hartze aktiboa eskatzen duten jarduera interaktiboak", "Interfaze intuitiboa eta nabigazio-egitura argia", "Elementu multimedia dinamikoak (bideoak, grafikoak, animazioak)"] },
        { title: "3.2. Baldintza Teknikoak (6 item)", items: ["Sendotasun teknikoa, akatsik gabea erabileran", "Esteka funtzionalak eta egiaztatuak", "Iturburu-fitxategia (.elp) barne, eXeLearning-ekin editatzeko", "Formatu estandarretara esportagarria (SCORM, HTML5, ePub)", "Plataforma anitzeko sarbidea (ordenagailua, tableta, mugikorra)", "LOM-ES arauaren arabera behar bezala katalogatutako metadatuak"] },
        { title: "3.3. Lizentziak eta Eskubideak (3 item)", items: ["Lizentzia irekiak (lehentasunez CC-BY edo CC-BY-SA)", "Lizentzien koherentzia baliabidearen eta edukien artean", "Aipamen/kreditu osoak (egiletza, iturria, lizentzia) + IA bidez sortutako edukiaren identifikazio gardena"] },
    ]
};
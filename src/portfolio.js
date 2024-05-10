import ResumePDF from '~/assets/KLih_CV_Eng.pdf';
const header = {
    // all the properties are optional - can be left empty or deleted
    homepage: 'https://github.com/VuKlih/Portfollio',
    title: 'VHKL.',
};

const about = {
    // all the properties are optional - can be left empty or deleted
    name: 'Khanh Linh',
    role: 'Front End Developer',
    description:
        'I am a third-year student who adores clean, simple, and distinctive design, fueled by a fervent passion for programming and website development',
    resume: ResumePDF,
    social: {
        linkedin: '',
        github: 'https://github.com',
    },
};

const projects = [
    // projects can be added an removed
    // if there are no projects, Projects section won't show up
    {
        name: 'Mobile Application OpenDota',
        description:
            "An application for providing real-time information and analytics for the popular online game Dota 2.",
        stack: ['Java', 'XML','retrofit'],
        sourceCode: 'https://github.com/VuKlih/Mobile_OpenDOTA',
        livePreview: '',
    },
    {
        name: 'Todolist',
        description:
            'A simple to-do web applicaton made with React.',
        stack: ['React', 'JavaScript', 'AntD'],
        sourceCode: 'https://github.com/VuKlih/Todolist',
        livePreview: 'https://todolistiny.netlify.app',
    },
    {
        name: 'Movie Recommender System',
        description:
            'Build filters by applying machine learning techniques to select the most suitable movies, and movie genres to recommend to users',
        stack: ['Python'],
        sourceCode: 'https://github.com/VuKlih/FinalML2-Movie-Recommened-system',
        livePreview: '',
    },
    {
        name: 'Portfolio',
        description:
            'My portfolio ',
            stack: ['React', 'JavaScript', 'AntD', 'Notion API'],
            sourceCode: 'https://github.com',
            livePreview: 'https://linkorangeportfolio.netlify.app',
    },
];

const skills = [
    // skills can be added or removed
    // if there are no skills, Skills section won't show up
    'JavaScript',
    'React',
    'Python',
    'SASS',
    'Material UI',
    'Git',
];

export { header, about, projects, skills };

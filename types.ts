
export enum Language {
  EN = 'EN',
  CN = 'CN',
  FR = 'FR'
}

export interface Translation {
  nav: {
    home: string;
    about: string;
    group: string;
    experience: string;
    projects: string;
    contact: string;
  };
  hero: {
    greeting: string;
    role: string;
    description: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  about: {
    title: string;
    subtitle: string;
    content: string[];
    skillsTitle: string;
    awardsTitle: string;
  };
  group: {
    title: string;
    subtitle: string;
    description: string;
    focusTitle: string;
    positionsTitle: string;
    positions: string;
  };
  experience: {
    title: string;
    subtitle: string;
    present: string;
  };
  projects: {
    title: string;
    subtitle: string;
    viewProject: string;
    sourceCode: string;
  };
  contact: {
    title: string;
    subtitle: string;
    emailLabel: string;
    ccLabel: string;
    message: string;
    send: string;
  };
  chat: {
    trigger: string;
    title: string;
    placeholder: string;
    disclaimer: string;
    welcome: string;
  };
}

export interface Project {
  id: string;
  title: string;
  description: {
    [key in Language]: string;
  };
  tech: string[];
  image: string;
  link?: string;
  type: 'Project' | 'Paper' | 'Patent'; 
}

export interface ExperienceItem {
  id: string;
  role: {
    [key in Language]: string;
  };
  company: {
    [key in Language]: string;
  };
  period: {
    [key in Language]: string;
  };
  description: {
    [key in Language]: string[];
  };
  type: 'Work' | 'Education';
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

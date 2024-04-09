export interface Contacts {
  c: string;
  e: string;
}

export interface Languages {
  language: string;
  level: string;
}

export interface Experience {
  year: string;
  position: string;
  description: string[];
}

export interface CVHeader {
  photo: string;
  name: string;
  lastName: string;
  position: string;
}

export interface CVPersonal {
  contacts: Contacts;
  techSkills: string[];
  softSkills: string[];
  languages: Languages[];
}

export interface CVDetails {
  summary: string[];
  experience: Experience[];
  education: string[];
}

export interface CVAgree {
  agree: string;
}

export interface CVData {
  header: CVHeader;
  personal: CVPersonal;
  details: CVDetails;
  agree: CVAgree;
}

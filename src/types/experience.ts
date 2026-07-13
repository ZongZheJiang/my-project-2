export interface Experience {
    role: string;
    company: string;
    duration: string;
    points: string[];
    link?: {
        label: string;
        url: string;
    };
}
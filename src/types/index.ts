export type FormData = {
    name: string;
    email: string;
    message: string;
};

export interface GitHubRepo {
    id: number;
    name: string;
    languages_url: string;
    html_url: string;
    homepage: string;
    created_at: string;
    languages: string[];
}
const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

const headers = {
    Authorization: `token ${GITHUB_TOKEN}`
};

export const fetchGitHubUser = async () => {
    const response = await fetch('https://api.github.com/user', { headers });
    const data = await response.json();
    return data;
};

export const fetchRepoLanguages = async (languages_url: string) => {
    const response = await fetch(languages_url, { headers });
    return response.json();
};

export const fetchStarredRepos = async (page: number, per_page: number) => {
    const response = await fetch(`https://api.github.com/user/starred?page=${page}&per_page=${per_page}`, { headers });
    return response.json();
};
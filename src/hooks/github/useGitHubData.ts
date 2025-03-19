import { useState, useEffect } from 'react';
import { GitHubRepo } from '../../types';
import { fetchGitHubUser, fetchRepoLanguages, fetchStarredRepos } from '../../services/github/githubService';

interface UserData {
    name: string;
    avatar_url: string;
    repos: GitHubRepo[];
    starredRepos: GitHubRepo[];
}

export const useGitHubData = () => {
    const [userData, setUserData] = useState<UserData>({ name: '', avatar_url: '', repos: [], starredRepos: [] });
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [hasMoreRepos, setHasMoreRepos] = useState(true);

    const loadMoreRepos = async () => {
        setLoading(true);
        const newStarredRepos = await fetchStarredRepos(page, 6);

        if(newStarredRepos.length === 0) {
            setHasMoreRepos(false)
            setLoading(false)
            return
        }

        const newStarredReposWithLanguages = await Promise.all(newStarredRepos.map(async (repo: GitHubRepo) => {
            const languages = await fetchRepoLanguages(repo.languages_url);
            return { ...repo, languages: Object.keys(languages) };
        }));

        const combinedRepos = [...userData.starredRepos, ...newStarredReposWithLanguages];
        const orderedRepos = combinedRepos.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());

        setUserData(prevState => ({
            ...prevState,
            starredRepos: orderedRepos
        }));

        setPage(prevPage => prevPage + 1);
        setLoading(false);
    };

    useEffect(() => {
        const fetchData = async () => {
            const user = await fetchGitHubUser();
            const initialRepos = await fetchStarredRepos(1, 6);

            const initialReposWithLanguages = await Promise.all(initialRepos.map(async (repo: GitHubRepo) => {
                const languages = await fetchRepoLanguages(repo.languages_url);
                return { ...repo, languages: Object.keys(languages) };
            }));
            const orderedRepos = initialReposWithLanguages.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());

            setUserData({
                name: user.name,
                avatar_url: user.avatar_url || null,
                repos: [],
                starredRepos: orderedRepos
            });

            setPage(2);
        };

        fetchData();
    }, []);

    return { userData, loadMoreRepos, loading, hasMoreRepos };
};
import { CustomCard } from "./CustomCard";
import '../../styles/components/ui/_repoList.scss';
import { useGitHubData } from "../../hooks/github/useGitHubData";
import { toast } from "react-toastify";

const RepoList = () => {
    const { userData, loadMoreRepos, loading, hasMoreRepos } = useGitHubData();

    const handleLoadMoreRepos = async () => {
        await loadMoreRepos();

        toast.success('Más repositorios cargados');

        const projectsSection = document.getElementById('projects');
        if (projectsSection) {
            projectsSection.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <div>
            <section className="repo-list">
                {userData.starredRepos.map((repo) => (
                    <CustomCard
                        key={repo.id}
                        title={repo.name}
                        subtitle={`Creado el: ${new Date(repo.created_at).toLocaleDateString()}`}
                        languages={repo.languages}
                        buttons={[
                            { type: 'git', url: repo.html_url },
                            ...(repo.homepage ? [{ type: 'demo', url: repo.homepage }] : [])
                        ]}
                        mail={false}
                    />
                ))}
            </section>
            <div className="repo-list__loadmore-container">
                {hasMoreRepos ? (
                    <button onClick={handleLoadMoreRepos} disabled={loading} className="repo-list__loadmore-btn">
                        {loading ? (
                            <span className="repo-list__spinner" aria-label="Cargando" />
                        ) : (
                            'Cargar más'
                        )}
                    </button>
                ) : (
                    <div className="repo-list__nomore">🎉 ¡Has visto todos los repositorios destacados!</div>
                )}
            </div>
        </div>
    );
};

export default RepoList;
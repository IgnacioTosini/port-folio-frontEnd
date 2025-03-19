import CustomCard from "./CustomCard";
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
                            { type: 'demo', url: repo.homepage }
                        ]}
                        mail={false}
                    />
                ))}
            </section>
            <button onClick={handleLoadMoreRepos} disabled={loading || !hasMoreRepos}>
                {loading ? 'Cargando...' : hasMoreRepos ? 'Cargar más' : 'No hay más repositorios'}
            </button>
        </div>
    );
};

export default RepoList;
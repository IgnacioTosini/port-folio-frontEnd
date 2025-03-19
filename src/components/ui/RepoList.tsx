import CustomCard from "./CustomCard";
import '../../styles/components/ui/_repoList.scss';
import { useGitHubData } from "../../hooks/github/useGitHubData";

const RepoList = () => {
    const { userData, loadMoreRepos, loading } = useGitHubData();

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
            <button onClick={loadMoreRepos} disabled={loading}>
                {loading ? 'Cargando...' : 'Cargar más'}
            </button>
        </div>
    );
};

export default RepoList;
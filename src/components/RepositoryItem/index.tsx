import './styles.scss';
interface RepositoryItemprops {
  repository:{
    name: string;
    description: string;
    html_url: string;  
  }
}
export function RepositoryItem(props: RepositoryItemprops) {
  return(
  
        <li>
          <strong>{props.repository.name}</strong>
          <p>{props.repository.description}</p>
          <a href={props.repository.html_url}>
            Acessar Repositórios
          </a>
        </li>
    
  );
}
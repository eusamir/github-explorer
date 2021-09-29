import { RepositoryItem } from "../RepositoryItem";
import './styles.scss';
import {useState, useEffect} from 'react';
//https://api.github.com/orgs/rocketseat/repos
declare interface RepositoryItem{
  name: string;
  description: string;
  html_url: string;
}
export function RepositoryList(){
  const[repositories, setRepositories]=useState<RepositoryItem[]>([])

  useEffect(() => {
    fetch('https://api.github.com/orgs/rocketseat/repos')
    .then(response=> response.json())
    .then(data=> setRepositories(data))
  }, []);
  return(
    <section className="repository-list">
      <h1>Lista de Repositórios</h1>
      <ul>
        {repositories.map(repository=>(<RepositoryItem key={repository.name} repository={repository}/>))}
      </ul>
    </section>
  )
}
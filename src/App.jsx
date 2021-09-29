import { Counter } from "./components/Counter/Counter";
import { RepositoryList } from "./components/RepositoryList";
import './styles/global.scss';
//https://api.github.com/orgs/rocketseat/repos
export default function App() {
  return (
    <>
     <RepositoryList/>
     <Counter/>
    </>
    
  );
}

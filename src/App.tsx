
import './App.css';
import { TwitterFollowCard } from './components/TwitterFollowCard.tsx';
import Lista from './components/List';


export function App() {

  const formatUserName = (userName: string) =>  `@${userName}`;

  return (
    <section className="App">
    <TwitterFollowCard formatUserName={formatUserName} isFollowing userName="lucia" name=" Lucia" />
    <TwitterFollowCard formatUserName={formatUserName} isFollowing userName="gentleman_programming" name=" gentleman_programming" />
    <TwitterFollowCard formatUserName={formatUserName} isFollowing userName="midudev" name="Miguel Angel Duran" />
    
    <Lista someProp="value" />
    </section>
   

  )
}
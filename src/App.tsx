
import './App.css';
import { TwitterFollowCard } from './components/TwitterFollowCard.tsx';



export function App() {

  const formatUserName = (userName: string) =>  `@${userName}`;

  return (
    <section className="App">
    <TwitterFollowCard formatUserName={formatUserName} isFollowing userName="carlos" name="carlosdev" />
    <TwitterFollowCard formatUserName={formatUserName} isFollowing userName="Luisdev" name="Luis" />
    <TwitterFollowCard formatUserName={formatUserName} isFollowing userName="midudev" name="Miguel Angel Duran" />
    </section>
   

  )
}
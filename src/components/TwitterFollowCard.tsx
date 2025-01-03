import { JSX } from 'react';

type TwitterFollowCardProps = {
  userName: string;
  name: string;
  isFollowing: boolean;
  formatUserName: (userName: string) => string;
};


export function TwitterFollowCard ({formatUserName, userName, name, isFollowing}: TwitterFollowCardProps): JSX.Element {
  
  

  return (
    <article className="tw-followCard">
    <header className="tw-followCard-header">
      <img 
      className="tw-followCard-avatar"
      src={`https://unavatar.io/${userName}`} 
      alt="Lookym" />
      <div className="tw-followCard-info">
        <strong>{name}</strong>
        <span className="tw-followCard-infoUserName">{formatUserName(userName)}</span>
      </div>
    </header>

    <aside>
      <button className="tw-followCard-button">
        {isFollowing ? 'Siguiendo' : 'Seguir'}
      </button>
    </aside>
   </article> 
  );
}

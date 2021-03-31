import React from "react";
const Card = (props) => {
  if(props.error)
  {
    return(
      <div className='Error'>
        <h1>User not exists</h1>
      </div>
    )
  }
  else {
    return (
      <div className="cardContainer">
        <div className="Card">
          <div className="img-sec">
          <img src={props.avatar_url} alt={props.login} />
          </div>

          <div className="info-sec">
            <div className="type badge">
              <span>{props.type}</span>
            </div>
            <h1 className='FontColor'>{props.login}</h1>
            <p className='FontColor' >{props.bio}</p>
            <div className="follower badge">
              <span>Follower:- {props.followers}</span>
            </div>
            <div className="following badge">
              <span>Following:- {props.following}</span>
            </div>
            <div className="repo badge">
              <span>Repo:- {props.public_repos}</span>
            </div>
            <div className="gist badge">
              <span>Gist:- {props.gist}</span>
            </div><br/>
            <div className="FollowGithub badge ">
              <a href={props.html_url} className='followLink'>
                View {props.login} on Github <i class="fab fa-github"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

};
export default Card;

import React,{useState} from 'react'
import Search from './Search'
import Card from './Card'

const Themain=()=>
{
  const [userstate,changeUser]=useState({
      login:"Sourav das",
      avatar_url: "https://avatars.githubusercontent.com/u/70948672?v=4",
      html_url:"https://github.com/freakflames29",
      type: "User",
      bio:"i am a computer science student and a craving founder",
      public_repos:29,
      public_gists:4,
      followers:1,
      following:1

  })
  const changeName=(e)=>
  {
    changeUser({
        login:e.target.value
    })

  }
  const SearchUser=()=>
  {
    fetch(`https://api.github.com/users/${userstate.login}`)
    .then(response=>response.json())
    .then(response=>{
      changeUser({
        login:response.login,
        avatar_url: response.avatar_url,
        html_url:response.html_url,
        type: response.type,
        bio:response.bio,
        public_repos:response.public_repos,
        public_gists:response.public_gists,
        followers:response.followers,
        following:response.following
      })

    })

  }
  return(
      <div>
          <h1 className='heading'>Searching for @{userstate.login} on <i class="fab fa-github"></i> </h1>
          <Search type={changeName} search={SearchUser}/>
          <Card login={userstate.login} bio={userstate.bio} followers={userstate.followers} avatar_url={userstate.avatar_url}/>
      </div>
  )
}
export default Themain;

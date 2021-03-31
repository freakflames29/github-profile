import React, { useState } from "react";
import Search from "./Search";
import Card from "./Card";

const Themain = () => {

  const [userstate, changeUser] = useState({
    login: "Sourav das",
    avatar_url: "https://avatars.githubusercontent.com/u/70948672?v=4",
    html_url: "https://github.com/freakflames29",
    type: "User",
    bio: "i am a computer science student and a craving founder",
    public_repos: 29,
    public_gists: 4,
    followers: 3,
    following: 1,
    message: "Not Found",
    call:1
  });
  const changeName = (e) => {
    changeUser({
      login: e.target.value,
    });
  };
  const SearchUser = () => {

    fetch(`https://api.github.com/users/${userstate.login}`)
      .then((response) => response.json())
      .then((response) => {
        changeUser({
          login: response.login,
          avatar_url: response.avatar_url,
          html_url: response.html_url,
          type: response.type,
          bio: response.bio,
          public_repos: response.public_repos,
          public_gists: response.public_gists,
          followers: response.followers,
          following: response.following,
          message:response.message,
          call:0
        });
      });
  };
  if (userstate.message=="Not Found")
  {
    return(
      <div>
        <h1 className="heading">
          User not present on <i class="fab fa-github"></i>{" "}
        </h1>
        <Search type={changeName} search={SearchUser} />
        {/* <Card error={userstate.message}/> */}
      </div>
    )

}
else {
  return(
    <div>
      <h1 className="heading">
        Searching for @{userstate.login} on <i class="fab fa-github"></i>{" "}
      </h1>
      <Search type={changeName} search={SearchUser} />
      <Card
          login={userstate.login}
          bio={userstate.bio}
          followers={userstate.followers}
          avatar_url={userstate.avatar_url}
          following={userstate.following}
          public_repos={userstate.public_repos}
          type={userstate.type}
          html_url={userstate.html_url}
          gist={userstate.public_gists}
        />
    </div>
  )
}
};
export default Themain;

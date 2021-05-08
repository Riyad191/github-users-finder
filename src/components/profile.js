import React, { useState } from "react";
import Display from "./display";
import "./display";

const Profile = () => {
  const [data, setData] = useState({});
  const [username, setUsername] = useState("");
  const [repositories, setRepositories] = useState([]);

  const onChangeHandler = (e) => {
    setUsername(e.target.value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const profile = await fetch(`https://api.github.com/users/${username}`);
    const res = await profile.json();
    console.log(res);

    const repositories = await fetch(res.repos_url);
    const repoJson = await repositories.json();
    console.log(repoJson);

    if (res) {
      setData(res);
      setRepositories(repoJson);
    }
  };
  return (
    <div className="profile">
      <form className="form">
        <input
          className="inp"
          placeholder="search username here..."
          type="text"
          value={username}
          onChange={onChangeHandler}
        />

        <button id="btn" type="submit" onClick={submitHandler}>
          Search
        </button>
      </form>
      <Display data={data} repositories={repositories} />
    </div>
  );
};
export default Profile;

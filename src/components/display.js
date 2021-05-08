import React from "react";
import "./display.css";

const DisplayTable = ({ data, repositories }) => {
  return (
    <div className="display">
      <div className="picName">
        <div className="picNameChild">
          {!data.avatar_url ? (
            " "
          ) : (
            <img src={data.avatar_url} alt={data.avatar_url} />
          )}
          <h1 className="name"> {data.name}</h1>
        </div>
      </div>

      <div className="info">
        <div>
          <div className="hero">
            <h2>USERNAME</h2>
            <h3></h3>
          </div>
          <div id="contect">
            <h2> {data.login} </h2>
          </div>
        </div>
        <h4></h4>
        <div>
          <div className="hero">
            <h2>LOCATION</h2>
            <h3></h3>
          </div>
          <div id="contect">
            <h2> {data.location}</h2>
          </div>
        </div>
        <h4></h4>
        <div>
          <div className="hero">
            <h2>FOLLOWERS</h2>
            <h3></h3>
          </div>
          <div id="contect">
            <h2> {data.followers}</h2>
          </div>
        </div>
        <h4></h4>
        <div>
          <div className="hero">
            <h2>FOLLOWING</h2>
            <h3></h3>
          </div>
          <div id="contect">
            <h2> {data.following}</h2>
          </div>
        </div>
      </div>

      <h1 id="repoTitle">Repositories</h1>

      <div className="repos">
        {repositories.map((repo) => (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
            key={repo.name}
          >
            <i id="repoIcon" className="fa fa-github"></i>
            <a id="a" href={repo.html_url} target="_blank">
              {repo.name}
            </a>
            <div></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DisplayTable;

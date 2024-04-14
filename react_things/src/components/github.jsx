import React from 'react';

import 'C:\\Users\\kulu1\\webdev\\react_things\\src\\components\\styles.css';


export  function Ghub({userData}){
    




    return (
        <div className="github-info-card">
        {userData ? (
          <div className="card">
            <img className="avatar" src={userData.avatar_url} alt="User Avatar" />
            <div className="user-details">
              <h2 className="name">{userData.name}</h2>
              <p className="bio">{userData.bio}</p>
              <ul className="stats">
                <li>Followers: <span className="stat">{userData.followers}</span></li>
                <li>Following: <span className="stat">{userData.following}</span></li>
                <li>Public Repos: <span className="stat">{userData.public_repos}</span></li>
              </ul>
              <a className="profile-link" href={userData.html_url}>View Profile</a>
            </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
      );
}
import React from 'react';
import {userEffect, useContext} from 'react';
import { useEffect } from 'react/cjs/react.development';
import GithubContext from '../context/github/GithubContext';
import {useParams} from 'react-router-dom';

function User() {
  const {getUser, user} = useContext(GithubContext);
  const params = useParams();

  useEffect(() => {
    getUser(params.login);
  }, []);

  return <div>User page</div>;
}

export default User;

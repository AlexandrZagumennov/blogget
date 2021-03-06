import {useEffect, useContext, useState} from 'react';
import {URL_API} from '../api/const';
import {TokenContext} from '../context/tokenContext';

export const usePost = () => {
  const [posts, setPosts] = useState();
  const {token} = useContext(TokenContext);

  useEffect(() => {
    if (!token) return;

    fetch(`${URL_API}/best`, {
      headers: {
        Authorization: `bearer ${token}`
      },
    })
      .then(response => {
        if (response.status === 401) {
          throw new Error(response.status);
        }
        return response.json();
      })
      .then(data => {
        setPosts(data.data.children);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [token]);

  return [posts];
};

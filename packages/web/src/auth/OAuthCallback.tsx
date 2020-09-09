import React, { FC, useEffect } from 'react';

const OAuth2Callback: FC = ({}) => {
  useEffect(() => {
    const code = (location.search.match(/code=([^&]+)/) || [])[1];
    const state = (location.search.match(/state=([^&]+)/) || [])[1];
    const qParams = [`code=${code}`, `redirect_uri=${process.env.GOOGLE_REDIRECT_URI}`, `scope=`].join('&');
    fetch(`/api/auth-from-code/${state}?${qParams}`, {
      credentials: 'include',
    })
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch(console.error);
  }, []);

  return <p>{location.search}</p>;
};

export default OAuth2Callback;

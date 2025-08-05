import React, { useEffect } from 'react';
import Header from './Header';
import CardContainer from './CardContainer';
import api from '../../api';

const HomePage = () => {

  useEffect(() => {
    api.get("products")
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.log(err.message);
      });
  }, []);

  return (
    <>
      <Header />
      <CardContainer />
    </>
  );
};

export default HomePage;

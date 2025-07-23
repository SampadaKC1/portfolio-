import React from 'react'
// import Weather from '../Components/Weather';
import { Link } from 'react-router-dom';
import Sampu from '../Components/sampu';
import WeatherApp from '../Components/Weather';
// import NewsApp from '../Components/NewsApp';

import NewsList from '../Components/NewsApp';
import TypingTest from '@/Components/TypingTest';
import Portfolio4 from '@/Components/Hero';

const Home = () => {
  return (
 <>

<Portfolio4/>
<NewsList/>
<TypingTest/>
 </>
  )
}

export default Home
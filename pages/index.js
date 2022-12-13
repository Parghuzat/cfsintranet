import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../components/navbar/Navbar';
import SlideShow from '../components/slideshow/slideshow';
//import Links from '../components/links/links';

export default function Home() {
  return (
    <div>
      <NavBar />
      {/* <Links /> */}
      <SlideShow />
    </div>
  )
}

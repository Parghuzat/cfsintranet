import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from '../components/navBar/Navbar';
import SlideShow from '../components/slideShow/SlideShow';
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

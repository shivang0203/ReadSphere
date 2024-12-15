import React from 'react';
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
  return (
    <div className='holder'>
        <header className='header'>
            <Navbar />
            <div className='header-content flex flex-c text-center text-white'>
                <h2 className='header-title text-capitalize'>Discover Your Next Read</h2><br />
                <p className='header-text fs-18 fw-3'>Explore a curated collection of captivating stories, timeless classics, and hidden gems. Find the book that resonates with your heart and mind, and embark on a journey of discovery today.</p>
                <SearchForm />
            </div>
        </header>
    </div>
  )
}

export default Header
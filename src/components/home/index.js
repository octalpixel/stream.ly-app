import React from 'react';
import BrandingContent from './BrandingContent/BrandingContent';
import SearchBar from './SearchBar/SearchBar';
import HeaderNavBar from '../common/Header/HeaderNavBar';

const HomeContent = () => (

    <React.Fragment>
        <HeaderNavBar showLogo={false}/>
        <div className="container">
        <BrandingContent/>
        <SearchBar/>
        </div>
    </React.Fragment>

);


export default HomeContent;
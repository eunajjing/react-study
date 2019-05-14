import React from 'react';
import styles from './PageTemplate.scss';
import classNames from 'classnames/bind';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const cx = classNames.bind(styles);

const PageTemplate = () => {
    return (
        <div className={cx('page-template')}>  
            <Header/>
            <main>
                {}
            </main>
            <Footer/>
        </div>
    );
};

export default PageTemplate;
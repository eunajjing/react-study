import React from 'react';
import styles from './Pagination.scss';
import classNames from 'classnames/bind';
import Button from '../../common/Button/Button';

const cx = classNames.bind(styles);

const Pagination = () => {
    return (
        <div className={cx('pagination')}>
            <Button disabled>&lt;</Button>
            <div className={cx('number')}>
                페이지 1
            </div>
            <Button>&gt;</Button>
        </div>
    );
};

export default Pagination;
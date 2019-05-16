import React from 'react';
import styles from './PostInfo.scss';
import classNames from 'classnames';

const cx = classNames.bind(styles);

const PostInfo = () => {
    return (
        <div className={cx('post-info')}>
            <div className={cx('info')}>
                <h1>타이틀</h1>
                <div className={cx('tag')}>
                    <a>#태그</a>
                    <a>#태그</a>
                    <a>#태그</a>
                </div>
                <div className={cx('date')}>May 16, 2015</div>
            </div>
        </div>
    );
};

export default PostInfo;
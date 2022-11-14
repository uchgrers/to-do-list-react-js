import React from 'react';
import classes from './Nav.module.css';

const Nav = (props) => {

    const iteratePage = (id, op) => {
        props.iteratePage(id, op);
    }

    return (
        <div className={classes.item}>
            <div className={classes.arrow} onClick={() => iteratePage(props.currentPage, '<')}>
                <div className={classes.backArrow}></div>
            </div>
            <div className={classes.pages}>
                {/*{pages}*/}
                {Number(props.currentPage)} of {props.pagesCount}
            </div>
            <div className={classes.arrow} onClick={() => iteratePage(props.currentPage, '>')}>
                <div className={classes.forthArrow}></div>
            </div>
        </div>
    );
};

export default Nav;
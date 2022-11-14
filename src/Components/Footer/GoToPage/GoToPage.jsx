import React from 'react';
import classes from './GoToPage.module.css';

const GoToPage = (props) => {

    const pageNum = React.createRef();

    const enterPage = (ev) => {
        if (ev.key === 'Enter' && pageNum.current.value) {
            let value = Math.trunc(Number(pageNum.current.value));
            if (value > props.pagesCount) {
                props.enterPage(props.pagesCount - 1);
            } else if (value < 1) {
                props.enterPage(0);
            } else {
                props.enterPage(value - 1);
            }
            pageNum.current.value = '';
        }
    }

    return (
        <input ref={pageNum} className={classes.item} type="number" onKeyPress={enterPage}/>
    );
};

export default GoToPage;
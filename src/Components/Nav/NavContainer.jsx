import {iteratePageActionCreator} from "../../store/root-reducer";
import {connect} from "react-redux";
import Nav from "./Nav";


const mapStateToProps = (state) => {
    return {
        tasks: state.reducer.pageTasks,
        currentPage: state.reducer.currentPage,
        pagesCount: state.reducer.pagesCount
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        iteratePage: (id, op) => {
            dispatch(iteratePageActionCreator(id, op));
        }
    }
}

const NavContainer = connect(mapStateToProps, mapDispatchToProps)(Nav);

export default NavContainer;
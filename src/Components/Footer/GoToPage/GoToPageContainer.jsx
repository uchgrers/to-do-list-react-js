import {goToPageActionCreator} from "../../../store/root-reducer";
import {connect} from "react-redux";
import GoToPage from "./GoToPage";

const mapStateToProps = (state) => {
    return {
        pagesCount: state.reducer.pagesCount
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        enterPage: (id) => {
            dispatch(goToPageActionCreator(id));
        }
    }
}

const GoToPageContainer = connect(mapStateToProps, mapDispatchToProps)(GoToPage);

export default GoToPageContainer;
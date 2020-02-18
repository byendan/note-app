import { connect } from 'react-redux';
import Display from '../components/Display';
import {bindActionCreators} from "redux";
import * as DisplayActions from "../actions/display";

function mapStateToProps(state) {
  return {
    showNavPanel: state.showNavPanel
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(DisplayActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Display);

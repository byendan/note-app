//import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Display from '../components/Display';
//import * as CounterActions from '../actions/counter';

// function mapStateToProps(state) {
//   return {
//     counter: state.counter
//   };
// }
//
// function mapDispatchToProps(dispatch) {
//   return bindActionCreators(CounterActions, dispatch);
// }

//export default connect(mapStateToProps, mapDispatchToProps)(Counter);
export default connect(null, null)(Display);

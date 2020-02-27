import Sidebar from './sidebar.jsx'
import { connect } from "react-redux"
import { addItem } from '../../store/kanban/actions.js'
console.log('i am sidebar.js (main)')
let mapStateToProps = (state) => {
  console.log('i am state from sidebar.js', state);
  return { items: state.items}//TODO remove type from state
}

export default connect(mapStateToProps, { addItem })(Sidebar);
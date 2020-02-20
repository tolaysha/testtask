import Sidebar from './sidebar'
import { connect } from "react-redux"
import { addItem } from '../../store/kanban/actions.js'
let mapStateToProps = (state) => {
  console.log('console check from sidebar.js', state);
  return { items: state.items}
}



export default connect(mapStateToProps, addItem)(Sidebar);
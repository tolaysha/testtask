import Kanban from './kanban.jsx'
import { connect } from "react-redux"
import { getItems } from '../../store/kanban/actions.js'
let mapStateToProps = (state) => {
  console.log('console check from Kanban.js', state);
  return { items: state.items}
}



export default connect(mapStateToProps,{ getItems })(Kanban);
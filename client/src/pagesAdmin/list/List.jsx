import "./list.scss"
import Sidebar from "../../componentsAdmin/sidebar/index"
import Datatable from "../../componentsAdmin/datatable/Datatable"

const List = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Datatable/>
      </div>
    </div>
)
}

export default List

import Sidebar from "../../componentsAdmin/sidebar/index"
import Featured from "../../componentsAdmin/featured/Featured"
import Chart from "../../componentsAdmin/chart/Chart"
import Table from "../../componentsAdmin/table/Table"
import "./home.scss"


const HomeAdmin = () => {
  return (
    <div className="home">
      <Sidebar/>
      <div className="homeContainer">

      <div className="charts">
        <Featured/>
        <Chart title="Last 6 Months (Revenue)" aspect={2/1}/>
      </div>
      <div className="listContainer">
        <div className="listTitle">Transacciones</div>
        <Table/>
      </div>
      </div>
    </div>
  )
}

export default HomeAdmin
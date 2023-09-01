import "./single.scss";
import Sidebar from "../../componentsAdmin/sidebar/index";
import List from "../../componentsAdmin/table/Table";

const Single = () => {
  return (
    <div className="single">
      <Sidebar/>
      <div className="singleContainer">
        <div className="top">
          <div className="left">
            <h1 className="title">Informacion</h1>
            <div className="item">
              <img src="https://images.unsplash.com/photo-1504376379689-8d54347b26c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=536&q=80" 
              alt="" className="itemImg"/>
              <div className="details">
                <h1 className="itemTitle">Jane Doe</h1>
                <div className="detailItem">
                  <span className="itemKey">Phone :</span>
                  <span className="itemKey">+260 975 502 085</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address :</span>
                  <span className="itemKey">256 Collect House, Buteko Avenue , Ndola</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country :</span>
                  <span className="itemKey">Zambia</span>
                </div>
              </div>
            </div>
          </div>
     
        </div>
        <div className="bottom">
        <h1 className="title">Transacciones</h1>
          <List/>
        </div>
      </div>
    </div>
)
}

export default Single

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Card from '../components/Cards/Card';
import Header from '../components/Header';
import HostessPosts from '../components/Hostess/HostessPosts';
import { Link } from 'react-router-dom';

function Hostess() {
  return (
    <>
    <Header/>
    <div>

    <Tabs
      defaultActiveKey="profile"
      id="fill-tab-example"
      className="mb-3"
      fill
      >
      <Tab eventKey="home" title="Reservaciones">
        <h1>

       Reservaciones
        </h1>
      </Tab>
      <Tab eventKey="profile" title="Publicaciones">
       sadasd
      </Tab>

 
    </Tabs>
      </div>
        </>
  );
}

export default Hostess;
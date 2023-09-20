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
  <HostessPosts/>

      </div>
        </>
  );
}

export default Hostess;
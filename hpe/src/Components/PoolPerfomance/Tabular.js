import { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Iops from './Iops';

const Tabular = () => {
    const [key, setKey] = useState('perfomance');
    return (
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3"
      >
        <Tab eventKey="overview" title="Overview">
          Tab content for Home
        </Tab>
        <Tab eventKey="perfomance" title="Perfomance">
          <Iops/>
        </Tab>
        <Tab eventKey="capacity" title="Capacity" >
          Tab content for Contact
        </Tab>
      </Tabs>
    )
}

export default Tabular

import React, { useState } from 'react';
import { Offcanvas, Button } from 'react-bootstrap';

const UseSidebar = ({ showSidebar, handleClose }) => {
  return (
    <Offcanvas show={showSidebar} onHide={handleClose}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Sidebar</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        {/* Your sidebar content goes here */}
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      </Offcanvas.Body>
    </Offcanvas>
  );
};


const SidebarWithOffCanvas= () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const handleSidebarOpen = () => setShowSidebar(true);
  const handleSidebarClose = () => setShowSidebar(false);

  return (
    <div>
      <Button variant="primary" onClick={handleSidebarOpen}>
        Open Sidebar
      </Button>

      <UseSidebar showSidebar={showSidebar} handleClose={handleSidebarClose} />
    </div>
  );
};

export default SidebarWithOffCanvas;
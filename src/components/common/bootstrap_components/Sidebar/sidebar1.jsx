import React, { useState } from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { useNavigate } from 'react-router-dom';

const SidebarPro = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigateTo = useNavigate();
  const handleCollapse = () => {
    setCollapsed(!collapsed);
  };

  const handleMenuItemClick = (path) => {
    navigateTo(path);
  };

  const menuItems = [
    {
      label: 'Button',
      items: ['Button']
    },
    {
      label: 'Dropdown',
      items: ['Custom Dropdown', 'Searchable Dropdown'],
    },
    {
      label: 'Input',
      items: ['Input Field'],
    },
    {
      label: 'Loader',
      items: ['Loader']
    },
    {
      label: 'Modal',
      items: ['Modal 1', 'Modal 2', 'Modal 3'],
    },
    { label: 'Table', items: ['Table 1', 'Table 2', 'Table 3'] },
    // { label: 'Documentation', items: [] },
    {
      label: 'Sidebar',
      items: ['Sidebar 1', 'Sidebar 2'],
    }, 
    {
      label: 'Header',
      items: ['Header 1', 'Header 2', 'Header 3'],
    },
  ];

  const renderMenuItem = (label, path) => (
    <MenuItem onClick={() => handleMenuItemClick(path)} key={path}>
      {label}
    </MenuItem>
  );

  const renderSubMenu = (menuItem) => (
    <SubMenu label={menuItem.label} key={menuItem.label}>
      {menuItem.items.map((item) => renderMenuItem(item, `/${item.toLowerCase().replace(/\s+/g, '-')}`))}
    </SubMenu>
  );

  return (
    <div style={{ height: '100vh' }}>
      <Sidebar
        collapsed={collapsed}
        backgroundColor="#e9ecef"
        rtl={false}
        style={{ height: "100vh", zindex: "1", overflowY: "auto" }}>

        <div className="close-button" onClick={handleCollapse}>
          {collapsed ? 'Open' : 'Close'}
        </div>
        <Menu iconShape="square">
          {menuItems.map((menuItem) => {
            if (menuItem.items.length > 0) {
              return renderSubMenu(menuItem);
            } else {
              return renderMenuItem(menuItem.label, `/${menuItem.label.toLowerCase().replace(/\s+/g, '-')}`);
            }
          })}
        </Menu>
      </Sidebar>
    </div>
  );
};

export default SidebarPro;

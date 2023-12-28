
import BasicModal from "../common/bootstrap_components/Modal/modal1.jsx";
import ModalExample from "../common/bootstrap_components/Modal/modal2.jsx";
import ModalExampleWithEmail from "../common/bootstrap_components/Modal/modal3.jsx";
import Dashboard from "../common/bootstrap_components/dashboard.jsx";
import BasicHeader from "../common/bootstrap_components/Header/header1.jsx";
import HeaderWithRightAlignment from "../common/bootstrap_components/Header/header2.jsx";
import HeaderNavScrollExample from "../common/bootstrap_components/Header/header3.jsx";
import BasicReusableTable from "../common/bootstrap_components/Table/table1.jsx";
import ResponsiveTable from "../common/bootstrap_components/Table/table2.jsx";
import ResponsiveTableWithBreakpoints from "../common/bootstrap_components/Table/table3.jsx";
import SidebarPro from "../common/bootstrap_components/Sidebar/sidebar1.jsx";
import SidebarWithOffCanvas from "../common/bootstrap_components/Sidebar/sidebar2.jsx";
import Login from '../common/bootstrap_components/Login/login.jsx';
import CustomButtonComponent from "../Pages/Demos/button.jsx";
import CustomDropdownComponent from "../Pages/Demos/customDropdown.jsx";
import SearchableDropdownComponent from "../Pages/Demos/searchableDropdown.jsx";
import TextInputComponent from "../Pages/Demos/inputField.jsx";
import LoaderComponent from "../Pages/Demos/loader.jsx";

const AppRoutes = [
  {
    path: '/',
    // label: 'Dashboard',
    // icon: <GridViewRoundedIcon />,
    component: <Dashboard />,
    isPrivate: true,
  },
  {
    path: '/header-1',
    // label: 'Dashboard',
    // icon: <GridViewRoundedIcon />,
    component: <BasicHeader />,
  },
  {
    path: '/header-2',
    // label: 'Dashboard',
    // icon: <GridViewRoundedIcon />,
    component: <HeaderWithRightAlignment />,
  },
  {
    path: '/header-3',
    // label: 'Dashboard',
    // icon: <GridViewRoundedIcon />,
    component: <HeaderNavScrollExample />,
  },
  {
    path: '/table-1',
    // label: 'Dashboard',
    // icon: <GridViewRoundedIcon />,
    component: <BasicReusableTable />,
  },
  {
    path: '/table-2',
    // label: 'Dashboard',
    // icon: <GridViewRoundedIcon />,
    component: <ResponsiveTable />,
  },
  {
    path: '/table-3',
    // label: 'Dashboard',
    // icon: <GridViewRoundedIcon />,
    component: <ResponsiveTableWithBreakpoints />,
  },
  {
    path: '/modal-1',
    // label: 'QUICKPAY',
    // icon: <MenuRoundedIcon />,
    component: <BasicModal />,
  },
  {
    path: '/modal-2',
    // label: 'QUICKPAY',
    // icon: <MenuRoundedIcon />,
    component: <ModalExample />,
  },
  {
    path: '/modal-3',
    // label: 'QUICKPAY',
    // icon: <MenuRoundedIcon />,
    component: <ModalExampleWithEmail />,
  },
  {
    path: '/sidebar-1',
    // label: 'Dashboard',
    // icon: <GridViewRoundedIcon />,
    component: <SidebarPro />,
  },
  {
    path: '/sidebar-2',
    // label: 'Dashboard',
    // icon: <GridViewRoundedIcon />,
    component: <SidebarWithOffCanvas />,
  },
  {
    path: '/button',
    // label: 'Dashboard',
    // icon: <GridViewRoundedIcon />,
    component: <CustomButtonComponent />,
  },
  {
    path: '/custom-dropdown',
    // label: 'Dashboard',
    // icon: <GridViewRoundedIcon />,
    component: <CustomDropdownComponent />,
  },
  {
    path: '/searchable-dropdown',
    // label: 'Dashboard',
    // icon: <GridViewRoundedIcon />,
    component: <SearchableDropdownComponent />,
  },
  {
    path: '/input-field',
    // label: 'Dashboard',
    // icon: <GridViewRoundedIcon />,
    component: <TextInputComponent />,
  },
  {
    path: '/loader',
    // label: 'Dashboard',
    // icon: <GridViewRoundedIcon />,
    component: <LoaderComponent />,
  },
];

export default AppRoutes
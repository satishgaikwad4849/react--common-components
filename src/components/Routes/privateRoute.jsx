// import { Route, Navigate } from 'react-router-dom';

// const PrivateRoute = ({ element: Element, isAuthenticated, ...rest }) => (
//   <Route
//     {...rest}
//     element={isAuthenticated ? <Element /> : <Navigate to="/login" />}
//   />
// );

// export default PrivateRoute;
// PrivateRoute component to handle authentication
function PrivateRoute({ children }) {
  const isAuthenticated = /* your authentication logic here */ true; // Replace this with your actual authentication logic

  return isAuthenticated ? children : <Navigate to="/login" />;
}

export default PrivateRoute;

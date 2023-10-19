import PropTypes from "prop-types";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className="w-full flex justify-center items-center">
        <span className="loading loading-bars w-40 py-40"></span>
      </div>
    );
  }

  if (user) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location.pathname }} replace />;
};

PrivateRoutes.propTypes = {
  children: PropTypes.node,
};

export default PrivateRoutes;

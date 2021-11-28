import { useLocation, useNavigate, useParams } from "react-router-dom";

export function withRouter(child) {
  return (props) => {
    const location = useLocation();
    const navigate = useNavigate();
    const params = useParams();
    return (
      <child
        {...props}
        params={params}
        navigate={navigate}
        location={location}
      />
    );
  };
}

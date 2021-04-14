import Nav from "../nav/Nav";
import { Link } from "react-router-dom";
import "./Layout.css";

function Layout(props) {
  return (
    <div className="layout">
      <Nav user={props.user} />
      <div className="layout-children">{props.children}</div>
      <footer>
        <a
          className="footer-link"
          href="https://www.linkedin.com/in/gracen-hudachek"
        >
          LinkedIn
        </a>
        <a className="footer-link" href="https://github.com/ghudachek">
          Github
        </a>
        <Link to="/artwork">Art Work</Link>
      </footer>
    </div>
  );
}

export default Layout;

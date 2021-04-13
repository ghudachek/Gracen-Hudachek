import Nav from "../nav/Nav";
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
      </footer>
    </div>
  );
}

export default Layout;

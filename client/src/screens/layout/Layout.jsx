import Nav from "../nav/Nav";
import "./Layout.css";

function Layout(props) {
  return (
    <div className="layout">
      <Nav user={props.user} />
      <div className="layout-children">{props.children}</div>
      <footer>
        <a href="https://www.linkedin.com/in/gracen-hudachek">Linkedin</a>
        <a href="https://github.com/ghudachek">github</a>
      </footer>
    </div>
  );
}

export default Layout;

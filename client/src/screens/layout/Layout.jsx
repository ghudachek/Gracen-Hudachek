import Nav from "../nav/Nav";
import "./Layout.css";

function Layout(props) {
  return (
    <div className="layout">
      <Nav user={props.user} />
      <div className="layout-children">{props.children}</div>
    </div>
  );
}

export default Layout;

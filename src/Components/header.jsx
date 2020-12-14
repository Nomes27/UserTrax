import { Link } from "@reach/router";

const Header = () => {
  return (
    <header>
      <nav className="header_nav"></nav>
      <Link to="/" className="header_link">
        <h1 className="header_h1">UserTrax</h1>
      </Link>
    </header>
  );
};

export default Header;

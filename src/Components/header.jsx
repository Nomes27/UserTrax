import { Link } from "@reach/router";

const Header = () => {
  return (
    <header>
      <Link to="/" className="header_link">
        <h1 className="header_h1">User Tracker</h1>
      </Link>
    </header>
  );
};

export default Header;

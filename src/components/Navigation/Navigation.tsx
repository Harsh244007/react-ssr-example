import { Link } from "react-router-dom";
// type NavigationTypes = {
//   RandomString: string;
// }
const Navigation = ({ RandomString }) => {
  return (
    <nav>
      <ul className="flex flex-row flex-wrap justify-around">
        <Link to="/">
          <ul>Home</ul>
        </Link>
        <Link to="/about">
          <ul>About</ul>
        </Link>
        <Link to={RandomString}>
          <ul>
            Random Page URL {"=>"}
            {RandomString}
          </ul>
        </Link>
      </ul>
    </nav>
  );
};

export default Navigation;

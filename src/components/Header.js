//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Header.css";

const Header = () => {
  return (
    <nav>
      <div className="header">
        <p className="aux"> ICON Berlin, Germany</p>
        <form className="aux2" name="EnterCity">
          <label for="cityName">ICON</label>
          <input type="text" name="cityName" id="cityName" value="Enter city" />
          <button type="submit">Search</button>
        </form>
      </div>
    </nav>
  );
};

export default Header;

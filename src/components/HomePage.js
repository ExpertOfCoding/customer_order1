import { BrowserRouter as Router, Link} from "react-router-dom";

const HomePage = () => {
    return (
        <nav>
        <div className="center-container">
        <Link to="/sinif">
          <button className="sinif">Sinif</button>
        </Link>
        <Link to="/ogretmenler_odasi">
          <button className="ogretmenler_odasi">Öğretmenler Odasi</button>
        </Link>
        <Link to="/kantin">
          <button className="kantin">Kantin</button>
        </Link>
        <Link to="/idari">
          <button className="idari">İdari Kisim</button>
        </Link>
      </div>
      </nav>
    );
}
 
export default HomePage;
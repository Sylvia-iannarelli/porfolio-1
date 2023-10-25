import './styles.scss';
import { Link } from 'react-router-dom';
import LogoSylvia from '../../assets/images/Logo-Sylvia.png';

const Home = () => {
  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>Hi, <br /> I'm
          <img src={LogoSylvia} alt="dev" />
          <br />
          web developer
        </h1>
        <h2>Full stack developer | PHP | React | Symfony</h2>
        <Link to="/contact" className="flat-button">CONTACTEZ-MOI</Link>
      </div>
    </div>
  );
};

export default Home;

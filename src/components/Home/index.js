import './styles.scss';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import LogoS from '../../assets/images/Logo-S.png';
import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo';

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const nameArray = ['y', 'l', 'v', 'i', 'a'];
  const jobArray = ['w', 'e', 'b', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'p', 'e', 'r', '.'];

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _12`}>i,</span>
          <br />
          <span className={`${letterClass} _13`}>I</span>
          <span className={`${letterClass} _14`}>'m</span>
          <img src={LogoS} alt="Logo S" />
          <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15} />
          <br />
          <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={20} />
        </h1>
        <h2>Full stack developer | PHP | Symfony | React</h2>
        <Link to="/contact" className="flat-button">CONTACTEZ-MOI</Link>
      </div>
      <Logo />
    </div>
  );
};

export default Home;

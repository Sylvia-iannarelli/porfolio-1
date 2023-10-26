import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCss3, faGithub, faHtml5, faJs, faPhp, faReact, faSymfony,
} from '@fortawesome/free-brands-svg-icons';
import AnimatedLetters from '../AnimatedLetters';
import './styles.scss';

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);
  }, []);

  return (
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
            idx={15}
          />
        </h1>
        <p>
          Intéressée depuis toujours par l'informatique, j'ai enfin trouvé une opportunité pour me former et ainsi me reconvertir en Développeuse web, après plus de 20 ans dans une grande fédération d'associations (compétences en gestion de projet notamment).
        </p>
        <p>
          J'ai obtenu le titre professionnel DWWM en juillet 2023, après avoir suivi une formation intensive d'une durée de 6 mois chez O'clock.
        </p>
        <p>
          Je suis de nature curieuse et inventive, mais aussi rigoureuse et persévérante, et j’ai hâte de pouvoir mettre cela en application dans un métier qui correspond mieux à ma personnalité et à mes envies, que ceux que j’ai pu connaître jusqu’alors.
        </p>
      </div>

      <div className="stage-cube-cont">
        <div className="cubespinner">
          <div className="face1">
            <FontAwesomeIcon icon={faPhp} color="#DD0031" />
          </div>
          <div className="face2">
            <FontAwesomeIcon icon={faSymfony} color="#DD0031" />
          </div>
          <div className="face3">
            <FontAwesomeIcon icon={faJs} color="#DD0031" />
          </div>
          <div className="face4">
            <FontAwesomeIcon icon={faReact} color="#DD0031" />
          </div>
          <div className="face5">
            <FontAwesomeIcon icon={faHtml5} color="#DD0031" />
          </div>
          <div className="face6">
            <FontAwesomeIcon icon={faCss3} color="#DD0031" />
          </div>
          <div className="face7">
            <FontAwesomeIcon icon={faGithub} color="#DD0031" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

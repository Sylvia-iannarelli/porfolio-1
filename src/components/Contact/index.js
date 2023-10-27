import './styles.scss';
import AnimatedLetters from '../AnimatedLetters';

const Contact = () => {
  return (
    <>
      <div className="container contact-page">
        <div>
          <h1>
            <AnimatedLetters strArry={['C', 'o', 'n', 't', 'a', 'c', 't', 'e', 'z', '-', 'm', 'o', 'i']} />
          </h1>
        </div>
      </div>
    </>
  );
};

export default Contact;

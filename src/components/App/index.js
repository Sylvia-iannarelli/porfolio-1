import { Route, Routes } from 'react-router-dom';
import './styles.scss';
import Layout from '../Layout';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />} />
      </Routes>
    </>
  );
}

export default App;

import { Route, Routes } from 'react-router-dom';
import './styles.scss';
import Layout from '../Layout';
import Home from '../Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} />
      {/* <Route index element={<Home />} /> */}
    </Routes>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthPage from './components/AuthPage';
import Skill from './components/Skill';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/selectskill" element={<Skill />} />
        {/* Other routes */}
      </Routes>
    </Router>
  );
}

export default App;
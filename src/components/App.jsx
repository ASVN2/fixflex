import { Routes, Route } from 'react-router-dom';
import { Movie, Profile, Navbar } from '.';

function App() {
  return (
    <div className="main">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Movie />} />
        <Route path="/" element={<Profile />} />
      </Routes>
    </div>
  );
}
export default App;

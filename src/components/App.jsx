import { Routes, Route } from 'react-router-dom';
import { Movies, Profile, Navbar, Sidebar } from '.';

function App() {
  return (
    <div className="main ">
      <Navbar />
      <Sidebar />
      <div className="contant  md:ml-[240px] lg:ml-[240px] xl:ml-[240px]">
        <Routes>
          <Route exact path="/" element={<Movies />} />
          {/* <Route path="/" element={<Movie />} />
        <Route path="/" element={<Profile />} /> */}
        </Routes>
      </div>
    </div>
  );
}
export default App;

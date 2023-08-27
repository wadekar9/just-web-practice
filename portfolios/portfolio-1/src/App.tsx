import Header from './components/Header';
import SideBar from './components/SideBar';
import ProfilePick from './components/ProfilePick';
import Introducation from './components/Introducation';
import About from './components/About';
import Services from './components/Services';
import ProgressBar from './components/ProgressBar';

function App() {

  return (
    <>
      <Header/>
      <SideBar />
      <div className='ml-[90px] grid grid-cols-1 md:grid-cols-3'>
        <div className='col-span-2 p-5'>
          <Introducation />
          <About />
          <Services />
        </div>
        <div className='hidden md:block'>
          <ProgressBar />
          <ProfilePick />
        </div>
      </div>
    </>
  )
}

export default App

import { Link } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <>
      <div className='h-screen w-screen flex justify-center'>
        <div className='flex flex-col'>
          <i><p className='text-xs bg-red-400 my-10 p-2 rounded-sm text-center'><b>NOTICE:</b> if the website doesn't look normal please fullscreen I am too lazy to make this thing work properly</p></i>
          <div className='border border-black bg-stone-900 p-2 rounded-sm'>
            <p className='py-4 text-6xl text-center'>Application Form</p>
            <i><p className='text-xl py-2 text-stone-400 text-center'>Do you have what it takes to make it to my friend list?</p></i>
          </div>
          <div className='py-20 text-center'>
            <Link to="/questionaire">
              <button className='text-white border border-black w-40 font-dtmono text-3xl py-4 hover:text-yellow-300 hover:border-yellow-300 transition-all duration-200'>Proceed</button>
            </Link>
          </div>
        </div>
        
      </div>
    </>
  )
}

export default App

import './loader.css'
import { Riple } from 'react-loading-indicators';
import loadimg from '../assets/me/homeimg.png';
function Loader() {
  return (
    <div className='loaderdiv'>
        <Riple color="#32cd32" size="large" text="" textColor=""  />
        <img src={loadimg} alt=""  className='loaderimg'/>
    </div>
  )
}

export default Loader

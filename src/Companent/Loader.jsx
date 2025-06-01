import './loader.css'
import { Riple } from 'react-loading-indicators';
function Loader() {
  return (
    <div className='loaderdiv'>
        <Riple color="#32cd32" size="large" text="" textColor=""  />
        <img src="src\assets\me\homeimg.png" alt=""  className='loaderimg'/>
    </div>
  )
}

export default Loader
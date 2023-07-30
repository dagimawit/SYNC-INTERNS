// import Allroutes from './routes/Allroutes';
// function Appp () {
  
//     return (
//       <div className="appp">
//         <Allroutes/>
//       </div>
//     );
//   }


// export default Appp;
import { BrowserRouter } from 'react-router-dom';
import Allroutes from './routes/Allroutes';
function Appp () {
  
    return (
      <div className="appp">
        <BrowserRouter>
          <Allroutes/>
        </BrowserRouter>
        
      </div>
    );
  }


export default Appp;





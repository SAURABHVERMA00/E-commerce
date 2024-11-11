
import { Route, Routes} from 'react-router-dom';
import './App.css';

import CustomerRoutes from '../src/Routes/CustomerRoutes';
function App() {
  return (
    <div className="">

      <Routes>
        <Route  path='/*' element={<CustomerRoutes/>} />
      </Routes>

      
     
      
    </div>
  );
}

export default App;

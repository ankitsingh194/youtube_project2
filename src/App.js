import { useState } from 'react';
import './App.css';
import Home from './home';
import {Route, Routes,BrowserRouter} from 'react-router-dom';
import Info from './info';


function App() {
  const [response , setResponse] = useState({ 
    title: '',
    thumbnails: '',
    likeCount:'',
    viewCount:'',
    commentCount:'',
    subscriberCount:'',
    UploadedDate:'',
  });

  const data = response;
  console.log("app",data)
  

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/'element={<Home setResponse={setResponse} />}
        />
        <Route path='/info' element={<Info data={data} />} />
      </Routes>
      </BrowserRouter>
    
  
    </div>
  );
}

export default App;

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HomePage from "../HomePage/HomePage"

export default function RouterPage() {
    return(
        <div className="RouterPage">
           <BrowserRouter>
              <Routes>
                 <Route path ='/arun/portfolio' element={<HomePage/>}></Route>
              </Routes>
           </BrowserRouter>
        </div>
    )
}
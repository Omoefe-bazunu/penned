import { Blogs } from "./components/HomePage/Blogs"
import { RootLayout } from "./components/RootLayout"
import { About } from "./components/HomePage/About"
import { LogIn } from "./components/authentication/LogIn"
import { PwdRT1 } from "./components/authentication/PwdRT1"
import { PwdRT2 } from "./components/authentication/PwdRT2"
import { PwdRT3 } from "./components/authentication/PwdRT3"
import { SignUp } from "./components/authentication/SignUp"
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom"
import { Contact } from "./components/HomePage/Contact"
import { BlogDetails } from "./components/HomePage/BlogDetails"
import { DashBoard } from "./components/HomePage/DashBoard"

const router = createBrowserRouter(
  createRoutesFromElements (
    <Route path="/Home" element={<RootLayout/>}>
      <Route index element={<Blogs />}/>
      <Route path="about" element={<About />}/>
      <Route path="blogDetails" element={<BlogDetails />}/>
      <Route path="dashboard" element={<DashBoard />}/>
      <Route path="contact" element={<Contact/>}/>
      <Route path="signup" element={<SignUp/>}/>
      <Route path="login" element={<LogIn/>}/>
      <Route path="passwordReset1" element={<PwdRT1/>}/>
      <Route path="passwordReset2" element={<PwdRT2/>}/>
      <Route path="passwordReset3" element={<PwdRT3/>}/>
    </Route>
  )
)


function App() {

  return (
      <RouterProvider router = {router}/>
  )
}

export default App

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
    <Route path="/" element={<RootLayout/>}>
      <Route path="/" element={<Blogs />}/>
      <Route path="About" element={<About />}/>
      <Route path="BlogDetails" element={<BlogDetails />}/>
      <Route path="Dashboard" element={<DashBoard />}/>
      <Route path="Contact" element={<Contact/>}/>
      <Route path="Signup" element={<SignUp/>}/>
      <Route path="Login" element={<LogIn/>}/>
      <Route path="PasswordReset1" element={<PwdRT1/>}/>
      <Route path="PasswordReset2" element={<PwdRT2/>}/>
      <Route path="PasswordReset3" element={<PwdRT3/>}/>
    </Route>
  )
)


function App() {

  return (
      <RouterProvider router = {router}/>
  )
}

export default App

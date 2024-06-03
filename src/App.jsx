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
import { contactForm } from "./components/FormHandlers/ContactForm"
import { LoginForm } from "./components/FormHandlers/LoginForm"
import { SignupForm } from "./components/FormHandlers/SignupForm"
import { PasswordReset1Form } from "./components/FormHandlers/PasswordReset1"
import { PasswordReset2Form } from "./components/FormHandlers/PasswordReset2"
import { PasswordReset3Form } from "./components/FormHandlers/PasswordReset3"
import { createPostForm } from "./components/FormHandlers/createPostForm"

const router = createBrowserRouter(
  createRoutesFromElements (
    <Route path="/" element={<RootLayout/>}>
      <Route path="/" element={<Blogs />}/>
      <Route path="About" element={<About />}/>
      <Route path=":id" element={<BlogDetails />}/>
      <Route path="Dashboard" element={<DashBoard />} action={createPostForm} />
      <Route path="Contact" element={<Contact/>} action={contactForm}/>
      <Route path="Signup" element={<SignUp/>} action={SignupForm}/>
      <Route path="Login" element={<LogIn/>} action={LoginForm}/>
      <Route path="PasswordReset1" element={<PwdRT1/>} action={PasswordReset1Form}/>
      <Route path="PasswordReset2" element={<PwdRT2/>} action={PasswordReset2Form}/>
      <Route path="PasswordReset3" element={<PwdRT3/>} action={PasswordReset3Form}/>
    </Route>
  )
)


function App() {

  return (
      <RouterProvider router = {router}/>
  )
}

export default App

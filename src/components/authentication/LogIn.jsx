import {Form, Link} from 'react-router-dom'

export const LogIn = () => {
  return (
    <div className='LogIn-Wrapper w-5/6 h-full bg-inherit flex justify-center items-center my-0 mx-auto'>
        <div className="LogInInner bg-white rounded-md w-full h-96 flex justify-start items-center">
            <div className="featuredImage bg-cover bg-center bg-no-repeat h-full bg-slate-500 rounded-md w-full"></div>
            <div className="Form flex flex-col justify-start items-start h-full w-full py-12 px-5 gap-8" >
                <h2 className='brand text-2xl w-full'>PENNED</h2>
                <Form method='post' action='/login' className='FormElement flex flex-col justify-start items-start w-full pr-12'>
                        <input type="email" placeholder='Email' name='email' className=' outline-none border-b-2 border-gray-100 mb-5 w-full' />
                        <input type="password" placeholder='Password' name='password' className='outline-none border-b-2 border-gray-100 w-full mb-1' />
                        <p className='forgotPassword text-right text-sm w-full mb-2 text-red-500 cursor-pointer'><Link to='/pwdRT1'>Forgot Password?</Link></p>
                        <button className=' text-white text-nowrap py-2 w-fit px-8 rounded-sm cursor-pointer mt-1'>LOGIN</button>
                        <div className="signup mt-8 w-full">
                          <Link to='/signup'><p className=' w-full border-t-2 pt-1 text-sm cursor-pointer'>No Account Yet? Sign Up</p></Link>
                        </div>
                </Form>

            </div>

        </div>
    </div>
  )
}

"use client"
import React,{useState} from 'react'

const Login = () => {
    const [name,setName] = useState("")
    const [password,setPassword] = useState("")

    const handleSubmission = () =>{
        console.log("Submited")
    }
  return (
    <div>
        <form className="max-w-sm mx-auto">
            <div>
                <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white' >Name</label>
                <input className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' type="text" onChange={(e)=>setName(e.target.value)} />
            </div>
             <div>
                <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white' >Password</label>
                <input className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' type="text" onChange={(e)=>setPassword(e.target.value)} />
            </div>

            <div>
                <button onSubmit={handleSubmission}>Submit</button>
            </div>
        </form>
    </div>
  )
}

export default Login
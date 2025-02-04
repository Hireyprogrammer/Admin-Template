import { useState } from "react"
import { FaEye, FaEyeSlash } from "react-icons/fa"
import axios from "axios"
import { toast } from "react-hot-toast"
import { useNavigate } from "react-router-dom"

const Logo = () => {
  return (
    <div className="flex justify-center mb-8">
      <img src="/logo.png" alt="Baraka Ale Apartment" className="h-20 object-contain" />
    </div>
  )
}

const LoginForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  })

  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const { data } = await axios.post("en/admin/login", formData)
      
  
      if (data.success === 1) {  // Explicitly check for success === 1
        toast.success(data.message || "Login successful!")
        navigate("/")  
        console.log(data.success)
      } else {
        toast.error(data.message || "Invalid username or password")
      }
    } catch (error) {
      console.error("Login error:", error.response?.data || error.message)
      toast.error(error.response?.data?.message || "Login failed. Please try again.")
    }
  }
  

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg">
      <Logo />
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <input
            type="text"
            name="username"
            placeholder="User Name"
            value={formData.username}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white/50 backdrop-blur-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
            required
          />
        </div>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white/50 backdrop-blur-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
            required
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500"
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-200 shadow-lg"
        >
          LOGIN
        </button>
      </form>
    </div>
  )
}

export default LoginForm


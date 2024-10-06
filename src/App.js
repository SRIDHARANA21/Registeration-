import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";
function App()
{
      
    const navigate=useNavigate();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // You can add form validation and submission logic here
        console.log('Form Data Submitted:', formData);
      };
      const handleSignIn = () => {
        //history.push('/signin'); // Redirects to the SignIn component
        navigate("/sighin");

        
        
      };


      return (
        
        
        <form onSubmit={handleSubmit}>
          <div>
            <h2>Registeration Form</h2>
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First Name"
              required
            />
          </div>
          <div>
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last Name"
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="password"
              required
            />
          </div>
          <button type="submit">Register</button>
          <div style={{ marginTop: '15px', textAlign: 'center' }}>
        <p>
          Already have an account?{' '}
          <button type="button" onClick={handleSignIn} style={{ background: 'none', border: 'none', color: '#007bff', cursor: 'pointer', padding: 0 }}>
            Sign In
          </button>
        </p>
      </div>
        </form>
      );
 
};
export default App;
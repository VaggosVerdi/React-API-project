import React, { useState } from 'react'
import { useAuth } from '../contexts/AuthProvider'
import { submitData } from '../services/FormSubmit'
import TheButton from './TheButton'

const Form = () => {
    // Form data
    const [formData, setFormData] = useState({ name: '', surname: '', email: '', phone: '' })
    const [message, setMessage] = useState(null) // State for success/error messages
    const { token } = useAuth() // Access the JWT from the context

    // Handle input changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value })
    }

    // Handle form submissions
    const handleSubmit = async (e) => {
        e.preventDefault()
        setMessage(null) // Clear any existing messages
        try {
            const result = await submitData(formData, token) // Submit form data with the token
            // Setting the message for successful submission to return
            // the success text and the user ID and Name from the form
            setMessage({ type: 'success', text: `Success! ID: ${result.user_id}, Name: ${formData.name}` })
        } catch (error) {
            // Setting the message for failed submissions
            setMessage({ type: 'error', text: 'Submission failed. Please try again.' })
        }
    }

    return (
        <div className="p-4 mx-auto" id="form">
            <h2 className="text-center my-5">Submission Form</h2>
            <div className="container me-auto">
                <form onSubmit={handleSubmit}>
                    {/* Form input fields with their respective labels */}
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" id="name" placeholder="Name" className="form-control" onChange={handleChange} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="surname" className="form-label">Surname</label>
                        <input type="text" id="surname" placeholder="Surname" className="form-control" onChange={handleChange} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" id="email" placeholder="Email address" className="form-control" onChange={handleChange} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="phone" className="form-label">Phone number</label>
                        <input type="tel" id="phone" placeholder="Phone number" className="form-control" onChange={handleChange} required />
                    </div>
                    <TheButton type="submit">Submit</TheButton>
                </form>

                {/* Display the success/error message */}
                {message && (
                    <div className={`mt-3 ${message.type === 'success' ? 'text-success' : 'text-danger'}`}>{message.text}</div>
                )}
            </div>
        </div>
    )
}

export default Form
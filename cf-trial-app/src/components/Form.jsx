import React, { useEffect, useState } from 'react'
import { useAuth } from '../contexts/AuthProvider'
import { submitUserData } from '../services/FormSubmit'
import TheButton from './TheButton'

const Form = () => {
    const [formData, setFormData] = useState({ name: '', surname: '', email: '', phone: '' })
    const [message, setMessage] = useState(null)
    const { token } = useAuth()

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setMessage(null)
        try {
            const result = await submitUserData(formData, token)
            console.log(result)
            setMessage({ type: 'success', text: `Success! ID: ${result.user_id}, Name: ${formData.name}` })
        } catch (error) {
            setMessage({ type: 'error', text: 'Submission failed. Please try again.' })
        }
    }

    return (
        <div className="p-4 mx-auto">
            <h2 className="text-center my-5">Submission Form</h2>
            <div className="container me-auto">
                <form onSubmit={handleSubmit}>
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
                    {/* <button type="submit" className="btn btn-primary">Submit</button> */}
                </form>
                {message && (
                    <div className={`mt-3 ${message.type === 'success' ? 'text-success' : 'text-danger'}`}>{message.text}</div>
                )}
            </div>
        </div>
    )
}

export default Form
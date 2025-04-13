import React, { useEffect, useState } from 'react'
import axios from 'axios'

// Credentials from the .env file to login and obtain the token
const creds = {
  username: import.meta.env.VITE_APP_API_USERNAME,
  password: import.meta.env.VITE_APP_API_PASSWORD
}

// API URLs for login and data fetching from the .env file
const API_LOGIN_URL = import.meta.env.VITE_APP_API_LOGIN_URL
const API_DATA_URL = import.meta.env.VITE_APP_API_DATA_URL

const DataFetch = () => {
  const [data, setData] = useState([]) // Storing fetched data in array
  const [sortAsc, setSortAsc] = useState(false) // Sort direction state, set as not sorted

  // Fetch data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const authResponse = await axios.post(API_LOGIN_URL, creds) // Login via POST
        const token = authResponse.data.token // Assign the token after login

        // Get the data from the URL
        const response = await axios.get(API_DATA_URL, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })

        setData(response.data)
      } catch (error) {
        // Console error message in case authentication fails
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [])

  // Table sorting by ID
  const handleSort = () => {
    const sorted = [...data].sort((a, b) => {
      // Simple if-else comparison
      if (sortAsc) {
        // If sortAsc is true, sort in ascending order
        return a.id > b.id ? 1 : -1
      } else {
        // If sortAsc is false, sort in descending order
        return a.id < b.id ? 1 : -1
      }
    })
    setData(sorted)
    setSortAsc(!sortAsc) // Toggle sort direction
  }

  return (
    <>
      <div className="container-sm" id="table">
        <h2 className="text-center mb-5">Data Fetching and Display Component</h2>
        <table>
          <thead>
            <tr>
              <th className="tableId" onClick={handleSort}>ID {sortAsc ? '▲' : '▼'}</th>
              <th>Title</th>
              <th>Body</th>
            </tr>
          </thead>
          <tbody>
            {/* Render each row */}
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.body}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default DataFetch
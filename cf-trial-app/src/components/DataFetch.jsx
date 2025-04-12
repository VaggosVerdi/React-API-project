import React, { useEffect, useState } from 'react'
import axios from 'axios'

const creds = {
  username: import.meta.env.VITE_APP_API_USERNAME,
  password: import.meta.env.VITE_APP_API_PASSWORD
}

const API_LOGIN_URL = import.meta.env.VITE_APP_API_LOGIN_URL
const API_DATA_URL = import.meta.env.VITE_APP_API_DATA_URL

const DataFetch = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchD = async () => {
      try {
        const authResponse = await axios.post(API_LOGIN_URL, creds)
        const token = authResponse.data.token

        const response = await axios.get(API_DATA_URL, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })

        setData(response.data)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchD()
  }, [])

  return (
    <>
    <div className="container-sm">
      <h2 className="text-center mb-5">Data Fetching and Display Component</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
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
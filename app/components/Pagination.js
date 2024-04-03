'use client'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Pagination = () => {
    const [data, setData] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const itemsPerPage = 10;

    useEffect( () => {
        fetchData();
    },[])

    const fetchData = async () => {
        try {
          const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
          setData(response.data);
        } catch (error) {
          console.log(error);
        }
      };

    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    const currentItems = data.slice(startIndex, endIndex)

    const handlePreviousPage = () => {
        if( currentPage > 1){
            setCurrentPage(currentPage - 1)
        }
    }

    const handleNextPage = () => {
        const totalPages = Math.cail(data.length / itemsPerPage)
        if(currentPage < totalPages){
            setCurrentPage(currentPage + 1)
        }
    }


  return (
    <div>
        <ul>
            {currentItems.map( (item) => {
                <li key={item.id}>{item.title}</li>
            })}
        </ul>
        <button onClick={handlePreviousPage}>Prev</button>
        <button onClick={handleNextPage}>Next</button>
    </div>
  )
}

export default Pagination


'use client'

import { useState } from "react"
import { SearchManu } from "."

export default function SearchBar() {

    const [manu, setManu] = useState('')
    const handleSearch = () => { }

    return (
        <form onSubmit={handleSearch} 
        className="searchbar">
            <div className="searchbar__item">
                <SearchManu 
                    manuF={manu}
                    setManu={setManu}
                />
            </div>
        </form>
            
        )
    }
'use client'

import Image from "next/image"
import { useState } from "react"
import { SearchManu } from "."
import { useRouter } from "next/navigation"

const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
    <button type="submit" 
    className={`-ml-3 z-10 ${otherClasses}`}>
        <Image 
        src='/magnifying-glass.svg'
        alt="magnify"
        width={40}
        height={40}
        className="object-contain" />
    </button>
)

export default function SearchBar() {

    const [manu, setManu] = useState('');
    const [model, setModel] = useState('');

    const router = useRouter();

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (manu.trim() === "" && model.trim() === "") {
            return alert("Please provide some input");
        }
        updateSearchParams(model.toLowerCase(), manu.toLowerCase());
     };
    
     const updateSearchParams = (model: string, manu: string) => {
        // Create a new URLSearchParams object using the current URL search parameters
        const searchParams = new URLSearchParams(window.location.search);
    
        if (model) {
          searchParams.set("model", model);
        } else {
          searchParams.delete("model");
        }
    
        if (manu) {
          searchParams.set("manufacturer", manu);
        } else {
           searchParams.delete("manufacturer");
        }
    
        const newPathname = `${window.location.pathname}?${searchParams.toString()}`;
    
        router.push(newPathname);
      };

    return (
        <form onSubmit={handleSearch} 
        className='searchbar'>
            <div className="searchbar__item">
                <SearchManu 
                    manuF={manu}
                    setManu={setManu}
                />
                <SearchButton otherClasses="sm:hidden" />
            </div>
            <div className='searchbar__item'>
                <Image 
                src='/model-icon.png'
                alt="car model"
                width={25}
                height={25}
                className="absolute w-[20px] h-[20px] ml-4"
                />
                <input type="text" name='model' value={model}
                onChange={(e) => setModel(e.target.value)}
                placeholder="Tiguan"
                className="searchbar__input" />
                <SearchButton otherClasses="sm:hidden" />
            </div>
            <SearchButton otherClasses="max-sm:hidden" />
        </form>
            
        )
    }
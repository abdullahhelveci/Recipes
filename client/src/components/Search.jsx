import { CiSearch } from "react-icons/ci"

const Search = ({setSearchTerm}) => {
  return (
    
            <section className="bg-white flex gap-3 p-2 rounded-lg overflow-hidden items-center">
            <CiSearch size={25} />
            <input type="text" className="w-full outline-none focus:shadow p-1" onChange={(e) => setSearchTerm(e.target.value)} />
          </section>
  )
}

export default Search
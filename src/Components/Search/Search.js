import React from "react"

const Search = ({ value, onChange }) => {
  return (
    <div className="search">
      <input
        className="search--field"
        type="text"
        placeholder="Search..."
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

export default Search

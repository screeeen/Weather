import React, { useState } from 'react';
import '../index.css';

function SettingsCanvas({ city, setCity, changeCity, addCity, cityCollection }) {
const [search,setSearch] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault();
    (!cityCollection.includes(search)) &&
      addCity(cityCollection => [...cityCollection, search]);
    changeCity(search);
    setCity("")
  }


  return (
    <>
      <div >
        {/* <p>we are settings, hello {}</p> */}
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="enter your city"
            name="name" value={search} onChange={e => setSearch(e.target.value)} />
          <input type="submit" value="+" />
        </form>
      </div>
    </>
  )
}

export default SettingsCanvas

import { FormControl, Dropdown, DropdownButton, Button } from "react-bootstrap";
import { useState } from "react";

function Header() {
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (text) => {
    const results = ["Result 1", "Result 2", "Result 3"].filter((result) =>
      result.toLowerCase().includes(text.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <>
      <FormControl
        type="text"
        placeholder="Search"
        value={searchText}
        onChange={(e) => {
          const text = e.target.value;
          setSearchText(text);
          handleSearch(text);
        }}
      />
      
        {searchResults.map((result, index) => (
          <Dropdown.Item key={index}>{result}</Dropdown.Item>
        ))}
      
     </>
  );
}

export default Header;
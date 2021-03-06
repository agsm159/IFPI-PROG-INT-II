import { useState } from 'react'
import useDebounce from '../scripts/_Debounce';
import { SearchInputStyle } from '../styles/components/SearchInput';
import { FiSearch } from 'react-icons/fi'

export default function SearchInput({ value, onChange }) {

  const [displayValue, setDisplayValue] = useState(value);
  const debouncedChange = useDebounce(onChange, 500);

  function handleChange(e) {
    setDisplayValue(e.target.value);
    debouncedChange(e.target.value);
  }

  return (
    <SearchInputStyle>
      <input className="input-search"
       type="search" value={displayValue} onChange={handleChange}/>
      <FiSearch className="icon-search"/>
    </SearchInputStyle>
  )
}
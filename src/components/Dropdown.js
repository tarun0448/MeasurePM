import { useState } from "react";
import ImageIcon from "./ImageIcon";
import chevronDownIcon from "../assets/chevron-down.svg"
import chevronUpIcon from "../assets/chevron-up.svg"

const Dropdown = ({title, options}) => {
  const [isOpen, setOpen] = useState(false);
  const [items, setItem] = useState(options);
  const [selectedItem, setSelectedItem] = useState(null);
  
  const toggleDropdown = () => setOpen(!isOpen);
  
  const handleItemClick = (id) => {
    selectedItem === id ? setSelectedItem(null) : setSelectedItem(id);
    setOpen(!isOpen);

  }
  
  return (
    <div className='dropdown'>
      <div className='dropdown-header' onClick={toggleDropdown}>
        <span>
        {selectedItem ? items.find(item => item.id == selectedItem).label : title}
        </span>
        <ImageIcon src={isOpen ? chevronUpIcon : chevronDownIcon} height={20} width={20}/>
      </div>
      <div className={`dropdown-body ${isOpen && 'open'}`}>
        {items.map(item => (
          <div className="dropdown-item" onClick={e => handleItemClick(e.target.id)} id={item.id}>
            <span className={`dropdown-item-dot ${item.id === selectedItem && 'selected'}`}>• </span>
            {item.label}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Dropdown
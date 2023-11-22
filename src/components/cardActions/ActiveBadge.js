import React from 'react'
import {ReactComponent as SelectIcon} from '../../assets/select.svg'
import {ReactComponent as SelectOK} from '../../assets/select_selected.svg'

function ActiveBadge({selected, setSelected, id}) {

    const handleClicked = (id) => {
        if (selected === id) {
            setSelected(null)
            return
        }
        setSelected(id)
    }

  return (
    <div className='d-flex justify-content-between align-items-center link-container'>
        <span className='action-text'>
            Activate Badge
        </span>
        <div className='select-icon-container d-flex justify-content-end'
            onClick={() => handleClicked(id)}
         >
        {selected === id
            ? <SelectOK className='select-icon' /> 
            : <SelectIcon className='select-icon' />}
        </div>
    </div>
  )
}

export default ActiveBadge
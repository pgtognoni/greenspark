import React, {useState} from 'react'
import {ReactComponent as Info } from '../../assets/info_outline.svg'
import {ReactComponent as CheckBox } from '../../assets/check_box_blank.svg'
import {ReactComponent as Checked } from '../../assets/check_box_checked.svg'
import './action.css'

function LinkToProfile() {

    const [ checked, setChecked ] = useState(false)

  return (
    <div className='d-flex justify-content-between align-items-center link-container'>
        <span className='action-text'>
            Link to Public Profile
            <Info className='info-icon' />
            <span className='info-text'>This will make this product visible</span>
        </span>
        <div className='check-container'
            onClick={() => setChecked(!checked)}
        >
            {checked 
                ? <Checked className='checked-icon' /> 
                : <CheckBox className='checked-icon' />}
        </div>
    </div>
  )
}

export default LinkToProfile
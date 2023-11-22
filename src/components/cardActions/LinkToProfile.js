import React, {useState} from 'react'
import {ReactComponent as Info } from '../../assets/info_outline.svg'
import {ReactComponent as CheckBox } from '../../assets/check_box_blank.svg'
import {ReactComponent as Checked } from '../../assets/check_box_checked.svg'
import './action.css'

function LinkToProfile() {

    const text = 'This widget links directly to your public profile so that you can easily share your impact with your customers. Turn it off here if you do not want the badge to link to it.'
const linK = {'text': 'View your Profile', 'link': 'https://www.getgreenspark.com/'}
    const [ checked, setChecked ] = useState(false)

  return (
    <div className='d-flex justify-content-between align-items-center link-container'>
        <span className='action-text d-flex'>
            Link to Public Profile
            <div className='info-tooltip'>
                <Info className='info-icon' />
                <div className='info-text'>
                    <p>{text}</p>
                    <a href={linK.link} target='_blank' rel="noreferrer">{linK.text}</a>
                </div>
            </div>
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
import React from 'react'
import { getTitle } from './helpers.ts'
import { ReactComponent as Icon } from '../../assets/icon.svg'
import { ReactComponent as Greenspark } from '../../assets/greenspark.svg'
import './card.css'
function ProducTitle({ data, badge }) {

  return (
    <div className={`title-container background-${badge} d-flex `}>
        <div className='brand-icon d-flex flex-column align-items-center justify-content-center'>
            <Icon className={`icon icon-${data.action}`} />
            <Greenspark className={`brand-name greenspark-${data.action}`} />
        </div>
        <div className='product-type d-flex flex-column justify-content-center align-items-start'>
            <span className='title-desc text-start'>{getTitle(data.action)}</span>
            <span className='title text-start'>{data.amount} {data.type}</span>
        </div>
    </div>
)
}

export default ProducTitle
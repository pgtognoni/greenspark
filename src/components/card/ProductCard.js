import React, {useState} from 'react'
import ProducTitle from './ProducTitle'
import LinkToProfile from '../cardActions/LinkToProfile'
import BadgeColor from '../cardActions/BadgeColor'
import ActiveBadge from '../cardActions/ActiveBadge'

function ProductCard({ data, selected, setSelected}) {

    const [ badge, setBadge ] = useState('green')

  return (
    <div className='card-container'>
        <ProducTitle data={data} badge={badge} />
        <LinkToProfile />
        <BadgeColor setBadge={setBadge} badge={badge}/>
        <ActiveBadge selected={selected} setSelected={setSelected} id={data.id} />
    </div>
  )
}

export default ProductCard
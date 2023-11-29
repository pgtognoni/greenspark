import React from 'react'

function BadgeColor({setBadge, badge, selected, id }) {

    const handleClicked = (value) => {
        if (selected === id) {
            setBadge(value.color) 
        } else {
            return
        }
    }

    const colorsArray = [
        { color: 'green', code: 'var(--green-color)' },
        { color: 'beige', code: 'var(--beige-color)' },
        { color: 'white', code: 'var(--white-color)' },
        { color: 'blue', code: 'var(--blue-color)' },
        { color: 'black', code: 'var(--black-color)'}
      ];

  return (
    <div className='d-flex justify-content-between align-items-center link-container'>
        <span className='action-text'>
            Badge Color
        </span>
        <div className='badge-container d-flex justify-content-end ' >
            {colorsArray.map((item, index) => {
                return <button
                    aria-label='change widget background color' 
                    aria-current={badge}
                    aria-disabled={selected === id ? false : true} 
                    disabled={selected === id ? false : true}
                    key={index} 
                    className={`color-rec ${badge === item.color ? 'color-selected' : '' }`} 
                    style={{backgroundColor: `${item.code}`}} 
                    onClick={() => handleClicked(item)} 
                
                    ></button>
            })}
        </div>
    </div>
  )
}

export default BadgeColor
import React from 'react'

function BadgeColor({setBadge, badge}) {

    const handleClicked = (value) => {
        setBadge(value.color)
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
                return <div key={index} 
                    className={`color-rec ${badge === item.color ? 'color-selected' : '' }`} 
                    style={{backgroundColor: `${item.code}`}} 
                    onClick={() => handleClicked(item)} 
                    />
            })}
        </div>
    </div>
  )
}

export default BadgeColor
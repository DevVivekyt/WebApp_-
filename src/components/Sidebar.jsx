import React from 'react'

const Sidebar = () => {
    const menus = [
        {
            title:"Dashboard",
            icon:""
        },
        {
            title:"Products",
            icon:""
        },
        {
            title:"Categories",
            icon:""
        },
        {
            title:"Seller",
            icon:""
        },
        {
            title:"Transporter",
            icon:''
        }
    ]
  return (
    <div>{menus.map((menu, index)=>{
        return(
            <ul key={index} className='list-none'>
                <li>{menu.title}</li>
            </ul>
        )
    })}</div>
  )
}

export default Sidebar
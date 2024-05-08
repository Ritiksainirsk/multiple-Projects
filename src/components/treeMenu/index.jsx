
import React, { useEffect } from 'react'
import MenuList from './menuList'
import './style.css'

export default function TreeMenu({menus = []}) {

  return (
    <div className='tree-view-menu'>
      <MenuList List={menus}/>
    </div>
  )
}

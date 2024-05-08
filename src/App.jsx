import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import StarRating from './components/star rating/StarRating'
import ImageSlider from './components/image slider/ImageSlider'
import LoadingProducts from './components/LoadingProducts/LoadingProducts'
import TreeMenu from './components/treeMenu'
import MenuData from './components/treeMenu/MenuData'
import QrcodeGenerater from './components/Qrcode_Generater'
import ThemeChanger from './components/ChangeTheme'
import ScrollIndicator from './components/Scroll-Indicator'
import Tabs from './components/Tabs/tabs'
import PopupModal from './components/PopupModal/popup'
import Accordion from './components/Accordion'
import Scroll from './components/ScrollTopToBottom'
import FoodApp from './components/Food_Recipe_app'
import ShoppingCartRedux from './components/ShoppingCartRedux/ShoppingCartRedux'

function App() {

  return (
    <>
     {/* <StarRating/> */}
     {/* <ImageSlider url={"https://picsum.photos/v2/list"} limit={10} page={8}/> */}
     {/* <LoadingProducts/> */}
     {/* <TreeMenu menus={MenuData}/> */}
     {/* <QrcodeGenerater/> */}
     {/* <ThemeChanger/> */}
     {/* <ScrollIndicator url={"https://dummyjson.com/products?limit=100"}/> */}
     {/* <Tabs/> */}
     {/* <PopupModal/> */}
     {/* <Accordion/> */}
     {/* <Scroll/> */}
     {/* <FoodApp/> */}
     <ShoppingCartRedux/>
    </>
  )
}

export default App

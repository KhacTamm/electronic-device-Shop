import React from 'react'
import Carousel from '../components/Slider/Carousel'
import IPhone from '../components/HotSale/components/Iphone'
import Samsung from '../components/HotSale/components/Samsung'
import Xiaomi from '../components/HotSale/components/Xiaomi'
import AppChat from '../components/AppChat/AppChat'
import ScrollToTop from '../components/ScrollToTop/ScrollToTop'
import { useSelector } from 'react-redux'
import Catergory from '../components/catergory/Catergory'
import Brands from '../components/brands/Brands'
import ProductAll from '../components/Products/components/ProductAll'

function HomePage(props) {
    const { userInfo } = useSelector((state) => state.userSignin)

    return (
        <div style={{ position: 'relative' }}>
            <Carousel />
            <Brands />
            <Catergory />

            <ProductAll title="Sản phẩm mới nhất" />
            {/* <Samsung></Samsung>
            <Xiaomi></Xiaomi> */}
            <ScrollToTop></ScrollToTop>
            {userInfo && userInfo.isAdmin === false ? <AppChat></AppChat> : ''}
        </div>
    )
}

export default HomePage

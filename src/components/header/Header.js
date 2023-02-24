import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, Link } from 'react-router-dom'
import config from '../../config'
import { SignoutUser } from '../../actions/UserAction'
import { useNavigate } from 'react-router'
import { searchProduct } from '../../actions/ProductAction'

import { DownOutlined, ShoppingCartOutlined, SearchOutlined } from '@ant-design/icons'
import { BsSearch } from 'react-icons/bs'
import { AiOutlineHome } from 'react-icons/ai'
import images from '../../assets'
import './Header.css'

function Header(props) {
    let active = {
        textDecoration: 'underline',
    }

    const dispatch = useDispatch()
    const history = useNavigate()

    const [showAccount, setShowAccount] = useState(false)
    const [showAccount2, setShowAccount2] = useState(false)

    const userSignin = useSelector((state) => state.userSignin)
    const { userInfo, error } = userSignin
    // const { userInfo, error } = true
    const [search, setSearch] = useState('')
    const cartItems = useSelector((state) => state.cart.cartItems)
    // const cartItems = ''
    const amount = cartItems.reduce((a, b) => a + b.qty, 0)
    // const amount = 0

    const [menu, setMenu] = useState(true)

    const handleSignout = () => {
        dispatch(SignoutUser())
    }

    const SearchProduct = async (e) => {
        e.preventDefault()
        await history('/search')
        dispatch(searchProduct(search))
        setSearch('')
    }

    return (
        <div className="header">
            <section id="menu" className="header-content">
                <Link to="/" className="logo">
                    <img src={images.logo} alt="logo" />
                    <h1>BA-TÊ SHOP</h1>
                </Link>
                <div className="search">
                    <form onSubmit={(e) => SearchProduct(e)}>
                        <input
                            type="text"
                            name="search"
                            placeholder="Tìm kiếm ..."
                            defaultValue={setSearch}
                            spellCheck={false}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        <SearchOutlined className="search-btn scale" onClick={(e) => SearchProduct(e)}></SearchOutlined>
                    </form>
                </div>
                <ul className="menu-list" id={menu ? 'hidden' : ''}>
                    <li className="list-item scale">
                        <NavLink
                            className={({ isActive }) => (isActive ? 'active' : 'noActive')}
                            to={config.routes.home}
                            end
                        >
                            Trang Chủ
                        </NavLink>
                    </li>
                    <li className="list-item scale">
                        <NavLink
                            className={({ isActive }) => (isActive ? 'active' : 'noActive')}
                            to={config.routes.productCustomer}
                            end
                        >
                            Sản Phẩm
                        </NavLink>
                    </li>
                    <li className="shocartp- scale">
                        <NavLink
                            to={config.routes.cart}
                            className={({ isActive }) => (isActive ? 'active shop-cart' : 'noActive shop-cart')}
                        >
                            <ShoppingCartOutlined style={{ fontSize: '30px' }}></ShoppingCartOutlined>
                            <span className="count"> {amount} </span>
                        </NavLink>
                    </li>
                    {userInfo ? (
                        <li onClick={() => setShowAccount2(!showAccount2)}>
                            <div>
                                {userInfo.name}
                                <DownOutlined style={{ fontSize: '14px' }} />
                            </div>
                            {showAccount2 ? (
                                <div className="menu-drop">
                                    {userInfo.isAdmin ? <Link to={config.routes.admin}>Admin</Link> : ''}
                                    <Link to={config.routes.MyOrder}>Đơn hàng</Link>
                                    <Link onClick={() => handleSignout()}>Đăng xuất</Link>
                                </div>
                            ) : (
                                ''
                            )}
                        </li>
                    ) : (
                        <li className="list-item" onClick={() => setShowAccount(!showAccount)}>
                            <div className="noActive account">
                                Tài khoản
                                <DownOutlined style={{ fontSize: '14px' }} />
                            </div>

                            {showAccount ? (
                                <div className="menu-drop">
                                    <Link to={config.routes.register}>Đăng kí</Link>
                                    <Link to={config.routes.login}>Đăng nhập</Link>
                                </div>
                            ) : (
                                ''
                            )}
                        </li>
                    )}
                </ul>
                <div className="bar" onClick={() => setMenu(!menu)}>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </div>
            </section>
        </div>
    )
}

export default Header

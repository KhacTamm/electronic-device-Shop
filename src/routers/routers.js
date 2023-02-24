import config from '../config'
import { HeaderOnly } from '../layouts'

import HomePage from '../pages/HomePage'

import ProductPage from '../pages/ProductPage'
import DetailPage from '../pages/DetailPage'

import SearchPage from '../pages/SearchPage'
import ChatPage from '../pages/ChatPage'
import LoginPage from '../pages/LoginPage'
import SignupPage from '../pages/SignupPage'
import CartPage from '../pages/CartPage'
import OrderPage from '../pages/OrderPage'
import OrderSuccessPage from '../pages/OrderSuccessPage'
import MyOrderPage from '../pages/MyOrderPage'
import PaymentPage from '../pages/PaymentPage'
import AdminPage from '../pages/AdminPage'
// import ResetScroll from '../components/ResetScroll/ResetScroll'

//admin
// import Dashboard from '../pages/Dashboard'
import { AdminLayout } from '../layouts'
import Dashboard from '../components/Admin/pages/Dashboard'
import AdminProduct from '../components/Admin/components/AdminProduct/AdminProduct'
import AdminCreate from '../components/Admin/components/AdminProduct/AdminCreate'
import AdminUpdate from '../components/Admin/components/AdminProduct/AdminUpdate'
import AdminOrder from '../components/Admin/components/AdminOrder/AdminOrder'
import AdminUser from '../components/Admin/components/AdminUser/AdminUser'
import AppChat from '../components/Admin/components/AppChat/AppChat'
import ReviewProduct from '../components/Admin/components/AdminProduct/ReviewProduct/ReviewProduct'
import DataFilterProduct from '../components/Admin/components/AdminProduct/DataFilterProduct/DataFilterProduct'

//Không cần đăng nhập vẫn vào được
const publicRoutes = [
    //---------------------admin--------------------------
    { path: config.routes.admin, component: Dashboard, layout: AdminLayout },
    { path: config.routes.customer, component: AdminUser, layout: AdminLayout },
    { path: config.routes.create, component: AdminCreate, layout: AdminLayout },
    { path: config.routes.updateInfo, component: DataFilterProduct, layout: AdminLayout },
    { path: config.routes.updateId, component: AdminUpdate, layout: AdminLayout },
    { path: config.routes.product, component: AdminProduct, layout: AdminLayout },
    { path: config.routes.reviewProduct, component: ReviewProduct },
    { path: config.routes.order, component: AdminOrder, layout: AdminLayout },
    { path: config.routes.chat, component: AppChat, layout: AdminLayout },
    //-----------------------admin--------------------------
    { path: config.routes.home, component: HomePage },
    { path: config.routes.search, component: SearchPage },
    { path: config.routes.chatCustomer, component: ChatPage },

    { path: config.routes.login, component: LoginPage, layout: HeaderOnly },
    { path: config.routes.register, component: SignupPage, layout: HeaderOnly },

    { path: config.routes.productCustomer, component: ProductPage },
    { path: config.routes.productDetailCustomer, component: DetailPage },
    { path: config.routes.cart, component: CartPage },
    { path: config.routes.orderCustomer, component: OrderPage },
    { path: config.routes.MyOrder, component: MyOrderPage },
    { path: config.routes.orderSuccess, component: OrderSuccessPage },
    { path: config.routes.payment, component: PaymentPage },
    { path: config.routes.admin, component: AdminPage },
]

const privateRoutes = {}

export { publicRoutes, privateRoutes }

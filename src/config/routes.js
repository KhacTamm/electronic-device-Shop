//Cau hinh
const routes = {
    //admin
    customer: '/admin/customer',
    create: '/admin/product/create',
    updateInfo: '/admin/product/update/info',
    updateId: '/admin/product/update/:id',
    reviewProduct: '/admin/product/reviewProduct/:id',
    product: '/admin/product',
    order: '/admin/order',
    chat: '/admin/chat',
    admin: '/admin/',
    //customer
    search: '/search',
    chatCustomer: '/chat',
    login: '/login',
    register: '/register',
    productCustomer: '/product',
    // reviewProduct: '/product/reviewProduct/:id',
    productDetailCustomer: '/detail/:id',
    cart: '/cart',
    orderCustomer: '/order',
    MyOrder: '/MyOrder',
    orderSuccess: '/orderSuccess',
    payment: '/payment',
    home: '/',
}

export default routes

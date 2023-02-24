import config from '../../config'
import { formatPrice } from '../../untils/index'
import { useDispatch } from 'react-redux'
import { AddToCart } from '../../actions/CartAction'
import { Link } from 'react-router-dom'
import { message } from 'antd'
import { AiOutlineShoppingCart } from 'react-icons/ai'

function Product(props) {
    const { product } = props

    // function AddToCart(product) {
    //     const action = AddProduct(product)
    //     dispatch(action)
    // }
    const dispatch = useDispatch()

    const success = () => {
        message.success({
            content: 'Thêm vào giỏ hàng thành công',
            duration: 1,
            className: 'custom-class',
            style: {
                position: 'absolute',
                right: '2rem',
                top: '2rem',
                margin: '1rem 0',
            },
        })
    }

    const AddProductToCart = async (product) => {
        const action = AddToCart(product)
        await dispatch(action)
        success()
    }

    return (
        <div className="col-2">
            <div className="listproduct-product">
                <Link to={'/detail/' + product._id}>
                    <img className="listproduct-product-img" src={product.image} alt="img product" />
                    <span className="listproduct-product-name">{product.name}</span>
                    <div className="listproduct-product-price">
                        <div className="price">
                            <span className="price1">{formatPrice(product.salePrice)}đ</span>
                            <span className="price2">{formatPrice(product.price)}đ</span>
                        </div>
                        <AiOutlineShoppingCart className="cartIcon" />
                    </div>
                </Link>
                {product.percentDiscount >= 5 ? (
                    <div className="discount">
                        <p>{product.percentDiscount}%</p>
                    </div>
                ) : (
                    ''
                )}
                <div className="buy">
                    <Link
                        to={config.routes.cart}
                        onClick={(e) => {
                            AddProductToCart(product)
                        }}
                    >
                        Mua Ngay
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Product

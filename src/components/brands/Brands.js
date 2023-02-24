import { Link } from 'react-router-dom'
import Marquee from 'react-fast-marquee'
import './Brands.css'
import images from '../../assets'

function Brands() {
    return (
        <section className="marque-wrapper py-5">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-12">
                        <div className="marquee-inner-wrapper card-wrapper">
                            <Marquee className="d-flex align-items-center justify-content-between">
                                <Link to="/" className="brand_link mx-4 w-25">
                                    <img src={images.brand_01} alt="brand" />
                                </Link>
                                <Link to="/" className="brand_link mx-4 w-25">
                                    <img src={images.brand_02} alt="brand" />
                                </Link>
                                <Link to="/" className="brand_link mx-4 w-25">
                                    <img src={images.brand_03} alt="brand" />
                                </Link>
                                <Link to="/" className="brand_link mx-4 w-25">
                                    <img src={images.brand_04} alt="brand" />
                                </Link>
                                <Link to="/" className="brand_link mx-4 w-25">
                                    <img src={images.brand_05} alt="brand" />
                                </Link>
                                <Link to="/" className="brand_link mx-4 w-25">
                                    <img src={images.brand_06} alt="brand" />
                                </Link>
                                <Link to="/" className="brand_link mx-4 w-25">
                                    <img src={images.brand_07} alt="brand" />
                                </Link>
                                <Link to="/" className="brand_link mx-4 w-25">
                                    <img src={images.brand_08} alt="brand" />
                                </Link>
                            </Marquee>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Brands

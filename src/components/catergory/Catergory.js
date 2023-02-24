import images from '../../assets'
import './Catergory.css'

function Catergory() {
    return (
        <section className="home-wrapper-3 py-5">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-12">
                        <div className="categories">
                            <strong className="categories-title">DANH MỤC NỔI BẬT</strong>
                            <div className="categories-items d-flex flex-wrap align-items-center">
                                <div className="flex-column align-content-center align-items-center gap-30">
                                    <img className="categories-img" src={images.laptop} alt="Laptop" />
                                    <div className="categories-label">
                                        <h6>Computers & Laptop</h6>
                                    </div>
                                </div>
                                <div className="flex-column align-items-center gap-30">
                                    <img className="categories-img" src={images.camera} alt="camera" />
                                    <div className="categories-label">
                                        <h6>Cameras & Videos</h6>
                                    </div>
                                </div>
                                <div className="flex-column align-items-center gap-30">
                                    <img className="categories-img" src={images.tv} alt="tv" />
                                    <div className="categories-label">
                                        <h6>Smart TV</h6>
                                    </div>
                                </div>
                                <div className="flex-column align-items-center gap-30">
                                    <img className="categories-img" src={images.watch} alt="watch" />
                                    <div className="categories-label">
                                        <h6>Smart Watches</h6>
                                    </div>
                                </div>
                                <div className="flex-column align-items-center gap-30">
                                    <img className="categories-img" src={images.headphone} alt="headphone" />
                                    <div className="categories-label">
                                        <h6>Headphones</h6>
                                    </div>
                                </div>
                                <div className="flex-column align-items-center gap-30">
                                    <img className="categories-img" src={images.acc} alt="Accessories" />
                                    <div className="categories-label">
                                        <h6>Accessories</h6>
                                    </div>
                                </div>
                                <div className="flex-column align-items-center gap-30">
                                    <img className="categories-img" src={images.speaker} alt="speaker" />
                                    <div className="categories-label">
                                        <h6>Portable Speakers</h6>
                                    </div>
                                </div>
                                <div className="flex-column align-items-center gap-30">
                                    <img className="categories-img" src={images.homeapp} alt="homeapp" />
                                    <div className="categories-label">
                                        <h6>Home Appliances</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Catergory

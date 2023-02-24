import { useSelector } from 'react-redux'
import './Admin.css'
import { useNavigate } from 'react-router-dom'
import Sidebar from '../../components/Admin/components/sidebar/Sidebar'

function AdminLayout({ children }) {
    const userSignin = useSelector((state) => state.userSignin)
    const { userInfo, error } = userSignin
    const history = useNavigate()

    if (!userInfo || !userInfo.isAdmin) {
        history.push('/')
    }
    return (
        <div className={`layout`}>
            <Sidebar />
            <div className="layout__content">
                <div className="layout__content-main">{children}</div>
            </div>
        </div>
    )
}

export default AdminLayout

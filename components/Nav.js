import navStyles from '../styles/Nav.module.css'
import Link from 'next/link'
import { assetPrefix } from '../next.config'

const Nav = () => {
    return (
        <nav className={navStyles.nav}>
            <ul>
                <li>
                    <Link href="/" as={`${assetPrefix}/`} >Home</Link>
                </li>
                <li>
                    <Link href='/about' as={`${assetPrefix}/about`}>About</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav

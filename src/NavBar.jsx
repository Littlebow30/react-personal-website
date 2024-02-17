import { Link } from 'react-router-dom';
import './navBar.css'

export default function Navbar() {
    const links = [
        {
            title: 'About',
            path: '/about',
        },
        {
            title: 'Work',
            path: '/work',
        },
    ];

    return (
        <nav className='navBar'>
            <Link to='/' className='name'>AJ</Link>
            <ul>
                {
                    links.map(link => {
                        return <li className='' key={link.title}>
                            <Link to={link.path}>{link.title}</Link>
                        </li>
                    })
                }
            </ul>
        </nav>
    )
}

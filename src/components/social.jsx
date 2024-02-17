import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons'

export default function SocialLinks() {
    const links = [
        {
            href: 'https://www.linkedin.com/in/aj-bowman-developer/',
            icon: faLinkedin,
        },
        {
            href: 'https://github.com/Littlebow30',
            icon: faGithub,
        }
    ]

    return (
        <div className='socialIcons'>
            {
                links.map(link => {
                    return (
                        <a href={link.href} target='_blank'>
                            <FontAwesomeIcon icon={link.icon} />
                        </a>
                    )
                })
            }
        </div>
    );
}
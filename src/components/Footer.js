import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import '@fortawesome/fontawesome-svg-core/styles.css';

const Footer = () => {
    return (
        <section className="footer">
            <p>Find me on ...</p>
            <a href='https://twitter.com/debayo_realest' className='faIcon'>
                <FontAwesomeIcon icon={faTwitter}  />
            </a>
            <a href='https://twitter.com/debayo_realest' className='faIcon'>
                <FontAwesomeIcon icon={faLinkedin}  />
            </a>
            <a href='https://twitter.com/debayo_realest' className='faIcon'>
                <FontAwesomeIcon icon={faGithub}  />
            </a>
        </section>
    )
}

export default Footer;
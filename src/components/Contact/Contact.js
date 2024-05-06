import { contact } from '~/portfolio';
import classNames from 'classnames/bind';
import styles from './Contact.module.scss';

const cx = classNames.bind(styles);

const Contact = () => {
  if (!contact.email) return null

  return (
    <section className={cx('section', 'contact', 'center')} id='contact'>
      <h2 className={cx('section__title')}>Contact</h2>
      <a href={`mailto:${contact.email}`}>
        <span type='button' className={cx('btn', 'btn--outline')}>
          Email me
        </span>
      </a>
    </section>
  )
}

export default Contact

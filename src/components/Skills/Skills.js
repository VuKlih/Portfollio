import uniqid from 'uniqid'
import { skills } from '~/portfolio';
import classNames from 'classnames/bind';
import styles from './Skills.module.scss';

const cx = classNames.bind(styles);

const Skills = () => {
  if (!skills.length) return null

  return (
    <section className={cx('section skills')} id='skills'>
      <h2 className={cx('section__title')}>Skills</h2>
      <ul className={cx('skills__list')}>
        {skills.map((skill) => (
          <li key={uniqid()} className={cx('skills__list-item', 'btn btn--plain')}>
            {skill}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Skills

import uniqid from 'uniqid'
import { projects } from '~/portfolio';
import ProjectContainer from '../ProjectContainer/ProjectContainer'
import classNames from 'classnames/bind';
import styles from './Projects.module.scss';

const cx = classNames.bind(styles);

const Projects = () => {
  if (!projects.length) return null

  return (
    <section id='projects' className={cx('section', 'projects')}>
      <h2 className={cx('section__title')}>Projects</h2>

      <div className={cx('projects__grid')}>
        {projects.map((project) => (
          <ProjectContainer key={uniqid()} project={project} />
        ))}
      </div>
    </section>
  )
}

export default Projects

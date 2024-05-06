import classNames from 'classnames/bind';
import styles from './ProjectContainer.module.scss';
import uniqid from 'uniqid'
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';

const cx = classNames.bind(styles);

const ProjectContainer = ({ project }) => (
  <div className={cx('project')}>
    <h3>{project.name}</h3>

    <p className={cx('project__description')}>{project.description}</p>
    {project.stack && (
      <ul className={cx('project__stack')}>
        {project.stack.map((item) => (
          <li key={uniqid()} className={cx('project__stack-item')}>
            {item}
          </li>
        ))}
      </ul>
    )}

    {project.sourceCode && (
      <a
        href={project.sourceCode}
        aria-label='source code'
        className={cx('link', 'link--icon')}
      >
        <GitHubIcon />
      </a>
    )}

    {project.livePreview && (
      <a
        href={project.livePreview}
        aria-label='live preview'
        className={cx('link', 'link--icon')}
      >
        <LaunchIcon />
      </a>
    )}
  </div>
)

export default ProjectContainer

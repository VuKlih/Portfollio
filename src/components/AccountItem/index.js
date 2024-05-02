import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
    return (  
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src='https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-euttp/69535f873e3690526290502378dcca51~c5_100x100.jpeg?lk3s=a5d48078&x-expires=1713412800&x-signature=7yIxHilfU8yb6nIhR7COT%2F2QCxA%3D' alt='Hoaa' />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyen Van A</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCircleCheck} />
                </h4>
                <span className={cx('usernames')}>nguyenvana</span>
             </div>
        
        </div>
    );
}

export default AccountItem;
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';
import { faL } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Button({
    to,
    href,
    primary = false,
    outline = false,
    text = false,
    rounded = false,
    disable = false,
    small = false,
    large = false,
    children,
    className,
    leftIcon,
    rightIcon,
    onClick,
    ...passProps
}) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };

    if(disable) {
        console.log(Object.keys(props))
        // delete props.onclick;
        // or
        // remove event listener when btn is disabled
        Object.keys(props).forEach( (key) => {
            if(key.startsWith('on') && typeof props[key] === 'function'){
                delete props[key];
    
        }}

        )
    }

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    const classes = cx('wrapper', {
        [className]:className, // nếu có classname thì sẽ lấy gtri của classname làm [className] -> trơ thành [custom-login]
        primary,
        outline,
        text,
        rounded,
        disable,
        small,
        large
    });

    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}

export default Button;

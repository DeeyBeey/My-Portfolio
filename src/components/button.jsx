import './button.css';

const Button = ({
    href,
    children,
    icon,
    variant = 'primary',
    className = '',
    ...props
}) => {
    const buttonClassName = ['button', `button-${variant}`, className].filter(Boolean).join(' ');

    return (
        <a href={href} className={buttonClassName} {...props}>
            {icon ? <span className="button-icon" aria-hidden="true">{icon}</span> : null}
            <span>{children}</span>
        </a>
    );
};

export default Button;

import { IconType } from "react-icons";

interface ButtonProps {
    label: string,
    outline?: boolean,
    small?: boolean,
    icon?: IconType,
    custom?: string,
}

const Button: React.FC<ButtonProps> = ({
    label,
    outline,
    icon : Icon,
    custom
}) => {
    return (
        <button
            className={`outline-none rounded-3xl flex items-center gap-2 justify-center border border-sky-blue
            ${outline ? 'bg-white hover:bg-sky-blue/90 text-sky-blue hover:text-white ' : 'bg-sky-blue hover:bg-sky-blue/90 text-white'}
            ${custom ? custom : ''}
            `}>
            {label}
            {Icon && <Icon size={30} />}

        </button>

    );
};

export default Button;
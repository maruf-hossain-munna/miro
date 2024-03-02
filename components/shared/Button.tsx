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
            className={`rounded-3xl flex items-center gap-2
            ${outline ? 'bg-white hover:bg-white/90 text-sky-blue' : 'bg-sky-blue hover:bg-sky-blue/90 text-white'}
            ${custom ? custom : ''}
            `}>
            {label}
            {Icon && <Icon size={30} />}

        </button>

    );
};

export default Button;
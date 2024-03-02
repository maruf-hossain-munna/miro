interface childrenProps {
    children: React.ReactNode
}

const Container: React.FC<childrenProps> = ({ children }) => {
    return (
        <div className="max-w-[1140px] xl:px-0 md:px-4 px-4 mx-auto">
            {children}
        </div>
    );
};

export default Container;
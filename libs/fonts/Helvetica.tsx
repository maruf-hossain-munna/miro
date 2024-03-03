import localFont from "next/font/local";

const Helvetica = localFont({
    src: [
        {
            path: "./helvetica-font/helvetica-light-587ebe5a59211.ttf",
            weight: "300",
            style: "normal",
        },
        {
            path: "./helvetica-font/Helvetica.ttf",
            weight: "400",
            style: "normal",
        },
        {
            path: "./helvetica-font/Helvetica-Bold.ttf",
            weight: "700",
            style: "normal",
        },
    ],
    variable: "--helvetica",
});

export default Helvetica;
export const colorsName = {
    iron: "#D1D5DA",
    mineShaft: "#252525",
    semiDark: "rgba(54, 54, 54, 0.72)",
    slateGray: "#6E7E91",
    white: "#FFFFFF",
    whiteLilac: "#FBFBFE",
    scienceBlue: "#0366D6",
    mercury: "#E5E5E5",
};

export const lightTheme = {
    color: {
        primary: colorsName.scienceBlue,
        body: colorsName.whiteLilac,
        text: colorsName.slateGray,
        title: colorsName.mineShaft,
        tileBackground: colorsName.white,
        themeButton: {
            background: colorsName.slateGray,
            border: colorsName.iron,
        },
    },
};

export const darkTheme = {
    color: {
        primary: colorsName.scienceBlue,
        body: colorsName.mineShaft,
        text: colorsName.white,
        title: colorsName.white,
        tileBackground: colorsName.semiDark,
        themeButton: {
            background: colorsName.slateGray,
            border: colorsName.iron,
        },
    },
};
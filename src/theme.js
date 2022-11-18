export const colorsName = {
    iron: "#D1D5DA",
    mineShaft: "#252525",
    semiDark: "rgba(54, 54, 54, 0.72)",
    slateGray: "#6E7E91",
    white: "#FFFFFF",
    whiteLilac: "#FBFBFE",
    scienceBlue: "#0366D6",
    tropicalBlue: "#CDE0F7",
    dogerBlue: "#2188FF",
    tundora: "#414141",
    mercury: "#E5E5E5",
    azure: "#35669E",
};

export const size = {
    desktop: "1214px",
    laptop: "1024px",
    tablet: "769px",
};

export const device = {
    desktop: `(max-width: ${size.desktop})`,
    laptop: `(max-width: ${size.laptop})`,
    tablet: `(max-width: ${size.tablet})`,
};

export const lightTheme = {
    color: {
        primary: colorsName.scienceBlue,
        body: colorsName.whiteLilac,
        text: colorsName.slateGray,
        title: colorsName.mineShaft,
        tileTitle: colorsName.scienceBlue,
        tileBackground: colorsName.white,
        tileTitleUnderline: colorsName.mercury,
        divider: colorsName.mercury,
        tileActiveBorder: colorsName.tropicalBlue,
        themeButton: {
            background: colorsName.slateGray,
            border: colorsName.iron,
        },
        links: colorsName.scienceBlue,
        socialIcons: colorsName.mineShaft,
        buttonText: colorsName.white,
    },
};

export const darkTheme = {
    color: {
        primary: colorsName.scienceBlue,
        body: colorsName.mineShaft,
        text: colorsName.white,
        title: colorsName.white,
        tileTitle: colorsName.white,
        tileBackground: colorsName.semiDark,
        tileTitleUnderline: colorsName.white,
        divider: colorsName.tundora,
        tileActiveBorder: colorsName.azure,
        themeButton: {
            background: colorsName.slateGray,
            border: colorsName.iron,
        },
        links: colorsName.dogerBlue,
        socialIcons: colorsName.white,
        buttonText: colorsName.white,
    },
};
export const saveThemeInLocalStorage = (theme) =>
    localStorage.setItem("isDarkTheme", JSON.stringify(theme));

export const getThemeFromLocalStorage = () =>
    JSON.parse(localStorage.getItem("isDarkTheme")) || false;
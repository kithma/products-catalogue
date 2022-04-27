import baseStyled, { ThemedStyledInterface } from "styled-components";
export interface ThemeProps {
    colors: {
        colorAqua: string;
        colorDarkGrey: string;
        colorBlack: string;
        colorWhite: string;
        colorBackground: string;
        colorGrey: string;
        colorSmoke: string;
        colorLightGrey: string;
        colorMischka: string;
    };
}

export const theme: ThemeProps = {
    colors: {
        colorAqua: "#12B8FF",
        colorDarkGrey: "#8492A6",
        colorBlack: "#3C4858",
        colorWhite: "#FFFFFF",
        colorBackground: "#F5F6FA",
        colorGrey: "#EBEBEB",
        colorSmoke: "#F5F6F7",
        colorLightGrey: "#F0F2F4",
        colorMischka: "#DADEE4",
    },
};

export type Theme = typeof theme;
const styled = baseStyled as ThemedStyledInterface<Theme>;

export default styled;

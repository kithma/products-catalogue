import 'styled-components';
import { ThemeProps } from "./src/theme/Theme";

// type CustomTheme = typeof theme;

declare module 'styled-components' {
	export interface DefaultTheme extends ThemeProps<AnyStyledComponent> {}
}
/* eslint-disable react-refresh/only-export-components */

import type { ReactNode } from "react";
import { createContext, use, useState } from "react";

// # String Literal Types & Constants
// * 'as const' makes the array readonly and tells TS to treat values as specific literals, not just strings.
const allowedTheme = [
	"halloween",
	"cyberpunk",
	"dim",
	"abyss",
	"retro",
] as const;

// * Derive the 'UseableThemes' type from the array values.
// * This creates a union type: 'halloween' | 'cyberpunk' | ...
export type UseableThemes = (typeof allowedTheme)[number];

export type ThemeContextType = {
	theme: UseableThemes;
	changeTheme: (newTheme: UseableThemes) => void;
};

// # Context Creation
// * Initialize context with the defined interface.
export const ThemeContext = createContext<ThemeContextType>({
	theme: "halloween",
	changeTheme: () => {},
});
// export const ThemeContext = createContext<ThemeContextType | null>(null);

export default function ThemeContextProvider({
	children,
}: {
	children: ReactNode;
}) {
	// * useState generic ensures 'theme' can only be one of the 'UseableThemes' values.
	const [theme, setTheme] = useState<UseableThemes>("halloween");

	function changeTheme(newTheme: UseableThemes) {
		if (allowedTheme.includes(newTheme)) setTheme(newTheme);
	}

	return <ThemeContext value={{ theme, changeTheme }}>{children}</ThemeContext>;
}

export function useTheme() {
	return use(ThemeContext);
}

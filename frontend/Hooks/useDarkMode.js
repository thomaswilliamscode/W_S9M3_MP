
import { useLocalStorage } from './useLocalStorage';

export function useDarkMode() {
	const [darkMode, setDarkMode] = useLocalStorage('darkMode', false)
	const changeMode = () => {
		setDarkMode(!darkMode)
	}
	return [darkMode, changeMode]
}
import { useState } from 'react'

export function useLocalStorage( key, initialValue) {
	const [ storedValue, setStoredValue ] = useState( () => {
		const info = window.localStorage.getItem(key);
		console.log('storedValue', key)
		return info ? JSON.parse(info) : initialValue;
	})
	

	const setValue = (value) => {
		setStoredValue(value)
		window.localStorage.setItem(key, JSON.stringify(value))
	}

	return [storedValue, setValue]


}
import { useState} from "react";

export const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try { // qnd starta a page
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (err) {
      console.error(err);
      return initialValue;
    }
  });
  const setValue = (value) => {
    try { //setando valor mas o array ta dando erro?  ERRO NO VALUETOSTORE?
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
        console.log(valueToStore)
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (err) {
      console.error(err);
    }
  };
  return [storedValue, setValue];
};

export default useLocalStorage;

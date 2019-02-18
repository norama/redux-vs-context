import React, {useState} from 'react';
import foods from './foods';

export const ThemeContext = React.createContext(foods);

export default function Provider(props) {
    const [searchTerm, setSearchTerm] = useState('');

    
    return (<ThemeContext.Provider value={{
                foods,
                searchTerm,
                setSearchTerm
            }}> {props.children} </ThemeContext.Provider>);

}
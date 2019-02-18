import React, {useContext} from 'react';
import {ThemeContext} from './providers';

export default function Consumer({children}) {

    const {foods, searchTerm} = useContext(ThemeContext);

    const food = searchTerm ?
                    foods.filter(food =>
                            food.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1
                        ) :
                    foods;

    return (<>
          {React.Children.map(children, child =>
            React.cloneElement(child, {
              food,
              searchTerm
            })
          )}
    </>);
}
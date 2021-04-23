import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState, useEffect} from 'react'


// export default useRecetteEffect = async () => {
//     useEffect(() => {
//         displayData();
//     })
// }

// export default displayData = async () => {
//     const localStorageTasks = await AsyncStorage.getItem('@recette');
//     return localStorageTasks != null
//         ? setRecette(JSON.parse(localStorageTasks))
//         : null;
// };

export default localStorageRecette = async () => {
    
    
    const displayData = async () => {
        const localStorageTasks = await AsyncStorage.getItem('@recette');
        return localStorageTasks != null
        ? setRecette(JSON.parse(localStorageTasks))
        : null;
    };
    async function saveRecetteLS(name, url, categorie, ingredient, description, action){ 
        const [recette, setRecette] = useState([]);
        let newRecette = [...recette];
        switch (action) {
            case 'create':
                newRecette = [...recette, {id: recette.length, name: name, url: url, categorie:categorie, ingredient: ingredient, description:description}];
                setRecette(newRecette);
                await AsyncStorage.setItem('@recette', JSON.stringify(newRecette));
                console.log(recette)
                console.log('Je suis après le setItem');
                break;
            default:
                break;
        }
    }
}


    

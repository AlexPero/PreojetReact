import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState} from 'react'

// export default saveRecette = async (name, url, categorie, ingredient, description, action ) => {
//         try{
//             const [recette, setRecette] = useState([]);
//             console.log('La fonction fonctionne.')
//             let newRecette = [...recette];
//             switch (action) {
//                 case 'create':
//                     console.log('Je rentre dans le create');
//                     newRecette = [...recette, {id: recette.lenght, name: name, url: url, categorie:categorie, ingredient: ingredient, description:description}];
//                     console.log(recette);
//                     setRecette(newRecette);
//                     await AsyncStorage.setItem(recette, JSON.parse(newRecette));
//                     console.log('Je suis après le setItem');
//                     break;
//                 case 'delete':
//                     // Pour la fonction delete
//                     break;
//                 default:
//                     console.log('Je ne suis rnetrer dans rien');
//                     break;
//             }
//             console.log('Je sors du Switch')
            
//         }catch(err){
//             console.log(err)
//         }
        
// }

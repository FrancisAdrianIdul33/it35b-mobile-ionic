import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonSearchbar, IonTitle, IonToolbar } from '@ionic/react';
import { SetStateAction, useEffect, useInsertionEffect, useState } from 'react';

const Search: React.FC = () => {
        const games = [
            { name: 'Pokémon Yellow' },
            { name: 'Mega Man X' },
            { name: 'The Legend of Zelda' },
            { name: 'Pac-man' },
            { name: 'Super Mario World' },
        ]
    
        const [searchText,setSearchText] = useState('');
        const [filtered,setFilteredGames] = useState(games);

        useEffect  (() => {
        const debounce = setTimeout(() => { 
            const filtered = games.filter(game=>
                game.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredGames(filtered);
        }, 400);

        return () => clearTimeout(debounce);
    }, [searchText]);

    return (

        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton></IonMenuButton>
                    </IonButtons>

                </IonToolbar>
            </IonHeader>

 
               <IonContent className='ion-padding'>
                <IonSearchbar
                    placeholder='Search games'
                    value={searchText}
                    debounce={0}
                    onIonInput={(event: CustomEvent) => setSearchText(event.detail.value!)}
                />
            </IonContent>

        </IonPage>

    );
};

export default Search;
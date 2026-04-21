import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonItem, IonLabel, IonList } from '@ionic/react';
import { } from 'react';

const Feed: React.FC = () => {
    const games = [
        { name: 'Pokémon Yellow' },
         { name: 'Mega Man X' },
          { name: 'The Legend of Zelda' },
           { name: 'Pac-man' },
            { name: 'Super Mario World' },
        ]
 return (
       <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton></IonMenuButton>
                    </IonButtons>
                    <IonTitle>Feed</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent className='ion-padding'>
                <IonList>
                    {games.map((game, index) => (
                        <IonItem key={index}>
                            <IonLabel>{game.name}</IonLabel>
                        </IonItem>
                    ))}
                </IonList>
            </IonContent>
        </IonPage>
  );
};

export default Feed;
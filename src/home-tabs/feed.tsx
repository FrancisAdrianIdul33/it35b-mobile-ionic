import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonItem, IonLabel, IonList, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonGrid, IonCol, IonRow, IonIcon, IonButton } from '@ionic/react';
import { chatboxOutline, gitCommitOutline, shareOutline, thumbsUpOutline } from 'ionicons/icons';
import { useInsertionEffect, useState } from 'react';

const Feed: React.FC = () => {
    const games = [
        { name: 'Pokémon Yellow' },
        { name: 'Mega Man X' },
        { name: 'The Legend of Zelda' },
        { name: 'Pac-man' },
        { name: 'Super Mario World' },
    ]

    const [searchText, setSearchText] = useState('');
    const handleSearch = (event: CustomEvent) => { }

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
                    {games.map((item, index) => (
                        <IonCardHeader>
                            <img alt="Card Image" src="https://www.nintendo.com/eu/media/images/10_share_images/games_15/game_boy_4/H2x1_GB_PokemonYellow_enGB_image1600w.jpg" />
                            <IonCardHeader>
                                <IonCardTitle>{item.name}</IonCardTitle>
                                <IonCardSubtitle>card subtitle</IonCardSubtitle>
                                <IonCardContent>
                                    Keep close to Nature's heart... and break clear away, once in awhile, and climb a mountain or spend a week in the woods. Wash your spirit clean.
                                </IonCardContent>
                            </IonCardHeader>



                            <IonCardContent>
                                <IonGrid>
                                    <IonRow>
                                        <IonCol>
                                            <IonButton fill="clear" expand="full">
                                                <IonIcon icon={thumbsUpOutline}></IonIcon>
                                                <IonLabel style={{ marginLeft: '5px' }}>Like</IonLabel>
                                            </IonButton>
                                        </IonCol>
                                        <IonCol>
                                            <IonButton fill="clear" expand="full">
                                                <IonIcon icon={chatboxOutline}></IonIcon>
                                                <IonLabel style={{ marginLeft: '5px' }}>Comment</IonLabel>
                                            </IonButton>
                                        </IonCol>
                                        <IonCol>
                                            <IonButton fill="clear" expand="full">
                                                <IonIcon icon={shareOutline}></IonIcon>
                                                <IonLabel style={{ marginLeft: '5px' }}>Share</IonLabel>
                                            </IonButton>
                                        </IonCol>
                                    </IonRow>
                                </IonGrid>
                            </IonCardContent>
                        </IonCardHeader>

                    ))};
                </IonList>
            </IonContent>
        </IonPage>



    );
};

export default Feed;

function setFilterGames(filtered: { name: string; }[]) {
    throw new Error('Function not implemented.');
}

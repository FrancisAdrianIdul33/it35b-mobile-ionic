import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonItem, IonLabel, IonList, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonGrid, IonCol, IonRow, IonIcon, IonButton } from '@ionic/react';
import { chatboxOutline, chatbubblesOutline, gitCommitOutline, shareOutline, thumbsUpOutline } from 'ionicons/icons';
import { useInsertionEffect, useState } from 'react';

const Feed: React.FC = () => {
    const games = [
        {
            name: 'Pokémon Yellow',
            img: "https://www.nintendo.com/eu/media/images/10_share_images/games_15/game_boy_4/H2x1_GB_PokemonYellow_enGB_image1600w.jpg",
            des: "Catch, train, and battle Pokémon alongside Pikachu in a classic adventure."
        },
        {
            name: 'Mega Man X',
            img: "https://www.nintendo.com/eu/media/images/10_share_images/games_15/nintendo_switch_download_software_1/H2x1_NSwitchDS_MegaManXLegacyCollection_image1600w.jpg",
            des: "Fast-paced action platformer where you fight powerful robots and upgrade abilities."
        },
        {
            name: 'The Legend of Zelda',
            img: "https://www.nintendo.com/eu/media/images/other_22/character_hubs/the_legend_of_zelda/16x9_Other_TheLegendOfZelda_Hub_image1600w.jpg",
            des: "Explore Hyrule, solve puzzles, and defeat evil to save the kingdom."
        },
        {
            name: 'Pac-man',
            img: "https://www.nintendo.com/eu/media/images/10_share_images/games_15/nes_5/H2x1_NES_PacMan_image1600w.jpg",
            des: "Navigate mazes, eat pellets, and avoid ghosts in this iconic arcade game."
        },
        {
            name: 'Super Mario World',
            img: "https://www.nintendo.com/eu/media/images/10_share_images/games_15/super_nintendo_5/H2x1_SNES_SuperMarioWorld.jpg",
            des: "Jump, run, and explore colorful worlds to rescue Princess Peach with Yoshi."
        },
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
                        <IonCard>
                            <img alt="Card Image" src={item.img || "https://ionicframework.com/docs/img/demos/card-media.png"} />
                            <IonCardHeader>
                                <IonCardTitle>{item.name}</IonCardTitle>
                                <IonCardSubtitle>{item.des}</IonCardSubtitle>
                            </IonCardHeader>

                            <IonGrid>
                                <IonRow>

                                    <IonCol>
                                        <IonButton fill="clear" expand="full">
                                            <IonIcon icon={thumbsUpOutline} ></IonIcon>
                                            <IonLabel style={{ marginLeft: "5px" }}>Like</IonLabel>
                                        </IonButton>
                                    </IonCol>

                                    <IonCol>
                                        <IonButton fill="clear" expand="full">
                                            <IonIcon icon={chatbubblesOutline}></IonIcon>
                                            <IonLabel style={{ marginLeft: "5px" }}>Comment</IonLabel>
                                        </IonButton>
                                    </IonCol>

                                    <IonCol>
                                        <IonButton fill="clear" expand="full">
                                            <IonIcon icon={shareOutline}></IonIcon>
                                            <IonLabel style={{ marginLeft: "5px" }}>Share</IonLabel>
                                        </IonButton>
                                    </IonCol>
                                </IonRow>
                            </IonGrid>
                        </IonCard>

                    ))}
                </IonList>
            </IonContent>
        </IonPage>

    );
};

export default Feed;
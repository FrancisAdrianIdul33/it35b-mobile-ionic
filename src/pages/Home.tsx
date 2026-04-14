import { IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonButtons, IonToolbar, IonTabs, IonTabButton, IonLabel, IonIcon } from '@ionic/react';
import './Home.css';
import ExploreContainer from '../components/ExploreContainer';
import { bookOutline, search, star } from 'ionicons/icons';
import { IonReactRouter } from '@ionic/react-router';


const Home: React.FC = () => {
  const tabs = [

    { name: "Feed", tab: 'feed', url: "/app/home/feed", icon: bookOutline },
    { name: "Favorites", tab: 'favorites', url: "/app/home/feed", icon: star },
    { name: "Search", tab: 'search', url: "/app/home/feed", icon: search }
  ]
  return (
    <IonReactRouter>
      <IonTabs>
        <IonToolbar slot="bottom">
          <IonTitle>
            Tabs
          </IonTitle>
        </IonToolbar>
        {/**/}
        {tabs.map((tab, index) => (
          <IonTabButton key={index} tab={tab.tab} href={tab.url}>
            <IonIcon icon={tab.icon} />
            <IonLabel>{tab.name}</IonLabel>
          </IonTabButton>
        ))}

      </IonTabs>
    </IonReactRouter>

  );
};

export default Home;
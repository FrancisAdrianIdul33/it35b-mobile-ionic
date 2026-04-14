import { IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonButtons, IonToolbar, IonTabs, IonTabButton, IonLabel, IonIcon, IonTabBar, IonRouterOutlet } from '@ionic/react';
import './Home.css';
import ExploreContainer from '../components/ExploreContainer';
import { bookOutline, search, star } from 'ionicons/icons';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router';
import Feed from '../home-tabs/feed';
import Favorites from '../home-tabs/favorites';
import Search from '../home-tabs/search';


const Home: React.FC = () => {
  const tabs = [

    { name: "Feed", tab: 'feed', url: "/app/home/feed", icon: bookOutline },
    { name: "Favorites", tab: 'favorites', url: "/app/home/favorites", icon: star },
    { name: "Search", tab: 'search', url: "/app/home/search", icon: search }
  ]
  return (
    <IonReactRouter>
      <IonTabs>
        <IonTabBar slot="bottom">
          <IonToolbar>
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
        </IonTabBar>

        <IonRouterOutlet>
          <Route exact path="/app/home/feed" component={Feed} />
          <Route exact path="/app/home">
            <Redirect to="/app/home/feed" />
          </Route>
          <Route exact path="/app/home/favorites" component={Favorites} />
          <Route exact path="/app/home/search" component={Search} />


        </IonRouterOutlet>
      </IonTabs>
    </IonReactRouter>

  );
};

export default Home;
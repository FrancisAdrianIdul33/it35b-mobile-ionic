import { IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonButtons, IonToolbar } from '@ionic/react';
import './Home.css';
import ExploreContainer from '../components/ExploreContainer';
import { bookOutline, search, star } from 'ionicons/icons';


const Home: React.FC = () => {
  const tabs = [

    {name: "Feed", tab:'feed',url:"/app/home/feed",icon:bookOutline},
     {name: "Favorites", tab:'favorites',url:"/app/home/feed",icon:star},
      {name: "Search", tab:'search',url:"/app/home/feed",icon:search}
]


  return 
    <IonReactRouter>
      <IonTabs>
        <IonToolBar>
          <IonTitle>
            Tabs
             </IonTitle>
             </IonToolBar>
               </IonToolBar>
                 </IonTabs>
                 
    </IonReactRouter>

            

  
  );
};

export default Home;
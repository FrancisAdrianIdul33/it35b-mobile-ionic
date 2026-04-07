import { IonButtons, IonContent, IonHeader, IonMenu, IonMenuButton, IonPage, IonRouterOutlet, IonSplitPane, IonTitle, IonToolbar } from '@ionic/react';
import { } from 'react';
import { Route } from 'react-router-dom';
import { homeOutline, informationCircleOutline } from 'ionicons/icons';
import Home from './Home';



const Menu: React.FC = () => {

    const path = [
        {name:'Home', url: '/app/home', icon:homeOutline},
        {name:'About', url: '/app/about', icon:informationCircleOutline}
    ]
    

    return (

        <IonPage>
            <></>
            <IonSplitPane contentId="main">
                <IonMenu contentId="main">

                    <IonHeader>
                        <IonToolbar>
                            <IonTitle>Menu</IonTitle>
                        </IonToolbar>
                    </IonHeader>
                    </IonMenu>

                    <IonContent>
                        
                        </IonContent>



                    <IonRouterOutlet id="main">
                        <Route exact path="/app/home" component={Home} />
                         <Route exact path="/app"/>
                    </IonRouterOutlet>
            </IonSplitPane>
        </IonPage>

    );
};

export default Menu;
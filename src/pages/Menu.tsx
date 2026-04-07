import { IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonItem, IonMenu, IonMenuButton, IonMenuToggle, IonPage, IonRouterOutlet, IonSplitPane, IonTitle, IonToolbar } from '@ionic/react';
import { } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { appsOutline, homeOutline, informationCircleOutline, logOutOutline } from 'ionicons/icons';
import Home from './Home';
import About from "./About";



const Menu: React.FC = () => {

    const path = [
        {name:'Home', url: '/app/Home', icon:homeOutline},
        {name:'About', url: '/app/About', icon:informationCircleOutline}
    ]
    

     return(
        <IonPage>
            <IonSplitPane contentId="main">
               <IonMenu contentId="main">
                  {/* Header */}
                  <IonHeader>
                    <IonToolbar>
                        <IonIcon icon={appsOutline} slot="start" size="large" style={{ marginLeft: '10px' }}></IonIcon>
                        <IonTitle>Menu</IonTitle>
                    </IonToolbar>
                  </IonHeader>
                  {/* Content */}
                  <IonContent>
                    {path.map((item, index) =>(
                        <IonMenuToggle key={index}>
                            <IonItem routerLink={item.url} routerDirection="forward">
                                <IonIcon icon={item.icon} slot="start"></IonIcon>
                                {item.name}
                            </IonItem>
                        </IonMenuToggle>
                    ))}
                    
                    <IonButton routerLink="/" routerDirection="back" expand="full">
                      <IonIcon icon={logOutOutline} slot="start"></IonIcon>
                      Logout
                    </IonButton>

                  </IonContent>
               </IonMenu>

               {/* Routing */}
               <IonRouterOutlet id="main">
                    <Route exact path="/app/Home" component={Home} />
                    <Route exact path="/app" >
                        <Redirect to="/app/Home"/>
                    </Route>
                    
                    <Route exact path="/app/About" component={About} />
                    
               </IonRouterOutlet>
            </IonSplitPane>
            
        </IonPage>
           

    );
};

export default Menu;
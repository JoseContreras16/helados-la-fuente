// src/App.tsx
import React from 'react';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Route, Redirect } from 'react-router-dom';

import Login from './Login';
import Signup from './login/Signup';
import ForgotPassword from './ForgotPassword';


import '@ionic/react/css/core.css';
import './theme/global.css';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        {/* Página principal: Login */}
        <Route exact path="/" component={Login} />
        
        {/* Página de registro */}
        <Route exact path="/signup" component={Signup} />
        {/* Página de recuperación */}
        <Route path="/forgot-password" component={ForgotPassword} />
        
        {/* Redirección por defecto */}
        <Route render={() => <Redirect to="/" />} />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;

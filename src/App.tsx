// src/App.tsx
import React from 'react';
import { IonApp } from '@ionic/react';
import Login from './Login';
import '@ionic/react/css/core.css';
import './theme/global.css';

const App: React.FC = () => (
  <IonApp>
    <Login />
  </IonApp>
);

export default App;

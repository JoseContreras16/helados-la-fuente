// src/Login.tsx
import React, { useState } from 'react';
import { IonContent, IonPage, IonInput, IonButton, IonCheckbox, IonLabel, IonItem, IonHeader, IonToolbar, IonTitle, IonIcon } from '@ionic/react';
import { logoFacebook, mailOutline, logoTwitter } from 'ionicons/icons';
import './Login.css';  // Importa el CSS para estilizar

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = () => {
    if (!username || !password) {
      alert('Please enter both username and password.');
      return;
    }
    // For now, just log the values
    console.log('Logging in with:', { username, password, rememberMe });
    alert(`Logged in as ${username}`);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Sign In</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="login-container">
          <IonItem>
            <IonInput
              placeholder="username"
              value={username}
              onIonChange={e => setUsername(e.detail.value!)}
            />
          </IonItem>
          <IonItem>
            <IonInput
              type="password"
              placeholder="password"
              value={password}
              onIonChange={e => setPassword(e.detail.value!)}
            />
          </IonItem>
          <IonItem>
            <IonCheckbox
              slot="start"
              checked={rememberMe}
              onIonChange={e => setRememberMe(e.detail.checked)}
            />
            <span className="checkbox-label">Guardar cuenta</span>
          </IonItem>
          <IonButton expand="full" className="login-button" onClick={handleLogin}>Login</IonButton>
          <div className="social-buttons">
            <button className="social-btn"><IonIcon icon={logoFacebook} /></button>
            <button className="social-btn"><IonIcon icon={mailOutline} /></button>
            <button className="social-btn"><IonIcon icon={logoTwitter} /></button>
          </div>
          <p>Don't have an account? <a href="#">Sign Up</a></p>
          <p><a href="#">Forgot your password?</a></p>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Login;

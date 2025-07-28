// src/Login.tsx
import React, { useState } from 'react';
import { IonContent, IonPage, IonInput, IonButton, IonCheckbox, IonLabel, IonItem, IonHeader, IonToolbar, IonTitle, IonIcon } from '@ionic/react';
import { logoFacebook, mailOutline, logoTwitter } from 'ionicons/icons';
import { Link } from 'react-router-dom'; // 👈 Importa Link
import './Login.css';


const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = () => {
    if (!username || !password) {
      alert('Please enter both username and password.');
      return;
    }
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
              placeholder="Username"
              value={username}
              onIonChange={e => setUsername(e.detail.value!)}
            />
          </IonItem>
          <IonItem>
            <IonInput
              type="password"
              placeholder="Password"
              value={password}
              onIonChange={e => setPassword(e.detail.value!)}
            />
          </IonItem>

          <div className="checkbox-row">
            <IonCheckbox
              checked={rememberMe}
              onIonChange={e => setRememberMe(e.detail.checked)}
              className="custom-checkbox"
            />
            <span className="checkbox-label">Remember me</span>
          </div>

          <IonButton expand="full" className="login-button" onClick={handleLogin}>Login</IonButton>

          <div className="social-buttons">
            <button className="social-btn"><IonIcon icon={logoFacebook} /></button>
            <button className="social-btn"><IonIcon icon={mailOutline} /></button>
            <button className="social-btn"><IonIcon icon={logoTwitter} /></button>
          </div>

          <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
          <p><Link to="/forgot-password">Forgot your password?</Link></p>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Login;

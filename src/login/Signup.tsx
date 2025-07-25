import {
  IonPage,
  IonContent,
  IonInput,
  IonItem,
  IonLabel,
  IonButton,
  IonToast,
  IonIcon
} from '@ionic/react';
import { personOutline, mailOutline, lockClosedOutline } from 'ionicons/icons';
import React, { useState } from 'react';
import './Signup.css';

const Signup: React.FC = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showToast, setShowToast] = useState(false);

  const handleRegister = () => {
    if (!username || !email || !password) {
      alert('Todos los campos son obligatorios');
      return;
    }

    // Aquí iría la lógica de conexión al backend (ej. fetch o axios)
    console.log('Usuario registrado:', { username, email, password });
    setShowToast(true);
  };

  return (
    <IonPage>
      <IonContent className="signup-content" fullscreen>
        <div className="signup-container">
          <h2>Crear Cuenta</h2>

          <IonItem>
            <IonIcon slot="start" icon={personOutline} />
            <IonInput
              placeholder="Nombre de usuario"
              value={username}
              onIonChange={(e) => setUsername(e.detail.value!)}
              required
            />
          </IonItem>

          <IonItem>
            <IonIcon slot="start" icon={mailOutline} />
            <IonInput
              type="email"
              placeholder="Correo electrónico"
              value={email}
              onIonChange={(e) => setEmail(e.detail.value!)}
              required
            />
          </IonItem>

          <IonItem>
            <IonIcon slot="start" icon={lockClosedOutline} />
            <IonInput
              type="password"
              placeholder="Contraseña"
              value={password}
              onIonChange={(e) => setPassword(e.detail.value!)}
              required
            />
          </IonItem>

          <IonButton expand="block" onClick={handleRegister}>
            Registrarse
          </IonButton>

          <IonToast
            isOpen={showToast}
            onDidDismiss={() => setShowToast(false)}
            message="¡Registro exitoso!"
            duration={2000}
            color="success"
          />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Signup;

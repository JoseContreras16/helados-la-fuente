import React, { useState } from 'react';
import {
  IonPage,
  IonContent,
  IonInput,
  IonButton,
  IonText,
  IonLabel,
  IonToast,
} from '@ionic/react';
import './ForgotPassword.css';

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState('');
  const [showToast, setShowToast] = useState(false);

  const handleReset = () => {
    if (email) {
      // Aquí puedes llamar a tu backend para enviar el correo
      setShowToast(true);
    }
  };

  return (
    <IonPage>
      <IonContent className="forgot-container ion-padding">
        <div className="form-box">
          <IonLabel className="forgot-title">Forgot your password?</IonLabel>
          <IonText className="forgot-description">
            Enter your email and we'll send you a reset link.
          </IonText>

          <IonInput
            type="email"
            placeholder="Enter your email"
            value={email}
            onIonChange={(e) => setEmail(e.detail.value!)}
            className="forgot-input"
          ></IonInput>

          <IonButton expand="block" onClick={handleReset}>
            Send Reset Link
          </IonButton>

          <IonToast
            isOpen={showToast}
            onDidDismiss={() => setShowToast(false)}
            message="Reset link sent! Check your inbox."
            duration={2000}
            color="success"
          />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default ForgotPassword;

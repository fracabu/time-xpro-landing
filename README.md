# **TimeX Pro Landing Page**

![image](https://github.com/user-attachments/assets/8ddb85dd-302c-4a19-9c74-e5bd862ae7e5)


TimeX Pro Landing Page è un'applicazione React moderna progettata per promuovere e vendere il prodotto TimeX Pro. Include diverse sezioni, come caratteristiche del prodotto, prezzi, testimonianze degli utenti, domande frequenti e un modulo di contatto.

---

## **Caratteristiche**
- **Sezioni dinamiche**: Hero, Caratteristiche, Prezzi, Video, Testimonianze, FAQ e Contatti.
- **Routing**: Navigazione tra le sezioni tramite `react-router-dom`.
- **API backend**: Integrazione con un backend Express.js per recuperare i dati dinamici.
- **Frontend moderno**: Progettazione UI con TailwindCSS.
- **Reattività**: Interfaccia completamente responsiva per dispositivi mobili, tablet e desktop.

---

## **Prerequisiti**
- **Node.js**: Versione >= 14
- **npm**: Versione >= 6

---

## **Installazione**
1. **Clona il repository**:
   ```bash
   git clone https://github.com/tuo-utente/timex-pro-landing.git
   cd timex-pro-landing
   ```

2. **Installa le dipendenze per il frontend**:
   ```bash
   npm install
   ```

3. **Vai nella directory del backend**:
   ```bash
   cd backend
   ```

4. **Installa le dipendenze del backend**:
   ```bash
   npm install
   ```

---

## **Avvio dell'Applicazione**

### **Frontend**
1. Torna alla directory principale:
   ```bash
   cd ..
   ```

2. Avvia il server di sviluppo del frontend:
   ```bash
   npm run dev
   ```

3. Apri il browser e visita `http://localhost:5173`.

### **Backend**
1. Vai nella directory `backend`:
   ```bash
   cd backend
   ```

2. Avvia il server di sviluppo del backend:
   ```bash
   npm run dev
   ```

3. Il backend sarà disponibile su `http://localhost:5000`.

---

## **Struttura del Progetto**
```plaintext
timex-pro-landing/
├── src/
│   ├── components/
│   │   ├── HeroSection.tsx
│   │   ├── FeaturesSection.tsx
│   │   ├── PricingSection.tsx
│   │   ├── VideoSection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   ├── FAQSection.tsx
│   │   ├── ContactForm.tsx
│   │   └── Footer.tsx
│   ├── App.tsx
│   ├── AppRoutes.tsx
│   └── index.tsx
├── backend/
│   ├── server.js
│   ├── routes/
│   │   ├── plans.js
│   │   ├── testimonials.js
│   │   ├── faq.js
│   │   └── contact.js
├── package.json
├── README.md
├── tailwind.config.js
└── vite.config.ts
```

---

## **Rotte del Backend**
- **/api/plans**: Recupera i piani tariffari.
- **/api/testimonials**: Recupera le testimonianze degli utenti.
- **/api/faq**: Recupera le domande frequenti.
- **/api/contact**: Gestisce l'invio del modulo di contatto.

---

## **Tecnologie Utilizzate**
### **Frontend**
- React.js
- React Router DOM
- TailwindCSS
- Vite.js

### **Backend**
- Node.js
- Express.js
- CORS e Body-parser
- Nodemon (per lo sviluppo)

---

## **Script Disponibili**

### **Frontend**
- `npm run dev`: Avvia il server di sviluppo.
- `npm run build`: Compila l'applicazione per la produzione.
- `npm run preview`: Anteprima dell'applicazione compilata.

### **Backend**
- `npm run dev`: Avvia il backend in modalità sviluppo con nodemon.
- `npm start`: Avvia il backend in modalità produzione.

---

## **Contribuire**
Contributi, segnalazioni di bug e suggerimenti sono i benvenuti! Per contribuire:
1. Fai un fork del progetto.
2. Crea un nuovo branch:
   ```bash
   git checkout -b feature/nuova-funzionalita
   ```
3. Fai le modifiche e apri una Pull Request.

---

## **Licenza**
Questo progetto è distribuito sotto licenza MIT. Consulta il file `LICENSE` per ulteriori dettagli.

---

Se hai bisogno di aiuto o hai domande, sentiti libero di contattarmi! 🚀

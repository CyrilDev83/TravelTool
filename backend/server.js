const connectDB = require('./config/db');
connectDB(); // Connexion à la base de données

const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();  // Charge les variables d’environnement

const app = express();
app.use(express.json());  // Pour lire le JSON dans les requêtes
app.use(cors());  // Autorise les requêtes du frontend

// Route de test
app.get('/', (req, res) => {
    res.send('Bienvenue sur l’API de TravelTool 🚀');
});

// Lancer le serveur
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`✅ Serveur démarré sur le port ${PORT}`));


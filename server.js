import express from 'express';
import { Sequelize, DataTypes } from 'sequelize';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// 1. Initialize Sequelize Instance mapping to your MySQL Server
const sequelize = new Sequelize(
  process.env.DB_NAME || 'friendship_anniversary',
  process.env.DB_USER || 'root',
  process.env.DB_PASSWORD || '',
  {
    host: process.env.DB_HOST || '127.0.0.1',
    dialect: 'mysql',
    logging: false, // Disables noisy SQL query logs in your console terminal terminal
  }
);

// 2. Define the 'Experience' Relational Table Schema Model
const Experience = sequelize.define('Experience', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  thoughts: {
    type: DataTypes.TEXT,
    allowNull: false,
  }
}, {
  timestamps: true, // Automatically manages tracking properties 'createdAt' and 'updatedAt'
});

// 3. Connect & Synchronize Tables with the Database
sequelize.authenticate()
  .then(() => {
    console.log('✨ Connected smoothly to your local MySQL Database Engine!');
    // sync() will automatically verify, structure, or generate your tables on startup
    return sequelize.sync();
  })
  .then(() => console.log('📁 MySQL Relational Tables Synchronized Successfully'))
  .catch(err => {
    console.error('❌ Critical Error linking to local MySQL Instance:', err.message);
  });

// 4. REST API POST Endpoint: Inserts row fields directly into your experiences table
app.post('/api/experience', async (req, res) => {
  try {
    const { thoughts } = req.body;
    
    if (!thoughts || !thoughts.trim()) {
      return res.status(400).json({ success: false, message: 'Message text content cannot be blank.' });
    }

    // Sequelize row injection query command
    const newMemoryEntry = await Experience.create({ thoughts: thoughts.trim() });

    return res.status(201).json({ success: true, data: newMemoryEntry });
  } catch (error) {
    console.error("Database SQL Writing Exception:", error);
    return res.status(500).json({ success: false, message: 'Server compilation crash saving target thoughts.' });
  }
});

// 5. REST API GET Endpoint: Fetches all your logged records (ordered chronologically)
app.get('/api/experiences', async (req, res) => {
  try {
    const historicalLogs = await Experience.findAll({ order: [['createdAt', 'DESC']] });
    return res.status(200).json({ success: true, data: historicalLogs });
  } catch (error) {
    return res.status(500).json({ success: false, message: 'Server failure reading structural experiences from MySQL.' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Production MySQL Backend Core active on port ${PORT}`));

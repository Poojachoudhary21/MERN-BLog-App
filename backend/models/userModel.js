
import { DataTypes } from 'sequelize';
import { sequelize } from '../config/db.js';  // Assuming you have a config/db.js file

const User = sequelize.define('User', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,  // Email should be unique
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'user'  // Set default role as 'user' if not provided
  },
}, {
  timestamps: true,  // This will automatically add 'createdAt' and 'updatedAt'
});

export default User;

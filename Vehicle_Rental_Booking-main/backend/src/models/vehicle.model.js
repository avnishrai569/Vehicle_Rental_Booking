// const { DataTypes } = require('sequelize');

// module.exports = (sequelize) => {
//   const Vehicle = sequelize.define('Vehicle', {
//     name: {
//       type: DataTypes.STRING,
//       allowNull: false
//     },
//     type_id: {
//       type: DataTypes.INTEGER,
//       allowNull: false
//     },
//     registration_number: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       unique: true
//     },
//     color: {
//       type: DataTypes.STRING,
//       allowNull: true
//     }
//   }, {
//     tableName: 'vehicles',
//     timestamps: false
//   });

//   return Vehicle;
// };
// vehicle.model.js
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Vehicle = sequelize.define(
    'Vehicle',
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      type_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'vehicle_types', // Must match the table name
          key: 'id',
        },
      },
      registration_number: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      color: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      tableName: 'vehicles',
      timestamps: false,
    }
  );

  return Vehicle;
};

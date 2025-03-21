// const { DataTypes } = require('sequelize');

// module.exports = (sequelize) => {
//   const VehicleType = sequelize.define('VehicleType', {
//     name: {
//       type: DataTypes.STRING,
//       allowNull: false
//     },
//     description: {
//       type: DataTypes.STRING,
//       allowNull: true
//     }
//   }, {
//     tableName: 'vehicle_types',
//     timestamps: false
//   });

//   return VehicleType;
// };
// vehicleType.model.js
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const VehicleType = sequelize.define(
    'VehicleType',
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      tableName: 'vehicle_types',
      timestamps: false,
    }
  );

  return VehicleType;
};

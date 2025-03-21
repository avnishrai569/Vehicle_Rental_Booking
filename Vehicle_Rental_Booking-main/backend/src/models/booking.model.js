// const { DataTypes } = require('sequelize');

// module.exports = (sequelize) => {
//   const Booking = sequelize.define('Booking', {
//     user_name: {
//       type: DataTypes.STRING,
//       allowNull: false
//     },
//     vehicle_id: {
//       type: DataTypes.INTEGER,
//       allowNull: false
//     },
//     start_date: {
//       type: DataTypes.DATE,
//       allowNull: false
//     },
//     end_date: {
//       type: DataTypes.DATE,
//       allowNull: false
//     }
//   }, {
//     tableName: 'bookings',
//     timestamps: false
//   });

//   return Booking;
// };
// booking.model.js
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Booking = sequelize.define(
    'Booking',
    {
      user_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      vehicle_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'vehicles',
          key: 'id',
        },
      },
      start_date: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
          isDate: true,
        },
      },
      end_date: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
          isDate: true,
          isAfterStartDate(value) {
            if (this.start_date && value <= this.start_date) {
              throw new Error('End date must be after start date.');
            }
          },
        },
      },
    },
    {
      tableName: 'bookings',
      timestamps: false,
    }
  );

  return Booking;
};

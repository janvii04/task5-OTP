module.exports = (Sequelize, sequelize, DataTypes) => {
    return sequelize.define(
      "user",
      {
        ...require("./cors")(Sequelize, DataTypes),
        
        name: {
          type: DataTypes.STRING(255),
          allowNull: true,
          defaultValue:null
        },
        email: {
            type: DataTypes.STRING(255),
            allowNull: true,
          defaultValue:null
          },
          password: {
            type: DataTypes.STRING(255),
            allowNull: true,
          defaultValue:null
          },
          phoneNumber: {
            type: DataTypes.STRING(255),
            allowNull: true,
            defaultValue:null
          },
          profilePic: {
            type: DataTypes.STRING(255),
            allowNull: false,
          },
      },
  
      {
        tableName: "user",
      }
    );
  };
  
import SequelizeConnection from "../../database/SequelizeConnection";
import Organization from "./Organization";
import UserDetails from "./UserDetails";
import Department from "./Department";

const sequelize = SequelizeConnection.getInstance();

// init models
Organization.initModel(sequelize);
UserDetails.initModel(sequelize);
Department.initModel(sequelize);


// associate models
Organization.associateModel();
UserDetails.associateModel();
Department.associateModel();


export const db = {
  sequelize,
  Organization,
  UserDetails,
  Department,
};



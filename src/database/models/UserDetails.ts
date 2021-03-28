import { Model, Sequelize,DataTypes } from "sequelize";
import { UserDetails as UserDetailsAttributes } from "../attributes";
import Department from "./Department";
import Organization from "./Organization";


export type UserDetailsCreationArrtibutes = UserDetailsAttributes

class UserDetails
  extends Model
  implements UserDetailsAttributes {

  public id!: number; // Note that the `null assertion` `!` is required in strict mode.
  public name!: string;
  public email!: string;
  public mobile!: string;

  // timestamps!
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  public static associations: {
  };

  static initModel(sequelize: Sequelize): void {
    UserDetails.init(
      {
        id: {
          type: DataTypes.INTEGER.UNSIGNED,
          autoIncrement: true,
          primaryKey: true
        },
        email: {
          type: DataTypes.TEXT,
          unique: true,
          allowNull: false
        },
        name: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        mobile: {
          type: DataTypes.STRING,
          allowNull: false,
        }
      },
      {
        sequelize,
        underscored: true,
        tableName: "userDetails"
      }
    );
  }

  static associateModel(): void {
    UserDetails.belongsTo(Organization, { targetKey: 'id', as: 'organization' });
    UserDetails.belongsTo(Department, { targetKey: 'id', as: 'department' });
  }
}

export default UserDetails;

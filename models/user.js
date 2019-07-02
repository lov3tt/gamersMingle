module.exports = function(sequelize, Sequelize) {
 
    var User = sequelize.define('user', {
 
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
 
        firstname: {
            type: Sequelize.STRING,
            notEmpty: true
        },
 
        lastname: {
            type: Sequelize.STRING,
            notEmpty: true
        },
 
        username: {
            type: Sequelize.STRING,
            unique: {
                msg: 'Must be a unique username.'
            }
        },
 
        email: {
            type: Sequelize.STRING,
            unique: {
                msg: 'Must be a unique email.'
             }, 
            validate: {
                isEmail: true
            }
        },
 
        password: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: {
                msg: 'Must be a unique password.'
             }, 
            // validate: {
            //     len: {
            //         args: [8, 50],
            //         msg: 'Password needs to be at least eight characters in length.'
            //     }
            // }
            
        },
 
        last_login: {
            type: Sequelize.DATE
        },
 
        status: {
            type: Sequelize.ENUM('active', 'inactive'),
            defaultValue: 'active'
        }
 
 
    });

    User.associate = function(models){
        User.hasMany(models.newPost,{
            onDelete: "cascade"
        });
    }
 
    return User;
 
}
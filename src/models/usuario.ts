import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Usuario = db.define('datos', {

    businessName: {
        type: DataTypes.STRING
    },

    businessAddress: {
        type: DataTypes.STRING
    },

    businessPhone: {
        type: DataTypes.NUMBER
    },

    businessEmail: {
        type: DataTypes.STRING
    },

    businessWebsite: {
        type: DataTypes.STRING
    },

    businessLogo: {
        type: DataTypes.STRING
    },

    facebookLink: {
        type: DataTypes.STRING
    },

    twitterLink: {
        type: DataTypes.STRING
    },

    backgroundLink: {
        type: DataTypes.STRING
    },

    linkedinLink: {
        type: DataTypes.STRING
    },

    businessJob: {
        type: DataTypes.STRING
    }

}, {
    createdAt: false,
    updatedAt: false
});

export default Usuario;
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Usuario = connection_1.default.define('datos', {
    businessName: {
        type: sequelize_1.DataTypes.STRING
    },
    businessAddress: {
        type: sequelize_1.DataTypes.STRING
    },
    businessPhone: {
        type: sequelize_1.DataTypes.NUMBER
    },
    businessEmail: {
        type: sequelize_1.DataTypes.STRING
    },
    businessWebsite: {
        type: sequelize_1.DataTypes.STRING
    },
    businessLogo: {
        type: sequelize_1.DataTypes.STRING
    },
    facebookLink: {
        type: sequelize_1.DataTypes.STRING
    },
    twitterLink: {
        type: sequelize_1.DataTypes.STRING
    },
    backgroundLink: {
        type: sequelize_1.DataTypes.STRING
    },
    linkedinLink: {
        type: sequelize_1.DataTypes.STRING
    },
    businessJob: {
        type: sequelize_1.DataTypes.STRING
    }
}, {
    createdAt: false,
    updatedAt: false
});
exports.default = Usuario;

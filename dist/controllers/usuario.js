"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.putUser = exports.postUser = exports.deleteUser = exports.getUser = exports.getUsers = void 0;
const usuario_1 = __importDefault(require("../models/usuario"));
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listUsers = yield usuario_1.default.findAll();
    res.json(listUsers);
});
exports.getUsers = getUsers;
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const user = yield usuario_1.default.findByPk(id);
    if (user) {
        res.json(user);
    }
    else {
        res.status(404).json({ msg: 'No existe algun usuario con la id: ' + id });
    }
});
exports.getUser = getUser;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const user = yield usuario_1.default.findByPk(id);
    if (!user) {
        res.status(404).json({ msg: 'No existe usuario con la id: ' + id });
    }
    else {
        yield user.destroy();
        res.status(404).json({ msg: 'El usuario ha sido eliminado exitosamente' });
    }
});
exports.deleteUser = deleteUser;
const postUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        yield usuario_1.default.create(body);
        res.json({ msg: 'Usuario agragado exitosamente' });
    }
    catch (error) {
        console.log(error);
        res.json({ msg: 'Ocurrió un error, intente más tarde' });
    }
});
exports.postUser = postUser;
const putUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    const { id } = req.params;
    try {
        const user = yield usuario_1.default.findByPk(id);
        if (user) {
            yield user.update(body);
            res.json({ msg: 'Usuario actualizado con exito' });
        }
        else {
            res.status(404).json({ msg: 'No existe usuario con la id: ' + id });
        }
    }
    catch (error) {
        console.log(error);
        res.json({ msg: 'Ocurrió un error, intente más tarde' });
    }
});
exports.putUser = putUser;

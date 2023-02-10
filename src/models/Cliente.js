import {Schema, model} from 'mongoose';

const ClienteSchema = new Schema({
  nome: String,
  idade: Number,
  profissao: String,
  email: String,
  telefone: Number,
  data: String
});

export default model('Cliente', ClienteSchema);
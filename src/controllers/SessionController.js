import Cliente from "../models/Cliente";

class SessionController{
  async store(req, res){
    const {nome, idade, profissao, email, telefone, data} = req.body;

    let cliente = await Cliente.create({
      nome, 
      idade, 
      profissao, 
      email, 
      telefone, 
      data
    });
    
  
    return res.json(cliente);
  }
}


export default new SessionController();
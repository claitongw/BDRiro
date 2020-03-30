const connection = require('../database/connection');

module.exports = {
    async index(request, response){
        const ong_id = request.headers.authorization;

        const incidents = await connection('incidents')
        .where('ong_id', ong_id)
        .select('*');

        console.log(incidents, ong_id, "quantidade: ",incidents.length)

        if(incidents.length == 0){
            return response.status(401).json({error:'Operation not permited.'});
        }
        else if(incidents[0].ong_id != ong_id){
            return response.status(401).json({error:'Operation not permited.'});
        }

        return response.json(incidents);
    }
}
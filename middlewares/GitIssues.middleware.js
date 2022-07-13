const axios = require('axios');
const { response, request } = require('express');
const getIssuesFromGit = async (request, response, next) => {

    try {
        const { owner, repo } = request.params

        const datos = await axios.get(`https://api.github.com/repos/${owner}/${repo}/issues`);
        request.body = datos.data
        next()
    } catch (error) {
        console.log(error.message);
        response
            .status(error.code)
            .send(error.message)
    }

    /**
     *  #swagger.description = 'Middleware: getIssuesFromGit -- recoge todas las tareas de git para un repositorio'
        
        #swagger.parameters['owner'] = { description: 'Usuario en GitHub' }
    
        #swagger.parameters['repo'] = {
                in: 'path',
                description: 'Repositorio usado en GitHub',
        } 
    */

}






module.exports = { getIssuesFromGit };


// https://rickandmortyapi.com/api/character
// https://api.github.com/repos/${owner}/${repo}/issues
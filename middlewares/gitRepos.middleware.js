const axios = require('axios');
require('dotenv').config()
const url = process.env.GIT_REPOS_URL;
const token = process.env.GIT_TOKEN

const getReposFromGit = async (request, response, next) => {
    
    try {
        const repos = await axios.get(url, { headers: { "Authorization": `Bearer ${token}` } })
        request.body = repos.data
        next()
    } catch (error) {
        console.log(error)
        response
            .status(500)
            .end(error.message)

    }

    /** Swagger
     *  #swagger.description = 'Middleware: getIssuesFromGit -- recoge todas los repos de un usuario'
        
    */

}

module.exports = { getReposFromGit }
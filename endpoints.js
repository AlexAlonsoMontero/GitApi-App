const { getIssuesFromGit } = require('./middlewares/GitIssues.middleware')
const { getReposFromGit } = require('./middlewares/gitRepos.middleware');
const { sendIssues } = require('./controllers/issues.controller');
const { sendRepos } = require('./controllers/repos.controller');


module.exports = function (app) {
    //ISUES

    app.get('/git-issues/:owner/:repo', getIssuesFromGit, sendIssues);

    //RREPOS
    app.get('/git-repos', getReposFromGit, sendRepos);
    
}
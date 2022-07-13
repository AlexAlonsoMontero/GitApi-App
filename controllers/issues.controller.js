const { response } = require("express");

const sendIssues = (request, response) => {


    response
        .status(200)
        .send({
            info: 'Issues obtenidas de git',
            data: request.body
        })

    /* #swagger.responses[200] = {
        description1: 'User successfully obtained.',
        schema: {
            info: 'Información de la operación',
            data: [
    {
        "url": "https://api.github.com/repos/benawad/dogehouse/issues/2880",
        "repository_url": "https://api.github.com/repos/benawad/dogehouse",
        "labels_url": "https://api.github.com/repos/benawad/dogehouse/issues/2880/labels{/name}",
        "comments_url": "https://api.github.com/repos/benawad/dogehouse/issues/2880/comments",
        "events_url": "https://api.github.com/repos/benawad/dogehouse/issues/2880/events",
        "html_url": "https://github.com/benawad/dogehouse/issues/2880",
        "id": 1299767726,
        "node_id": "I_kwDOFCrI2M5NeOGu",
        "number": 2880,
        "title": "Help me, please!!!",
        "user": {
            "login": "Wilted98",
            "id": 85291544,
            "node_id": "MDQ6VXNlcjg1MjkxNTQ0",
            "avatar_url": "https://avatars.githubusercontent.com/u/85291544?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/Wilted98",
            "html_url": "https://github.com/Wilted98",
            "followers_url": "https://api.github.com/users/Wilted98/followers",
            "following_url": "https://api.github.com/users/Wilted98/following{/other_user}",
            "gists_url": "https://api.github.com/users/Wilted98/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/Wilted98/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/Wilted98/subscriptions",
            "organizations_url": "https://api.github.com/users/Wilted98/orgs",
            "repos_url": "https://api.github.com/users/Wilted98/repos",
            "events_url": "https://api.github.com/users/Wilted98/events{/privacy}",
            "received_events_url": "https://api.github.com/users/Wilted98/received_events",
            "type": "User",
            "site_admin": false
        },
        "labels": [
            {
                "id": 2736734423,
                "node_id": "MDU6TGFiZWwyNzM2NzM0NDIz",
                "url": "https://api.github.com/repos/benawad/dogehouse/labels/bug",
                "name": "bug",
                "color": "d73a4a",
                "default": true,
                "description": "Something isn't working"
            }
        ],
        "state": "open",
        "locked": false,
        "assignee": null,
        "assignees": [],
        "milestone": null,
        "comments": 0,
        "created_at": "2022-07-09T21:10:00Z",
        "updated_at": "2022-07-09T21:10:00Z",
        "closed_at": null,
        "author_association": "NONE",
        "active_lock_reason": null,
        "body": "Please, can anyone make us a tutorial how to properly start the react native app? I need it just to learn the \"good practice\"...How can i make a fake api, or something just to bypass the login page and have access to the rest of the app?? I don't need the voice server, i just want to learn how to use navigation, typescript and the way how Ben was writting this app. I'm stuck at \"Going to the moon....\" screen. Thank you!!!",
        "reactions": {
            "url": "https://api.github.com/repos/benawad/dogehouse/issues/2880/reactions",
            "total_count": 0,
            "+1": 0,
            "-1": 0,
            "laugh": 0,
            "hooray": 0,
            "confused": 0,
            "heart": 0,
            "rocket": 0,
            "eyes": 0
        },
        "timeline_url": "https://api.github.com/repos/benawad/dogehouse/issues/2880/timeline",
        "performed_via_github_app": null,
        "state_reason": null
    }
]
        }
} */
}

module.exports = { sendIssues }
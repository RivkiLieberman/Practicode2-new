const express = require('express');
const app = express();

// פתיחת נקודת גישה לקריאת רשימת האפליקציות המותקנות בחשבון
app.get('/', (req, res) => {
  // רשימת האפליקציות המותקנות בחשבון
  const installedApps = [
    {
      "cursor": "-u7I6itFMx9ra2RnazRxYXJxaTY0ZXMw",
      "service": {
        "id": "srv-ch2nkkdgk4qarqi64es0",
        "autoDeploy": "yes",
        "branch": "main",
        "buildFilter": null,
        "createdAt": "2023-04-23T18:34:57.543169Z",
        "name": "ToDoListServer",
        "notifyOnFail": "default",
        "ownerId": "usr-ch2kq4jh4hsum474ffo0",
        "repo": "https://github.com/RivkiLieberman/PracticodeServer",
        "rootDir": "",
        "slug": "todolistserver-x4fm",
        "suspended": "not_suspended",
        "suspenders": [],
        "type": "web_service",
        "updatedAt": "2023-04-24T13:48:29.953554Z",
        "serviceDetails": {
          "disk": null,
          "env": "docker",
          "envSpecificDetails": {
            "dockerCommand": "",
            "dockerContext": ".",
            "dockerfilePath": "./Dockerfile"
          },
          "healthCheckPath": "",
          "numInstances": 1,
          "openPorts": null,
          "parentServer": null,
          "plan": "free",
          "pullRequestPreviewsEnabled": "no",
          "region": "singapore",
          "url": "https://todolistserver-x4fm.onrender.com"
        }
      }
    },
    {
      "cursor": "s5MsUHE71HF1OHRnazRxYXJxaHU2ZHZn",
      "service": {
        "id": "srv-ch2mu8tgk4qarqhu6dvg",
        "autoDeploy": "yes",
        "branch": "main",
        "buildFilter": null,
        "createdAt": "2023-04-23T17:47:15.389698Z",
        "name": "ToDoListClient",
        "notifyOnFail": "default",
        "ownerId": "usr-ch2kq4jh4hsum474ffo0",
        "repo": "https://github.com/RivkiLieberman/PracticodeClient",
        "rootDir": "",
        "slug": "todolistclient-lurn",
        "suspended": "not_suspended",
        "suspenders": [],
        "type": "static_site",
        "updatedAt": "2023-04-24T13:37:35.283741Z",
        "serviceDetails": {
          "buildCommand": "npm run build",
          "parentServer": null,
          "publishPath": "build",
          "pullRequestPreviewsEnabled": "no",
          "url": "https://todolistclient-lurn.onrender.com"
        }
      }
    }
  ];

  // החזרת רשימת האפליקציות המותקנות בחשבון כ-JSON
  res.json(installedApps);
});

// התחלת השרת וקביעת הפורט ל-3000
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
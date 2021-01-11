# Journal Prompt Api

More prompts can be found at [DaringToLiveFully](https://daringtolivefully.com/journal-prompts)

This api is built using **node.js** and **Express**. It's deployed using [Heroku](https://dashboard.heroku.com/apps), a free cloud hosting service.

## Run Locally
* Execute `npm install`
* Execute `npm start`

## Heroku Deploying

* Login to Heroku via your Terminal: `heroku login`

* Deploy new changes to Heroku using Git:
    * `git add -p`
    * `git commit -m "some message"`
    * `git push heroku master`

* Other useful commands:
    * Api status: `heroku ps:scale web=1`
    * Open deployed app: `heroku open`
    * View logs: `heroku logs --tail`
- [Introduction to Netlify Serverless Functions](#introduction-to-netlify-serverless-functions)
  - [The course *Up and Running with Serverless Functions (Jamstack Explorers)*](#the-course-up-and-running-with-serverless-functions-jamstack-explorers)
    - [📚 Resources](#-resources)
    - [Branches in the repo](#branches-in-the-repo)
  - [My Experience](#my-experience)
    - [netlify-cli](#netlify-cli)
    - [ntl cli help](#ntl-cli-help)
    - [ntl login](#ntl-login)
    - [ntl status](#ntl-status)
    - [ntl init](#ntl-init)

# Introduction to Netlify Serverless Functions

## The course *Up and Running with Serverless Functions (Jamstack Explorers)*

Learn how to use serverless functions in less than 30 minutes!

📼: [Free Video Course](https://explorers.netlify.com/learn/up-and-running-with-serverless-functions/)

### 📚 Resources

| Lesson                                                                                                                                                                                                | Start Branch                                                                                              | End Branch                                                                                              |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| [Introduction with Serverless Functions](https://explorers.netlify.com/learn/up-and-running-with-serverless-functions/introduction-with-serverless-functions)                                         | -                                                                                                         | -                                                                                                       |
| [Project Setup with Serverless Functions](https://explorers.netlify.com/learn/up-and-running-with-serverless-functions/project-setup-with-serverless-functions)                                       | [Start Code](https://github.com/netlify/explorers-up-and-running-with-serverless-functions/tree/02-begin) | [End Code](https://github.com/netlify/explorers-up-and-running-with-serverless-functions/tree/02-end)   |
| [Create Your First Serverless Function](https://explorers.netlify.com/learn/up-and-running-with-serverless-functions/create-your-first-serverless-function)                                           | [Start Code](https://github.com/netlify/explorers-up-and-running-with-serverless-functions/tree/03-begin) | [End Code](https://github.com/netlify/explorers-up-and-running-with-serverless-functions/tree/03-end)   |
| [Integrate with a Third Party API with Serverless Functions](https://explorers.netlify.com/learn/up-and-running-with-serverless-functions/integrate-with-a-third-party-api-with-serverless-functions) | [Start Code](https://github.com/netlify/explorers-up-and-running-with-serverless-functions/tree/04-begin) | [End Code](https://github.com/netlify/explorers-up-and-running-with-serverless-functions/tree/04-end) |
| [Deploying Serverless Functions](https://explorers.netlify.com/learn/up-and-running-with-serverless-functions/deploying-serverless-functions)                                                         | -                                                                                                         | -                                                                                                       |
| [Customizing the Request with Serverless Functions](https://explorers.netlify.com/learn/up-and-running-with-serverless-functions/customizing-the-request-with-serverless-functions)                   | [Start Code](https://github.com/netlify/explorers-up-and-running-with-serverless-functions/tree/06-begin) | [End Code](https://github.com/netlify/explorers-up-and-running-with-serverless-functions/tree/06-end)   |
| [The Power of Atomic Serverless Functions](https://explorers.netlify.com/learn/up-and-running-with-serverless-functions/the-power-of-atomic-serverless-functions)                                     | -                                                                                                         | -                                                                                                       |
| [Next Steps with Serverless Functions](https://explorers.netlify.com/learn/up-and-running-with-serverless-functions/next-steps-with-serverless-functions)                                             | -                                                                                                         | -                                                                                                       |

### Branches in the repo

We can follow the lessons in the video course by checking out the branches in this repo.

```bash
* main
  remotes/up/02-begin
  remotes/up/02-end
  remotes/up/03-begin
  remotes/up/03-end
  remotes/up/04-begin
  remotes/up/04-end
  remotes/up/06-begin
  remotes/up/06-end
  remotes/up/HEAD -> up/main
  remotes/up/chore/fossa-workflow-fix-20210820
  remotes/up/main
  remotes/up/renovate/configure
```

## My Experience

### netlify-cli

The tutoral installs `3.31.14`, but I have `12.2.8` installed.

```
➜  explorers-up-and-running-with-serverless-functions git:(main) npm install netlify-cli -g
added 1438 packages, and audited 1439 packages in 26s
➜  explorers-up-and-running-with-serverless-functions git:(main) npm ls -g netlify-cli
/Users/casianorodriguezleon/.nvm/versions/node/v16.0.0/lib
└── netlify-cli@12.2.8
➜  explorers-up-and-running-with-serverless-functions git:(main) ✗ ntl --version
netlify-cli/12.2.8 darwin-x64 node-v16.0.0
➜  explorers-up-and-running-with-serverless-functions git:(main) ✗ node --version
v16.0.0
```

### ntl cli help

```
➜  explorers-up-and-running-with-serverless-functions git:(main) ✗ ntl --help
VERSION
  netlify-cli/12.2.8 darwin-x64 node-v16.0.0

USAGE
  $ netlify [COMMAND]

COMMANDS
  $ addons       (Beta) Manage Netlify Add-ons
  $ api          Run any Netlify API method
  $ build        (Beta) Build on your local machine
  $ completion   (Beta) Generate shell completion script
  $ deploy       Create a new deploy from the contents of a folder
  $ dev          Local dev server
  $ env          Control environment variables for the current site
  $ functions    Manage netlify functions
  $ recipes      (Beta) Create and modify files in a project using pre-defined
                 recipes
  $ graph        (Beta) Control the Netlify Graph functions for the current
                 site
  $ init         Configure continuous deployment for a new or existing site. To
                 create a new site without continuous deployment, use `netlify sites:create`
  $ link         Link a local repo or project folder to an existing site on
                 Netlify
  $ lm           Handle Netlify Large Media operations
  $ login        Login to your Netlify account
  $ open         Open settings for the site linked to the current folder
  $ sites        Handle various site operations
  $ status       Print status information
  $ switch       Switch your active Netlify account
  $ unlink       Unlink a local folder from a Netlify site
  $ watch        Watch for site deploy to finish
```

### ntl login

``` 
➜  explorers-up-and-running-with-serverless-functions git:(main) ✗ ntl login -h      
Login to your Netlify account

USAGE
  $ netlify login [options]

OPTIONS
  -h, --help                                display help for command
  --new                                     Login to new Netlify account
  --debug                                   Print debugging information
  --httpProxy [address]                     Proxy server address to route requests through.
  --httpProxyCertificateFilename [file]     Certificate file to use when connecting using a proxy
                                            server

DESCRIPTION
  Opens a web browser to acquire an OAuth token.
➜  explorers-up-and-running-with-serverless-functions git:(main) ✗ ntl login
Logging into your Netlify account...
Opening https://app.netlify.com/authorize?response_type=ticket&ticket=7e106850c17d884de123c67a41784ae2
```

AS the help says, it opens a web browser to acquire an OAuth token

![](images/netlify-login-1.png)

Once I've had clicked `Authorize` I've got the following message:

![](images/netlify-login-2.png)

Now in the terminal appears:

```
➜  explorers-up-and-running-with-serverless-functions git:(main) ✗ ntl login
Logging into your Netlify account...
Opening https://app.netlify.com/authorize?response_type=ticket&ticket=7e106850c17d884de123c67a41784ae2

You are now logged into your Netlify account!

Run netlify status for account details

To see all available commands run: netlify help
```

### ntl status

```
➜  explorers-up-and-running-with-serverless-functions git:(main) ntl status
──────────────────────┐
 Current Netlify User │
──────────────────────┘
Name:  Casiano Rodriguez-Leon
Email: xxxx@ull.edu.es
Teams: 
  Casiano Rodriguez-Leon's team: Collaborator
 ›   Warning: Did you run `netlify link` yet?
 ›   Error: You don't appear to be in a folder that is linked to a site
```

### ntl init

```
➜  explorers-up-and-running-with-serverless-functions git:(main) ✗ ntl init

Adding local .netlify folder to .gitignore file...
? What would you like to do? +  Create & configure a new site
? Team: Casiano Rodriguez-Leon's team
? Site name (leave blank for a random name; you can change it later): netlify-serverless-functions-intro

Site Created

Admin URL: https://app.netlify.com/sites/netlify-serverless-functions-intro
URL:       https://netlify-serverless-functions-intro.netlify.app
Site ID:   cXXXXXX-XXXX-XXXXX-XXXX-YYYYYYYYYYY

Linked to netlify-serverless-functions-intro


? Netlify CLI needs access to your GitHub account to configure Webhooks and Deploy Keys. What would you like to do? Authorize with GitHub through app.netlify.com
```

I've chosen to authorize with GitHub through app.netlify.com

![](images/netlify-init-1.png)

and now I'm logged in netlify-cli with my GitHub credentials:

![](images/netlify-init-2.png)
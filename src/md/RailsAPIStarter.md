## Requirements
Before we start you will need Ruby and Rails installed. In this post I'll be working with Rails 6 but it should work on Rails 5 as well. 

## Creating new Rails project

We'll need to create new Rails API-only app. To do so run the following line in your terminal:

```bash
rails new project_name --api --database=postgresql
```
Let's go over custom flags we added to see what they are doing
- `--database=postgresql` - Sets default database to PostgreSQL instead of SQLite
- `--api` - Sets Rails application for API-only mode which means it doesn't add assets folder and sets up some other things

So now the project is created.

## Git
It's good to create a git repository as soon as you create the project. To do so go to GitHub or any other Git service you are using and create a new repository. 

After you created your repository on GitHub or any other platform run the following command to initialize your project as Git repository:

```
git init
```

Copy the HTTPS link you got from creating new repository and run the following lines in your terminal

```
git remote add origin YOUR_HTTPS_LINK

git add .

git commit -m "initial commit"

git push origin master
```

With these commands you created and pushed your initial commit to newly created repository. If you don't understand these commands you can follow [this git guide](https://www.tutorialspoint.com/git/index.htm) (or any other) to learn more about Git.

## Make sure it's working

We'll simply make sure that everything is working for now by running our rails server

```
rails server
```
or

```
rails s
```

## Setting up PostgreSQL

If you don't know how to set up PostgreSQL for Rails check out [this article.](https://www.lukapavicic.com/handbook/setting-up-postgresql-for-rails)

**TO BE CONTINUED...**
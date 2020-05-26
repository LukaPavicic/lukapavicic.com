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
Since we are using PostgreSQL instead of SQLite in our app we need to configure it.

You need to set up your `database.yml` file with these contents:

```yml
default: &default
  adapter: postgresql
  encoding: unicode
  username: <%= ENV['POSTGRES_USER'] %>
  password: <%= ENV['POSTGRES_PASSWORD'] %>
  pool: 5
  timeout: 5000
  host: <%= ENV['POSTGRES_HOST'] %>
development:
  <<: *default
  database: <%= ENV['POSTGRES_DB'] %>
test:
  <<: *default
  database: <%= ENV['POSTGRES_TEST_DB'] %>
production:
  <<: *default
  database: <%= ENV['POSTGRES_DB'] %>
```

We'll need to add a ruby gem to handle our environment variables. In this case we'll be using `dotenv-rails` gem to handle our env variables.

To do so add this line to your `Gemfile`

```rb
gem 'dotenv-rails'
```

After that run `bundle install` or `bundle` command in your terminal to download all gems.

Now it's time to create a `.env` file. You can create it with your IDE or by running `touch .env` command in your terminal.

Once created, add the following code inside

```js
POSTGRES_USER='your_project_name'
POSTGRES_PASSWORD='password12345678'
POSTGRES_HOST='localhost'
POSTGRES_DB='your_project_name'
POSTGRES_TEST_DB='your_project_name_test'
```

This will set all necessary environment variables.

**NOTE:** It is recommended to add `.env` to your `.gitignore` file so it skips that file when pushing to GitHub since it contains sensitive information.

Now it's time to create new PostgreSQL user on your machine. If you don't have PostgreSQL already installed go to [this link](https://www.postgresql.org/download/) to download it on your system.

Once you downloaded PostgreSQL you need to access PostgreSQL console by running `psql postgres`.

Let's create a new role in the console by running this line

```bash
CREATE ROLE your_project_name LOGIN SUPERUSER PASSWORD 'password12345678'
```

Finish it with creating the database by running `rails db:create`.

**TO BE CONTINUED...**
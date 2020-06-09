## Setting up PostgreSQL with Rails
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
# Review Site

In this lesson, we're creating a review site like Yelp or Tripadvisor. On the home page, we'll show a list of top-rated items in the area by category: - restaurants - hotels - things to do.

The items in the list will be categorized by review ratings. Admins can add new items to the categories.
Users can review and rate items from 1 to 5. They must also add a description.

## Initial Setup

As with the other projects:

    - set up an empty Next.js app
      - npx create-next-app@latest localreviews
    - allow absolute imports for modules
      - jsconfig.json
    - add Tailwind CSS
      - npm install -D tailwindcss postcss autoprefixer
      - npx tailwindcss init -p)
      - add configuration to 'tailwind.config.js' and 'styles/globals.css'.
    - create a PostgreSQL database and configure the '.env' file.
    - install Prisma
      - npm install -D prisma
      - npx prisma init)
    - setup authentication:
      - Generate a new secret (https://generate-secret.vercel.app/32)
      - npm install next-auth pg @next-auth/prisma-adapter nodemailer
      - Add the following to the .env file:
            EMAIL_SERVER=smtp://user:pass@smtp.mailtrap.io:465
            EMAIL_FROM=Your name <you@email.com>
            NEXTAUTH_URL=http://localhost:3000
            SECRET=<ENTER A UNIQUE STRING HERE>
      - Create the [...nextauth].js file in '/pages/api/auth'.
      - Add the usual models to the 'prisma/schema.prisma' file (e.g. VerificationRequest, Account, Session, and User).  In this week's User table, there's an additional 'isAdmin' flag.  Be sure to run:
        - npx prisma migrate dev
      - Refactor 'pages/_app.js' to use the 'SessionProvider'.

And lastly, refactor 'index.js' to contain minimal content:

```
        import Head from 'next/head'

        export default function Home() {
        return (
            <div>
            <Head>
                <title>Blog</title>
                <meta name='description' content='Blog' />
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <h1>Welcome!</h1>
            </div>
        )
        }
```

## Create the Home Page

1. Setup the home page with some hard coded listings (e.g. restaurants, hotels, things to do).
2. The hard coded data will eventually be replaced with data from the database.

## Create the Admin Page

1. We will use mail authentication as before. At the moment, we're keeping the sign-in URL (http://localhost:3000/api/auth/signin) hidden.
2. Later, when the user wants to review something, they will need to login if they haven't already.
3. Add a 'pages/admin.js' file where admins can add items to the home page.
4. Temporarily, login using the above URL and then set the 'isAdmin' flag to true. Then, to bring up the admin page, use 'http://localhost:3000/admin'. Note: I missed setting up 'pages/api/auth/[...nextauth].js' properly with 'isAdmin' - fixed.

## Allow the Admin to Add New Items

1. Add a table (Items) to the database that allows for additions of items. To distinguish items from each other, there is a 'type' field that signifies whether the item is a 'restaurant', 'hotel' or 'thing-to-do'. This simplistic table is to keep things simple.
2. To 'pages/admin.js', add a form to allow entry of new items.
3. In the 'onSubmit' for the form, we'll post a request to 'api/new'. The page is then reloaded to allow for sequential entry of items.
4. Add the endpoint handler to 'pages/api/new.js' where there are additional checks to make sure the current user is an admin. For the newly entered item, the rating is initialized to 0.

## Display Items from the Database

1. Currently we show hard coded items. Now we'll pull them from the database.
2. As in past projects, add 'lib/data.js'. Add the 'getItems' function to return the items sorted by their rating (currently all 0).
3. In 'pages/index.js', call 'getItems' from 'getServerSideProps' - add the props as input to the 'Home' page.
4. Now, instead of displaying the hard coded data, display the data from the database ('pages/index.js').

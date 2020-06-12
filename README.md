# Lattice take home excercise
Hey Lattice team! 👋

Thanks for taking the time to review this project, I had a blast working on it. With the limited amount of time, I've only incorporated part of my process of building components. Throughout the projects I've added notes in the format below on what I would do differently if there were more time.

Also, if you have any notes, please let me know! Always excited to learn new approaches to how components are built.

```
@NOTE: A note for those that are reviewing the project
```

## Getting started
#### Installing dependencies
```
npm install
```

#### Running in development
```
npm run dev
```

#### Running in production
```
npm run build
```
```
npm run start
```

#### Running storybook
Storybook will run on port `3001`
```
npm run storybook
```

#### Adding / updating API key
The API key can be modified in `next.config.js` and `.env` file.

## Pages
- `/` - Home page that shows trending and recently released movies
- `/latest` - Displays recently released movies
- `/trending` - Displays trending movies
- `/movie/{id}` - Movie details page that shows the overview, trailer, cast members, and related movies
- `/movie/{id}/cast` - Movie cast page that shows all cast and crew members
- `/search/{query}` - Search results page that shows results based on query

## Notes
- Normally I put the duration of this project into building specific components where I outline how it'll be used and scales with the product, take into consideration web accessibility, and browser support. With the timeframe that I've set for myself with this project, I had to make some compromises in certain areas.
- I've opted out of using TypeScript as it's still a super new thing to me.
- There were a lot of animation ideas that I had for the animation, however I opted out of going overboard for the sake of keeping components simply to make the review process simplier. Since animation logic can sometimes get out of hand.

  Below I've listed some ideas I had in mind:
  - Have the movie results displayed in a staggered animation similiar to [Material Design grid animation](https://github.com/mobiten/flutter_staggered_animations).
  - Once you focus on the search field, the component would expand a white overlay across the page, the input would move up about ~48px and search result sections + filters would fade in a staggered motion.
  - Once you click on a movie, I would apply a shallow router update and only change the URL. Then I would have a white overlay expand out from where the movie is located on the page and have the `<MovieDetails />` fade in over it with the content appearing in a staggered motion.
  - Adding animations for popup component. There would be snap locations on the page, moving to the corners would snap the video into place and moving it to the top would fullscreen it.
- For the home page, I had planned to have "Popular movies" show only 8 results with the "View more" button leading to a different page. Then for the "Latest movies" would have infinite scroll and load additional results as the user continues scrolling.
- Unfortunately, API doesn't allow you to past in a `limit` query making it so results were always 20. I had initially planned to create Severless functions using Next.js API routes and limit it. However, I descoped it since the my purpose of this project was the build the UI and getting everything functional.
- I wanted create live search where results would update immediantly without requiring the user to hit `enter` and the page reloading. However, I'm still unfamiliar with the AbortController canceling requests made to the API.

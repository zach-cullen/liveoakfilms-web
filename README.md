# liveoakfilm.co

See Deployed Site:
[Live Oak Films](https://liveoakfilms.com/)

NextJS React static website for my previous full-time business and now occasional side-hustle Live Oak Films.

## Top Features: 

### Responsive Nav with Animations 
[./components/Nav.js](https://github.com/zach-cullen/liveoakfilm.co/blob/master/components/Nav.js)

### Parallax Hero Video
[./components/Hero.js](https://github.com/zach-cullen/liveoakfilm.co/blob/master/components/Hero.js)

### Full Screen Video Player w/ Animation
[./components/VideoFullScreen.js](https://github.com/zach-cullen/liveoakfilm.co/blob/master/components/VideoFullScreen.js)

## Built Using:

### NextJS

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

### Styled Components

This project makes heavy use of [Styled Components](https://styled-components.com/docs/basics#motivation), a form of 'CSS in JS' that enables developers to write code for a component in only one file, quickly scaffold simple presentational elements, and use props to dynamically set styles. 

This projects also uses styled's ThemeProvider to programmatically set colors and effects for use by CSS styles.

### React Transition Group

React Transition Group ([docs](https://reactcommunity.org/react-transition-group/])) enables animations to be triggered on mount and unmounting of components creating a wedge in the component lifecycle where css classes can be added and removed. 

See ['./components/NavMobileExpanded'](https://github.com/zach-cullen/liveoakfilm.co/blob/master/components/NavMobileExpanded.js) in this project for an example of its use. 

### Front end deployed on Vercel

[Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

### Code Style

[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)


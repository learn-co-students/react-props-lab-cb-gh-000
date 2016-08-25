# React Props lab

## Objectives
1. Practice defining components with default props
2. Override default props with your own prop values

## Overview
![Millennium Falcon](https://media.giphy.com/media/4kL3Q4lIggnGU/giphy.gif)

Let's say we're a spaceship captain going to a local Star Wars meetup. Since we want to showcase the awesome ships
people are commandeering, we need to represent them somehow. That's where you come in! You'll be creating a React
component that shows us some info on a given spaceship.

1. In the `components/Spaceship.js` file, create a `Spaceship` React component
2. This component has several props: 
    1. `name` (string)
    2. `speed` (number)
    3. `hasRockets` (boolean, defaults to `false`)
    4. `colors` (array of strings, defaults to `['black', 'red']`)
    
Feel free to render out the data in any form you wish!

Note: you'll need to _export_ the `Spaceship` component, like this:

```js
module.exports = class Spaceship extends React.Component { ... };
// OR
module.exports = React.createClass({ ... });
// OR declare your component first, and then:
module.exports = Spaceship;
```
 
## Resources
- [Default Props](https://facebook.github.io/react/docs/reusable-components.html#default-prop-values)

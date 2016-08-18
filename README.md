# React Props lab

## Objectives
1. Practice defining components with default props
2. Override default props with your own prop values

## Overview
![Mad Max](https://media.giphy.com/media/84bpBkUVOsJ8Y/giphy.gif)

Let's say we're a War Boy going to a local Fury Road car meetup. Since we're going to be talking about our
post-apocalyptic murder machines on wheels, we need to represent them somehow. That's where you come in! You'll be
creating a React component that shows us some info on a given car.

1. In the `components/Car.js` file, create a `Car` React component
2. This component has several props: 
    1. `name` (string)
    2. `horsepower` (number)
    3. `hasRockets` (boolean, defaults to `false`)
    4. `colors` (array of strings, defaults to `['black', 'red']`)
    
Feel free to render out the data in any form you wish!

Note: you'll need to _export_ the `Car` component, like this:

```js
module.exports = class Car extends React.Component { ... };
// OR
module.exports = React.createClass({ ... });
// OR declare your component first, and then:
module.exports = Car;
```
 
## Resources
- [Default Props](https://facebook.github.io/react/docs/reusable-components.html#default-prop-values)

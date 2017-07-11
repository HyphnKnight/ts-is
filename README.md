# ts-is
Utility for typescript typechecking.
## What is it?
Exports a single func `is` which has the following type notation:
```ts
declare const is: <type>(func?: (x: any) => boolean) => (unknown: any) => unknown is type;
```
I use it often to create typeChecking functions for my typescript projects. For example if I have a vector class.
```ts
type Vector {
  x: number;
  y: number;
}

export const isVector = is<Vector>(u => typeof u.x === 'number' && typeof u.y === 'number');

const three = 3;
isVector(three) // returns false;

const aVector = {x:0,y:3};
if(isVector(aVector)){
  // compiler knows aVector is a vector here
}
```
## How do I use it?
Start by installing it in your project.
```
npm install --save ts-is
```
then any of the following should work
```js
const is = require('ts-is');
const { is } = require('ts-is');
import is from 'ts-is';
import { is } from 'ts-is';
```

Good luck and I hope this is usefull for you! (:

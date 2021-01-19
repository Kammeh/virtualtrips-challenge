# Questions

Q1: Explain the output of the following code and why

```js
    setTimeout(function() {
      console.log("1");
    }, 100);
    console.log("2");
```

Output:
```
2
1
```

Explanation:

Javascript is a syncronous language, and utilises an event loop to handle ensure processing is not held up unnecessarily.  The Timeout function is moved into the event loop to be run when the timer has finished, and the code carries on executing in the meantime

Q2: Explain the output of the following code and why

```js
    function foo(d) {
      if(d < 10) {
        foo(d+1);
      }
      console.log(d);
    }
    foo(0);
```

Output:
```
10
9
8
7
6
5
4
3
2
1
0
```

Explanation:

The function calls itself if the number is less than 10, which means the count will get stuck in a loop until the count has gone over 10.  At that point, the loop will then execute the rest of the function for each of the numbers that were counted.

Q3: If nothing is provided to `foo` we want the default response to be `5`. Explain the potential issue with the following code:

```js
    function foo(d) {
      d = d || 5;
      console.log(d);
    }
```

Explanation:

Use of the || operator will create a boolean check on the value passed to it (d).  In this example, we couldn't set d to 0 as that would evaulate to false and output the default value of 5 instead.

Q4: Explain the output of the following code and why

```js
    function foo(a) {
      return function(b) {
        return a + b;
      }
    }
    var bar = foo(1);
    console.log(bar(2))
```

Output:
`3`

Explanation:

The `foo` returns a function, storing the data passed to it as variable `a`.  When the resulting function is implemented, it runs the addition using the initial value (`a`) and the next value (`b`).  The `bar` function has become a function to add 1 to a number, so if we had `console.log(bar(4))`, the resulting output would be `5`.

Q5: Explain how the following function would be used

```js
    function double(a, done) {
      setTimeout(function() {
        done(a * 2);
      }, 100);
    }
```

The function is utilised to double a number after 100 milliseconds.  The result is passed back to a callback function that can then utilise it for whatever is required.  Implementation could look like:

```
double(2, (res) => {
  console.log(res)
})
```

This would output `4` after 100ms

# seeded-shuffle
A fast seeded shuffle in javascript based on the Fisher-Yates/Knuth shuffle and calculating the number of possibilities. Currently only supporting small arrays (length of 12 or possibly more depending on your browser), but with plans to fix that. [(See Caveats)](#caveats)

## Usage
`shuffle(array[, seed]) // seed must be a positive integer >= 0`  
Shuffles an `array` based on an optional `seed` value. If no `seed` value is passed then it will generate one based on the max unique possibilities.

`reverseShuffle(array[, seed]) // seed must be a positive integer >= 0`  
Does a reverse shuffle on an `array` based on an optional `seed` value. If no `seed` value is passed then it will generate one based on the max unique possibilities. If `shuffle()` was used with a seed of `n` using `reverseShuffle()` with the same seed will result in the array before the `shuffle()` took affect.

`createSeed(length)`  
Creates a seed based on a length value presumed to be the length of an array. It does so by calculating the number of possible shuffles, then randomly picking a number from within that range.

## Explanation
The idea is that for each given array with length `n`, there are `(n) * (n-1) * (n-2) ... (up until n-x = 1 or effectively n-x = 2)` possibilities for how the array could be arranged. From each of the numbers between n-1 and 0, we are given the needed seed value for each unique possible shuffle.

This may sound crazy, but it's true. I'll try to explain some of the math behind it.

Say we have an array `[a, b, c, d]`, this array has `4 * 3 * 2 [* 1] = 24` possible ways it can be ordered.

Think of that in terms of `0 to 23` possible orderings, with `0` representing the current state of the array `[a, b, c, d]`.

Now let's pick a number from `0 to 23`, let's start with that last possibility `23`.

We are going to figure out what that `23`rd possibility is, just by that number and the length of the array. (It does sound crazy)

Let's use the modulo operator to find the remainder of `23 / 4`.

`23 % 4 = 3`  
Awesome we just got a single value, let's get some more. Remember `4` is coming from the length of our array

`Math.floor(23 / 4) % 3 = 5 % 3 = 2`  
Since we already used the number `23` we instead use the floored value from our previous division.

`Math.floor(5 / 3) % 2 = 1 % 2 = 1`  
We just got 3 values `[3, 2, 1]`. If you're at all familiar with the idea behind a Fisher-Yates/Knuth shuffle then you might have some idea how we can use these values. If not don't worry I'll try my best to explain. I would suggest reading up on it if you're interested though, [Wikipedia has a informative article.](https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle)

Each of these values will represent a positional swap during the shuffle, the first value `3` will represent a swap for `a` in our array:  
`[a, b, c, d]`

There are `0 to 3` positions to the right of `a`. If our first value had of been `0` then `a` wouldn't have been able to swap with anyone.

Since it was `3` let's swap `a` with `d` to get a new array of:  
`[d, b, c, a]`

Our second swap number was `2` so let's swap the second element `b` (from our new array) with the element that's `2` to the right:  
`[d, a, c, b]`

Lastly we'll swap our third position `c` with the element that's `1` to the right:  
`[d, a, b, c]`

That's it, you've shuffled the array. Try it with a few more starting values and see what you get. Also if you're curious you could try a number above `23`, the number `24` will yield the same result as `0`, `25` the same as `1`, and so on.

Try it with different sizes of arrays, the array `[cat, dog, mouse, horse, cart]` has `120` possibilities.

## Caveats
You may notice though that the number of possibilities grows rapidly as the size of the array increases. Let's say the array has a length of 20, that's roughly 2 Quintillion possible unique shuffles. Needless to say javascript doesn't play nice with numbers that big. I've got a few plans to get around that though, so look for future updates.

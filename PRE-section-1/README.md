
# Northcoders Precourse Section 1


## Step 1: Sign up with Codewars

One of the most important things you can do for yourself before the course begins is to get as much practice at solving problems with JavaScript as possible.

Please sign up with [Codewars](http://www.codewars.com/r/LwRQbA) if you have not already got an account. If you haven't done so already, please email [precourse@northcoders.com](mailto:precourse@northcoders.com) with your Codewars username so we can keep track of your progress.

During the Precourse, it's good to practice what you've been learning in each section by completing level 8, 7 and 6 katas.

Here are some recommended katas to get you started.

 - [Max and Min Values](http://www.codewars.com/kata/find-maximum-and-minimum-values-of-a-list)
 - [Miles per gallon to kilometers per liter](http://www.codewars.com/kata/miles-per-gallon-to-kilometers-per-liter)
 - [Find nth Digit](http://www.codewars.com/kata/find-nth-digit-of-a-number)
 - [Are the numbers in order?](http://www.codewars.com/kata/are-the-numbers-in-order)
 - [Get the Middle Character](http://www.codewars.com/kata/get-the-middle-character)
 - [Removing Elements](http://www.codewars.com/kata/removing-elements)
 - [Initialize my name](http://www.codewars.com/kata/initialize-my-name)
 - [Needle in a Haystack](http://www.codewars.com/kata/a-needle-in-the-haystack)
 - [Alternating Case](http://www.codewars.com/kata/alternating-case-%3C-equals-%3E-alternating-case)

### JavaScript built-in methods

Most programming languages have a lot of built-in functions for common operations at your disposal. For example, there's no point in spending hours implementing a function to change a character to upper case when we can quickly use `.toUpperCase()`. Here's a list of JavaScript methods for you to start getting familiar with. Many of them will come in handy to solve the CodeWars challenges.

- [toUpperCase](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase) / [toLowerCase](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase)
- [toString](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/toString)
- [split](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/split)
- [join](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/join)
- [reverse](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse)
- [slice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)
- [indexOf](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)
- [toFixed](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed)


## Step 2: Start using the command line

Please read [this article](http://learntocodewith.me/getting-started/topics/command-line/) that explains why we use the command line.

Please follow [this tutorial](https://www.learnenough.com/command-line-tutorial) on using the command line. Follow the whole course up to the end, completing the exercises. Code Academy also has [more practice material](https://codeacademy.com/learn/learn-the-command-line) on the command line if you want to use this in addition.

Print out or bookmark this [cheat sheet](https://www.git-tower.com/blog/command-line-cheat-sheet/) of common commands. The directories and files commands are most useful so try to practice with these and commit them to memory as soon as possible.

From now onwards, try to **always** use your terminal program (iTerm, Hyper, Terminator or git bash) to navigate around your computer, make, move, copy or remove files and folders.


## Step 3: Learn about Git and Github

Git and Github are big topics, but they are also extremely important in our daily work so it's vital you begin to learn about how they work.

You will have already signed up with Github, but now's a good time to learn more about what it actually is!

For a basic introduction to Git and Github, please watch videos 1-7 of [this playlist](https://www.youtube.com/playlist?list=PLRqwX-V7Uu6ZF9C0YMKuns9sLDzK6zoiV).

You should have already installed git. If not, revisit the Install Guide at the beginning of this PDF.

Try out git yourself by following units 1-3 of the [learn git track on Codeacademy](https://www.codecademy.com/learn/learn-git).

You will need to use Git to download this repository so that you can complete the final challenges!


## FINAL CHALLENGE

To complete section 1, you need to complete some JavaScript drills to test your core knowledge, and prove your Git and Github skills by committing and pushing your code to Github.

You need Node correctly installed before beginning this challenge.

1. Fork and clone this repository as seen in the video below.
2. `cd` into the repository and then again `cd` into the finalChallenges directory.
3. Run `npm install` in your terminal
4. Run `npm test` in your terminal to see the test suite
5. Open the first set of drills in VS Code and begin solving them, looking to the test suite and reading the comments for guidance.
6. Run the test suite regularly using `npm test` to see how you are doing.
7. Practice using git from the command line by adding and committing your work frequently as you work through the exercises.(tip: commit whenever you make something work, use commits to celebrate small victories)
8. When you are happy with your solutions, make a final commit and push the work to your Github.
9. Once you've solved ALL of the problems and are happy with your solutions<a href='https://nc-precourse-review.herokuapp.com/complete?section=1' target='_blank'> request a review.</a>

## Videos

Please watch these videos demonstrating the workflow you will need to complete the end-of-section challenges.

[Forking and cloning the project](https://vimeo.com/243691923/ed57436c53)

[Solving some drills](https://vimeo.com/243828846/d6ad266828)

[Pushing your completed code to Github](https://vimeo.com/243841377/3b6df0e550)

## Tips

If you can't solve a function and it is stopping you from moving on to the next problem, you can stop a particular test from running by opening the corresponding test file and putting an x before the `describe` block for the function in question:

```javascript
xdescribe('createProduct', function () {
  it('should create the expected product', function () {
    expect(createProduct()).to.haveOwnProperty('type');
    expect(createProduct()).to.haveOwnProperty('price');
    expect(createProduct().price).to.be.a('number');
    expect(createProduct().type).to.be.a('string');
  });
});
```

Save the file and that particular test will be skipped, allowing you to continue.

Remember to un-x the test when you want to try the function again!

## When you're finished

<a href='https://nc-precourse-review.herokuapp.com/complete?section=1' target='_blank'>
Request a Review of Section 1</a>

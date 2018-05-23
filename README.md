# binaryTrees in JavaScript
On this repo I'm putting all the codes that are related to binary trees. 
I've decided to create these because I can't find too many JavaScript solutions for algorithim study materials. 

Hopefully these will be useful in the future when I have to go through interviews again for anyone who are looking for JavaSceript solutions for algorithm study materials.   

I welcome any suggestion/better solutions. 

## Example 1 - checkBST
```
function checkBST(){
```
Funtion to check if a tree is a binay search tree or not. 
HakerRank/Cracking Code Interview, Gayle Laakmann McDowell, explain really well in [this video](https://www.youtube.com/watch?time_continue=4&v=i_Q0v_Ct5lY). But again, there is no JS solution....(T_T)

In JavaScript, we can take advantage of "flexibility" of the laungugage (I usuaslly calle it quirkiness/annoyance of JS).

*side note 1: This comes from difference between Statically typed and dynamically typed languages. If I find a good read on this, I will link it here.*

- **Not requred to define return type and argument type**

```boolean checkBST(Node root, int minValue, int maxValue)```
can be simply be ```function checkBST(root, minValue, maxValue){ ```

 - **Can't use same function name twice but can set the initial value in arguments**

You can see that Java solution has too checkBST, one is to process initial root and Java min & max number. 

*side note 2: Java int min & max are different from JavaScript Number.MAX_VALUE & Number.MIN_VALUE!* 

``` 
function checkBST(
  root,
  minValue = Number.MIN_VALUE,
  maxValue = Number.MAX_VALUE
) 
```
## Another Good Reference for BST in JavaScript
This guy has everything in JS (except verify if it's a BST or not) [It's a good Read](https://khan4019.github.io/front-end-Interview-Questions/bst.html). One thing I'm not happy about his page is that code is missing documentation. 

I think details of what makes a good code better than what noobs (like myself...) make are not taught thought anything besides "work experience".  You have to ~~force~~ have a really good programmer sit with great patient to show you and explain a thing or two. 

I tried to capture them as much as I can in the documentaion.  Good example would be:
## Example 2 - buildBST
Use of "true" as a paremeter for while loop. It's really easy to use "true", but after it kickes you out (return) from the loop, you can't use it for anything else. If you want to use parentNode/currentNode value for something else, you want to use some other parameter (buildBST.js has a value set to true, false. khan4019 uses currentNode).

khan made one class and used prototype. I used two classes. Why one is better than the other? I'm guessing it depends on what you're doing with it or what the rest of the architecture looks like.  Someday I will be experienced enough to write up on this or find some good read. 

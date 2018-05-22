# binaryTrees in JavaScript
On this repo I'm putting all the codes that are related to binary trees. 
I've decided to create these because I can't find too many JavaScript solutions for algorithim study materials. 

Hopefully these will be useful in the future when I have to go through interviews again for anyone who are looking for JavaSceript solutions for algorithm study materials.   

I welcome any suggestion to come up with better solutions. 

## Example - checkBST
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

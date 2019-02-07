/* =====================
# Lab 2, Part 1 — Underscore Selection

## Introduction

Set variables "query1" through "query8" by using an underscore function to answer the specified question. When you are finished, check your browser's console log to test the results.

For data, use the following two lists of board game collections.
===================== */

var rossGameList = ["catan", "hanabi", "code names", "chess", "candyland"];
console.log('ross\'s list', rossGameList);

var nathanGameList = ["chess", "dice", "catan", "pandemic"];
console.log('Nathan\'s list', nathanGameList);

/* =====================
What is the first game in Ross's list?
===================== */

var query1;
var query1=_.first(rossGameList);
console.log('What is the first game in Ross\'s list?', query1);

/* =====================
What are all of the games except for the first game in ross's list?
===================== */

var query2;
var query2=_.rest(rossGameList);

console.log('What are all of the games except for the first game in Ross\'s list?', query2);

/* =====================
What is the last game in Nathan's list?
===================== */

var query3;

var query3=_.last(nathanGameList);

console.log('What is the last game in Nathan\'s list?', query3);

/* =====================
What are all of the games in Nathan's list except for the last?
===================== */

var query4;
var query4=_.initial(nathanGameList);

console.log('What are all of the games in Nathan\'s list except for the last?', query4);

/* =====================
What would Nathan's game list look like if he sold "catan"?
===================== */

var query5;
var query5=_.without(nathanGameList,"catan");

console.log('What would Nathan\'s game list look like if he sold "catan"?', query5);

/* =====================
If Nathan and Ross play a board game, what are their options? This should be a list of all games owned by ross or Nathan, with no duplicates.
===================== */

var query6;
var query6=_.uniq(nathanGameList,rossGameList);

console.log('If Nathan and Ross play a board game, what are their options? This should be a list of all games owned by ross or Nathan, with no duplicates.', query6);

/* =====================
Which games are owned by both Ross and Nathan?
===================== */

var query7;
query7=_.intersection(nathanGameList,rossGameList);
console.log('Which games are owned by both Ross and Nathan', query7);

/* =====================
Which games are exclusive to collections? In other words, only owned by either Ross or Nathan.
===================== */

var query8;
query8=_.difference(nathanGameList,rossGameList);
console.log('Which games are exclusive to one collection? In other words, only owned by either Ross or Nathan (but not both!).', query8);

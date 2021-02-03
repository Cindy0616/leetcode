/*
Given a set of words (without duplicates), find all word squares you can build from them.

A sequence of words forms a valid word square if the kth row and column read the exact same string, where 0 ≤ k < max(numRows, numColumns).

For example, the word sequence ["ball","area","lead","lady"] forms a word square because each word reads the same both horizontally and vertically.
b a l l
a r e a
l e a d
l a d y
Note:
There are at least 1 and at most 1000 words.
All words will have the exact same length.
Word length is at least 1 and at most 5.
Each word contains only lowercase English alphabet a-z.
Input:
["area","lead","wall","lady","ball"]

Output:
[
  [ "wall",
    "area",
    "lead",
    "lady"
  ],
  [ "ball",
    "area",
    "lead",
    "lady"
  ]
]

Explanation:
The output consists of two word squares. The order of output does not matter (just the order of words in each word square matters).
*/
/*
var Trie = function Trie() {
  this.nodes = {};
  this.length = 1;
};

Trie.prototype.getLength = function () {
  return this.length;
};

Trie.prototype.insert = function (word) {
  var node = this.nodes;
  word = word.split("").map(function (e) {
    return e.toUpperCase();
  });
  var idx = 0;
  var newWord = false;
  while (idx < word.length) {
    if (node[word[idx]]) {
      node = node[word[idx]];
    } else {
      //inserting a new word
      newWord = true;
      node[word[idx]] = {};
      node = node[word[idx]];
    }
    if (idx === word.length - 1) {
      node.end = true;
    }
    idx++;
  }
  if (newWord) {
    this.length++;
  }
};
Trie.prototype.delete = function (word) {
  var findWord = this.search(word);
  if (!findWord) {
    return false;
  }
  if (findWord.result.end) {
    delete findWord.result.end;
  }
  if (findWord.lastEnd) {
    var key = findWord.lastEnd.key;
    delete findWord.lastEnd.node[key];
  }
  this.length--;
  return true;
};
Trie.prototype.search = function (word) {
  word = word.split("").map(function (e) {
    return e.toUpperCase();
  });
  var node = this.nodes;
  var lastEnd = null;
  for (var i = 0; i < word.length; i++) {
    if (!node[word[i]]) {
      return false;
    } else {
      node = node[word[i]];
      if (Object.keys(node).length > 1 && i !== word.length - 1) {
        lastEnd = { node: node, key: word[i + 1] };
      }
    }
  }
  return node.end ? { result: node, lastEnd: lastEnd } : false;
};
Trie.prototype.find = function (word) {
  return this.search(word) ? true : false;
};
Trie.prototype.getNode = function (word) {
  word = word.split("").map(function (e) {
    return e.toUpperCase();
  });
  var node = this.nodes;
  for (var i = 0; i < word.length; i++) {
    if (!node[word[i]]) {
      return false;
    } else {
      node = node[word[i]];
    }
  }
  return node;
};
Trie.prototype.printWords = function () {
  var wordList = [];
  var word = "";
  recursePrint(this.nodes, word, wordList);
  function recursePrint(node, word, list) {
    var keys = Object.keys(node);
    for (var i = 0; i < keys.length; i++) {
      if (keys[i] === 'end') {
        list.push(word);
      } else {
        recursePrint(node[keys[i]], word + keys[i], list);
      }
    }
  }
  return wordList;
};
Trie.prototype.wildcardFind = function (query) {
  query = query.replace(/[^a-z*]/gi, '').split("").map(function (e) {
    return e.toUpperCase();
  });
  var wordList = [];
  var word = "";
  recursePrint(this.nodes, word, wordList);
  function recursePrint(node, word, list) {
    var idx = word.length;
    if (word.length > query.length) {
      return false;
    } else {
      if (Object.keys(node).includes('end') && word.length === query.length) {
        list.push(word);
      }
      var keys = query[idx] == '*' ? Object.keys(node) : [query[idx]];
      for (var i = 0; i < keys.length; i++) {
        recursePrint(node[keys[i]], word + keys[i], list);
      }
    }
  }
  return wordList;
};
Trie.prototype.prefixFind = function (prefix) {
  var desiredLength = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

  var wordList = [];
  prefix = prefix.replace(/[^a-z]/gi, '').toUpperCase();
  recursePrint(this.getNode(prefix), prefix, wordList);
  function recursePrint(node, word, list) {
    var idx = word.length;
    if (desiredLength && word.length > desiredLength) {
      return false;
    } else {
      var keys = null;
      if (Object.keys(node).includes('end')) {
        if (!desiredLength) {
          list.push(word);
        } else if (word.length === desiredLength) {
          list.push(word);
        }
      }
      keys = idx < prefix.length ? [prefix[idx]] : Object.keys(node);
      for (var i = 0; i < keys.length; i++) {
        recursePrint(node[keys[i]], word + keys[i], list);
      }
    }
  }
  return wordList;
};
window.onload = function () {
  var searchTimes = [];
  var start = null;
  var end = null;
  var T = new Trie();
  var message = document.getElementById('message');
  var input = document.getElementById('wordSearch');
  input.addEventListener('keyup', benchmarkAndDisplay);
  var results = document.getElementById('results');

  function benchmarkAndDisplay() {
    start = performance.now();
    var res = T.prefixFind(input.value);
    var len = res.length;
    results.textContent = res.join("\n");
    end = performance.now();
    if (end - start > 0 && len !== 0) {
      searchTimes.push((end - start) / len);
    }
    message.textContent = "Found " + len + " words in " + String(end - start).slice(0, 5) + " ms (avg ms/word time: " + String(searchTimes.reduce(function (a, b) {
      return a += b;
    }, 0) / searchTimes.length).slice(0, 5) + " ms)";
  }
  start = performance.now();
  for (var i = 0; i < wordList.length; i++) {
    T.insert(wordList[i]);
  }
  end = performance.now();
  message.textContent = "Inserted " + T.getLength() + " words into trie in " + String(end - start).slice(0, 5) + " ms";
  setTimeout(function () {
    input.value = 'a';
    benchmarkAndDisplay();
  }, 2000);
};
var wordList = "";
*/
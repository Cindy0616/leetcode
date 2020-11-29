//Given an m x n 2d grid map of '1's (land) and '0's (water), return the number of islands.

//An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

/*
 * @param {character[][]} grid
 * @return {number}
 */
var callDFS = function(grid, i, j){
  //base case
  if(i < 0 || j < 0 || i >= grid.length || j >= grid[i].length || grid[i][j] == "0"){
      return;
  }
  grid[i][j] = "0";
  callDFS(grid, i+1, j);
  callDFS(grid, i-1, j);
  callDFS(grid, i, j+1);
  callDFS(grid, i, j-1);
}
var numIslands = function(grid) {
  let count = 0;
  for(let i = 0; i < grid.length; i++){
      for(let j = 0; j < grid[i].length; j++){
          if(grid[i][j] == "1"){
              count += 1;
              callDFS(grid, i, j);
          }
      }
  }
  return count;
};

/*
function callDFS(r, c) {
  if(r < 0 || r >= grid.length || grid[r][c] !== '1') return;
  grid[r][c] = '0';

  callDFS(r+1, c); // down
  callDFS(r-1, c); // up
  callDFS(r, c+1); // right
  callDFS(r, c-1); // left
}
return islands;
};
*/
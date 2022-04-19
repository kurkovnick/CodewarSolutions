arr = [[1,2],[3,4],[5,6]

function bigToSmall(arr){
  let result=[];
  for (var i=0;i<arr.length;i++) 
    result=result.concat(arr[i]);
  result = result.sort((a, b) => b - a);
  return(result.join(">"))
}

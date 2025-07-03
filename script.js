function mincost(arr)
{ 
//write your code here
// return the min cost
	const heap = [];
	let totalCost = 0;

	for(let length of arr){
		heap.push(length);
	}

	heap.sort((a,b) => a - b);

	while(heap.length > 1){
		const r1 = heap.shift();
		const r2 = heap.shift();
		const cost = r1 + r2;
		heap.push(cost);
		totalCost+=r1 + r2;
		heap.sort((a, b) => a - b);
	}
	return totalCost;
  
}

module.exports=mincost;

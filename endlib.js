function tick(spins,d){
	var arr = [];
	var use = (spins *360)/d;
	for(i=0;i<d;i++){
		arr.push(use*i)
	}
	return arr
}
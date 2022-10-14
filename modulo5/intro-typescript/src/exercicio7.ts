function transformToRna (dna: string):string {
    let rna = ""
    for(let i = 0; i < dna.length; i ++) {
		if (dna[i] === 'A'){
			rna += dna[i].replace('A','U');
		} else if (dna[i] === 'T'){
			rna += dna[i].replace('T','A');
		} else if (dna[i] === 'C'){
			rna += dna[i].replace('C','G');
		} else{
			rna += dna[i].replace('G','C');
		}
    }
    return rna
}

console.log(transformToRna("ATTGCTGCGCATTAACGACGCGTA"))

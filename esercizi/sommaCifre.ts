function sommaCifre(v: number): number {
    if(v == 0) return 0;
    return v % 10 + sommaCifre(Math.floor(v / 10));
}

console.log(sommaCifre(12345))
function mygcd(x,y){
    //your code here
    if (y === 0) return x;
    return mygcd(y, x%y);
}

console.log(mygcd(4, 8))

/**
 * mygcd(4, 8)
 *       return mygcd(8, 4)
 *              return (4, 0)
 *                      return 4
 * 
 */
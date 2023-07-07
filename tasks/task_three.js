const clothes = ['shirt', 'skirt', 'gown', 'top', 'socks']

const result = clothes[3]
console.log(result) // @logs top

clothes[0] = 'underwear'
console.log(clothes) // @logs [ 'underwear', 'shirt', 'skirt', 'gown', 'top', 'socks' ]
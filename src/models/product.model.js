export default class ProductModel {
  constructor(id, name, ingre, price, imageUrl) {
    this.id = id;
    this.name = name;
    this.ingre = ingre;
    this.price = price;
    this.imageUrl = imageUrl;
  }

  static getAll() {
    return products;
  }

  static update(productObj) {
    const index = products.findIndex(
      (p) => p.id == productObj.id
    );
    products[index] = productObj;
  }

  static delete(id) {
    const index = products.findIndex(
      (p) => p.id == id
    );
    products.splice(index, 1);
  }

  static add(name, ingre, price, imageUrl) {
    let newProduct = new ProductModel(
      products.length + 1,
      name,
      ingre,
      price,
      imageUrl
    );
    products.push(newProduct);
  }

  static getById(id) {
    return products.find((p) => p.id == id);
  }
}

var products = [
  new ProductModel(
    1,
    'Pasta',
    'Flour ,Eggs ,water ,Salt ,Olive oil',
    19.99,
    'https://www.epicurious.com/recipes-menus/the-best-new-pasta-recipes-to-try-gallery'
  ),
  new ProductModel(
    2,
    'Maggi',
     'Maggi,Egg,Oil, Vegetables,Water',
    29.99,
    'https://assets.gqindia.com/photos/5e7b607a0b0ce700084bd587/master/w_1440%2cc_limit/Chilli%20Cheese%20Maggi%20.jpg'
  ),
  new ProductModel(
    3,
    'Butter Chicken',
    '500g chicken,½ cup yogurt,1 tbsp lemon juice,1 tbsp lemon juice,1 tsp turmeric powder,1 tsp salt,1 tbsp oil or butter',
    39.99,
    'https://t3.ftcdn.net/jpg/06/01/41/68/360_F_601416862_AfYdeefqT1kGqWTx1DZCsJZVzYIDFzPR.jpg'
  ),
  new ProductModel(
    4,
    'Butter Panner',
    '500g Panner,½ cup yogurt,1 tbsp lemon juice,1 tbsp lemon juice',
    39.99,
    'https://www.google.co.in/url?sa=i&url=https%3A%2F%2Fwww.eitanbernath.com%2F2020%2F05%2F10%2Fbutter-paneer%2F&psig=AOvVaw0R4J5Zsq1SDxa8bQX-OyCg&ust=1739818757198000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCKjDmIrwyIsDFQAAAAAdAAAAABAJ'
  ),
];

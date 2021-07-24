/*
 * Работем с коллекцией товаров в корзине:
 * - getItems()
 * - add(product)
 * - remove(productName)
 * - clear()
 * - countTotalPrice()
 * - increaseQuantity(productName)
 * - decreaseQuantity(productName)
 *
 * { name: '🍎', price: 50 }
 * { name: '🍇', price: 70 }
 * { name: '🍋', price: 60 }
 * { name: '🍓', price: 110 }
 */

const cart = {
  items: [],
  getItems() {
    return this.items;
  },
  add(product) {
    const newProduct = {
      ...product,
      quantity: 1,
    };
    this.items.push(newProduct);
  },
  remove(productName) {
    for (let i = 0; i < this.items.length; i += 1) {
      const { name } = this.items[i];
      if (productName === name) {
        this.items.splice(i, 1);
      }
    }
  },
  clear() {
    this.items = [];
  },
  countTotalPrice() {},
  increaseQuantity(productName) {
    for (let item of this.items) {
      const { name } = item;
      if (productName === name) {
        item.quantity += 1;
        return;
      }
    }
  },
  decreaseQuantity(productName) {
    for (let item of this.items) {
      const { name, quantity } = item;
      if (productName === name && quantity > 0) {
        item.quantity -= 1;
        return;
      }
    }
  },
  countTotalPrice() {
    let total = 0;
    for (let item of this.items) {
      const { price, quantity } = item;
      total += price * quantity;
    }
    return total;
  },
};

console.table('до добавления товара в корзину', cart.getItems());

cart.add({ name: '🍎', price: 50 });
cart.add({ name: '🍋', price: 60 });
cart.add({ name: '🍋', price: 60 });
cart.add({ name: '🍓', price: 110 });

console.table('после добавления товара в корзину', cart.getItems());

// cart.remove('🍎');
// console.table('после удаления товара в корзине', cart.getItems());

// cart.clear();
// console.table('после очистки корзины', cart.getItems());

cart.increaseQuantity('🍎');
console.table('после увелечение кличества товара', cart.getItems());

cart.decreaseQuantity('🍋');
cart.decreaseQuantity('🍋');
console.table('после уменьешения количества товара', cart.getItems());

console.log('Total: ', cart.countTotalPrice());

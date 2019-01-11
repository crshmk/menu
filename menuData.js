
export const menu = {
  categories: [
    {
      id: 1,
      name: 'food'
    },
    {
      id: 2,
      name: 'drinks'
    },
    {
      id: 3,
      name: 'dessert'
    }
  ],
  sides: [
    {
      id: 12,
      name: 'cole slaw',
      prices: [{size: 'small', price: 1}, {size: 'large', price: 1.5}]
    },
    {
      id: 13,
      name: 'fries',
      price: 3
    }
  ],
  sauces: [
    {
      id: 21,
      name: 'ketchup',
      price: 0
    },
    {
      id: 22,
      name: 'mayo',
      price: 0
    }
  ],
  ingredients: [
    {
      id: 31,
      name: 'lettuce',
      price: 0
    },
    {
      id: 32,
      name: 'tomato',
      price: 0
    },
    {
      id: 33,
      name: 'onion',
      price: 0
    },
    {
      id: 34,
      name: 'pickle',
      price: 0
    },
    {
      id: 35,
      name: 'cheese',
      price: 0
    },
    {
      id: 36,
      name: 'ketchup',
      price: 0
    },
    {
      id: 37,
      name: 'mayo',
      price: 0
    },
    {
      id: 38,
      name: 'creamer',
      price: 0
    },
    {
      id: 39,
      name: 'honey',
      price: 0
    },

  ],
  upgrades: [
    {
      id: 41,
      name: 'double patty',
      price: 3
    },
    {
      id: 42,
      name: 'whole wheat bun',
      price: 1
    }
  ],
  selects: ['hot', 'cold'],
  options: [
    {
      id: 51,
      name: 'supersize'
    },
    {
      id: 52,
      name: 'extra cheese'
    },
    {
      id: 53,
      name: 'iced'
    }
  ],
  items: [
    {
      category: 1,
      name: 'burger',
      price: 4,
      defaults: [31, 32, 33, 34],
      upgrades: [41, 42],
      sides: [12, 13],
      options: [52],
      selects: []
    },
    {
      category: 2,
      name: 'coffee',
      price: 1,
      defaults: [],
      upgrades: [38, 39],
      sides: [],
      options: [52],
      selects: ['cold']
    },
    {
      category: 3,
      name: 'cookie',
      price: 1,
      defaults: [],
      upgrades: [],
      sides: [],
      options: [],
      selects: ['hot']
    },
  ]
}

export function constructMenu(menu) {

}

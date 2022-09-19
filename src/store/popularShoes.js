export const popularShoes = {
  state: () => ({
    shoes: [{
        id: 1,
        brand: 'Adidas',
        name: 'Nike Airmax 270 React',
        availability: 'In stock',
        size: [40, 41, 42, 43, 44],
        price: 299,
        discount: 0,
        sale: false,
        new: false,
        images: ['@/assets/img/photo/id1/1.jpg', '../assets/photo/id1/2.jpg', '../assets/photo/id1/3.jpg', '../assets/photo/id1/4.jpg', ],
        description: '',
        rate: 4
      },
      {
        id: 2,
        brand: 'Nike',
        name: 'Air Jordan 4',
        availability: 'On order',
        size: [40, 41, 42, 43, 44],
        price: 199,
        discount: 24,
        sale: true,
        new: false,
        images: ['@/assets/img/photo/id2/1.jpg', '../assets/photo/id2/2.jpg', '../assets/photo/id2/3.jpg', '../assets/photo/id2/4.jpg', ],
        description: 'Cool',
        rate: 0
      },
      {
        id: 3,
        brand: 'Dolce Gabbana',
        name: 'Nike Airmax 270 React',
        availability: 'In stock',
        size: [40, 41, 42, 43, 44],
        price: 499,
        discount: 13,
        sale: true,
        new: false,
        images: ['@/assets/img/photo/id3/1.jpg', '../assets/photo/id3/2.jpg', '../assets/photo/id3/3.jpg', '../assets/photo/id3/4.jpg', ],
        description: '',
        rate: 5
      },
      {
        id: 4,
        brand: 'ECCO',
        name: 'Air Jordan 4',
        availability: 'On order',
        size: [40, 41, 42, 43, 44],
        price: 399,
        discount: 0,
        sale: false,
        new: true,
        images: ['../assets/photo/id4/1.jpg', '../assets/photo/id4/2.jpg', '../assets/photo/id4/3.jpg', '../assets/photo/id4/4.jpg', ],
        description: '',
        rate: 3
      },
    ],
  })
}
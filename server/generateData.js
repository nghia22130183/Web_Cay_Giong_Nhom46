const fs = require('fs');
const { faker } = require('@faker-js/faker');

const createPlant = (id) => {
    return {
        id: id,
        name: faker.commerce.productName(), // Tên cây
        category: faker.helpers.arrayElement(['Indoor', 'Outdoor', 'Bonsai', 'Succulent']),
        price: parseInt(faker.commerce.price({ min: 100000, max: 5000000, dec: 0 })),
        originalPrice: parseInt(faker.commerce.price({ min: 5000000, max: 8000000, dec: 0 })),
        description: faker.commerce.productDescription(),
        images: [
            faker.image.urlLoremFlickr({ category: 'nature' }),
            faker.image.urlLoremFlickr({ category: 'plants' }),
            faker.image.urlLoremFlickr({ category: 'flowers' })
        ],
        stock: faker.number.int({ min: 0, max: 100 }),
        rating: faker.number.float({ min: 3, max: 5, precision: 0.1 })
    };
};

const plantList = [];
for (let i = 1; i <= 500; i++) {
    plantList.push(createPlant(i));
}

const db = {
    products: plantList,
    cart: [],
    orders: []
};

fs.writeFileSync('./server/db.json', JSON.stringify(db, null, 2));
console.log("Đã tạo 500 cây cảnh vào server/db.json thành công!");
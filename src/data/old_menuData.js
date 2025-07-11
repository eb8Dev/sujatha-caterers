// export const MENU = {
//   breakfast: {
//     idly: [
//       { name: "Plain Idly", packages: ["Basic", "Classic", "Premium", "Luxury"] },
//       { name: "Masala Idly", packages: ["Classic", "Premium", "Luxury"] }
//     ],
//     vada: [
//       { name: "Plain Vada", packages: ["Basic", "Classic", "Premium", "Luxury"] },
//       { name: "Masala Vada", packages: ["Classic", "Premium", "Luxury"] }
//     ],
//     dosa: [
//       { name: "Set Dosa", packages: ["Basic", "Classic", "Premium", "Luxury"] },
//       { name: "Masala Dosa", packages: ["Classic", "Premium", "Luxury"] },
//       { name: "Uthappam", packages: ["Classic", "Premium", "Luxury"] }
//     ],
//     pongal: [
//       { name: "Plain Pongal", packages: ["Basic", "Classic", "Premium", "Luxury"] },
//       { name: "Sweet Pongal", packages: ["Classic", "Premium", "Luxury"] }
//     ],
//     upma: [
//       { name: "Semiya Upma", packages: ["Basic", "Classic", "Premium", "Luxury"] },
//       { name: "Godhuma Ravva Upma", packages: ["Classic", "Premium", "Luxury"] },
//       { name: "Tomato Bath", packages: ["Classic", "Premium", "Luxury"] }
//     ],
//     complimentary: [
//       { name: "Chutney (2 Types)", packages: ["Basic", "Classic", "Premium", "Luxury"] },
//       { name: "Sambar", packages: ["Basic", "Classic", "Premium", "Luxury"] },
//       { name: "Coffee or Tea", packages: ["Basic", "Classic", "Premium", "Luxury"] },
//       { name: "Paper Plates", packages: ["Basic", "Classic", "Premium", "Luxury"] },
//       { name: "Glasses", packages: ["Basic", "Classic", "Premium", "Luxury"] },
//       { name: "Water", packages: ["Basic", "Classic", "Premium", "Luxury"] },
//       { name: "Napkins", packages: ["Basic", "Classic", "Premium", "Luxury"] }
//     ]
//   },
//   lunchDinner: {
//     sweets: [
//       { name: "Gulab Jamun", packages: ["Basic", "Classic", "Premium", "Luxury"] },
//       { name: "Bottle Gourd Halwa", packages: ["Classic", "Premium", "Luxury"] },
//       { name: "Kala Jamun", packages: ["Classic", "Premium", "Luxury"] },
//       { name: "Bread Halwa", packages: ["Classic", "Premium", "Luxury"] },
//       { name: "Sweet Pongal", packages: ["Classic", "Premium", "Luxury"] },
//       { name: "Seviyan Kheer", packages: ["Classic", "Premium", "Luxury"] },
//       { name: "Carrot & Bottle Gourd Halwa", packages: ["Premium", "Luxury"] },
//       { name: "Kaaju Barfi", packages: ["Premium", "Luxury"] },
//       { name: "Dry Fruit Halwa", packages: ["Premium", "Luxury"] },
//       { name: "Malpuri", packages: ["Premium", "Luxury"] },
//       { name: "Puta Rekulu", packages: ["Premium", "Luxury"] },
//       { name: "Jilebi", packages: ["Classic", "Premium", "Luxury"] },
//       { name: "Bobbatlu", packages: ["Classic", "Premium", "Luxury"] },
//       { name: "Malai Sandwich", packages: ["Premium", "Luxury"] },
//       { name: "Mini SweetCuff", packages: ["Premium", "Luxury"] },
//       { name: "Kaaju Roll", packages: ["Premium", "Luxury"] },
//       { name: "Pista Roll", packages: ["Premium", "Luxury"] },
//       { name: "Pineapple Kesari", packages: ["Premium", "Luxury"] },
//       { name: "Junnu (Milk Custard)", packages: ["Premium", "Luxury"] },
//       { name: "Halwa Poori", packages: ["Premium", "Luxury"] }
//     ],
//     hotSnacks: [
//       { name: "Veg Cutlet", packages: ["Classic", "Premium", "Luxury"] },
//       { name: "Paneer Cutlet", packages: ["Premium", "Luxury"] },
//       { name: "Baingan Pakora", packages: ["Classic", "Premium", "Luxury"] },
//       { name: "Aalu Bonda", packages: ["Classic", "Premium", "Luxury"] },
//       { name: "Corn Samosa/Roll", packages: ["Premium", "Luxury"] },
//       { name: "Masala Vada", packages: ["Classic", "Premium", "Luxury"] },
//       { name: "Mirchi Bajji", packages: ["Classic", "Premium", "Luxury"] },
//       { name: "Cut Bajji", packages: ["Classic", "Premium", "Luxury"] },
//       { name: "Mini Aloo Samosa", packages: ["Classic", "Premium", "Luxury"] },
//       { name: "Veg Lollipop", packages: ["Premium", "Luxury"] },
//       { name: "Veg Shanghai Roll", packages: ["Premium", "Luxury"] },
//       { name: "Gaarey", packages: ["Classic", "Premium", "Luxury"] },
//       { name: "Green and Stuffed Kabab", packages: ["Premium", "Luxury"] },
//       { name: "Veg Manchurian", packages: ["Classic", "Premium", "Luxury"] },
//       { name: "Gobi Manchurian", packages: ["Classic", "Premium", "Luxury"] }
//     ],
//     indianBreads: [
//       { name: "Pulka", packages: ["Basic", "Classic", "Premium", "Luxury"] },
//       { name: "Rumaali Roti", packages: ["Classic", "Premium", "Luxury"] },
//       { name: "Plain Kulcha", packages: ["Classic", "Premium", "Luxury"] },
//       { name: "Masala Kulcha", packages: ["Premium", "Luxury"] },
//       { name: "Mini Parotta", packages: ["Classic", "Premium", "Luxury"] },
//       { name: "Chapathi", packages: ["Basic", "Classic", "Premium", "Luxury"] }
//     ],
//     flavoredRice: [
//       { name: "Jackfruit Biryani", packages: ["Premium", "Luxury"] },
//       { name: "Cut Bajji Biryani", packages: ["Premium", "Luxury"] },
//       { name: "Veg Fried Rice", packages: ["Classic", "Premium", "Luxury"] },
//       { name: "Veg Noodles", packages: ["Classic", "Premium", "Luxury"] },
//       { name: "Pulihora Rice", packages: ["Basic", "Classic", "Premium", "Luxury"] },
//       { name: "Lemon Pulihora", packages: ["Basic", "Classic", "Premium", "Luxury"] },
//       { name: "Tamarind Pulihora", packages: ["Basic", "Classic", "Premium", "Luxury"] },
//       { name: "Mango Pulihora", packages: ["Classic", "Premium", "Luxury"] },
//       { name: "Tomato Rice", packages: ["Basic", "Classic", "Premium", "Luxury"] },
//       { name: "Veg Biryani", packages: ["Classic", "Premium", "Luxury"] },
//       { name: "Coconut Rice", packages: ["Classic", "Premium", "Luxury"] },
//       { name: "Mint Rice", packages: ["Classic", "Premium", "Luxury"] },
//       { name: "Jeera Biryani", packages: ["Premium", "Luxury"] },
//       { name: "UlavaCharu Biryani", packages: ["Premium", "Luxury"] },
//       { name: "Karivepaku Rice", packages: ["Premium", "Luxury"] }
//     ],
//     northIndian: [
//       { name: "Paneer Butter Masala", packages: ["Classic", "Premium", "Luxury"] },
//       { name: "Methi Chaman Curry", packages: ["Premium", "Luxury"] },
//       { name: "Palak Paneer", packages: ["Classic", "Premium", "Luxury"] },
//       { name: "Capsicum Masala", packages: ["Classic", "Premium", "Luxury"] },
//       { name: "BabyCorn Masala", packages: ["Premium", "Luxury"] },
//       { name: "Mixed Veg Curry", packages: ["Classic", "Premium", "Luxury"] },
//       { name: "Veg Curry", packages: ["Basic", "Classic", "Premium", "Luxury"] },
//       { name: "Mushroom Masala", packages: ["Premium", "Luxury"] },
//       { name: "Aloo Gobi Masala", packages: ["Classic", "Premium", "Luxury"] },
//       { name: "Aloo Kurma", packages: ["Classic", "Premium", "Luxury"] },
//       { name: "Phool Makhana Curry", packages: ["Premium", "Luxury"] },
//       { name: "Aloo Capsicum Tomato", packages: ["Classic", "Premium", "Luxury"] },
//       { name: "Veg & Green Peas Kurma", packages: ["Classic", "Premium", "Luxury"] },
//       { name: "Kadai Vegetable", packages: ["Classic", "Premium", "Luxury"] },
//       { name: "Navratna Kurma", packages: ["Premium", "Luxury"] },
//       { name: "Milk Maker Kurma", packages: ["Premium", "Luxury"] }
//     ],
//     southIndianFries: [
//       { name: "Bhindi Kaju Fry", packages: ["Premium", "Luxury"] },
//       { name: "Dondakaya Fry", packages: ["Classic", "Premium", "Luxury"] },
//       { name: "Cabbage 65", packages: ["Classic", "Premium", "Luxury"] },
//       { name: "Veg Pakoda", packages: ["Classic", "Premium", "Luxury"] },
//       { name: "Aloo Fry", packages: ["Basic", "Classic", "Premium", "Luxury"] },
//       { name: "Spicy Stuffed Brinjal", packages: ["Classic", "Premium", "Luxury"] },
//       { name: "Capsicum 65", packages: ["Classic", "Premium", "Luxury"] },
//       { name: "Bitter Gourd Fry", packages: ["Premium", "Luxury"] },
//       { name: "Kanda Fry", packages: ["Classic", "Premium", "Luxury"] },
//       { name: "Cabbage Beans Carrot", packages: ["Classic", "Premium", "Luxury"] },
//       { name: "Thota Kura Fry", packages: ["Classic", "Premium", "Luxury"] },
//       { name: "Aloo 65", packages: ["Classic", "Premium", "Luxury"] },
//       { name: "Gobi 65", packages: ["Classic", "Premium", "Luxury"] },
//       { name: "Chamadumpala Fry", packages: ["Classic", "Premium", "Luxury"] }
//     ],
//     southIndianCurries: [
//       { name: "Stuffed Brinjal Curry", packages: ["Classic", "Premium", "Luxury"] },
//       { name: "Brinjal Tomato Curry", packages: ["Classic", "Premium", "Luxury"] },
//       { name: "Ridge Gourd with Dal", packages: ["Classic", "Premium", "Luxury"] },
//       { name: "Green Peas Curry", packages: ["Classic", "Premium", "Luxury"] },
//       { name: "Chama Dumpala Pulusu", packages: ["Classic", "Premium", "Luxury"] },
//       { name: "Tatimunjala Curry", packages: ["Classic", "Premium", "Luxury"] },
//       { name: "Broad Beans Curry", packages: ["Classic", "Premium", "Luxury"] },
//       { name: "Gongura Phoolmakna Curry", packages: ["Premium", "Luxury"] }
//     ],
//     gravyCurry: [
//       { name: "Gravy Curry", packages: ["Basic", "Classic", "Premium", "Luxury"] }
//     ],
//     iceCreams: [
//       { name: "Vanilla", packages: ["Premium", "Luxury"] },
//       { name: "Mango", packages: ["Premium", "Luxury"] },
//       { name: "Trooty Fruity", packages: ["Premium", "Luxury"] },
//       { name: "Butterscotch", packages: ["Premium", "Luxury"] },
//       { name: "Strawberry", packages: ["Premium", "Luxury"] }
//     ],
//     paan: [
//       { name: "Paan", packages: ["Basic", "Classic", "Premium", "Luxury"] }
//     ],
//     complimentary: [
//       { name: "Plates", packages: ["Basic", "Classic", "Premium", "Luxury"] },
//       { name: "Glasses", packages: ["Basic", "Classic", "Premium", "Luxury"] },
//       { name: "Water", packages: ["Basic", "Classic", "Premium", "Luxury"] },
//       { name: "Transport", packages: ["Premium", "Luxury"] },
//       { name: "Supply", packages: ["Premium", "Luxury"] }
//     ]
//   }
// };

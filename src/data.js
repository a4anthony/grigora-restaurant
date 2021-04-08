export const appData = () => ({
  delivery_fee: 250,
  restaurant_id: 3,
  restaurant_name: "Demo Restaurant",
  restaurant_profile_image:
    "https://grigora.net/images/profile_image/1603881081.jpg",
  restaurant_image: "https://grigora.net/images/profile/1603881081.jpg",
  cuisines: "Bakery & Cakes,Fries & Grills,Fast Foods,Alcohol",
  total_rating: 5,
  total_review: 6,
  veg: "0",
  pickup: "1",
  table_booking: "1",
  no_of_seats: 10,
  full_time: "0",
  opening_time: "06:30:00",
  latitude: "9.0814698",
  longitude: "7.484611399999999",
  address: "167 Adetokunbo Ademola Cres, Wuse, Abuja, Nigeria",
  french_address: "167 Adetokunbo Ademola Cres, Wuse, Abuja, Nigéria",
  closing_time: "21:00:00",
  estimated_preparing_time: "12",
  busy_status: false,
  popular_items: [
    {
      id: 10,
      restaurant_id: 3,
      parent_cuisine_id: 6,
      cuisine_id: 60,
      name: "Chocolate Waffles",
      french_name: "gaufres au chocolat",
      description: "Four layers of chocolate baked waffles. Gluten free.1",
      french_description:
        "Quatre couches de gaufres au chocolat. Sans gluten.1",
      image: "https://grigora.net/images/items/1603884625.jpeg",
      price: "25.00",
      offer_price: 0,
      approx_prep_time: "10",
      in_offer: "0",
      pure_veg: "0",
      approved: "1",
      featured: "1",
      status: "1",
      created_at: "2020-10-28 11:30:25",
      updated_at: "2021-03-07 15:10:41",
      cuisine_name: "Bakery & Cakes",
      restaurant_name: "Demo Restaurant",
      avg_ratings: 5,
      total_rating: 1
    },
    {
      id: 13,
      restaurant_id: 3,
      parent_cuisine_id: 6,
      cuisine_id: 64,
      name: "Gora Treat",
      french_name: "Gora Treat",
      description:
        "A Combo pack containing:\n2 Burgers, 1 Fries pack or\n2 Fries pack, 1 burger; \nChicken wings,\n1 Drink",
      french_description:
        "Un pack Combo contenant: 2 Burgers, 1 Pack de Frites ou 2 Pack de Frites, 1 Burger; Ailes de poulet, 1 boisson",
      image:
        "https://gnet1.s3.us-east-2.amazonaws.com/1612356757_1612356756.5792642.jpeg",
      price: "200.00",
      offer_price: 0,
      approx_prep_time: "12",
      in_offer: "0",
      pure_veg: "0",
      approved: "1",
      featured: "1",
      status: "0",
      created_at: "2020-10-30 04:31:30",
      updated_at: "2021-03-02 08:35:56",
      cuisine_name: "Fast Foods",
      restaurant_name: "Demo Restaurant",
      item_removeables: [],
      item_categories: [
        {
          id: 190,
          item_id: 13,
          name: "Selection",
          french_name: "Sélection",
          selection: "1",
          min: 1,
          max: 1,
          required: "1",
          status: "1",
          created_at: "2021-02-03 12:52:38",
          updated_at: "2021-02-03 12:52:38",
          item_sub_category: [
            {
              id: 554,
              item_cat_id: 190,
              name: "2 Burgers and  1 Fries pack",
              french_name: "Pack de 2 burgers et 1 frite",
              add_on_price: "0.00",
              min: 0,
              max: 0,
              required: "0",
              status: "1",
              created_at: "2021-02-03 12:52:38",
              updated_at: "2021-02-03 12:52:38",
              item_sub_sub_category: []
            },
            {
              id: 555,
              item_cat_id: 190,
              name: "2 Fries pack and 1 Burger",
              french_name: "Pack de 2 frites et 1 burger",
              add_on_price: "0.00",
              min: 0,
              max: 0,
              required: "0",
              status: "1",
              created_at: "2021-02-03 12:52:38",
              updated_at: "2021-02-03 12:52:38",
              item_sub_sub_category: []
            }
          ]
        },
        {
          id: 191,
          item_id: 13,
          name: "Drink",
          french_name: "Boisson",
          selection: "1",
          min: 0,
          max: 5,
          required: "0",
          status: "1",
          created_at: "2021-02-03 12:52:38",
          updated_at: "2021-02-03 12:52:38",
          item_sub_category: [
            {
              id: 556,
              item_cat_id: 191,
              name: "Coke",
              french_name: "du Coca",
              add_on_price: "500.00",
              min: 0,
              max: 0,
              required: "0",
              status: "1",
              created_at: "2021-02-03 12:52:38",
              updated_at: "2021-02-03 12:52:38",
              item_sub_sub_category: [
                {
                  id: 42,
                  item_sub_cat_id: 556,
                  name: "Coke",
                  french_name: "du Coca",
                  add_on_price: "0.00",
                  min: 0,
                  max: 0,
                  required: "0",
                  status: "1",
                  created_at: "2021-02-03 12:52:39",
                  updated_at: "2021-02-03 12:52:39"
                },
                {
                  id: 43,
                  item_sub_cat_id: 556,
                  name: "Coke Zero",
                  french_name: "Coke zéro",
                  add_on_price: "0.00",
                  min: 0,
                  max: 0,
                  required: "0",
                  status: "1",
                  created_at: "2021-02-03 12:52:39",
                  updated_at: "2021-02-03 12:52:39"
                }
              ]
            },
            {
              id: 557,
              item_cat_id: 191,
              name: "Fanta",
              french_name: "Fanta",
              add_on_price: "500.00",
              min: 0,
              max: 0,
              required: "0",
              status: "1",
              created_at: "2021-02-03 12:52:39",
              updated_at: "2021-02-03 12:52:39",
              item_sub_sub_category: [
                {
                  id: 44,
                  item_sub_cat_id: 557,
                  name: "Fanta Orange",
                  french_name: "Fanta Orange",
                  add_on_price: "0.00",
                  min: 0,
                  max: 0,
                  required: "0",
                  status: "1",
                  created_at: "2021-02-03 12:52:39",
                  updated_at: "2021-02-03 12:52:39"
                },
                {
                  id: 45,
                  item_sub_cat_id: 557,
                  name: "Fanta Apple",
                  french_name: "Fanta Apple",
                  add_on_price: "0.00",
                  min: 0,
                  max: 0,
                  required: "0",
                  status: "1",
                  created_at: "2021-02-03 12:52:39",
                  updated_at: "2021-02-03 12:52:39"
                }
              ]
            },
            {
              id: 558,
              item_cat_id: 191,
              name: "Sprite",
              french_name: "Lutin",
              add_on_price: "700.00",
              min: 0,
              max: 0,
              required: "0",
              status: "1",
              created_at: "2021-02-03 12:52:39",
              updated_at: "2021-02-03 12:52:39",
              item_sub_sub_category: []
            },
            {
              id: 559,
              item_cat_id: 191,
              name: "Pepsi",
              french_name: "Pepsi",
              add_on_price: "800.00",
              min: 0,
              max: 0,
              required: "0",
              status: "1",
              created_at: "2021-02-03 12:52:39",
              updated_at: "2021-02-03 12:52:39",
              item_sub_sub_category: [
                {
                  id: 46,
                  item_sub_cat_id: 559,
                  name: "Pepsi",
                  french_name: "Pepsi",
                  add_on_price: "0.00",
                  min: 0,
                  max: 0,
                  required: "0",
                  status: "1",
                  created_at: "2021-02-03 12:52:40",
                  updated_at: "2021-02-03 12:52:40"
                },
                {
                  id: 47,
                  item_sub_cat_id: 559,
                  name: "Pepsi Lite",
                  french_name: "Pepsi Lite",
                  add_on_price: "0.00",
                  min: 0,
                  max: 0,
                  required: "0",
                  status: "1",
                  created_at: "2021-02-03 12:52:40",
                  updated_at: "2021-02-03 12:52:40"
                }
              ]
            },
            {
              id: 560,
              item_cat_id: 191,
              name: "7Up",
              french_name: "7 Up",
              add_on_price: "500.00",
              min: 0,
              max: 0,
              required: "0",
              status: "1",
              created_at: "2021-02-03 12:52:40",
              updated_at: "2021-02-03 12:52:40",
              item_sub_sub_category: []
            }
          ]
        }
      ],
      avg_ratings: "0.0",
      total_rating: "0"
    }
  ],
  featured_items: [
    {
      id: 10,
      restaurant_id: 3,
      parent_cuisine_id: 6,
      cuisine_id: 60,
      name: "Chocolate Waffles",
      french_name: "gaufres au chocolat",
      description: "Four layers of chocolate baked waffles. Gluten free.1",
      french_description:
        "Quatre couches de gaufres au chocolat. Sans gluten.1",
      image: "https://grigora.net/images/items/1603884625.jpeg",
      price: "25.00",
      offer_price: 0,
      approx_prep_time: "10",
      in_offer: "0",
      pure_veg: "0",
      approved: "1",
      featured: "1",
      status: "1",
      created_at: "2020-10-28 11:30:25",
      updated_at: "2021-03-07 15:10:41",
      cuisine_name: "Bakery & Cakes",
      item_removeables: [
        {
          id: 10,
          item_id: 10,
          name: "Honey",
          french_name: "Mon chéri",
          status: "1",
          created_at: "2020-10-28 11:41:39",
          updated_at: "2020-10-28 11:41:39"
        },
        {
          id: 11,
          item_id: 10,
          name: "Sugar",
          french_name: "Sucre",
          status: "1",
          created_at: "2020-10-28 11:41:40",
          updated_at: "2020-10-28 11:41:40"
        }
      ],
      restaurant_name: "Demo Restaurant",
      item_categories: [
        {
          id: 4,
          item_id: 10,
          name: "Toppings",
          french_name: "Garnitures",
          selection: "1",
          min: 1,
          max: 2,
          required: "0",
          status: "1",
          created_at: "2020-10-28 11:41:40",
          updated_at: "2020-10-28 11:41:40",
          item_sub_category: [
            {
              id: 6,
              item_cat_id: 4,
              name: "Strawberries",
              french_name: "Des fraises",
              add_on_price: "5.00",
              min: 0,
              max: 0,
              required: "0",
              status: "1",
              created_at: "2020-10-28 11:41:40",
              updated_at: "2020-10-28 11:41:40",
              item_sub_sub_category: []
            },
            {
              id: 7,
              item_cat_id: 4,
              name: "Bananas",
              french_name: "Bananes",
              add_on_price: "5.00",
              min: 0,
              max: 0,
              required: "0",
              status: "1",
              created_at: "2020-10-28 11:41:40",
              updated_at: "2020-10-28 11:41:40",
              item_sub_sub_category: []
            }
          ]
        }
      ],
      avg_ratings: 5,
      total_rating: 1
    },
    {
      id: 13,
      restaurant_id: 3,
      parent_cuisine_id: 6,
      cuisine_id: 64,
      name: "Gora Treat",
      french_name: "Gora Treat",
      description:
        "A Combo pack containing:\n2 Burgers, 1 Fries pack or\n2 Fries pack, 1 burger; \nChicken wings,\n1 Drink",
      french_description:
        "Un pack Combo contenant: 2 Burgers, 1 Pack de Frites ou 2 Pack de Frites, 1 Burger; Ailes de poulet, 1 boisson",
      image:
        "https://gnet1.s3.us-east-2.amazonaws.com/1612356757_1612356756.5792642.jpeg",
      price: "200.00",
      offer_price: 0,
      approx_prep_time: "12",
      in_offer: "0",
      pure_veg: "0",
      approved: "1",
      featured: "1",
      status: "0",
      created_at: "2020-10-30 04:31:30",
      updated_at: "2021-03-02 08:35:56",
      cuisine_name: "Fast Foods",
      item_removeables: [],
      restaurant_name: "Demo Restaurant",
      item_categories: [
        {
          id: 190,
          item_id: 13,
          name: "Selection",
          french_name: "Sélection",
          selection: "1",
          min: 1,
          max: 1,
          required: "1",
          status: "1",
          created_at: "2021-02-03 12:52:38",
          updated_at: "2021-02-03 12:52:38",
          item_sub_category: [
            {
              id: 554,
              item_cat_id: 190,
              name: "2 Burgers and  1 Fries pack",
              french_name: "Pack de 2 burgers et 1 frite",
              add_on_price: "0.00",
              min: 0,
              max: 0,
              required: "0",
              status: "1",
              created_at: "2021-02-03 12:52:38",
              updated_at: "2021-02-03 12:52:38",
              item_sub_sub_category: []
            },
            {
              id: 555,
              item_cat_id: 190,
              name: "2 Fries pack and 1 Burger",
              french_name: "Pack de 2 frites et 1 burger",
              add_on_price: "0.00",
              min: 0,
              max: 0,
              required: "0",
              status: "1",
              created_at: "2021-02-03 12:52:38",
              updated_at: "2021-02-03 12:52:38",
              item_sub_sub_category: []
            }
          ]
        },
        {
          id: 191,
          item_id: 13,
          name: "Drink",
          french_name: "Boisson",
          selection: "1",
          min: 0,
          max: 5,
          required: "0",
          status: "1",
          created_at: "2021-02-03 12:52:38",
          updated_at: "2021-02-03 12:52:38",
          item_sub_category: [
            {
              id: 556,
              item_cat_id: 191,
              name: "Coke",
              french_name: "du Coca",
              add_on_price: "500.00",
              min: 0,
              max: 0,
              required: "0",
              status: "1",
              created_at: "2021-02-03 12:52:38",
              updated_at: "2021-02-03 12:52:38",
              item_sub_sub_category: [
                {
                  id: 42,
                  item_sub_cat_id: 556,
                  name: "Coke",
                  french_name: "du Coca",
                  add_on_price: "0.00",
                  min: 0,
                  max: 0,
                  required: "0",
                  status: "1",
                  created_at: "2021-02-03 12:52:39",
                  updated_at: "2021-02-03 12:52:39"
                },
                {
                  id: 43,
                  item_sub_cat_id: 556,
                  name: "Coke Zero",
                  french_name: "Coke zéro",
                  add_on_price: "0.00",
                  min: 0,
                  max: 0,
                  required: "0",
                  status: "1",
                  created_at: "2021-02-03 12:52:39",
                  updated_at: "2021-02-03 12:52:39"
                }
              ]
            },
            {
              id: 557,
              item_cat_id: 191,
              name: "Fanta",
              french_name: "Fanta",
              add_on_price: "500.00",
              min: 0,
              max: 0,
              required: "0",
              status: "1",
              created_at: "2021-02-03 12:52:39",
              updated_at: "2021-02-03 12:52:39",
              item_sub_sub_category: [
                {
                  id: 44,
                  item_sub_cat_id: 557,
                  name: "Fanta Orange",
                  french_name: "Fanta Orange",
                  add_on_price: "0.00",
                  min: 0,
                  max: 0,
                  required: "0",
                  status: "1",
                  created_at: "2021-02-03 12:52:39",
                  updated_at: "2021-02-03 12:52:39"
                },
                {
                  id: 45,
                  item_sub_cat_id: 557,
                  name: "Fanta Apple",
                  french_name: "Fanta Apple",
                  add_on_price: "0.00",
                  min: 0,
                  max: 0,
                  required: "0",
                  status: "1",
                  created_at: "2021-02-03 12:52:39",
                  updated_at: "2021-02-03 12:52:39"
                }
              ]
            },
            {
              id: 558,
              item_cat_id: 191,
              name: "Sprite",
              french_name: "Lutin",
              add_on_price: "700.00",
              min: 0,
              max: 0,
              required: "0",
              status: "1",
              created_at: "2021-02-03 12:52:39",
              updated_at: "2021-02-03 12:52:39",
              item_sub_sub_category: []
            },
            {
              id: 559,
              item_cat_id: 191,
              name: "Pepsi",
              french_name: "Pepsi",
              add_on_price: "800.00",
              min: 0,
              max: 0,
              required: "0",
              status: "1",
              created_at: "2021-02-03 12:52:39",
              updated_at: "2021-02-03 12:52:39",
              item_sub_sub_category: [
                {
                  id: 46,
                  item_sub_cat_id: 559,
                  name: "Pepsi",
                  french_name: "Pepsi",
                  add_on_price: "0.00",
                  min: 0,
                  max: 0,
                  required: "0",
                  status: "1",
                  created_at: "2021-02-03 12:52:40",
                  updated_at: "2021-02-03 12:52:40"
                },
                {
                  id: 47,
                  item_sub_cat_id: 559,
                  name: "Pepsi Lite",
                  french_name: "Pepsi Lite",
                  add_on_price: "0.00",
                  min: 0,
                  max: 0,
                  required: "0",
                  status: "1",
                  created_at: "2021-02-03 12:52:40",
                  updated_at: "2021-02-03 12:52:40"
                }
              ]
            },
            {
              id: 560,
              item_cat_id: 191,
              name: "7Up",
              french_name: "7 Up",
              add_on_price: "500.00",
              min: 0,
              max: 0,
              required: "0",
              status: "1",
              created_at: "2021-02-03 12:52:40",
              updated_at: "2021-02-03 12:52:40",
              item_sub_sub_category: []
            }
          ]
        }
      ],
      avg_ratings: "0.0",
      total_rating: "0"
    }
  ],
  all_data: [
    {
      category_name: "Full Menu",
      start_date: null,
      end_date: null,
      start_time: "06:30:00",
      end_time: "20:30:00",
      special_day: null,
      data: [
        {
          id: 60,
          name: "Bakery & Cakes",
          french_name: "Boulangerie &amp; Gâteaux",
          description: "Bakery & Cakes",
          french_description: "Boulangerie &amp; Gâteaux",
          image:
            "https://gnet1.s3.us-east-2.amazonaws.com/1613828537_Hummingbird-Cake-3.jpg",
          icon:
            "https://gnet1.s3.us-east-2.amazonaws.com/1607076660_Bakery2.png",
          background_icon:
            "https://gnet1.s3.us-east-2.amazonaws.com/1607076660_Bakery3.png",
          status: "1",
          created_at: "2020-04-16 11:39:24",
          updated_at: "2021-02-20 13:42:17",
          items_count: 1
        },
        {
          id: 94,
          name: "Alcohol",
          french_name: "De l&#39;alcool",
          description: "Alcohol",
          french_description: "De l&#39;alcool",
          image:
            "https://gnet1.s3.us-east-2.amazonaws.com/1607073838_1597093045.jpeg",
          icon:
            "https://gnet1.s3.us-east-2.amazonaws.com/1607073838_1597093045.png",
          background_icon:
            "https://gnet1.s3.us-east-2.amazonaws.com/1607072957_coke.jpeg",
          status: "1",
          created_at: "2020-07-28 02:44:13",
          updated_at: "2020-12-04 09:23:58",
          items_count: 2
        },
        {
          id: 64,
          name: "Fast Foods",
          french_name: "Restauration rapide",
          description: "Fast food",
          french_description: "Fast food",
          image:
            "https://gnet1.s3.us-east-2.amazonaws.com/1613828836_double-burgerFastfood.jpg",
          icon:
            "https://gnet1.s3.us-east-2.amazonaws.com/1607075975_fastfood2.png",
          background_icon:
            "https://gnet1.s3.us-east-2.amazonaws.com/1607075975_fastfood3.jpg",
          status: "1",
          created_at: "2020-04-16 11:46:18",
          updated_at: "2021-02-20 13:47:16",
          items_count: 1
        }
      ]
    },
    {
      category_name: "Breakfast",
      start_date: null,
      end_date: null,
      start_time: "06:30:00",
      end_time: "22:30:00",
      special_day: null,
      data: [
        {
          id: 60,
          name: "Bakery & Cakes",
          french_name: "Boulangerie &amp; Gâteaux",
          description: "Bakery & Cakes",
          french_description: "Boulangerie &amp; Gâteaux",
          image:
            "https://gnet1.s3.us-east-2.amazonaws.com/1613828537_Hummingbird-Cake-3.jpg",
          icon:
            "https://gnet1.s3.us-east-2.amazonaws.com/1607076660_Bakery2.png",
          background_icon:
            "https://gnet1.s3.us-east-2.amazonaws.com/1607076660_Bakery3.png",
          status: "1",
          created_at: "2020-04-16 11:39:24",
          updated_at: "2021-02-20 13:42:17",
          items_count: 1
        }
      ]
    },
    {
      category_name: "Lunch",
      start_date: null,
      end_date: null,
      start_time: "11:00:00",
      end_time: "15:30:00",
      special_day: null,
      data: [
        {
          id: 61,
          name: "Fries & Grills",
          french_name: "Frites et grillades",
          description: "Fries & Grills",
          french_description: "Frites et grillades",
          image:
            "https://gnet1.s3.us-east-2.amazonaws.com/1613828597_fries.jpg",
          icon:
            "https://gnet1.s3.us-east-2.amazonaws.com/1607076573_Fries2.png",
          background_icon:
            "https://gnet1.s3.us-east-2.amazonaws.com/1607076573_Fries3.png",
          status: "1",
          created_at: "2020-04-16 11:40:23",
          updated_at: "2021-02-20 13:43:17",
          items_count: 1
        }
      ]
    },
    {
      category_name: "Dinner",
      start_date: null,
      end_date: null,
      start_time: "16:00:00",
      end_time: "20:30:00",
      special_day: null,
      data: []
    },
    {
      category_name: "Combo Specials",
      start_date: null,
      end_date: null,
      start_time: "09:00:00",
      end_time: "20:30:00",
      special_day: null,
      data: [
        {
          id: 64,
          name: "Fast Foods",
          french_name: "Restauration rapide",
          description: "Fast food",
          french_description: "Fast food",
          image:
            "https://gnet1.s3.us-east-2.amazonaws.com/1613828836_double-burgerFastfood.jpg",
          icon:
            "https://gnet1.s3.us-east-2.amazonaws.com/1607075975_fastfood2.png",
          background_icon:
            "https://gnet1.s3.us-east-2.amazonaws.com/1607075975_fastfood3.jpg",
          status: "1",
          created_at: "2020-04-16 11:46:18",
          updated_at: "2021-02-20 13:47:16",
          items_count: 1
        }
      ]
    },
    {
      category_name: "I Love Chicken",
      start_date: null,
      end_date: null,
      start_time: "10:00:00",
      end_time: "20:30:00",
      special_day: null,
      data: [
        {
          id: 61,
          name: "Fries & Grills",
          french_name: "Frites et grillades",
          description: "Fries & Grills",
          french_description: "Frites et grillades",
          image:
            "https://gnet1.s3.us-east-2.amazonaws.com/1613828597_fries.jpg",
          icon:
            "https://gnet1.s3.us-east-2.amazonaws.com/1607076573_Fries2.png",
          background_icon:
            "https://gnet1.s3.us-east-2.amazonaws.com/1607076573_Fries3.png",
          status: "1",
          created_at: "2020-04-16 11:40:23",
          updated_at: "2021-02-20 13:43:17",
          items_count: 1
        }
      ]
    }
  ],
  total_cart_item: 1,
  items: {
    61: [
      {
        name: "Gora Chicken bowl",
        description: "A bucket containing 18 pieces of Fried chicken",
        image: "https://grigora.net/images/items/1604034821.jpg",
        price: "6500.00",
        status: "0",
        avg_ratings: "0.0"
      }
    ],
    60: [
      {
        name: "Chocolate Waffles",
        description: "Four layers of chocolate baked waffles. Gluten free.1",
        image: "https://grigora.net/images/items/1603884625.jpeg",
        price: "25.00",
        status: "1",
        avg_ratings: 5
      }
    ],
    94: [
      {
        name: "Red Wine",
        description: "Low alcohol red wine",
        price: "4000.00",
        image: "https://grigora.net/images/items/1604004035.jpeg",
        status: "0",
        avg_ratings: "0.0"
      },
      {
        name: "Hennessy",
        description: "40% alcohol V.S.O.P - 70cl",
        price: "14,000.00",
        image: "https://grigora.net/images/items/1604007522.jpeg",
        status: "0",
        avg_ratings: "0.0"
      }
    ],
    64: [
      {
        name: "Gora Treat",
        description:
          "A Combo pack containing:\n2 Burgers, 1 Fries pack or\n2 Fries pack, 1 burger; \nChicken wings,\n1 Drink",
        image:
          "https://gnet1.s3.us-east-2.amazonaws.com/1612356757_1612356756.5792642.jpeg",
        price: "200.00",
        status: "0",
        avg_ratings: "0.0"
      }
    ]
  }
});

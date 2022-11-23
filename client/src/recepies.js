const recepies = [
  //#region Lunch / Dinner

  //#region Chicken

  // Strogonoff
  {
    id: "chicken-strogonoff",
    title: "Chicken Strogonoff",
    category: "lunch/dinner",
    img: "chicken-strogonoff.jpg",
    ingredients: [
      "4 boneless chicken breasts, diced",
      "350ml totamo sauce",
      "1 corn niblets can",
      "250g creamcheese",
      "Ketchup",
      "Mostard",
      "Worcestershire sauce",
      "Hickory sticks",
    ],
    steps: [
      "Cook the chicken breast untill all the water from the chicken is drained",
      "Add the tomato sauce and water to the pan. Use 2 units of water for every unit of tomato sauce",
      "Add the corn niblets can",
      "Once it starts boiling, add ketchup, mostard and worcestershire sauce to taste",
      "Cook it for 5-10 min or until the chicken is soft",
      "Mix the creamcheese with a little bit of milk. Whisk the mixture untill dissolved",
      "Turn off the head, add the creamcheese mixture and mix well",
      "Serve the dish over rice and add Hickory Sticks to taste",
    ],
    complexity: "Easy",
    servings: 4,
    totalTime: "45",
    cookTime: "30",
    prepTime: "15",
    spicy: 0,
    tags: ["Chicken", "Lunch", "Dinner"],
  },
  // Teryaki
  {
    id: "chicken-teriyaki",
    title: "Chicken Teriyaki",
    category: "lunch/dinner",
    img: "chicken-teriyaki.jpg",
    ingredients: [
      "4 boneless chicken breasts",
      "1 teaspoon garlic powder",
      "1 cup soy sauce",
      "1/2 cup water",
      "2/3 cup honey",
      "1/2 cup rice vinegar",
      "3 tablespoons brown or white sugar",
      "3 tablespoons corn starch",
      "Vegetable oil",
    ],
    steps: [
      "Dice the chicken breast into medium-small cubes",
      "In a dish add the soy sauce, water, honey, rice vinegar and sugar. Mix well.",
      "Add vegetable oil to a skillet in medium-high head. Once heated add the chicken and cook untill there's no more water.",
      "Turn heat to low, add the sauce mixture and let it sit for 10-15 min.",
      "If the sauce has not thickened, dissolve 1-3 tablespoons of corn starch in water and add to the skillet. Mix well",
      "Serve with rice. Potato wedges go really well with this recipe.",
    ],
    complexity: "Easy",
    servings: 4,
    totalTime: "45",
    cookTime: "30",
    prepTime: "15",
    spicy: 0,
    tags: ["Chicken", "Lunch", "Dinner"],
  },
  // Milanese
  {
    id: "chicken-milanese",
    title: "Chicken Milanese",
    category: "lunch/dinner",
    img: "chicken-milanese.jpg",
    ingredients: [
      "4 boneless chicken breasts",
      "3 eggs",
      "Flour",
      "Bread Crumbs",
      "Vegetable oil",
    ],
    steps: [
      "Cut the chicken into thin slices.",
      "In seperate bowls add the eggs, flour and bread crumbs. Wisk the eggs and add salt and pepper.",
      "Dunk both sides of the chicken in the egg mixture, then dregde them in the flour, back to the egg, and then coat both sides in the bread crumbs.",
      "Add enough vegetable oil to cover the chicken slices in a skillet on medium-low heat.",
      "Once the oil is hot, add 1-2 pieces at a time. Flip them once the breading is golden brown.",
      "When both sides are done, transfer the chicken to a plate with paper towel and let it sit.",
      "To serve, add 1 piece of chicken to a plate, with rice. Potato wedges make a great side for this dish.",
    ],
    complexity: "Medium",
    servings: 6,
    totalTime: "35",
    cookTime: "10",
    prepTime: "25",
    spicy: 0,
    tags: ["Chicken", "Lunch", "Dinner"],
  },
  // parmigiana
  {
    id: "chicken-parmigiana",
    title: "Chicken Parmigiana",
    category: "lunch/dinner",
    img: "chicken-parmigiana.jpg",
    ingredients: [
      "4 boneless chicken breasts",
      "3 eggs",
      "Flour",
      "Bread Crumbs",
      "Vegetable oil",
    ],
    steps: [
      "Cut the chicken into thin slices.",
      "In seperate bowls add the eggs, flour and bread crumbs. Wisk the eggs and add salt and pepper.",
      "Dunk both sides of the chicken in the egg mixture, then dregde them in the flour, back to the egg, and then coat both sides in the bread crumbs.",
      "Add enough vegetable oil to cover the chicken slices in a skillet on medium-low heat.",
      "Once the oil is hot, add 1-2 pieces at a time. Flip them once the breading is golden brown.",
      "When both sides are done, transfer the chicken to a plate with paper towel and let it sit.",
      "To serve, add 1 piece of chicken to a plate, with rice. Potato wedges make a great side for this dish.",
    ],
    complexity: "Medium",
    servings: 6,
    totalTime: "35",
    cookTime: "10",
    prepTime: "25",
    spicy: 0,
    tags: ["Chicken", "Lunch", "Dinner"],
  },
  // Chicken w/ Orange Sauce
  {
    id: "chicken-orange-sauce",
    title: "Chicken w/ Orange sauce",
    category: "lunch/dinner",
    img: "orange-sauce-chicken.jpg",
    ingredients: [
      "4 boneless chicken breast",
      "400g sliced mozzarella",
      "400g sliced ham or turkey breast",
      "4 large oranges",
      "400g cream cheese",
      "20ml milk",
      "50g butter",
      "Toothpick or BBQ sticks",
    ],
    steps: [
      "Cut the chicken into strips, they should be thin and long.",
      "If the cheese and the ham/turkey breast are much larger than the chicken strip, cut them in half.",
      "Place 1 cheese and 1 ham/turkey on an end of the strip, wrap it tight. Once it's all wrapped, stick a toothpick or BBQ stick trough it. Make sure it's wrapped tightly.",
      "Set the roll asside, repeat for all other strips.",
      "On a skillet melt the butter over a medium-low heat and add the chicken. Let it cook until golden-brown on one side, and flip it using a tong or fork. Make sure all sides are cooked",
      "Remove all the rolls and set them asside. Use a juicer to get the orange juice and remove any seeds from it",
      "In a small container mix the creamcheese with a little bit of milk at a time. It should get to a sour cream consistency.",
      "Add the orange juice and the creamcheese to the skillet, mix well until boiling.",
      "Add the chicken back and make sure all of it gets covered in the sauce. Let it sit on low heat for 5 minutes.",
      "Serve on a plate with rice. Potato wedges go really well as a side.",
    ],
    complexity: "Medium",
    servings: 6,
    totalTime: "55",
    cookTime: "20",
    prepTime: "35",
    spicy: 0,
    tags: ["Chicken", "Lunch", "Dinner"],
  },
  // Chicken Pie
  {
    id: "chicken-pie",
    title: "Chicken Pie",
    category: "lunch/dinner",
    img: "chicken-pie.jpg",
    ingredients: [
      "4 boneless chicken breasts",
      "4 tablespoons vegetable oil",
      "1 can corn",
      "1 can tomato sauce",
      "50g sliced olives",
      "250ml milk",
      "2 eggs",
      "2 cups flour",
      "400g shredded mozzarella",
    ],
    steps: [
      "Cook the chicken in medium-high heat untill soft. Get 2 forks and shredd it. In a pan mix it with the tomato sauce and add the corn, let it cook for 5min",
      "Preheat the oven to 180º C (355º F)",
      "In a blender add the eggs, the milk and half of the cheese, blend it. Slowly add the flower and salt.",
      "In a casserole add half of the blended mixture to the bottom, put the chicken on top and spread cheese on top. Finish with the other half of the mixture on top.",
      "Bake it for 20-30 minutes or until golden-brown.",
      "Let it cool down for 5 minutes. Cut small quares to serve.",
    ],
    complexity: "Easy",
    servings: 4,
    totalTime: "65",
    cookTime: "30",
    prepTime: "35",
    spicy: 0,
    tags: ["Chicken", "Lunch", "Dinner"],
  },
  // Pancake
  {
    id: "chicken-pancake",
    title: "Chicken Pancake",
    category: "lunch/dinner",
    img: "chicken-pancake.jpg",
    ingredients: [
      "4 boneless chicken breasts, diced",
      "350ml totamo sauce",
      "1 corn niblets can",
      "250g creamcheese",
      "Ketchup",
      "Mostard",
      "Worcestershire sauce",
      "Hickory sticks",
    ],
    steps: [
      "Cook the chicken breast untill all the water from the chicken is drained",
      "Add the tomato sauce and water to the pan. Use 2 units of water for every unit of tomato sauce",
      "Add the corn niblets can",
      "Once it starts boiling, add ketchup, mostard and worcestershire sauce to taste",
      "Cook it for 5-10 min or until the chicken is soft",
      "Mix the creamcheese with a little bit of milk. Whisk the mixture untill dissolved",
      "Turn off the head, add the creamcheese mixture and mix well",
      "Serve the dish over rice and add Hickory Sticks to taste",
    ],
    complexity: "Easy",
    servings: 4,
    totalTime: "45",
    prepTime: "15",
    cookTime: "30",
    spicy: 0,
  },
  // Fricasset
  {
    id: "chicken-fricassee",
    title: "Chicken Fricassee",
    category: "lunch/dinner",
    img: "chicken-fricassee.jpg",
    ingredients: [
      "4 boneless chicken breasts, diced",
      "350ml totamo sauce",
      "1 corn niblets can",
      "250g creamcheese",
      "Ketchup",
      "Mostard",
      "Worcestershire sauce",
      "Hickory sticks",
    ],
    steps: [
      "Cook the chicken breast untill all the water from the chicken is drained",
      "Add the tomato sauce and water to the pan. Use 2 units of water for every unit of tomato sauce",
      "Add the corn niblets can",
      "Once it starts boiling, add ketchup, mostard and worcestershire sauce to taste",
      "Cook it for 5-10 min or until the chicken is soft",
      "Mix the creamcheese with a little bit of milk. Whisk the mixture untill dissolved",
      "Turn off the head, add the creamcheese mixture and mix well",
      "Serve the dish over rice and add Hickory Sticks to taste",
    ],
    complexity: "Easy",
    servings: 4,
    totalTime: "45",
    prepTime: "15",
    cookTime: "30",
    spicy: 0,
  },
  // Cheesy Rice Chicken
  {
    id: "cheesy-rice-chicken",
    title: "Cheesy Rice Chicken",
    category: "lunch/dinner",
    img: "cheesy-rice-chicken.jpg",
    ingredients: [
      "4 boneless chicken breasts, diced",
      "3 eggs",
      "2 cups flour",
      "2 cups milk",
      "2 boneless skinless chicken breasts",
      "1 can tomato sauce",
      "1 can corn",
      "400g shredded mozzarela cheese",
    ],
    steps: [
      "Put the chicken in a pan and cover it with water, bring it to a boil on medium-high heat. Let it cook until soft.",
      "On a deep dish use 2 forks to shredd the chicken, don't leave any large chunks.",
      "Once shredded add salt, pepper and other spices to taste.",
      "Cook the chicken with the tomato sauce and the corn for 5min",
      "For the batter, mix the eggs, the milk and blend. Slowly add the flour until thickened. Salt to taste",
      "In a skillet add a dash of vegetable oil. When hot use a ladle to pour the batter into the pan. Cook on both sides until golden-brown. Set it asside",
      "Once all the pancakes are cooked add a little of the chicken mixture to one of the sides, top it with cheese and roll tightly. Serve hot.",
    ],
    complexity: "Easy",
    servings: 4,
    totalTime: "45",
    cookTime: "30",
    prepTime: "15",
    spicy: 0,
    tags: ["Chicken", "Lunch", "Dinner"],
  },

  //#endregion

  //#region Beef
  //a
  //#endregion

  //#region Pasta
  // a
  //#endregion

  //#endregion

  //#region Sides / Complements

  //#region Salad
  // a
  //#endregion

  //#region Potato

  // Potato Wedges
  {
    id: "potato-wedges",
    title: "Potato Wedges",
    category: "side",
    img: "potato-wedges.jpg",
    ingredients: [
      "4 potatoes russet",
      "Paprika, salt, pepper, cumin to taste",
      "Oilive oil",
    ],
    steps: [
      "Wash the potatoes and put it into quarters. If a quarter is too big, cut that in half",
      "Put the cut potatoes into a ziplock bag, add a little bit of olive oil and the spices to taste",
      "Close the bag and mix it well untill all slices of potatoes are seasoned",
      "Get a square casserole and put olive oil ultill the bottom is covered",
      "Add the sliced potatoes to the casserole, avoid putting slices on top of each other",
      "Cook on 250C for 20 minutes",
      "Remove the casserole from the oven, flip the slices over. Now the cooked side should be facing up",
      "Cook for another 20 minutes",
      "Once both sides are cooked and crispy, put them on a plate with paper towel and let it sit for 5 minutes",
      "Add salt and pepper to taste.",
    ],
    totalTime: "45",
    prepTime: "15",
    cookTime: "30",
    spicy: 0,
    servings: 4,
  },

  //#endregion

  //#region Sides
  // a
  //#endregion

  //#endregion

  //#region Drinks

  //#region Drinks
  // a
  //#endregion

  //#region Cocktails
  // a
  //#endregion

  //#endregion

  //#region Sweets

  //#region Deserts
  //a
  //#endregion

  //#endregion
];
export default recepies;

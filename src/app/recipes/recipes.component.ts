import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  recipeData: any='';

  recipes=[
    { dishes:'ALU GOBI',
    img:'https://www.blueosa.com/wp-content/uploads/2014/11/3350496133_50e16f1173_z.jpg',
    description:'Alu Gobi is a dry dish made with potatoes (aloo), cauliflower (gobi) and Indian spices. It is yellowish in color, due to the use of turmeric, and occasionally contains kalonji and curry leaves. Other common ingredients include garlic, ginger, onion, coriander stalks, tomato, peas, and cumin. It all adds up to one of the most popular dishes ordered in Indian restaurants.'
  },
  {
    dishes:'BUTTER CHICKEN',
    img:'https://www.blueosa.com/wp-content/uploads/2014/11/2284519526_bd3a48b222_z.jpg',
     description:'Butter chicken is traditionally cooked in a tandoor; but may be grilled, roasted or pan-fried in less authentic preparations. The gravy is made by first heating fresh tomato, garlic, and cardamom into a bright red pulp, which is then pureed after cooling, then the chef adds butter, Khoa and various spices, often including asafoetida, cumin, cloves, cinnamon, coriander, pepper, fenugreek and fresh cream. Did you know it originated in the 1950s, in the kitchens of Moti Mahal in Daryaganj, Delhi? A fun fact you can share with friends.'
    },
    { dishes:'ROGAN JOSH',
    img:'https://www.blueosa.com/wp-content/uploads/2014/11/14270067215_d31fdc3de1_z.jpg',
    description:'Rogan josh (or roghan josh) is a staple of Kashmiri cuisine: originally it was brought to Kashmir by the Mughals. It is one of the main dishes of the Kashmiri multi-course meal (the “Wazwan”). It consists of braised lamb chunks cooked with a gravy based on browned onions or shallots, yogurt, garlic, ginger and aromatic spices (cloves, bay leaves, cardamom and cinnamon). Its characteristic brilliant red color traditionally comes from liberal amounts of dried Kashmiri chillies that have been de-seeded to reduce their heat: these chillies are considerably milder than the typical dried cayenne chillies of Indian cuisine. The recipe’s spiciness is one of fragrance rather than heat, and the dish is mild enough to be appreciated by western palates that may not be use to spicy tastes. If you love lamb, this is a must eat dish.'},
    {
    dishes:'SAMOSAS',
  img:'https://www.blueosa.com/wp-content/uploads/2014/11/2223030510_f0b5139bc2_z.jpg',
  description:'Samosas are a fried or baked pastry with savoury filling, such as spiced potatoes, onions, peas, lentils and sometimes ground lamb, ground beef or ground chicken. They were introduced to India during the Muslim Delhi Sultanate when cooks from the Middle East and Central Asia migrated to work in the kitchens of the Sultan and the nobility. Indian samosas are usually vegetarian, and often accompanied by a mint sauce or chutney. Samosas are a common street food and many tourists or Indians eat them as a midday snack'
},
  {
    dishes:'TANDOORI CHICKEN',
    img:'https://www.blueosa.com/wp-content/uploads/2014/11/2925578034_388c1cddf3_z.jpg',
    description:'Tandoori chicken a popular North Indian dish consisting of roasted chicken prepared with yogurt and spices. The name comes from the type of cylindrical clay oven, a tandoor, in which the dish is traditionally prepared. The chicken is marinated in yogurt and seasoned with the spice mixture tandoori masala. Cayenne pepper, red chili powder or Kashmiri red chili powder is used to give it a fiery red hue. This dish goes so well with steaming basmati rice and crispy naan.'
    },
    {
      dishes:'MALAI KOFTA',
       img:'https://www.blueosa.com/wp-content/uploads/2014/11/5179876145_2b75b70fb7_z.jpg',
        description:'Malai Kofta is a tasty vegetarian alternative. Restaurant style malai kofta is cooked in a creamy gravy made of tomatoes and cashew nuts. Malai actually means, “cream” and both the kofta and the sauce literally melts in your mouth. A heavenly dish that soaks up rice nicely.'
       },
      {
        dishes:'MASALA CHAI',
        img:'https://www.blueosa.com/wp-content/uploads/2014/11/5845217289_508ef9ccc3_z.jpg',
        description:'There’s nothing like the experience of stopping a Chai Wallah on the street and ordering a steaming cup of masala chai when in India. Made by brewing black tea with a mixture of aromatic spices and herbs. The beverage has gained worldwide popularity, becoming a feature in many coffee and teahouses. Traditionally it is prepared by a decoction of green cardamom pods, cinnamon sticks, ground cloves, ground ginger, and black peppercorn together with black tea leaves, In international tea shops, it’s often sold in a tea bag form, with a variety of revolving recipes, but once combined with steaming hot milk, it’s delicious all around, whether found in India or your hometown.',
        
        },
        {
          dishes:'MATAR PANEER',
          img:'https://www.blueosa.com/wp-content/uploads/2014/11/3260360859_64cbe9ea1a_z.jpg',
          description:'Matar Paneer is a vegetarian north Indian dish consisting of peas and farmer’s cheese (paneer) in a tomato based sauce and spiced with garam masala. It is often served with rice, naan, paratha, poori, or roti (depending on the region). Most lovers of this dish recommend dipping whatever bread is accompanying the meal into the delicious tomato gravy.'
        },
          {
            dishes:'NAAN',
            img:'https://www.blueosa.com/wp-content/uploads/2014/11/319252332_16d4373176_z.jpg',
             description:'Naan is a leavened, oven-baked flatbread that’s normally served with all meals. Typically, it will be served hot and brushed with ghee or butter. In non-traditional circles, different varieties of naan are available, like garlic naan or cheese naan. However you eat it, naan acts as almost a spoon to soup up sauce or dipped into chutneys. An Indian meal isn’t complete without naan at its side.'},
            {
              dishes:'BEEF VINDALOO',
              img:'https://www.blueosa.com/wp-content/uploads/2014/11/4287917877_6bf5781951_z.jpg',
              description:'Vindaloo itself is a curry dish popular in the region of Goa. It is known globally in its Anglo-Indian form as a staple of curry house menus, often regarded as a fiery spicy dish, though it is not necessarily the hottest dish around. A variety of meats can become a vindaloo dish such as lamb or chicken, but beef vindaloo is one of the most popular versions. A vindaloo paste can be a blend of chillies with cumin, coriander and other authentic spices. Traditionally a very hot curry with tomatoes, onions and of course loads of chillies, but many Indian restaurants ease down the hotness, by adding less chillies. If you want a bit of fire in your mouth, order this dish!' }]
  
  sendRecipes(r){
  this.recipeData=r;
  }

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css']
})
export class MobileComponent implements OnInit {

  mobileData: any='';

  mobiles=[
    { brand:'APPLE IPHONE XS MAX',
    img:'https://static.digit.in/default/thumb_124218_default_td_300.jpeg',
    description:'The iPhone XS Max is not only the best smartphone you can buy, its also the most expensive. You get the best display available on a smartphone which is a massive 6.5-inch HDR display thats simply stunning and the Apple A12 Bionic chip with a dedicated neural engine to handle AI tasks. On the back is a dual camera unit that relies on machine learning to let you control the depth of field, make animojis, adjust the lighting on portraits and much more.'
  },
  {
    brand:'HUAWEI P30 PRO',
    img:'https://static.digit.in/product/thumb_130620_product_td_300.jpeg',
     description:'The Huawei P30 Pro is a camera beast that sets a benchmark for mobile photography. It also offers flagship performance making it one of the best phones to buy right now.' },
    { 
      brand:'SAMSUNG GALAXY S10+',
    img:'https://static.digit.in/product/thumb_131994_product_td_300.jpeg',
    description:'The Samsung Galaxy S10+ sports a new design and a brilliant display. Theres flagship performance on offer and also improved cameras that now includes a wide-angle lens. Certainly one of the best phones to buy right now.'
    }, 
     {
    brand:'ONEPLUS 7 PRO',
  img:'https://static.digit.in/product/thumb_130775_product_td_300.jpeg',
description:'The OnePlus 7 Pro is first truly flagship phone from OnePlus.It is no longer a flagship killer but an out and out flagship that looks pretty gorgeous with a 2K AMOLED display with 90Hz refresh rate and HDR10+ certification. Then theres up to 12GB RAM and 256GB combined with Snapdragon 855. Last but not the least, theres a triple camera stack with a 48MP primary camera, 16MP wide-angle camera and an 8MP telephoto lens with 3X optical zoom. The OnePlus 7 Pro is one of the most feature-rich flagship available in the market today.'},
  {
    brand:'GOOGLE PIXEL 3 XL',
    img:'',
    description:'The Google Pixel 3 XL offers the best smartphone along with the best Android experience money can buy.It is neat and clean, never lags, stays updated and can do some magical things with AI and machine learning like lossless zoom, focus tracking, wide angle selfies and more.'
  },
    {
      brand:'SAMSUNG GALAXY NOTE 9',
       img:'https://static.digit.in/default/thumb_121492_default_td_300.jpeg',
        description:'The Samsung Galaxy Note 9 was the best Samsung had to offer last year, and for more reasons than one, it is one of the most powerful Android device you can buy right now. With a tall 6.4-inch bright display and S-Pen trickery, the Note 9 is simply stunning. Easily the best Android to phone to buy this year.'
           },
      {
        brand:'ASUS 6Z',
        img:'https://static.digit.in/product/thumb_133916_product_td_300.jpeg',
        description: 'The Asus 6z is a headturner. It comes with a flip camera where the rear stack doubles up as the selfie camera. That way, you get the same quality of photos both from the front and the back. As such, there is a 48MP Sony sensor and a 13MP wide-angle sensor on the stack allowing for both high-res landscape shots as well as detailed selfies. Moreover, the Asus 6z is everybit a flagship performer. With a Snapdragon 855 and 8GB RAM with 256GB storage.'
       },
        {
          brand:'BLACK SHARK 2',
          img:'https://static.digit.in/product/thumb_130733_product_td_300.jpeg',
          description:'The Black Shark 2 is an out and out gaming smartphone. The design, hardware and features all aim at one thing - Make your gaming better. It sports flagship hardware under the hood with the Snapdragon 855 SoC at the heart of it, which is coupled by up to 12GB RAM and 256GB storage. The Black Shark 2 is notable for the RGB-laden design that will make any gamer happy. Then there are specific features to improve gaming like Master Touch, Ludicrous Mode and more.' 
         },
          {
            brand:'OPPO RENO 10X ZOOM',
            img:'https://static.digit.in/product/thumb_131658_product_td_300.jpeg',
             description:'The Oppo Reno 10X Zoom is exquisitely built and exudes a class that even some premium smartphones can not match up to. Its built of frosted glass on the back and an edge-to-edge FHD+ AMOLED display on the front. Oppo has paid a lot of attention in designing the smartphone, right down to the dot in the middle of the rear panel to the shark-fin pop-up camera module. But thats not all. The Reno 10X Zoom also packs the best hardware you can get on an Android smartphone including a Snapdragon 855 processor, 8GB RAM and 256GB storage. The phones claim to fame, however, is the ability to zoom up to 10X by using a periscope telephoto camera, in a triple-camera setup which also includes a 48MP primary sensor and an ultra-wide lens. That feature works pretty well and can reproduce much better details and sharpness at 10X zoom than the average smartphone.'
            },
                       {
              brand:'XIAOMI REDMI NOTE 7 PRO',
              img:'https://static.digit.in/product/thumb_130740_product_td_300.jpeg',
              description:'The Redmi Note 7 Pro may be quite affordable, but its also one of the best mid-rangers you can buy with a 48MP camera on offer alongside gaming-centric performance.'
            }]
  sendMobiles(m){
  this.mobileData=m;
  }


  constructor() { }

  ngOnInit() {
  }

}

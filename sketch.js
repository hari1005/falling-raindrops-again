var rainDrop,rains,rains1,rains2,rains3,rains4;

function preload(){
  var polp=Math.round(random(1,8));
  switch(polp){
    case 1: rains=loadImage("1Up.jpg")
      break;
    case 2: rains=loadImage("BeeMush.jpg")
      break;
    case 3: rains=loadImage("BooMush.jpg")
        break;
    case 4: rains=loadImage("lifeMush.jpg")
        break;
    case 5: rains=loadImage("megaMush.jpg")
        break;
    case 6: rains=loadImage("miniMush.jpg")
        break;
    case 7: rains=loadImage("mushroom.jpg")
        break;
    case 8:  rains=loadImage("SpringMush.jpg")
        break;
    default:break;
  }
  var polp1=Math.round(random(1,8));
  switch(polp1){
    case 1: rains1=loadImage("1Up.jpg")
      break;
    case 2: rains1=loadImage("BeeMush.jpg")
      break;
    case 3: rains1=loadImage("BooMush.jpg")
        break;
    case 4: rains1=loadImage("lifeMush.jpg")
        break;
    case 5: rains1=loadImage("megaMush.jpg")
        break;
    case 6: rains1=loadImage("miniMush.jpg")
        break;
    case 7: rains1=loadImage("mushroom.jpg")
        break;
    case 8:  rains1=loadImage("SpringMush.jpg")
        break;
    default:break;
  }
  var polp2=Math.round(random(1,8));
  switch(polp2){
    case 1: rains2=loadImage("1Up.jpg")
      break;
    case 2: rains2=loadImage("BeeMush.jpg")
      break;
    case 3: rains2=loadImage("BooMush.jpg")
        break;
    case 4: rains2=loadImage("lifeMush.jpg")
        break;
    case 5: rains2=loadImage("megaMush.jpg")
        break;
    case 6: rains2=loadImage("miniMush.jpg")
        break;
    case 7: rains2=loadImage("mushroom.jpg")
        break;
    case 8:  rains2=loadImage("SpringMush.jpg")
        break;
    default:break;
  }
  var polp3=Math.round(random(1,8));
  switch(polp3){
    case 1: rains3=loadImage("1Up.jpg")
      break;
    case 2: rains3=loadImage("BeeMush.jpg")
      break;
    case 3: rains3=loadImage("BooMush.jpg")
        break;
    case 4: rains3=loadImage("lifeMush.jpg")
        break;
    case 5: rains3=loadImage("megaMush.jpg")
        break;
    case 6: rains3=loadImage("miniMush.jpg")
        break;
    case 7: rains3=loadImage("mushroom.jpg")
        break;
    case 8:  rains3=loadImage("SpringMush.jpg")
        break;
    default:break;
  }
  var polp4=Math.round(random(1,8));
  switch(polp4){
    case 1: rains4=loadImage("1Up.jpg")
      break;
    case 2: rains4=loadImage("BeeMush.jpg")
      break;
    case 3: rains4=loadImage("BooMush.jpg")
        break;
    case 4: rains4=loadImage("lifeMush.jpg")
        break;
    case 5: rains4=loadImage("megaMush.jpg")
        break;
    case 6: rains4=loadImage("miniMush.jpg")
        break;
    case 7: rains4=loadImage("mushroom.jpg")
        break;
    case 8:  rains4=loadImage("SpringMush.jpg")
        break;
    default:break;
  }
}

function setup() {
  createCanvas(800,400);

  rainDrop=createSprite(Math.round(random(10,790)),-70,10,50);
  rainDrop.addImage("dude",rains);
  rainDrop1=createSprite(Math.round(random(10,790)),-70,10,50);
  rainDrop1.addImage("dude",rains1);
  rainDrop2=createSprite(Math.round(random(10,790)),-70,10,50);
  rainDrop2.addImage("dude",rains2);
  rainDrop3=createSprite(Math.round(random(10,790)),-70,10,50);
  rainDrop3.addImage("dude",rains3);
  rainDrop4=createSprite(Math.round(random(10,790)),-70,10,50);
  rainDrop4.addImage("dude",rains4);
}

function draw() {
  background(0,25,150);
  rainDrop.velocityY=2;
  rainDrop1.velocityY=2;
  rainDrop2.velocityY=2;
  rainDrop3.velocityY=2;
  rainDrop4.velocityY=2;
  if(rainDrop.y===470){
    rainDrop.y=-40
    rainDrop.x=Math.round(random(10,790))
    polp=Math.round(random(1,8))
    switch(polp){
      case 1: rains=loadImage("1Up.jpg")
        break;
      case 2: rains=loadImage("BeeMush.jpg")
        break;
      case 3: rains=loadImage("BooMush.jpg")
          break;
      case 4: rains=loadImage("lifeMush.jpg")
          break;
      case 5: rains=loadImage("megaMush.jpg")
          break;
      case 6: rains=loadImage("miniMush.jpg")
          break;
      case 7: rains=loadImage("mushroom.jpg")
          break;
      case 8:  rains=loadImage("SpringMush.jpg")
          break;
      default:break;
    }
  }
  if(rainDrop2.y===470){
    rainDrop2.y=-40
    rainDrop2.x=Math.round(random(10,790))
    polp2=Math.round(random(1,8))
    switch(polp2){
      case 1: rains2=loadImage("1Up.jpg")
        break;
      case 2: rains2=loadImage("BeeMush.jpg")
        break;
      case 3: rains2=loadImage("BooMush.jpg")
          break;
      case 4: rains2=loadImage("lifeMush.jpg")
          break;
      case 5: rains2=loadImage("megaMush.jpg")
          break;
      case 6: rains2=loadImage("miniMush.jpg")
          break;
      case 7: rains2=loadImage("mushroom.jpg")
          break;
      case 8:  rains2=loadImage("SpringMush.jpg")
          break;
      default:break;
    }
  }
  if(rainDrop3.y===470){
    rainDrop3.y=-40
    rainDrop3.x=Math.round(random(10,790))
    polp3=Math.round(random(1,8))
    switch(polp3){
      case 1: rains3=loadImage("1Up.jpg")
        break;
      case 2: rains3=loadImage("BeeMush.jpg")
        break;
      case 3: rains3=loadImage("BooMush.jpg")
          break;
      case 4: rains3=loadImage("lifeMush.jpg")
          break;
      case 5: rains3=loadImage("megaMush.jpg")
          break;
      case 6: rains3=loadImage("miniMush.jpg")
          break;
      case 7: rains3=loadImage("mushroom.jpg")
          break;
      case 8:  rains3=loadImage("SpringMush.jpg")
          break;
      default:break;
    }
  }
  if(rainDrop4.y===470){
    rainDrop4.y=-40
    rainDrop4.x=Math.round(random(10,790))
    polp4=Math.round(random(1,8))
    switch(polp4){
      case 1: rains4=loadImage("1Up.jpg")
        break;
      case 2: rains4=loadImage("BeeMush.jpg")
        break;
      case 3: rains4=loadImage("BooMush.jpg")
          break;
      case 4: rains4=loadImage("lifeMush.jpg")
          break;
      case 5: rains4=loadImage("megaMush.jpg")
          break;
      case 6: rains4=loadImage("miniMush.jpg")
          break;
      case 7: rains4=loadImage("mushroom.jpg")
          break;
      case 8:  rains4=loadImage("SpringMush.jpg")
          break;
      default:break;
    }
  }
  if(rainDrop1.y===470){
    rainDrop1.y=-40
    rainDrop1.x=Math.round(random(10,790))
    polp1=Math.round(random(1,8))
    switch(polp1){
      case 1: rains1=loadImage("1Up.jpg")
        break;
      case 2: rains1=loadImage("BeeMush.jpg")
        break;
      case 3: rains1=loadImage("BooMush.jpg")
          break;
      case 4: rains1=loadImage("lifeMush.jpg")
          break;
      case 5: rains1=loadImage("megaMush.jpg")
          break;
      case 6: rains1=loadImage("miniMush.jpg")
          break;
      case 7: rains1=loadImage("mushroom.jpg")
          break;
      case 8:  rains1=loadImage("SpringMush.jpg")
          break;
      default:break;
    }
  }
    
  drawSprites();
}


$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     


    // TODO 2 - Create Platforms
    createPlatform(200, 700, 50, 50, "green" );
    createPlatform(400, 600, 50, 50, "green" );
    createPlatform(600, 500, 50, 50, "green" );
    createPlatform(800, 400, 50, 50, "green" );
    createPlatform(1000, 300, 50, 50, "green" );
    createPlatform(1200, 200, 50, 50, "green");
    createPlatform(0, 700, 100, 100, "green");
    // TODO 3 - Create Collectables
    createCollectable("steve", 200, 600, 0.5);
    createCollectable("steve", 600, 400, 0.5);
    createCollectable("steve", 800, 200, 0.5);
    createCollectable("steve", 1200, 100, 4);
    createCollectable("steve", 400, 500, 0.5);
  
    // TODO 4 - Create Cannons
    createCannon("top", 200, 2000);
    createCannon("left", 170, 2000);
    createCannon("top", 600, 2000);
    createCannon("left", 430, 2000);
    createCannon("top", 800, 2000);
    createCannon("left", 490, 2000);
    createCannon("top", 1200, 2000);
    createCannon("top", 1000, 2000);
    createCannon("top", 400, 2000);
   createCannon("left", 200, 2000);
   createCannon("left",680, 1);














    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});

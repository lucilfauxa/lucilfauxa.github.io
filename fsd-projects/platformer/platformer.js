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
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    // toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(500, 0, 20, 290, "blue");
    createPlatform(1350, 400, 50, 50, "red");
    createPlatform(650, 630, 100, 50, "black");
    createPlatform(900, 500, 100, 50, "black");
    createPlatform(700, 370, 100, 50, "black");
    createPlatform(520, 240, 100, 50);
    createPlatform(1200, 400, 50, 20, "green");
    createPlatform(500, 500, 100, 50, "brown");
    createPlatform(300,400, 100, 50, "brown");
    createPlatform(160, 270, 50, 50, "brown");
    createPlatform(450, 250, 50, 50, "red");





    // TODO 3 - Create Collectables
    createCollectable("database", 550, 100, 0.5, 0.7);
    createCollectable("database", 450, 100, 0.5, 0.7);
    createCollectable("database", 1350, 50, 0.5, 0.7);




    
    // TODO 4 - Create Cannons
    createCannon("top", 300, 1500);
    createCannon("bottom", 1100, 1100);
    createCannon("right", 200, 1500);


    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});

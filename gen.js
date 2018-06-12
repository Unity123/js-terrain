function generate(seed) {
  var world = [];
  if (seed === undefined) {
    var t = Math.floor(Math.random() * 257);
    var genNoise = new SimplexNoise();
    for (var x = 0; x <= 500; x++) {
      for (var y = 0; y <= 500; y++) {
        var height = genNoise.noise3D(x / (Math.random() * Math.random()), y / (Math.random() * Math.random()), t / 16) * 0.5 + 0.5;
        world.push(height);
      }
    }
  }
  return world;
}


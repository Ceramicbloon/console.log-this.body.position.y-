const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var rain
var maxDrops = 100
function preload() {

}

function setup() {
    createCanvas(400, 400)
    engine = Engine.create()
    world = engine.world
    // rain = new Rain(40, 40, 10)
    for (var i = 0; i < maxDrops; i++) {
        rain.push(new Rain(random(0, 400), 20, 20))
    }
}

function draw() {
    background(0)
    Engine.update(engine)

    // rain.update()
    // rain.display()
}


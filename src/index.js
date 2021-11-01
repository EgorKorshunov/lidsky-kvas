import "./style.css";
import "core-js/stable";
import { App } from "./app.js";
import * as PIXI from "pixi.js";

const canvas = document.getElementById("canvas");
let app = new App(canvas);
app = app.app;


// Load the kvass texture
app.loader.add('kvass', './img/kvass.png')
    .load(startup);

function startup()
{
    var kvass = new PIXI.Sprite(app.loader.resources.kvass.texture);

    // Center the sprite's anchor point
    kvass.anchor.set(0.5);
    kvass.scale.x = 0.5;
    kvass.scale.y = 0.5;

    // Move the sprite to the center of the screen
    kvass.x = app.renderer.width / 2;
    kvass.y = app.renderer.height / 2;

    app.stage.addChild(kvass);

    // Listen for animate update
    app.ticker.add(function(delta)
    {
        // Rotate mr rabbit clockwise
        kvass.rotation += 0.1 * delta;
    });
}
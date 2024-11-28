import { Engine } from "@babylonjs/core";
import menuScene from "./menuScene";
import gameScene from "./gameScene";
import './main.css';


import { SceneData } from "./interfaces";

const CanvasName = "renderCanvas";

let canvas = document.createElement("canvas");
canvas.id = CanvasName;

canvas.classList.add("background-canvas");
document.body.appendChild(canvas);

let scene;
let scenes: any[] = [];

let eng = new Engine(canvas, true, {}, true);

scene[0] = menuScene(eng);
scene[1] = gameScene(eng);

scene = scenes[0].scene;
setSceneIndex(0);

export default function setSceneIndex(i: number)
{
    eng.runRenderLoop(() => {
        scenes[i].scene.render();
    });     
}




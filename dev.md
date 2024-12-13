# Documentation for 5th element

The 5th Element is a multi-scene, where users can navigate between two scenes. Each scene has unique content and functionality, demonstrating both static and animated objects.

# 

Scene 1: The first scene contains basic 3D shapes such as:
A box positioned above the ground.
A sphere resting on the ground.
A flat ground as the base of the scene.
A hemispheric light illuminates the shapes.

#
Scene 2: The second scene has animation, where the sphere remains stationary at the center of the scene.
A cylinder smoothly moves in a circular orbit around the sphere and the ground remains flat, and lighting ensures the scene is well-illuminated.

Below is the  code that animates the cylinder, and make it move around the  sphere in a circular motion.

``` Typescript 
  function animateCylinder(cylinder: Mesh, sphere: Mesh, scene: Scene) {
    let angle = 0; 
    scene.onBeforeRenderObservable.add(() => {
      angle += 0.01;
      let radius = 3;
      cylinder.position.x = sphere.position.x + Math.cos(angle) * radius;
      cylinder.position.z = sphere.position.z + Math.sin(angle) * radius;
      cylinder.position.y = sphere.position.y;
    });
  }
```
#

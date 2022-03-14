AFRAME.registerComponent('bullet', {
    schema: {
        position: {type: 'vec3'},
        rotation: {type: 'vec3'},
        speed: {type:'number'},
        model: {default: './models/bullet.glb'}
    },

    init: function () {
      let el = this.el;
      let data = this.data;
      el.object3D.position.set(data.position.x, data.position.y, data.position.z);
      el.object3D.rotation.set(data.rotation.x, data.rotation.y, data.rotation.z);
      el.setAttribute("gltf-model",data.model)
      el.setAttribute("ammo-body","type: static; emitCollisionEvents: true");
      el.setAttribute("ammo-shape","fit:manual; type: box; halfExtents: 1 1 1;");
      el.addEventListener("collidestart", e => {
        console.log(e);
        e.detail.targetEl.body.el.remove()
      })
    },

    update: function () {
      // Do something when component's data is updated.
    },

    remove: function () {
      // Do something the component or its entity is detached.
      console.log('bullet removed')
    },

    tick: function (time, timeDelta) {
      // Do something on every scene tick or frame.
      this.el.object3D.translateZ(-this.data.speed);
      let position = this.el.object3D.position;
      if(position.z < -20 || position.z > 20)
        this.el.remove();
      if(position.y < 0 || position.y > 50)
        this.el.remove();
    }
});

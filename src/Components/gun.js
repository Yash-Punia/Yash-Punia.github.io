import Entity from "../Entity";

AFRAME.registerComponent('gun', {
  schema: {
    hand: { default: '' },
    model: { default: '' },
  },

  init: function () {
    var self = this;
    this.el.addEventListener('triggerdown', () => {
      self.shoot(self.el);
    });
  },

  update: function () {
    var hand = this.data.hand;
    var el = this.el;
    var controlConfiguration = {
      hand: hand,
      model: false,
      // orientationOffset: { x: 0, y: 0, z: hand === 'left' ? 90 : -90 }
    };

    // Build on top of controller components.
    el.setAttribute('vive-controls', controlConfiguration);
    el.setAttribute('oculus-touch-controls', controlConfiguration);
    el.setAttribute('daydream-controls', controlConfiguration);
    el.setAttribute('gearvr-controls', controlConfiguration);
    el.setAttribute('windows-motion-controls', controlConfiguration);
    
    // Set a model.
    const gunModel = new Entity({
      'gltf-model':this.data.model,
      'scale':'0.2 0.2 0.2'
    })

    el.appendChild(gunModel)
  },

  remove: function () {
    // Do something the component or its entity is detached.
  },

  tick: function (time, timeDelta) {
    // Do something on every scene tick or frame.
  },
  shoot: function (el) {
    console.log('SHOOT!')
    let position = el.object3D.position;
    let rotation = el.object3D.rotation;
    let bulletPos = new THREE.Vector3(position.x, position.y, position.z);
    let bulletRotation = new THREE.Euler(rotation.x, rotation.y, rotation.z);
    let bullet = new Entity({
      'bullet': 'speed: 0.2; position: ' + bulletPos.x + ' ' + bulletPos.y + ' ' + bulletPos.z +
        '; rotation: ' + bulletRotation.x + ' ' + bulletRotation.y + ' ' + bulletRotation.z,
      'scale':'0.2 0.2 0.2'
    })
  }
});

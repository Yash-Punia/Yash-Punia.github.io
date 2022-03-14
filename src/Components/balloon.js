AFRAME.registerComponent('balloon', {
    schema: {
        model: {default: ''},
    },

    init: function () {
      const el = this.el;
      el.setAttribute("gltf-model",this.data.model);
      el.setAttribute("ammo-body","type: static")
      el.setAttribute("ammo-shape","type:sphere; fit:manual; sphereRadius: 1");
    },

    update: function () {
      // Do something when component's data is updated.
    },

    remove: function () {
      // Do something the component or its entity is detached.
      console.log("you scored a point!")
    },

    tick: function (time, timeDelta) {
      // Do something on every scene tick or frame.
    }
});

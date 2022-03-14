AFRAME.registerComponent('target', {
  schema: {

  },

  init: function () {
    // Do something when component first attached.
    const el = this.el;
    console.log('target init');
  },

  update: function () {
    // Do something when component's data is updated.
  },

  remove: function () {
    // Do something the component or its entity is detached.
  },

  tick: function (time, timeDelta) {
    // Do something on every scene tick or frame.
  }
});

// Mixins for debugging purposes

export const didMount = {
  mounted: function() {
    if (process.env.ENV !== "production") {
      console.log(`Component '${this.$options.name}' did mount.`);
    }
  }
};

export const didUpdate = {
  update: function() {
    if (process.env.ENV !== "production") {
      console.log(`Component '${this.$options.name}' did update.`);
    }
  }
};

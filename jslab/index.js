var jupyter_leaflet = require('jupyter-leaflet');

var jupyterlab_widgets = require('@jupyterlab/nbwidgets');

module.exports.default = {
  id: 'jupyter.extensions.jupyter-leaflet',
  requires: [jupyterlab_widgets.INBWidgetExtension],
  activate: function(app, widgets) {
      widgets.registerWidget({
          name: 'jupyter-leaflet',
          version: jupyter_leaflet.version,
          exports: jupyter_leaflet
      });
  },
  autoStart: true
};

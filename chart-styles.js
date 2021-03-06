const $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = `<dom-module id="chart-styles">

  <template>

    <style>
      :host {
        display: inline-block;
        position: relative;
      }

      :host > div {
        height: 100%;
      }

      #canvas {
        width: 100%;
        height: 100%;
      }
    </style>

  </template>

</dom-module>`;

document.head.appendChild($_documentContainer.content);

/**
Polar area charts are similar to pie charts, but each segment has the same angle - the radius of the segment differs depending on the value.

This type of chart is often useful when we want to show a comparison data similar to a pie chart, but also show a scale of values for context.

##### Example

    <chart-polar-area data="{{data}}"></chart-polar-area>

    ...

    this.data = {
      datasets: [{
        data: [
          11,
          16,
          7,
        ],
        backgroundColor: [
          "#FF6384",
          "#4BC0C0",
          "#FFCE56",
        ],
        label: 'My dataset' // for legend
      }],
      labels: [
        "Red",
        "Green",
        "Yellow"
      ]
    };

@group Chart Elements
@element chart-polar-area
@demo demo/chart-polar-area.html
*/

import './chart-styles.js';
import 'chart.js/dist/Chart.js';
import { PolymerElement, html } from '@polymer/polymer';;
import { IronResizableBehavior } from '@polymer/iron-resizable-behavior/iron-resizable-behavior.js';
import { mixinBehaviors } from '@polymer/polymer/lib/legacy/class.js';
import {ChartResizeBehavior} from './resize-behavior.js';
import {ChartContextBehavior} from './context-behavior.js';
import {ChartPropertyBehavior} from './chart-property-behavior.js';

class ChartPolarArea extends ChartResizeBehavior(ChartContextBehavior(ChartPropertyBehavior(mixinBehaviors([IronResizableBehavior], PolymerElement)))) {
  static get template() {
    return html`
    <style include="chart-styles"></style>

    <div>
      <canvas id="canvas"></canvas>
    </div>
`;
  }

  static get is() { return 'chart-polar-area'; }

  ready() {
    super.ready();
    this._setType('polarArea');
  }
}

window.customElements.define(ChartPolarArea.is, ChartPolarArea);

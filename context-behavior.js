import {dedupingMixin} from '@polymer/polymer/lib/utils/mixin.js';
/** @polymerMixin */
export const ChartContextBehavior = dedupingMixin(function(superClass) {
  return class extends superClass {
    _measure(cb) {
      function measure() {
        if (this.offsetHeight) {
          cb(true);
        } else {
          cb(false);
        }
      }
      requestAnimationFrame(measure.bind(this));
    }

    _queue() {
      if (this.hasData) {
        this._measure(hasHeight => {
          if (hasHeight) {
            this.updateChart();
          }
        });
      }
    }

    updateChart() {

      this.async(function () {

        if (this.chart) {

          this.chart.stop();
          this.mixin(this.chart.data, this.data);
          this.chart.update();

        } else {

          this.async(function () {
            if (this.hasData) {
              this.chart = new Chart(this.ctx, {
                type: this.type,
                data: this.data,
                options: this.options
              });
            }
          }, null, 0);

        }

      }, null, 0);

    }

    connectedCallback() {
      super.connectedCallback();
      this.ctx = this.$.canvas.getContext('2d');
      this._queue();
    }
  }
});

import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class StepEditorComponent extends Component {
  @action
  cycleVol(){
    let step = this.args.step;
    if (step.volume === 1) {
      step.volume = 0;
    }else{
      step.volume = 1;
    }
    }
  }

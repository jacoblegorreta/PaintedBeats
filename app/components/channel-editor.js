import Component from '@glimmer/component';
import {action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service'

export default class ChannelEditorComponent extends Component {
  @service audio;
  @tracked isInstrumentSelectorVisable = false;

  @action
  addStep(){
    this.args.channel.steps.createRecord();
    this.args.channel.steps.createRecord();
    this.args.channel.steps.createRecord();
    this.args.channel.steps.createRecord();
  }

  @action
  showInstrumentSelector(){
    this.isInstrumentSelectorVisable = true;
  }

  @action
  hideInstrumentSelector(){
    this.isInstrumentSelectorVisable = false;
  }
}

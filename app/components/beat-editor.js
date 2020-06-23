import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class BeatEditorComponent extends Component {
  @action
  addChannel(){
    this.args.beat.channels.createRecord();
  }
  @action
  deleteChannel(channel){
    this.args.beat.channels.removeObject(channel);
  }
}

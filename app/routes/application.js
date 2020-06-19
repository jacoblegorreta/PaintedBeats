import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ApplicationRoute extends Route {
  @service store;

  beforeModel(){
    this._createBeatExample();
  }

    _createBeatExample(){
      let beat = this.store.createRecord('beat', {
        id: 1, name : 'Beat Example', tempo:   90
      });

      beat.createChannel([0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5], 'hihat_open');
      beat.createChannel([0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 1], 'clap');

      beat.createChannel([1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1], 'kick');
    }
}

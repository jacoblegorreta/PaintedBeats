import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class BeatsBeatRoute extends Route {
  @service store;
  @service Playback;

  model ({beat_id}) {
    return this.store.peekRecord('beat', beat_id);
  }

  afterModel(beat) {
    this.Playback.beat = beat;
  }
}

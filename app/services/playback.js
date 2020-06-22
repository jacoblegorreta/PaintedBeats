import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { timeout } from 'ember-concurrency';
import { task } from 'ember-concurrency-decorators';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class PlaybackService extends Service {
  @service audio;
  @tracked beat;
  @tracked tickCount = 0;
  @tracked isPlaying = false;

  get onbeat(){
    return Math.floor((this.tickCount / 4) % 4) +1;
  }

  get onbar(){
    return Math.floor(this.tickCount / 16) +1;
  }

  get onsixteenth(){
    return (this.tickCount % 4) +1;
  }

  get interval(){
    return 1000 / (this.beat.tempo / 60 * 4);
  }


  @action
  play() {
    this.isPlaying = true;
    this.tick.perform();
  }
  @action
  stop() {
    this.isPlaying = false;
  }

  @action
  decreaseTempo() {
    this.beat.tempo -= 5;
  }
  @action
  increaseTempo() {
      this.beat.tempo += 5;
    }


  @task
  *tick() {
    if (this.isPlaying) {
      this.beat.setTickCount(this.tickCount);
      let notes = this.beat.getPlayingNotes();

      this.audio.playNotes(notes);
      yield timeout(this.interval);
      this.tickCount++;
      this.tick.perform();
    }
  }
}

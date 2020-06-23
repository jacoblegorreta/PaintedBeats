import Model, {attr, hasMany} from '@ember-data/model';

export default class ChannelModel extends Model {
  @attr('string', {defaultValue: 'cowbell'}) sound;
  @hasMany steps;

  setTickCount(tickCount){
    if(this.steps.length === 0){
      return;}
    this.steps.forEach(step => step.isPlaying = false);

    let curStepIndex =tickCount % this.steps.length;
    let curStep = this.steps.objectAt(curStepIndex);
    curStep.isPlaying = true;
  }

  getPlayingNote(){
    if (this.steps.length === 0){
      return;
    }
    let playingStep = this.steps.find(step => step.isPlaying);

    if (playingStep.volume > 0){
      return{
        sound: this.sound,
        volume: playingStep.volume
      }
    }
  }
}

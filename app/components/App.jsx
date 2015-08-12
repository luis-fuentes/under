import React from 'react';
import uuid from 'node-uuid';
import Notes from './Notes';
import NoteActions from '../actions/NoteActions';
import NoteStore from '../stores/NoteStore';
import AltContainer from 'alt/AltContainer';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.addItem}>+</button>
        <AltContainer
          stores={[NoteStore]}
          inject={ {
            items: () => NoteStore.getState().notes
          } }
        >
          <Notes onEdit={this.itemEdited} />
        </AltContainer>
      </div>
    );
  }
  addItem() {
    NoteActions.create({id: uuid.v4, task: 'New task'});
  }
  itemEdited(id, task) {
    if(task) {
      NoteActions.update({id, task});
    }
    else {
      NoteActions.delete(id);
    }
  }
}
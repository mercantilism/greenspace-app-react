// @flow
import { initializeFilterState } from './utils';

const initialState = {
  filters: {}
};

initialState.filters.greenspaces = initializeFilterState({
  farmerDesired: ['yes', 'no'],
  plotSize: ['initial', 'largePlot', 'microPlot', 'backyard', 'frontyard', 'fullyard']
});

initialState.filters.farmers = initializeFilterState({
  experience: ['initial', 'expert', 'intermediate', 'novice'],
  skills: [
    'initial',
    'fruits',
    'vegetables',
    'herbs',
    'farming education',
    'home gardening',
    'sustainability',
    'organic',
    'CSA',
    'farmers market'
  ]
});

export default initialState;

// @flow

export const FilterCatProps: FiltersProps = {
  greenspaces: {
    filters: ['plotSize', 'farmerDesired'],
    titles: ['Plot Size', 'Seeking Farmers'],
    options: {
      plotSize: ['initial', 'largePlot', 'microPlot', 'backyard', 'frontyard', 'fullyard'],
      farmerDesired: ['yes', 'no']
    },
    optionsText: {
      plotSize: ['Any', 'Large Plot', 'Micro Plot', 'Backyard', 'Frontyard', 'Full Yard'],
      farmerDesired: ['Yes', 'No']
    },
    binaryFilters: ['farmerDesired'],
    binaryFilterProps: {
      farmerDesired: {
        btnText: 'Either'
      }
    }
  },
  farmers: {
    filters: ['experience', 'skills'],
    titles: ['Experience Level', 'Farmer Skills'],
    options: {
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
    },
    optionsText: {
      experience: ['Any', 'Expert', 'Intermediate', 'Novice'],
      skills: [
        'Any',
        'Fruits',
        'Vegetables',
        'Herbs',
        'Farming Education',
        'Home Gardening',
        'Sustainability',
        'Organic',
        'CSA',
        'Farmers Market'
      ]
    }
  }
};

export const noFilteredEntitiesMsgs = {
  default: "Sorry, it doesn't look like we have what you're looking for.",
  greenspaces: "Sorry, we don't have any greenspaces like that yet.",
  farmers: "Sorry, we don't have any farmers like that yet."
};

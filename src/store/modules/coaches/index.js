import getters from './getters.js';
import mutations from './mutations.js';
import actions from './actions.js';

export default {
  namespaced: true,
  state() {
    return {
      lastFetch: null,
      coaches: [
        {
          id: 'c1',
          firstName: 'Loay',
          lastName: 'Mady',
          areas: ['frontend', 'backend', 'career'],
          description:
            "I'm Loay and I've worked as a freelance web developer for years. Let me help you become a developer as well!",
          hourlyRate: 50,
        },
        {
          id: 'c2',
          firstName: 'Mostafa',
          lastName: 'Gomaa',
          areas: ['backend', 'career'],
          description:
            'I am Mostafa and as a senior developer in a big tech company, I can help you get your first job or progress in your current role.',
          hourlyRate: 60,
        },
        {
          id: 'c3',
          firstName: 'Mohamed',
          lastName: 'Ahmed',
          areas: ['career'],
          description:
            'I am Mohamed and as a senior developer in a big tech company, I can help you get your first job or progress in your current role.',
          hourlyRate: 80,
        },
      ],
    };
  },
  getters,
  mutations,
  actions,
};

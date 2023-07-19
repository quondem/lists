import { createStore } from 'vuex';

export default createStore({
  state: {
    lists: [
      {
        id: 'List1',
        active: false,
        items: [
          {
            id: 'item1',
            active: false,
            count: 3,
            color: '#a37575',
          },
          {
            id: 'item2',
            active: false,
            count: 10,
            color: '#b25353',
          },
          {
            id: 'item3',
            active: false,
            count: 15,
            color: '#7c1818',
          },
          {
            id: 'item4',
            active: false,
            count: 20,
            color: '#1725ee',
          },
        ],
      },
      {
        id: 'List2',
        active: false,
        items: [
          {
            id: 'item1',
            active: false,
            count: 7,
            color: '#373b72',
          },
          {
            id: 'item2',
            active: false,
            count: 15,
            color: '#b25353',
          },
          {
            id: 'item3',
            active: false,
            count: 30,
            color: '#7c1818',
          },
          {
            id: 'item4',
            active: false,
            count: 0,
            color: '#1725ee',
          },
          {
            id: 'item5',
            active: false,
            count: 0,
            color: '#d22d2d',
          },
        ],
      },
      {
        id: 'List3',
        active: false,
        items: [
          {
            id: 'item1',
            active: false,
            count: 17,
            color: '#51ff2e',
          },
          {
            id: 'item2',
            active: false,
            count: 27,
            color: '#4b6246',
          },
          {
            id: 'item3',
            active: false,
            count: 0,
            color: '#6fce5a',
          },
          {
            id: 'item4',
            active: false,
            count: 40,
            color: '#202f1d',
          },
          {
            id: 'item5',
            active: false,
            count: 36,
            color: '#a90a0a',
          },
          {
            id: 'item6',
            active: false,
            count: 10,
            color: '#978787',
          },
        ],
      },
      {
        id: 'List4',
        active: false,
        items: [
          {
            id: 'item1',
            active: false,
            count: 14,
            color: '#556024',
          },
          {
            id: 'item2',
            active: false,
            count: 29,
            color: '#4b6246',
          },
          {
            id: 'item3',
            active: false,
            count: 8,
            color: '#747b51',
          },
          {
            id: 'item4',
            active: false,
            count: 30,
            color: '#4d5719',
          },
          {
            id: 'item5',
            active: false,
            count: 15,
            color: '#abc81e',
          },
          {
            id: 'item6',
            active: false,
            count: 10,
            color: '#251c69',
          },
          {
            id: 'item7',
            active: false,
            count: 20,
            color: '#da6767',
          },
          {
            id: 'item8',
            active: false,
            count: 13,
            color: '#918383',
          },
        ],
      },
      {
        id: 'List5',
        active: false,
        items: [
          {
            id: 'item1',
            active: false,
            count: 15,
            color: '#9c2626',
          },
          {
            id: 'item2',
            active: false,
            count: 25,
            color: '#34a835',
          },
          {
            id: 'item3',
            active: false,
            count: 10,
            color: '#747b51',
          },
          {
            id: 'item4',
            active: false,
            count: 25,
            color: '#4d5719',
          },
          {
            id: 'item5',
            active: false,
            count: 15,
            color: '#abc81e',
          },
          {
            id: 'item6',
            active: false,
            count: 10,
            color: '#366d37',
          },
          {
            id: 'item7',
            active: false,
            count: 20,
            color: '#143e14',
          },
          {
            id: 'item8',
            active: false,
            count: 13,
            color: '#918383',
          },
          {
            id: 'item9',
            active: false,
            count: 13,
            color: '#169c16',
          },
          {
            id: 'item10',
            active: false,
            count: 13,
            color: '#6c439d',
          },
        ],
      },
    ],
  },
  getters: {
    getLists: state => state.lists,
    getList: state => id => state.lists.find(list => list.id == id),
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
});

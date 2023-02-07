//모달 상태
export const state = () => ({
  register: false,
});

export const mutations = {
  SHOW_REGISTER_ALARM(state, display) {
    state.register = display;
  },
};

export const actions = {};

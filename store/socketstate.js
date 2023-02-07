//모달 상태
export const state = () => ({
  register: true,
});

export const mutations = {
  SHOW_PENDING_ALARM(state) {
    state.pending = true;
  },

  SHOW_REGISTER_ALARM(state, display) {
    state.register = display;
  },
};

export const actions = {};

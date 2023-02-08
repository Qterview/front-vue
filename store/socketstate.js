//모달 상태
export const state = () => ({
  register: false,
  fail : false,
});


export const mutations = {
  SHOW_REGISTER_ALARM(state, display) {
    state.register = display;
  },
  SHOW_FAIL_ALARM(state, display) {
    state.fail = display;
  },
};

export const actions = {};

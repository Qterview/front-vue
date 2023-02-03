//모달 상태
export const state = () => ({
    login: { show: false, directLogin: false },
    write: false
});

export const mutations = {
    SHOW_LOGIN_MODAL(state){
        state.login.show = true;
    },
    // SET_LOGIN_MODAL_DIRECT_LOGIN(state ) {
    //     state.login.directLogin = true;
    // },
    CLOSE_LOGIN_MODAL (state) {
        state.login = {
            show: false,
            directLogin: false
        }
    },
    SET_WRITE_MODAL (state, display){
        state.write = display;
    }
};

export const actions = {};
//모달 상태
export const state = () => ({
    login: { show: false, directLogin: false }
});

export const mutations = {
    SHOW_LOGIN_MODAL(state){
        state.login = true;
    },
    SET_LOGIN_MODAL_DIRECT_LOGIN(state ) {
        state.login.directLogin = true;
    },
    SET_LOGIN_MODAL_CLOSE (state) {
        state.login = {
            show: false,
            directLogin: false
        }
    }
};

export const actions = {};
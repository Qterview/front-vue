//로그인 사용자 상태
export const state = () => ({
    email: null,
    nickname: null
});

export const mutations = {
    SET_USER(state, {email, nickname}){
        state.email = email;
        state.nickname = nickname;
    }
};

export const actions = {};
import Cookie from 'js-cookie'

export default {

    switchColorMode (state) {
        Cookie.delete('color-mode');

        if (state.colorMode === 'light') {
            state.colorMode = 'dark'
        } else {
            state.colorMode = 'light'
        }

        Cookie.set('color-mode', state.colorMode)
    },

    setColorMode (state, colorMode) {
        state.colorMode = colorMode
    }

}

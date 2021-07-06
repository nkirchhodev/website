export default {

    switchColorMode (context) {
        context.commit('switchColorMode')
    },

    setColorMode (context, colorMode) {
        if (colorMode !== 'light' && colorMode !== 'dark') {
            colorMode = 'light'
        }

        context.commit('setColorMode')
    }

}

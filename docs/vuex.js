const store = new Vuex.Store({
    state:{
        global:[],
        paisesMostrar:[],
        fields:[]
    },
    mutations:{
        llenarStatic(state, paises){
            state.paisesMostrar = paises.Countries
            state.global = paises.Global
            console.log('mutacion')
            console.log(state.paisesMostrar)
        },
        fieldsTable(state, pais){
            state.paisesMostrar.forEach(function(element){
                if(element.Country == pais){
                    state.fields = element
                    console.log('esta aqui')
                    console.log(element)
                }
            })
        }
    },
    actions:{
        ObtenerInfo:async function({commit}){
            const data = await fetch('https://api.covid19api.com/summary')
            const paises = await data.json()
            commit('llenarStatic', paises)
            console.log('action')
        },
    }
})
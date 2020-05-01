Vue.component('tabla',{
    template: /*html*/`
    <div>
    <h1 class="col-12 text-center">COVID-19 VIEWER</h1><button @click="ObtenerInfo">Do it </button>
        <div class="d-flex col-12">
        <table class="table col-7 mx-auto mt-2">
            <thead class="thead-dark">
            <tr>
                <th scope="col"  class=" text-center _rows"> 
                    <select class ="btn btn-danger col-6 "  id="boton" @change="fieldsTable(paisEnUso)" v-model="paisEnUso" >
                    <option class="text-center" value="">World</option>
                    <option class="text-center" :value="item.Country" v-for="item of paisesMostrar">{{item.Country}}</option>
                    </select>
                </th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <th scope="row" class=" text-center bg-warning  _rows">Total: {{fields.TotalConfirmed}}</th>
            </tr>
            <tr>
            <th scope="row" class=" text-center text-danger _rows">Deaths: {{fields.TotalDeaths}}</th>
            </tr>
            <tr>
            <th scope="row" class=" text-center text-success _rows">Recovered: {{fields.TotalRecovered}}</th>
            </tr>
            <tr>
                <th scope="row" class=" text-center text-warning  _rows">New Confirmed : {{fields.NewConfirmed}}</th>
            </tr>
            <tr>
                <th scope="row" class=" text-center text-warning _rows">New Deaths : {{fields.NewDeaths}}</th>
            </tr>
            <tr>
                <th scope="row" class=" text-center text-warning _rows">New Recovered: {{fields.NewRecovered}}</th>
            </tr>
        </tbody>
    </table>
    </div> 
    </div> `,
    data(){
        return{
            paisEnUso:''
        }
    },
    computed:{
        ...Vuex.mapState(['paisesMostrar', 'global', 'fields']),

    },
    methods:{
        ...Vuex.mapMutations(['fieldsTable']),
        ...Vuex.mapActions(['ObtenerInfo'])
        
    }
})
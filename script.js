window.addEventListener("load",() => {
    let boton = document.querySelector('#boton')
    let rows = document.querySelectorAll('._rows')
    var country = "";    
    var DatosCorona = (countrySelected) => {
        fetch('https://api.covid19api.com/summary')
        .then(data => data.json())
        .then(data => {
            LlenarTabla("", "", "", "", "", "")
            for(datos of data.Countries){
               var newOption = document.createElement("option");
               newOption.value = datos.Country;
               newOption.innerText = datos.Country;
               boton.appendChild(newOption); 
            }
            if(countrySelected == ''){
                LlenarTabla(`Total :${data.Global.TotalConfirmed}`,`Muertes :${data.Global.TotalDeaths}`,`Recuperados :${data.Global.TotalRecovered}`, `Nuevos Casos :${data.Global.NewConfirmed}`, `Nuevas Muertes :${data.Global.NewDeaths}`, `Nuevos Recuperados :${data.Global.NewRecovered}`  )
            }
            else{
                for(datos of data.Countries){
                    if(datos.Country == countrySelected){
                        LlenarTabla(`Total :${datos.TotalConfirmed}`, `Muertes :${datos.TotalDeaths}`, `Recuperados :${datos.TotalRecovered}`,  `Nuevos Casos :${datos.NewConfirmed}`, `Nuevas Muertes :${datos.NewDeaths}`, `Nuevos Recuperados :${datos.NewRecovered}` )
                    }
                }
            }   
        })   
    }

    boton.addEventListener("change",() => {
        country = boton.value;
        DatosCorona(country)
    })
    var LlenarTabla = (Total, Muertes, Recuperados, NuevosCasos, NuevasMuertes, NuevosRecuperados) => {
        rows[1].innerHTML = Total;
        rows[2].innerHTML = Muertes;
        rows[3].innerHTML = Recuperados;
        rows[4].innerHTML = NuevosCasos;
        rows[5].innerHTML = NuevasMuertes;
        rows[6].innerHTML = NuevosRecuperados
    }
    DatosCorona(country);
})

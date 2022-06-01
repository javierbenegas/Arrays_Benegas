let Vehiculos = [
    {marca: 'Fiar', Modelo:'profe',km:10000},
    {marca: 'Ford', Modelo:'estudiante',km:10000},
    {marca: 'VW', Modelo:'tutor',km:10000},
    {marca: 'Dodge', Modelo:'alumno',km:10000},
]

for(elementos of Vehiculos){
    console.log(`Vehículo marca ${elementos.marca}, modelo ${elementos.Modelo} con ${elementos.km} km.`)
}
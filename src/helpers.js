export const revisarPresupuesto =  (presupuesto,restante)=>{
    let clase;

    if((presupuesto / 4) > restante){
        clase = "alert alert-danger border-0"
    }else if((presupuesto / 2) > restante){
        clase = "alert alert-warning border-0"
    }else{
        clase = "alert alert-success border-0"
    }
    return clase
}
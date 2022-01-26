export class MovementFormulars{
    //velocity=acceleration*time SI(m,s) VAT_SM Velocity,Acceleration,Time _ Steady Motion
    public static getAccelerationVAT_SM(velocity:number, time:number) {
    return velocity/time}
    public static getVelocityVAT_SM(acceleration:number, time:number){
    return acceleration*time}
    public static getTimeVAT_SM(velocity:number, acceleration:number){
    return velocity/acceleration}

    //distance=velocity*time SI(m,s)  DVT_SM Distanve,Velocity,Time _ Steady Motion
    public static getDistanceDVT_SM(velocity:number,time:number){
        return velocity*time}
    public static getVelocityDVT_SM(distance:number,time:number){
        return distance/time}
    public static getTimeDVT_SM(distance:number,velocity:number){
        return distance/velocity}

    //distance=0,5*acceleration*time SI(m,s) DAT_AM Distanve,Acceleration,Time _ Accelerated Motion
    public static getDistanceDAT_AM(acceleration:number, time:number){
        return 0.5*acceleration*time}
    public static getAccelerationDAT_AM(distance:number,time:number){
        return 2*distance/time}
    public static getTimeDAT_AM(distance:number, acceleration:number){
        return 2*distance/acceleration}
    
}
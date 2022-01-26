export class SteadyMovementFormulars{
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
}
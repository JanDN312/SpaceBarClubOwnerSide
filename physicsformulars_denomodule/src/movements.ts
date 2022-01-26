export class MovementFormulars{
    //velocity=acceleration*time SI(m,s)
    public static getAccelerationVAT(velocity:number, time:number) {
    return velocity/time}
    public static getVelocityVAT(acceleration:number, time:number){
    return acceleration*time}
    public static getTimeVAT(velocity:number, acceleration:number){
    return velocity/acceleration}

    //distance=velocity*time SI(m,s)
    public static getDistanceDVT(velocity:number,time:number){
        return velocity*time}
    public static getVelocityDVT(distance:number,time:number){
        return distance/time}
    public static getTimeDVT(distance:number,velocity:number){
        return distance/velocity}

    //distance=0,5*acceleration*time SI(m,s)
    public static getDistanceDAT(acceleration:number, time:number){
        return 0.5*acceleration*time}
    public static getAccelerationDAT(distance:number,time:number){
        return 2*distance/time}
    public static getTimeDAT(distance:number, acceleration:number){
        return 2*distance/acceleration}
    
}
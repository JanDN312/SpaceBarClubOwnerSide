export class AcceleratedMovementFormulars{
    //distance=0,5*acceleration*time^2 SI(m,s) DAT_AM Distance,Acceleration,Time _ Accelerated Motion
    public static getDistanceDAT_AM(acceleration:number, time:number){
        return 0.5*acceleration*(time**2)}
    public static getAccelerationDAT_AM(distance:number,time:number){
        return 2*distance/(time**2)}
    public static getTimeDAT_AM(distance:number, acceleration:number){
        return 2*distance/acceleration}

    //distance=(velocity^2)/(2*acceleration) SI(m,s) DVA_AM Distance,Velocity,Acceleration _ Accelerated Motion
    public static getDistanceDVA_AM(velocity:number, acceleration:number){
        return (velocity**2)/(2*acceleration)}
    public static getVelocityDVA_AM(distance:number, acceleration:number){
        return (2*distance*acceleration)**(0.5)}
    public static getAccelerationDVA_AM(distance:number, velocity:number){
        return(velocity**2)/(2*distance)}
    
    //distance=0,5*gravityacceleration
    public static  getDistanceDA_AM(acceleration:number, distance:number){
        return}
}
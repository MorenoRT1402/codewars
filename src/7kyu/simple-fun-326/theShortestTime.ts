export const shortestTime = (n : number, m : number, speeds : number[]) : number => {
    if(n === 1) return 0;
    
    const floors = Math.abs(n - 1);

    const byWalking = floors * speeds[3];
    const byElevator = Math.abs(n - m) * speeds[0] + speeds[1] * 2 + speeds[2] + floors * speeds[0];

    return Math.min(byWalking, byElevator);
};
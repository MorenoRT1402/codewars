type SensorLog = ["Distance:", number, "Meters", string];
export type SensorLogs = SensorLog[];
export const sensorAnalysis = (sensorData : SensorLog[]) : number[] => {
    const distances = sensorData.map(([, distance]) => distance);
    const mean = distances.reduce((sum, value) => sum + value, 0) / distances.length;
    const variance = distances.reduce((sum, value) => sum + Math.pow(value - mean, 2), 0) / (distances.length - 1);
    const standardDeviation = Math.sqrt(variance);

    return [parseFloat(mean.toFixed(4)), parseFloat(standardDeviation.toFixed(4))];
}
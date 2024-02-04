export default interface UsageData {
    startDate: string;
    endDate: string;
    totalKwh: number;
    averageDailyKwh: number;
    conversionCentsPerKwh: number;
    days: {
        date: string;
        totalKwh: number;
        averageHourlyKwh: number;
        usagePeak: {
            hour: string;
            kw: number;
        }
    }[];
}

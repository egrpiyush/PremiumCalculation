import { environment } from '../../environments/environment'

export const baseApiUrl = environment.production ? "https://prod.premiumCalculation.com" : "http://localhost:7071/api/"
export const getOccupationsUrl = baseApiUrl + "GetOccupations"
export const getMonthlyPremiumUrl = baseApiUrl + "GetMonthlyPremium"
import {apiService} from "../../service/api.service";

export const appService = {
    getTaxOffices
};

function getTaxOffices() {
    return apiService.get('market-data/cb/v1/tax-offices')
}

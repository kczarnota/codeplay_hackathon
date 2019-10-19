import {apiService} from "../../service/api.service";

export const appService = {
    getSth
};

function getSth() {
    return apiService.get('/tax-offices')
}

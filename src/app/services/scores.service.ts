import { Observable } from 'rxjs';


export class ScoresService {
    aCommonData: string = "CommonDataDefaultValue"
    getScores(): any {
       return [
            {
                userid: 1,
                topicid: 1,
                score: 97
            },
            {
                userid: 2,
                topicid: 3,
                score: 78
            },
            {
                userid: 3,
                topicid: 5,
                score: 87
            }
        ];
       
    }
    getACommonData() {
        return this.aCommonData;
    }
    updateACommonData(updatedVal: string) {
        this.aCommonData = updatedVal;
    }
}
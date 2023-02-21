import Person from "./Person";
import PersonWithId from "./PersonWithId";

export default class Data{
    constructor(public PeopleFromAPI:PersonWithId[],public InvalidPeople:Person[]){
    }
}
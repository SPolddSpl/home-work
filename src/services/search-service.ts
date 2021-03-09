import axios from 'axios';
import data from '../db.json';


class SearchService {
    basePath: string;

    constructor() {
        this.basePath = 'http://localhost:3001'
    }


    getItemsByInput(input: string): PeopleEntity[] {
        const res = this.search(input);
        return res;
    }


    search(searchInput: string): PeopleEntity[] {
        data.people.map(x => {
            x.name = x.name.toLowerCase()
            return x;
        })
        const result = data.people.filter(x => x.name.match(searchInput.toLowerCase()));
        result.map(x => {
            x.avatar =`https://picsum.photos/200?random=${x.id}`;
            x.name = x.name[0].toUpperCase() + x.name.substr(1, x.name.length)
            return x;
        })
        return result as PeopleEntity[];
    }


}


export interface People {
    people?: (PeopleEntity)[] | null;
}
export interface PeopleEntity {
    id: string;
    createdAt: string;
    name: string;
    avatar: string;
}


export default SearchService;
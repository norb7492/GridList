import axios from 'axios';


const USERS_API_URL = 'https://reqres.in/api/users';


module.exports = {

    getUser: (page) => {

        let encodedPage = encodeURIComponent(page);
        let requestURL = `${USERS_API_URL}?page=${encodedPage}`;

        return axios.get(requestURL).then(res => {



            return res;

        }).catch(err => {

            console.log(err);


        });

    }


};

import axios from 'axios';
import * as actionTypes from './types';

const fetchUser = async () => {
    const res = await axios.get('/api/current_user');
    const json = await res.json();
    console.log(json);
};

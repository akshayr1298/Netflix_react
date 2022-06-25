import axios from 'axios'
import {baseUrl} from './Constant/Constant'

const instance = axios.create({
    baseURL: baseUrl,
   
  });

export default instance
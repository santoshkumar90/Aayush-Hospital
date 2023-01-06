import firebase from 'firebase/compat/app';
import "firebase/compat/auth"

import { auth } from './firebase'

export const register = async({ email, password }) => {
    const resp = await firebase.auth()
        .createUserWithEmailAndPassword(email, password);
    return resp.user;
}
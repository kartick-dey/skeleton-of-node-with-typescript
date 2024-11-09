import axios from "axios";
import { IUser } from "../model/user.interface";

export class UserService {
    constructor() {}

    public async getUserFromOkta(accessToken: string): Promise<IUser> {
        try {
            const user: IUser = {
                firstName: '',
                lastName: '',
                email: ''
            }
            const headers = {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${accessToken}`,
            };
            const response = await axios.get(process.env.OKTA_USER_INFO_API || '', { headers })
            if (response.data) {
                user.firstName = response.data.firstName;
                user.lastName = response.data.lastName;
                user.email = response.data.email
            }
            return user
        } catch (error) {
            throw error;
        }
    }
}
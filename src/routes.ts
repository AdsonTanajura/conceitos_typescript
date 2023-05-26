import { Response, Request } from "express";
import createUser from "./services/CreateUser";

export function heloWord(request: Request, response: Response) {
    const user = createUser({
        email: 'adson.tanajura@gmail.com',
        password: '1235',
        techs: [
            'React.js', 
            'React Native', 
            'TypeScript',
            { title: 'JavaScript', experience: 100 },
        ]
    });

    return response.json({ message: 'Helo, World' });
}
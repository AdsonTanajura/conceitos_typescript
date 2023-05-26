import { Response, Request } from "express";

export function heloWord(request: Request, response: Response) {
    return response.json({ message: 'Helo, World' });
}
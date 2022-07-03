import axios from "axios";

export async function get(url: string): Promise<any> {
    const instance = axios.create({
        baseURL: url,
    });
    return instance.get(url).then((res: any) => res.data);
}

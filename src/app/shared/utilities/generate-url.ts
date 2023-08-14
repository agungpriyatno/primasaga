import { environment } from "src/environments/environment.development";

export function generateUrl(path: string) {
 var base = environment.api.base
 return base + path
}

import { Injectable } from "@angular/core";

import { environment } from "@env/environment";
import { HttpClient } from "@angular/common/http";
import { AuthService } from "@app/auth/auth.service";
import { Observable } from "rxjs";
import { ItemDTO } from "@app/models/items.model";

@Injectable()
export class ItemsService {
  private api: string = environment.api_server + "/api";
  constructor(private _http: HttpClient) {}

  getItems(page?: string): Observable<ItemDTO[]> {
    const endpoint = page ? `items/page=${page}` : "items";
    return this._http.get<ItemDTO[]>(`${this.api}/${endpoint}`);
  }
}

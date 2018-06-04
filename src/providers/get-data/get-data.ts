import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Platform } from "ionic-angular";
import { Observable } from "rxjs/Rx";
import { BDDObject } from "../../assets/data/typings";

@Injectable()
export class GetDataProvider {
  private baseUrl: string = "../../assets/data/data_bdd.json";

  data: BDDObject[];

  constructor(
    private readonly http: HttpClient,
    private readonly platform: Platform
  ) {
    console.log("Hello DATA_BDD Provider");
    if (this.platform.is("cordova") && this.platform.is("android")) {
      this.baseUrl = "/assets/data/data_bdd.json";
    }
  }

  getDATA(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}


import { Body, Injectable } from '@nestjs/common';
import { error } from 'console';
import { readFileSync } from 'fs';
@Injectable()
export class AppService {

  async getFileData(): Promise<Array<{ code: string, symbol: string }>> {

    let all = readFileSync('src/Currencies.JSON')

    let data = JSON.parse(all?.toString());
    const dataArray = Object.entries(data).map(([key, value]) => {
      return { code: key, symbol: value["symbol"] };
    });

    return dataArray

  }

}




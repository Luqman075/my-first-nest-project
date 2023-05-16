import { Body, Controller, Get, HttpCode, Param, Post, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';
import { stringify } from 'querystring';
import { get } from 'http';
import * as fs from 'fs'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }
  @Get('/all')
  async getAllData() {
    let result = await this.appService.getFileData()
    let existing = ["GBP","USD","AED","INR","BDT","BRL","GHS","CNY","MYR","PHP","NGN","XAF","XOF","TRY","UGX","PKR","CAD"]
    let arr = []
    /*     result?.forEach((val) => {
          if (!existing?.includes(val?.isoAlpha2)) {
            arr.push({
              code: val?.isoAlpha2,
              name: val?.name,
              flag: val?.flag
            })
          }
        }) */
    let str = ""
    result?.forEach((val) => {
      if (!existing?.includes(val?.code)) {
        str += `('${val?.code}','${val?.symbol}'),`
      }
    })
    fs.writeFileSync('result.txt', str);
    return result
  }

}

///           ('GB','UK','jsjsoa'),('GB','UK','jsjsoa')

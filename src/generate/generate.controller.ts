import { Body, Controller, Post, Res } from '@nestjs/common';
import { GenerateService } from './generate.service';
import { Response } from 'express';

@Controller('generate')
export class GenerateController {
  constructor(private generateService: GenerateService) {}
  @Post()
  async generate(@Body() data, @Res() res: Response) {
    console.log(data);
    // res.set({
    //   'Content-Type': 'application/octet-stream',
    //   'Content-Disposition': 'attachment; filename="document.pdf"',
    //   'Content-Length': (
    //     await this.generateService.generate()
    //   ).byteLength.toString(),
    // });
    const pdfData = this.generateService.generate();
    // const pdfBuffer = pdf.output('arraybuffer');
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename=sample.pdf');
    res.send(Buffer.from(pdfData));

    // return await ;
    // return res.send(res);
    // return this.generateService.generate();
  }
}

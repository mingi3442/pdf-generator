import { Injectable } from '@nestjs/common';
import jsPDF from 'jspdf';

@Injectable()
export class GenerateService {
  generate(): ArrayBuffer {
    const doc = new jsPDF();
    doc.setFontSize(40);
    doc.text('test', 35, 25);
    // doc.save();
    // console.log(URL.createObjectURL(doc.output('blob')));
    // const pdfBlob = doc.output('blob');
    // const pdfBuffer = await pdfBlob.arrayBuffer();
    // console.log(' ? :', doc.output());
    const pdfBuffer = doc.output('arraybuffer');
    return pdfBuffer;
    // return doc.output('arraybuffer');
    // open(URL.createObjectURL(url));
    // console.log(URL.createObjectURL(url));
  }
}

import { NextResponse } from "next/server";
import PDFDocument from "pdfkit";
import fs from "fs";

export async function POST(req: any, res: any) {
  const report = `
    **Discrepancy Report**

    *Date: [Current Date]*

    Dear [Your Name],

    I hope this message finds you well. I would like to present you with a summary of the recent evaluation of the user interface elements based on the provided JSON data.

    ...

    Feel free to reach out if you have any questions or require further assistance.

    Best regards,
    [Your Name]
    [Your Contact Information]
    `;
  try {
    const doc = new PDFDocument();

    doc.pipe(fs.createWriteStream(`discrepancy_report${new Date()}.pdf`));

    doc.fontSize(12);

    doc.text(report, {
      align: "justify",
      columns: 1,
      width: 500,
      height: 700,
    });
    doc.end();

    return NextResponse.json(
      { data: "PDF report generated successfully" },
      { status: 200 }
    );
  } catch (error: any) {
    console.log("🚀 ~ file: route.tsx:43 ~ POST ~ error:", error);
    return NextResponse.json(
      {
        error: `Something went wrong on figma api: ${error}`,
      },
      { status: 500 }
    );
  }
}

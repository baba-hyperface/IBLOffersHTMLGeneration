function getTemplate7(data, TemplateHelpers, lightColor) {
  return `
  <html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
  <title>IndusInd Bank</title>
  <style type="text/css">
    body {
      margin: 0 auto;
      padding: 0;
      -webkit-text-size-adjust: none;
      -ms-text-size-adjust: none;
      background: #fff;
    }
    table {
      border-collapse: collapse;
      border-spacing: 0;
    }
    a {
      color: #8d051e;
      text-decoration: none;
    }
    @media all and (max-width: 640px) {
      .table, .main-container {
        width: 100% !important;
        max-width: 100% !important;
      }
      .responsive-image img {
        width: 100% !important;
        max-width: 100% !important;
        height: auto !important;
      }
      .offer-box {
        display: block !important;
        width: 100% !important;
      }
    }
    .offer-box {
      border-radius: 10px;
      padding: 30px 0 20px 0;
      margin: 24px 0 0 0;
      background: #fff;
      max-width: 600px;
    }
    .brand-logos {
      width: 100%;
      margin: 0 auto 20px auto;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 32px;
    }
    .brand-logos img {
      max-height: 40px;
      width: auto;
      margin: 0 16px;
      display: inline-block;
      vertical-align: middle;
    }
    .headline {
      font-family: Arial, sans-serif;
      font-size: 38px;
      line-height: 44px;
      color: #972629;
      font-weight: bold;
      margin: 0 0 10px 0;
      letter-spacing: 1px;
    }
    .subheadline {
      font-family: Arial, sans-serif;
      font-size: 21px;
      line-height: 31px;
      color: #000;
      margin: 0 0 18px 0;
    }
  </style>
</head>
<body style="margin: 0 auto; padding:0px;width:600px; background:#fff;">
  <table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#fff" style="background:#fff;max-width:600px;margin:0 auto;">
    <tr>
      <td align="right" valign="middle" style="font-family: Arial; font-size: 14px; line-height: 18px; padding:25px 5px; background-color: ${
        data.backgroundColor
      };">
        ${TemplateHelpers.getNavbarTwoLogos(data,data.networklogo,data.backgroundColor)}
       </td>
    </tr>
    <tr>
      <td align="center" bgcolor="#fff" style="padding:15px 0 0 0;background-color: ${
        data.backgroundColor
      }">
        <div class="headline">${
          TemplateHelpers.processTextWithLineBreaks(data.headingLine, {
            delimiter: "/n",
          }) || "heading"
        }</div>
        <div class="subheadline">${
          TemplateHelpers.processTextWithLineBreaks(data.subHeadingLine, {
            delimiter: "/n",
          }) || "subheading"
        }</div>
      </td>
    </tr>
    <tr>
      <td align="center" bgcolor="#fff" style="padding:0;background-color: ${
        data.backgroundColor
      }">
        <img src="${
          data.heroImage
        }" width="600" alt="Premium Apparel" style="display:block;width:100%;max-width:600px;height:auto; margin:0 auto; border:0;">
      </td>
    </tr>
    <tr>
      <td align="center" bgcolor="#fff" style="padding:25px 0px;background-color: ${
        data.backgroundColor
      }">
        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px; margin:0 auto;">
          <tr>
            <!-- Offer 1 -->
            <td align="center" valign="top" style="padding:0 12px;background-color: ${
              data.backgroundColor
            }">
              <img src="${
                data.brandLogoUrl1
              }" height="40" alt="Brand 1" style="display:block;margin:0 auto 10px auto;">
              <div style="font-family:Arial,sans-serif;font-size:20px;line-height:26px;color:#972629;font-weight:bold;"> ${TemplateHelpers.processTextWithLineBreaks(
                data.offerText1,
                { delimiter: "/n" }
              )}</div>
              <a href="${
                data.ctaUrl1
              }" style="background:#97272b;color:#fff;font-family:Arial;font-size:16px;border-radius:5px;padding:8px 26px;font-weight:bold;text-decoration:none;display:inline-block;margin-top:8px;">${
    data.ctaText1
  }</a>
            </td>
            <td width="1" bgcolor="#972629" style="width:1px;min-width:1px;max-width:1px; padding:0px;margin:10px;"></td>
            <!-- Offer 2 -->
            <td align="center" valign="top" style="padding:0 12px;background-color: ${
        data.backgroundColor
      }">
              <img src="${
                data.brandLogoUrl2
              }" height="40" alt="Brand 2" style="display:block;margin:0 auto 10px auto;">
              <div style="font-family:Arial,sans-serif;font-size:20px;line-height:26px;color:#972629;font-weight:bold;">${TemplateHelpers.processTextWithLineBreaks(
                data.offerText2,
                { delimiter: "/n" }
              )}</div>
              <a href="${
                data.ctaUrl2
              }" style="background:#97272b;color:#fff;font-family:Arial;font-size:16px;border-radius:5px;padding:8px 26px;font-weight:bold;text-decoration:none;display:inline-block;margin-top:8px;">${
    data.ctaText2
  }</a>
            </td>
            <td width="1" bgcolor="#972629" style="width:1px;min-width:1px;max-width:1px;padding:0px;margin:10px;"></td>
            <!-- Offer 3 -->
            <td align="center" valign="top" style="padding:0 12px;background-color: ${
        data.backgroundColor
      }">
              <img src="${
                data.brandLogoUrl3
              }" height="40" alt="Brand 3" style="display:block;margin:0 auto 10px auto;">
              <div style="font-family:Arial,sans-serif;font-size:20px;line-height:26px;color:#972629;font-weight:bold;">${TemplateHelpers.processTextWithLineBreaks(
                data.offerText3,
                { delimiter: "/n" }
              )}</div>
              <a href="${
                data.ctaUrl3
              }" style="background:#97272b;color:#fff;font-family:Arial;font-size:16px;border-radius:5px;padding:8px 26px;font-weight:bold;text-decoration:none;display:inline-block;margin-top:8px;">${
    data.ctaText3
  }</a>
            </td>
          </tr>
        </table>
      </td>
    </tr>
    <tr>
      <td align="center" valign="top" style="font-family: Arial; font-size: 16px; line-height: 18px; color: #97272b; padding: 20px 0 20px 0; text-decoration: none; background-color: ${
        data.backgroundColor
      };">
        ${data.offerEndText || "Offer valid till 31st December 2025"}
      </td>
    </tr>
    <tr>
      <td align="center" style="padding:0;background-color: ${
        data.backgroundColor
      }">
          ${TemplateHelpers.getSocialIcons(data.backgroundColor, lightColor)}
          ${TemplateHelpers.getFooter(data.tncUrl)}
      </td>
    </tr>
  </table>
</body>
</html>
`;
}
return getTemplate7(data, TemplateHelpers, lightColor);

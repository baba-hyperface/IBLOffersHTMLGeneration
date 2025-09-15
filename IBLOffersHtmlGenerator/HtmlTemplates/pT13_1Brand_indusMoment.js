function getTemplate13(data, TemplateHelpers, lightColor) {
  return `<html>
<head>
  <meta name="viewport" content="width=device-width; initial-scale=1.0; maximum-scale=1.0; user-scalable=no;">
  <title>IndusInd Bank</title>
  <style type="text/css">
    body {
      margin: 0;
      padding: 0;
      -webkit-text-size-adjust: none;
      -ms-text-size-adjust: none;
    }

    body,
    table,
    td,
    a {
      -webkit-text-size-adjust: 100%;
      -ms-text-size-adjust: 100%;
    }

    table {
      border-collapse: collapse;
      border-spacing: 0;
    }

    table,
    td {
      mso-table-lspace: 0pt;
      mso-table-rspace: 0pt;
    }

    td {
      border-collapse: collapse;
    }

    a {
      color: #8d051e;
      text-decoration: none;
    }

    @media all and (max-width: 640px) {

      body,
      table,
      td,
      p,
      a,
      li,
      blockquote {
        -webkit-text-size-adjust: none !important;
      }

      .table {
        width: 100% !important;
        clear: both !important;
        display: table !important;
      }

      .td-block {
        display: block !important;
        min-width: 100% !important;
        max-width: 100% !important;
        width: 100% !important;
        clear: both !important;
        float: left !important;
      }

      .responsive-image img {
        height: auto !important;
        max-width: 100% !important;
        width: 100% !important;
      }

      .hide {
        display: none !important;
        width: 100% !important;
      }

      .pdlr {
        padding-left: 15px !important;
        padding-right: 15px !important;
      }

      .pdtb {
        padding-top: 15px !important;
        padding-bottom: 15px !important;
      }

      .pdtop15 {
        padding-top: 15px !important;
      }

      .pdbot15 {
        padding-bottom: 15px !important;
      }

      .pdnone {
        padding: 0 !important;
      }

      .hauto {
        height: auto !important;
      }

      .heading {
        font-size: 24px !important;
        line-height: normal !important;
        letter-spacing: 1px !important;
      }

      .subheading {
        font-size: 18px !important;
        line-height: 24px !important;
        letter-spacing: .5px !important;
      }

      .mtext {
        font-size: 14px !important;
        line-height: 21px !important;
      }

      .center {
        text-align: center !important;
      }

      .center img,
      .center table {
        margin: 0 auto;
      }

      .p-top-5 {
        padding-top: 3px !important;
        vertical-align: top !important;
      }

      .p-top-51 {
        padding-top: 0 !important;
        vertical-align: top !important;
      }

      .b-top {
        border: none !important;
        border-top: 1px solid #b9b9b9 !important;
      }

      .mob-hide {
        display: none !important;
      }

      .mob-show {
        display: block !important;
      }

      .text-left {
        text-align: left !important;
      }

      .text-center {
        text-align: center !important;
      }

      .text-center table,
      .text-center img {
        margin: 0 auto !important;
      }

      .pdtop10 {
        padding-top: 10px !important;
      }

      .logo {
        height: 20px !important;
        min-height: 20px !important;
        max-height: 20px !important;
        width: auto !important;
      }

      .main-logo {
        height: 20px !important;
        min-height: 20px !important;
        max-height: 20px !important;
        width: auto !important;
      }

      .table-center {
        float: none !important;
        margin: 0 auto !important;
      }

      .font-16 {
        font-size: 16px !important;
        line-height: 20px !important;
      }
    }
  </style>
</head>

<body>

  <div
    style="font-size:1px; color:#ffffff; line-height:1px; max-height:0px; max-width:0px; opacity:0; overflow:hidden; display:none;">
  </div>
  <table class="table" align="center" border="0" cellpadding="0" cellspacing="0" width="100%">
    <tbody>

      <tr>
        <td align="center" valign="middle" class="mobile">
          <table class="table" align="center" border="0" cellpadding="0" cellspacing="0" width="600"
            style="width: 600px; margin: 0 auto;">
            <tbody>
              <tr>
                <td align="center">
                  <table width="100%" border="0" cellspacing="0" cellpadding="0">
                    <tbody>
                      <tr>
                        <td align="center" valign="top" style="padding: 1px;">
                          <table width="100%" border="0" cellspacing="0" cellpadding="0">
                            <tbody>
                              <tr>
                                <td align="center" valign="top" bgcolor="${data.backgroundColor}">
                                  <table class="table" width="100%" border="0" cellpadding="0" cellspacing="0"
                                    align="center" bgcolor="${data.backgroundColor}">
                                    <tbody>
                                      <tr>
                                        <td align="center" valign="middle"
                                          style="font-family: Arial, 'Times New Roman', Tahoma, 'serif'; font-size: 14px; line-height: 18px; color: #000000; padding: 20px 20px 10px 25px;"
                                          class="pdlr pdtb">
                                          <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                            <tbody>
                                              <tr>
                                                <td align="left" valign="top"><img
                                                    src="${data.brandLogo}"
                                                    alt="Boombay"
                                                    style="display: block; width: auto; min-height: 28px; max-height: 28px; height: 28px;"
                                                    class="main-logo" /></td>
                                                <td align="right" valign="top"><a href="https://www.indusind.com/"
                                                    target="_blank" style="text-decoration: none;"><img
                                                      src="https://demo.forecastadvtg.com/projects/Hyperface/2025/email/logo.png"
                                                      alt="IndusInd Bank"
                                                      style="display: block; width: auto; min-height: 28px; max-height: 28px; height: 28px;"
                                                      class="main-logo" /></a></td>
                                              </tr>
                                            </tbody>
                                          </table>

                                        </td>
                                      </tr>
                                      <tr>
                                        <td align="center" valign="top" style="padding: 30px 0 10px 0;"
                                          class="pdlr pdtb">
                                          <table width="520" border="0" cellspacing="0" cellpadding="0"
                                            style="width: 520px;" class="table">
                                            <tbody>
                                              <tr>
                                                <td align="center" valign="top"
                                                  style="font-family: Arial, 'Times New Roman', Tahoma, 'serif'; font-size: 36px; line-height: 44px; color: #972629; padding: 0; font-weight: bold;"
                                                  class="heading">${TemplateHelpers.processTextWithLineBreaks(data.headline)}</td>
                                              </tr>
                                              <tr>
                                                <td align="center" valign="top"
                                                  style="font-family: Arial, 'Times New Roman', Tahoma, 'serif'; font-size: 22.5px; line-height: 31px; color: #000000; padding: 5px 0 0 0;"
                                                  class="subheading">${TemplateHelpers.processTextWithLineBreaks(data.subHeadline,{fontWeight:"700"})}</td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td align="center" valign="top"
                                          style="font-family: Arial, 'Times New Roman', Tahoma, 'serif'; font-size: 18px; line-height: 21px; color: #000000; padding: 0; font-weight: bold;"
                                          class="responsive-image pdlr"><a
                                            href="https://www.indusmoments.com/offers/BOOMINS" target="_blank"
                                            style="text-decoration: none;"><img
                                              src="${data.heroImage}"
                                              height="400" alt="IndusInd Bank"
                                              style="display: block; width: auto; height: 400px; margin: 0 auto;max-width:580px;" /></a>
                                        </td>
                                      </tr>
                                      
                                      <tr>
                                        <td align="center" valign="top"
                                          style="font-family: Arial, 'Times New Roman', Tahoma, 'serif'; font-size: 14px; line-height: 18px; color: #000000; padding: 20px 16px 0 16px;">
                                          <table border="0" cellspacing="0" cellpadding="0" align="center"
                                            role="presentation" >
                                            <tbody>
                                              <tr>
                                                <td align="center" valign="middle"
                                                  style="height: 34px; background: #97272b; font-family: Arial, 'Times New Roman', Tahoma, 'serif'; font-size: 16px; mso-line-height-rule:exactly; line-height: 16px; font-weight: normal; color: #ffffff; text-decoration: none; padding: 10px; vertical-align: middle; border-radius: 5px; text-transform: uppercase;"
                                                  bgcolor="#97272b" height="34"><a
                                                    href="${data.ctaUrl}"
                                                    style="color: #ffffff; text-decoration: none;font-weight: bold"
                                                    target="_blank">${TemplateHelpers.processTextWithLineBreaks(data.ctaText,{fontWeight:"700"})}</a></td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </td>
                                      </tr>
                                  ${String(data.offerEndTextRequire).toLowerCase() === "true"? `
                                      <tr>
                                        <td align="center" valign="top"
                                          style="font-family: Arial, 'Times New Roman', Tahoma, 'serif'; font-size: 14px; line-height: 18px; color: #97272b; padding: 15px 0 10px 0;"
                                          class="pdtb">
                                          ${TemplateHelpers.processTextWithLineBreaks(data.offerEndText)}
                                          </td>
                                      </tr>`
                                      :``}
                                      <tr>
                                        <td align="center" valign="top"
                                          style="font-family: Arial, 'Times New Roman', Tahoma, 'serif'; font-size: 14px; line-height: 18px; color: #000000; padding: 25px 0 10px 0;"
                                          class="pdtb"><a href="https://www.indusmoments.com/" target="_blank"
                                            style="text-decoration: none;"><img
                                              src="https://demo.forecastadvtg.com/projects/Hyperface/2025/email/indus-moments.png"
                                              width="240" alt="IndusInd Bank"
                                              style="display: block; width: 240px; margin: 0 auto;"></a></td>
                                      </tr>

                                      <tr>
                                        <td align="left" valign="top"
                                          style="font-family: Arial, 'Times New Roman', Tahoma, 'serif'; font-size: 14px; line-height: 18px; color: #000000; padding: 0 0 0 0;">
                                          <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                            <tbody>
                                              <tr>
                                                <td align="left" valign="bottom" width="61"><img
                                                    src="https://demo.forecastadvtg.com/projects/Hyperface/2025/email/bull.png"
                                                    width="40" alt="IndusInd Bank"
                                                    style="display: block; width: 40px;" /></td>
                                                <td align="right" style="padding: 0 15px 10px 0;" valign="bottom">
                                                  <table border="0" cellspacing="0" cellpadding="0" align="right">
                                                    <tbody>
                                                      <tr>
                                                        <td align="center" valign="middle"
                                                          style="font-family: Arial, 'Times New Roman', Tahoma, 'serif'; font-size: 10px; line-height: normal; color: #97272b; padding: 0 3px 0 0;">
                                                          Connect with us:</td>
                                                        <td align="center" valign="middle"
                                                          style="font-family: Arial, 'Times New Roman', Tahoma, 'serif'; font-size: 12px; line-height: normal; color: #97272b; padding: 0 0 0 0;">
                                                          <a href="https://www.facebook.com/OfficialIndusIndBankPage"
                                                            target="_blank" style="text-decoration: none;"><img
                                                              src="https://demo.forecastadvtg.com/projects/Hyperface/2025/email/facebook.png"
                                                              alt="Facebook" width="16"
                                                              style="display: block; width: 16px;" /></a></td>
                                                        <td align="center" valign="middle"
                                                          style="font-family: Arial, 'Times New Roman', Tahoma, 'serif'; font-size: 12px; line-height: normal; color: #97272b; padding: 0 5px 0 5px;">
                                                          <a href="https://www.instagram.com/indusind_bank/"
                                                            target="_blank" style="text-decoration: none;"><img
                                                              src="https://demo.forecastadvtg.com/projects/Hyperface/2025/email/instagram.png"
                                                              alt="Instagram" width="16"
                                                              style="display: block; width: 16px;" /></a></td>
                                                        <td align="center" valign="middle"
                                                          style="font-family: Arial, 'Times New Roman', Tahoma, 'serif'; font-size: 12px; line-height: normal; color: #97272b; padding: 0 0 0 0;">
                                                          <a href="https://www.threads.net/@indusind_bank"
                                                            target="_blank" style="text-decoration: none;"><img
                                                              src="https://demo.forecastadvtg.com/projects/Hyperface/2025/email/at.png"
                                                              alt="Threads" width="14"
                                                              style="display: block; width: 14px;" /></a></td>
                                                        <td align="center" valign="middle"
                                                          style="font-family: Arial, 'Times New Roman', Tahoma, 'serif'; font-size: 12px; line-height: normal; color: #97272b; padding: 0 5px 0 5px;">
                                                          <a href="https://www.linkedin.com/company/indusind-bank"
                                                            target="_blank" style="text-decoration: none;"><img
                                                              src="https://demo.forecastadvtg.com/projects/Hyperface/2025/email/linkedin.png"
                                                              alt="LinkedIn" width="16"
                                                              style="display: block; width: 16px;" /></a></td>
                                                        <td align="center" valign="middle"
                                                          style="font-family: Arial, 'Times New Roman', Tahoma, 'serif'; font-size: 12px; line-height: normal; color: #97272b; padding: 0 0 0 0;">
                                                          <a href="https://twitter.com/myindusindbank" target="_blank"
                                                            style="text-decoration: none;"><img
                                                              src="https://demo.forecastadvtg.com/projects/Hyperface/2025/email/twitter.png"
                                                              alt="Twitter" width="16"
                                                              style="display: block; width: 16px;" /></a></td>

                                                      </tr>
                                                    </tbody>
                                                  </table>
                                                </td>
                                              </tr>
                                            </tbody>
                                          </table>

                                        </td>
                                      </tr>
                                      <tr>
                                        <td align="right" valign="top"
                                          style="font-family: Arial, 'Times New Roman', Tahoma, 'serif'; font-size: 14px; line-height: 18px; color: #ffffff; padding: 10px 16px 10px 16px;"
                                          bgcolor="#97282b">
                                          <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                            <tbody>
                                              <tr>
                                                <td align="left" valign="bottom"
                                                  style="font-family: Arial, 'Times New Roman', Tahoma, 'serif'; font-size: 12px; line-height: 14px; color: #ffffff; padding: 0 0 0 0;"
                                                  class="td-block"><a href="${data.tncUrl}"
                                                    target="_blank"
                                                    style="color: #ffffff; text-decoration: underline;">Terms and
                                                    Conditions apply</a></td>
                                                <td align="right" valign="bottom"
                                                  style="font-family: Arial, 'Times New Roman', Tahoma, 'serif'; font-size: 12px; line-height: 14px; color: #ffffff; padding: 0 0 0 0;"
                                                  class="text-left td-block pdtop10"><a
                                                    href="https://www.indusind.com/in/en/about-us/IBL-thirdparty-disclaimer.html"
                                                    target="_blank"
                                                    style="color: #ffffff; text-decoration: underline;">Click here</a>
                                                  for IndusInd Bank Disclaimer</td>
                                              </tr>
                                            </tbody>
                                          </table>


                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>

                        </td>
                      </tr>
                    </tbody>
                  </table>


                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </tbody>
  </table>
</body>
</html>`;
}

function getTemplate13preview(data, TemplateHelpers, lightColor) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>IndusInd Bank - Boombay Offer</title>
  <style>
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      font-family: var(--font-family);
      background: #ffffff;
      color: #000;
    }

    .container {
      max-width: 600px;
      margin: 0 auto;
      background-color: ${data.backgroundColor};
      padding: 20px;
    }
    .containermain{
      max-width: 600px;
      margin: auto;
      background-color: ${data.backgroundColor};
    }

    .header,
    .footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .logo {
      height: 28px;
    }

    .heading {
      font-size: 36px;
      color: #97272b;
      font-weight: bold;
      text-align: center;
      margin: 40px 0 10px;
    }

    .subheading {
      font-size: 22px !important;
      text-align: center;
      margin-bottom: 20px;
    }

    .banner img {
      width: 100%;
      height: auto;
      display: block;
      margin: 0 auto;
      max-height: 400px;
    }

    .promo-box {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border: 1px solid #000;
      text-align: center;
      margin: 20px auto;
      width:max-content;
      gap: 10px;
      padding: 0px 20px;
      max-width: 90%;
    }

    .promo-box strong {
      color: #97272b;
    }
    
    .promo-code {
      background: #97272b;
      color: #fff;
      display: inline-block;
      padding: 5px 12px;
      margin-top: 10px;
      border-radius: 5px;
    }

    .promo-code strong {
        color: #fff;
    }

    .btn {
      background: #97272b;
      color: #fff !important;
      padding: 10px 25px;
      text-decoration: none !important;
      border-radius: 5px;
      display: inline-block;
      text-transform: uppercase;
      font-weight: bold !important;
      margin: 20px auto;
      text-align: center;
    }

    .moments-logo {
      display: block;
      margin: 25px auto;
      width: 240px;
    }

    .social-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-top: 0px;
    }

    .social-icons a img {
      width: 16px;
      margin: 0 5px;
    }

    .footer-links {
      background: #97272b;
      color: #fff;
      padding: 15px;
      font-size: 12px;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
    }

    .footer-links a {
      color: #fff;
      text-decoration: underline;
    }

    @media screen and (max-width: 640px) {
      .container {
        padding: 15px;
      }

      .heading {
        font-size: 24px;
      }

      .subheading {
        font-size: 18px !important;
      }

      .footer-links {
        flex-direction: column;
        align-items: flex-start;
        gap: 10px;
      }

      .social-footer {
        flex-direction: column;
        align-items: flex-start;
        gap: 10px;
      }
    }
  </style>
</head>
<body>
<div class="containermain">
    
  <div class="container">

    <div class="header">
      <img class="logo" src="${data.brandLogo}" alt="Boombay" />
      <a href="https://www.indusind.com/" target="_blank">
        <img class="logo" src="https://demo.forecastadvtg.com/projects/Hyperface/2025/email/logo.png" alt="IndusInd Bank" />
      </a>
    </div>

    <h1 class="heading">${TemplateHelpers.processTextWithLineBreaks(data.headline)}</h1>
    <p class="subheading">${TemplateHelpers.processTextWithLineBreaks(data.subHeadline)}</p>

    <div class="banner">
      <a href="https://www.indusmoments.com/offers/BOOMINS" target="_blank">
        <img src="${data.heroImage}" alt="Banner" />
      </a>
    </div>

    <div style="text-align:center;">
      <a class="btn" href="${data.ctaUrl}" target="_blank">${TemplateHelpers.processTextWithLineBreaks(data.ctaText,{fontWeight:"700"})}</a>
    </div>


    ${String(data.offerEndTextRequire).toLowerCase() === "true"? `
          <div align="center" valign="top"
            style="font-family: Arial, 'Times New Roman', Tahoma, 'serif'; font-size: 14px; line-height: 18px; color: #97272b; padding: 15px 0 10px 0;"
            class="pdtb">
            ${TemplateHelpers.processTextWithLineBreaks(data.offerEndText)}
            </div>`
        :``}

    <a href="https://www.indusmoments.com/" target="_blank">
      <img class="moments-logo" src="https://demo.forecastadvtg.com/projects/Hyperface/2025/email/indus-moments.png" alt="Indus Moments" />
    </a>

    </div>

<div class="social-footer">
  <img src="https://demo.forecastadvtg.com/projects/Hyperface/2025/email/bull.png" width="40" alt="Bull" />
  <div class="social-icons">
    <a href="https://www.facebook.com/OfficialIndusIndBankPage"><img src="https://demo.forecastadvtg.com/projects/Hyperface/2025/email/facebook.png" alt="Facebook" /></a>
    <a href="https://www.instagram.com/indusind_bank/"><img src="https://demo.forecastadvtg.com/projects/Hyperface/2025/email/instagram.png" alt="Instagram" /></a>
    <a href="https://www.threads.net/@indusind_bank"><img src="https://demo.forecastadvtg.com/projects/Hyperface/2025/email/at.png" alt="Threads" /></a>
    <a href="https://www.linkedin.com/company/indusind-bank"><img src="https://demo.forecastadvtg.com/projects/Hyperface/2025/email/linkedin.png" alt="LinkedIn" /></a>
    <a href="https://twitter.com/myindusindbank"><img src="https://demo.forecastadvtg.com/projects/Hyperface/2025/email/twitter.png" alt="Twitter" /></a>
  </div>
</div>

<div class="footer-links">
  <a href="${data.tncUrl}" target="_blank">Terms and Conditions apply</a>
  <span><a href="https://www.indusind.com/in/en/about-us/IBL-thirdparty-disclaimer.html" target="_blank">Click here</a> for IndusInd Bank Disclaimer</span>
</div>
</div>
</body>
</html>
`;
}

if (functionName === "preview") {
  return getTemplate13preview(data, TemplateHelpers, lightColor);
} else {
  return getTemplate13(data, TemplateHelpers, lightColor);
}

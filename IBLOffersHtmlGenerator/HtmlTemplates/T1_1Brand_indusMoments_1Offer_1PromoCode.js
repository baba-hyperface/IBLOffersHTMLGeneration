function getTemplate1preview(data, TemplateHelpers, lightColor) {
  return `<html>
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
    }
    body, table, td, a {
      -webkit-text-size-adjust: 100%;
      -ms-text-size-adjust: 100%;
    }
    table {
      border-collapse: collapse;
      border-spacing: 0;
    }
    table, td {
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
      body, table, td, p, a, li, blockquote {
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
      .center img, .center table {
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
      .text-center table, .text-center img {
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

<body style="margin: 0 auto; padding:0px;width:600px;"> 
  <!-- Main email container -->
  <table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="${
    data.color
  }" style="background-color:${data.color};padding:0; margin:0 auto;">
    <tr>
      <td align="center" valign="top" bgcolor="${
        data.color
      }" style="background-color:${data.color};padding:25px 20px 10px 20px;"> 
        <table width="100%" border="0" cellspacing="0" cellpadding="0" style="max-width:600px; background-color:${
          data.color
        };" bgcolor="${data.color}">
          <!-- Header with logos -->
        <tr>
            <td align="center" style="padding:0; background-color:${
              data.color
            };" bgcolor="${data.color}">
                ${TemplateHelpers.getNavbarTwoLogos(data, data.brandLogo)} 
            </td>
            </tr>
          
          <!-- Main heading -->
          <tr>
            <td align="center" style="padding:30px 0 10px 0; background-color:${
              data.color
            };" bgcolor="${data.color}"> 
              <table width="520" border="0" cellspacing="0" cellpadding="0" style="width:100%; max-width:520px; background-color:${
                data.color
              };" bgcolor="${data.color}"> 
              <tr>
                  <td align="center" valign="top" style="font-family:Arial; font-size:36px; line-height:44px; color:#972629; padding:0; font-weight:bold; background-color:${
                    data.color
                  };" bgcolor="${data.color}" class="heading">  ${TemplateHelpers.processTextWithLineBreaks(data.headline,{delimiter:"/n"})}
                  </td>
                </tr>
                <tr>
                  <td align="center" valign="top" style="font-family:Arial; font-size:22.5px; line-height:31px; color:#000000; padding:5px 0 0 0; background-color:${
                    data.color
                  };" bgcolor="${data.color}" class="subheading"> 
                    ${TemplateHelpers.processTextWithLineBreaks(data.subHeadline, {
                      color: "#000000",
                    })}
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- Banner image -->
          <tr>
            <td align="center" valign="top" class="responsive-image" style="background-color:${
              data.color
            };margin:auto;" bgcolor="${data.color}">
              <a href="https://www.indusmoments.com/offers/BOOMINS" target="_blank" style="text-decoration:none;">
                <img src='${
                  data.heroImage
                }' width="600" alt="IndusInd Bank" style="display:block; width:100%; max-width:600px; height:auto; margin:0 auto; border:0;">
              </a>
            </td>
          </tr>
          
          <!-- Promo code box -->
          <tr>
            <td align="center" valign="top" style="background-color:${
              data.color
            };" bgcolor="${data.color}"> 
                <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color:${
                  data.color
                };" bgcolor="${data.color}"> 
                <tr>
                    <td align="center" valign="top" style="background-color:${
                      data.color
                    };" bgcolor="${data.color}"> 
                    <table width="450" border="0" cellspacing="0" cellpadding="0" style="width:100%; max-width:450px; margin:0 auto; background-color:${
                      data.color
                    };" bgcolor="${data.color}"> 
                        <tr>
                        <td align="center" valign="top" style="background-color:${
                          data.color
                        }; padding:15px;" bgcolor="${data.color}"> 
                          <table border="0" cellspacing="0" cellpadding="0" align="center" style="border:1px dashed #000000 !important; background-color:${
                            data.color
                          }; text-align:center;" bgcolor="${data.color}">
                            <tr>
                              <td style="padding:15px;background-color:${
                                data.color
                              };"> 
                                <table border="0" cellspacing="0" cellpadding="0" align="center" style="background-color:${
                                  data.color
                                };" bgcolor="${data.color}">
                                  <tr>
                                    <td align="center" valign="top" style="font-family:Arial; font-size:21px; line-height:26px; color:#000000; background-color:${
                                      data.color
                                    }; padding:0px;" bgcolor="${data.color}">
                                      ${TemplateHelpers.processTextWithLineBreaks(
                                        data.offertext,
                                        { color: "#97272b" }
                                      )}
                                    </td>
                                  </tr>
                                  <tr>
                                    <td align="center" valign="top" style="background-color:${
                                      data.color
                                    }; padding:0px; padding-top:10px;" bgcolor="${data.color}">
                                      <table border="0" cellspacing="0" cellpadding="0" align="center" style="background-color:${
                                        data.color
                                      };" bgcolor="${data.color}">
                                        <tr>
                                          <td align="center" valign="top" style="font-family:Arial; font-size:16px; line-height:16px; color:#ffffff; background:#97272b; border-radius:5px; padding:5px 10px;">
                                          <a href="${data.promoCodeLink}" target="_blank" style="color: #ffffff; text-decoration: none;">
                                          Promo Code: <strong>${
                                                data.promoCode
                                                }</strong></a>  
                                          </td>
                                        </tr>
                                      </table>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </table>
                        </td>
                        </tr>
                    </table>
                    </td>
                </tr>
                </table>
            </td>
          </tr>
          
          <!-- Shop Now button -->
          <tr>
            <td align="center" valign="top" style="padding:7px 16px 0 16px; font-family:Arial; font-size:14px; line-height:18px; background-color:${
              data.color
            };" bgcolor="${data.color}"> 
              <table border="0" cellspacing="0" cellpadding="0" align="center" style="width:140px; background-color:${
                data.color
              };" bgcolor="${data.color}"> 
                <tr>
                  <td align="center" valign="middle" style="height:34px; background:#97272b; font-family:Arial; font-size:16px; line-height:16px; font-weight:normal; color:#ffffff; text-decoration:none; padding:0; vertical-align:middle; border-radius:5px; text-transform:uppercase;" bgcolor="#97272b" height="34">
                    <a href='${
                      data.ctaUrl
                    }' style="color:#ffffff; text-decoration:none; display:block; padding:10px 20px;"><strong>${
      data.ctaText
    }</strong></a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          ${data.offerEndTextRequire === "true"? `
            <tr>
              <td align="center" valign="top"
                style="font-family: Arial, 'Times New Roman', Tahoma, 'serif'; font-size: 14px; line-height: 18px; color: #97272b; padding: 20px 0 20px 0;background-color: ${data.color};"
                class="pdtb" >
                ${TemplateHelpers.processTextWithLineBreaks(data.offerEndText)}
                </td>
            </tr>`
            :``}
          
          <!-- Indus Moments logo -->
          <tr>
            <td align="center" valign="top" style="padding:25px 0 10px 0; background-color:${
              data.color
            };" bgcolor="${data.color}"> 
              <a href="https://www.indusmoments.com/" target="_blank" style="text-decoration:none;">
                <img src="https://demo.forecastadvtg.com/projects/Hyperface/2025/email/indus-moments.png" width="240" alt="IndusInd Bank" style="display:block; width:240px; margin:0 auto; border:0;">
              </a>
            </td>
          </tr>
        </table>
      </td>
    </tr>
    <tr>
    <td style="background-color:${data.color};padding:0; margin:0;" bgcolor="${
      data.color
    }">
        ${TemplateHelpers.getSocialIcons(data.color, lightColor)}
        ${TemplateHelpers.getFooter(data.tncUrl)}
    </td>
    </tr>
  </table>
</body>
</html>`;
}
function getTemplate1(data, TemplateHelpers, lightColor){
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
        <td align="center" valign="middle" class="mobile" bgcolor="#ffffff">
          <table class="table" align="center" border="0" cellpadding="0" bgcolor="#ffffff" cellspacing="0" width="600"
            style="width: 600px; margin: 0 auto;">
            <tbody>
              <tr>
                <td align="center">
                  <table width="100%" border="0" cellspacing="0" cellpadding="0">
                    <tbody>
                      <tr>
                        <td align="center" valign="top" style="padding: 1px;" bgcolor="${data.color}">
                          <table width="100%" border="0" cellspacing="0" cellpadding="0">
                            <tbody>
                              <tr>
                                <td align="center" valign="top" bgcolor="${data.color}">
                                  <table class="table" width="100%" border="0" cellpadding="0" cellspacing="0"
                                    align="center" bgcolor="${data.color}">
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
                                                  class="heading">${TemplateHelpers.processTextWithLineBreaks(data.headline,{delimiter:"/n"})}</td>
                                              </tr>
                                              <tr>
                                                <td align="center" valign="top"
                                                  style="font-family: Arial, 'Times New Roman', Tahoma, 'serif'; font-size: 22.5px; line-height: 31px; color: #000000; padding: 5px 0 0 0;"
                                                  class="subheading">${TemplateHelpers.processTextWithLineBreaks(data.subHeadline, {
                      color: "#000000",
                    })}</td>
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
                                              style="display: block; width: auto; height: 400px; margin: 0 auto;" /></a>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td align="center" valign="top" style="padding: 15px 15px 0 15px;">
                                          <table width="450" border="0" cellspacing="0" cellpadding="0"
                                            style="width: 450px;" class="table">
                                            <tbody>
                                              <tr>
                                                <td align="center" valign="top" class="pdlr">
                                                  <table width="100%" border="0" cellspacing="0" cellpadding="0"
                                                    role="presentation" align="center">
                                                    <tbody>
                                                      <tr>
                                                        <th align="center" valign="top" class="td-block text-center"
                                                          style="font-weight: normal;">
                                                          <table border="0" cellspacing="0" cellpadding="0"
                                                            align="center" role="presentation" class="table">
                                                            <tbody>
                                                              <tr>
                                                                <td align="center" valign="top"
                                                                  style="padding: 15px 15px; border: 1px dashed #000000;"
                                                                  class="pdtb">
                                                                  <table border="0" cellspacing="0" cellpadding="0"
                                                                    align="center">
                                                                    <tbody>
                                                                      <tr>
                                                                        <td align="center" valign="top"
                                                                          style="font-family: Arial, 'Times New Roman', Tahoma, 'serif'; font-size: 21px; line-height: 26px; color: #000000; padding: 0; font-weight: normal;">
                                                                          ${TemplateHelpers.processTextWithLineBreaks(
                                        data.offertext,
                                        { color: "#97272b" }
                                      )}</td>
                                                                      </tr>
                                                                      <tr>
                                                                        <td align="center" valign="top"
                                                                          style="padding-top: 10px;">
                                                                          <table border="0" cellspacing="0"
                                                                            cellpadding="0" align="center">
                                                                            <tbody>
                                                                              <tr>
                                                                                <td align="center" valign="top"
                                                                                  style="font-family: Arial, 'Times New Roman', Tahoma, 'serif'; font-size: 16px; line-height: 16px; color: #ffffff; padding: 5px 10px; background: #97272b; border-radius: 5px;">
                                                                                  Promo Code: <strong>${TemplateHelpers.processTextWithLineBreaks(
                                        data.promoCode
                                      )}</strong>
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

                                                        </th>

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
                                        <td align="center" valign="top"
                                          style="font-family: Arial, 'Times New Roman', Tahoma, 'serif'; font-size: 14px; line-height: 18px; color: #000000; padding: 20px 16px 0 16px;">
                                          <table border="0" width="140" cellspacing="0" cellpadding="0" align="center"
                                            role="presentation" style="width: 140px;">
                                            <tbody>
                                              <tr>
                                                <td align="center" valign="middle"
                                                  style="height: 34px; background: #97272b; font-family: Arial, 'Times New Roman', Tahoma, 'serif'; font-size: 16px; mso-line-height-rule:exactly; line-height: 16px; font-weight: normal; color: #ffffff; text-decoration: none; padding: 0; vertical-align: middle; border-radius: 5px; text-transform: uppercase;"
                                                  bgcolor="#97272b" height="34"><a
                                                    href="${data.ctaUrl}"
                                                    style="color: #ffffff; text-decoration: none;"
                                                    target="_blank"><strong
                                                      style="color: #ffffff; text-decoration: none;">${TemplateHelpers.processTextWithLineBreaks(
                                        data.ctaText
                                      )}</strong></a></td>
                                              </tr>
                                            </tbody>
                                          </table>

                                        </td>
                                      </tr>
                                      ${data.offerEndTextRequire === "true"? `
                                      <tr>
                                        <td align="center" valign="top"
                                          style="font-family: Arial, 'Times New Roman', Tahoma, 'serif'; font-size: 14px; line-height: 18px; color: #97272b; padding: 20px 0 20px 0;background-color: ${data.backgroundColor};"
                                          class="pdtb" >
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
if (functionName === "preview") {
  return getTemplate1preview(data, TemplateHelpers, lightColor);
} else {
  return getTemplate1(data, TemplateHelpers, lightColor);
}

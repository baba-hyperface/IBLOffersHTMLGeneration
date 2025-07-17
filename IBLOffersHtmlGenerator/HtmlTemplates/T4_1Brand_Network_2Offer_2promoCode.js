function getTemplate4(data, TemplateHelpers, lightColor) {
  return `<html>
<head>
  <meta name="viewport" content="width=device-width; initial-scale=1.0; maximum-scale=1.0; user-scalable=no;">
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

<body style="margin:0 auto; padding:0;width:600px">  
  <!-- Main Container -->
  <table class="table" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="margin:0 auto;padding:0;max-width:600px;">
    <tbody>
      <tr>
        <td align="center" valign="middle" style="font-family: Arial; font-size: 14px; line-height: 18px; color: #000000; padding: 30px 20px 10px 25px;max-width:600px;background-color:${data.color}">
          ${TemplateHelpers.getNavbarTwoLogos(data, data.networklogo)}
        </td>
      </tr>
      <tr>
        <td align="center" valign="middle" class="mobile" style="padding: 0; background-color: ${
          data.color
        };">
          <table class="table" align="center" border="0" cellpadding="0" cellspacing="0" width="600" style="width: 600px; margin: 0 auto;">
            <tbody>
              <tr>
                <td align="center" >
                  <table width="100%" border="0" cellspacing="0" cellpadding="0" >
                    <tbody>
                      <tr>
                        <td align="center" valign="top" style="padding: 1px;">
                          <table width="100%" border="0" cellspacing="0" cellpadding="0">
                            <tbody>
                              <tr>
                                <td align="center" valign="top"style="background-color: ${
                                  data.color
                                };" >
                                  <table class="table" width="100%" border="0" cellpadding="0" cellspacing="0" align="center" >
                                    <tbody>
                                      
                                      <!-- Main Heading -->
                                      <tr>
                                        <td align="center" valign="top" style="padding: 30px 0 10px 0;background-color: ${
                                          data.color
                                        };" class="pdlr pdtb" >
                                          <table width="520" border="0" cellspacing="0" cellpadding="0" style="width: 520px;" class="table">
                                            <tbody>
                                              <tr>
                                                <td align="center" valign="top" style="font-family: Arial; font-size: 36px; line-height: 44px; color: #972629; padding: 0; font-weight: bold;background-color:${data.color}" class="heading">
                       ${TemplateHelpers.processTextWithLineBreaks(
                         data.headline,
                         { delimiter: "/n" }
                       )}
                                                </td>
                                              </tr>
                                              <tr>
                                                <td align="center" valign="top" style="font-family: Arial; font-size: 23px; line-height: 31px; color: #000000; padding: 5px 0 0 0;background-color:${data.color}" class="subheading">
                                        ${TemplateHelpers.processTextWithLineBreaks(
                                          data.subHeadline,
                                          { delimiter: "/n" }
                                        )}
                                                </td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </td>
                                      </tr>
                                      
                                      <!-- Banner Image -->
                                      <tr>
                                        <td align="center" valign="top" style="font-family: Arial; font-size: 18px; line-height: 21px; color: #000000; padding: 0; font-weight: bold; background-color: ${
                                          data.color
                                        };" class="responsive-image pdlr">
                                          <img src='${
                                            data.heroImage
                                          }' height="400" alt="IndusInd Bank" style="display: block; width: auto; height: 400px; margin: 0 auto; background-color: ${
    data.color
  };" />
                                        </td>
                                      </tr>
                                      <tr>
                                        <td align="center" valign="top" style="font-family: Arial; font-size: 18px; line-height: 21px; color: #000000; padding: 10px 0px 0px 0px; font-weight: bold; background-color: ${
                                          data.color
                                        };" class="pdlr">
                                          <img 
                                            src='${data.brandLogo}' 
                                            style="display: block; max-width: 400px; height: auto; margin: 0 auto; background-color: ${
                                              data.color
                                            };" 
                                            alt="IndusInd Bank" 
                                          />
                                        </td>
                                      </tr>
                                      <!-- Promo Code Boxes -->
                                      <tr>
                                        <td align="center" valign="top" style="padding: 20px 15px 0 15px;">
                                          <table  border="0" cellspacing="0" cellpadding="0" class="table">
                                            <tbody>
                                              <tr>
                                                <td align="center" valign="top" class="pdlr" style="padding: 0px;">
                                                  <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation" align="center">
                                                    <tbody>
                                                      <tr>
                                                        <td align="left" valign="top" class="td-block text-center" style="padding:0px; padding-right: 15px;">
                                                          <table border="0" cellspacing="0" cellpadding="0" align="left" role="presentation" class="table" onClick="table">
                                                            <tbody>
                                                              <tr>
                                                                <td align="center" valign="top" style="padding: 15px 5px;max-width:205px;" class="pdtb">
                                                                  <table border="0" cellspacing="0" cellpadding="0" align="center" >
                                                                    <tbody>
                                                                      <tr>
                                                                        <td align="center" valign="top" style="font-family: Arial; font-size: 21px; line-height: 26px; color: #000000; padding: 0; background-color: ${
                                                                          data.color
                                                                        };">${TemplateHelpers.processTextWithLineBreaks(
    data.offertext1,
    { color: "#97272b" }
  )}</td>
                                                                      </tr>
                                                                      <tr>
                                                                        <td align="center" valign="top" style="padding-top: 10px; background-color: ${
                                                                          data.color
                                                                        };max-width: 140px;">
                                                                          <table border="0" cellspacing="0" cellpadding="0" align="center" style="background-color: ${
                                                                            data.color
                                                                          };">
                                                                            <tbody>
                                                                              <tr>
                                                                                <td align="center" valign="top" style="font-family: Arial; font-size: 16px; line-height: 16px; color: #ffffff; padding: 5px 10px; background: #97272b; border-radius: 5px;max-width: 90%;">
                                                                                  <a href="${
                                                                                    data.promoCodeLink1
                                                                                  }" target="_blank" style="color: #ffffff; text-decoration: none;">Promo Code: <strong>${
    data.promoCode1
  }</strong></a>
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
     <td style="width:1px; min-width:1px; max-width:1px; background:#000 !important; padding:0px;z-index:1000; height:100px">
</td>
                                                        <td align="right" valign="top" class="td-block pdtop15 text-center" style="padding:0px; padding-left: 15px;">
                                                          <table border="0" cellspacing="0" cellpadding="0" align="right" role="presentation">
                                                            <tbody>
                                                              <tr>
                                                                <td align="center" valign="top" style="padding: 15px 5px;max-width:205px;" class="pdtb">
                                                                  <table border="0" cellspacing="0" cellpadding="0" align="center">
                                                                    <tbody>
                                                                      <tr>
                                                                        <td align="center" valign="top" style="font-family: Arial; font-size: 21px; line-height: 26px; color: #000000; padding: 0;">${TemplateHelpers.processTextWithLineBreaks(
                                                                          data.offertext2,
                                                                          {
                                                                            color:
                                                                              "#97272b",
                                                                          }
                                                                        )}</td>
                                                                      </tr>
                                                                      <tr>
                                                                        <td align="center" valign="top" style="padding-top: 10px;max-width: 140px;">
                                                                          <table border="0" cellspacing="0" cellpadding="0" align="center">
                                                                            <tbody>
                                                                              <tr>
                                                                                <td align="center" valign="top" style="font-family: Arial; font-size: 16px; line-height: 16px; color: #ffffff; padding: 5px 10px; background: #97272b; border-radius: 5px;max-width: 90%;">
                                                                                  <a href="${
                                                                                    data.promoCodeLink2
                                                                                  }" target="_blank" style="color: #ffffff; text-decoration: none;">Promo Code: <strong>${
    data.promoCode2
  }</strong></a>
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
                                              <tr>
                                                <td align="center" valign="top" style="font-family: Arial; font-size: 18px; line-height: 21px; color: #97272b; padding: 20px 0 20px 0; text-decoration: none; background-color: ${
                                                  data.color
                                                };max-width:405px;" class="font-16 pdtb">${TemplateHelpers.processTextWithLineBreaks(
    data.offerEndText,
    { delimiter: "/n" }
  )}</td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </td>
                                      </tr>
                                      
                                      <!-- Shop Now Button --><tr>
                                      <tr>
                                        <td align="center" valign="top" style="font-family: Arial; font-size: 14px; line-height: 18px; color: #000000; padding: 0 16px 0 16px; background-color: ${
                                          data.color
                                        };">
                                          <table border="0" width="140" cellspacing="0" cellpadding="0" align="center" role="presentation" style="width: 140px; background-color: ${
                                            data.color
                                          };">
                                            <tbody>
                                              <tr>
                                                <td align="center" valign="middle" style="height: 34px; background: #97272b; font-family: Arial; font-size: 16px; mso-line-height-rule:exactly; line-height: 16px; font-weight: normal; color: #ffffff; text-decoration: none; padding: 0 24px; vertical-align: middle; border-radius: 5px; text-transform: uppercase;" bgcolor="#97272b" height="34">
                                                  <a href='${
                                                    data.ctaUrl
                                                  }' style="color: #ffffff; text-decoration: none;" target="_blank">
                                                    <strong style="color: #ffffff; text-decoration: none;">${
                                                      TemplateHelpers.processTextWithLineBreaks(
                                                        data.ctaText,
                                                        { delimiter: "/n" }
                                                      ) || "Shop Now"
                                                    }</strong>
                                                  </a>
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
        </td>
      </tr>
      
      <!-- Footer Section -->
      <tr>
        <td align="right" valign="top" style="background-color: ${
          data.color
        };padding: 0;margin:0;">
          ${TemplateHelpers.getSocialIcons(data.color, lightColor)}
          ${TemplateHelpers.getFooter(data.tncUrl)}
        </td>
      </tr>
    </tbody>
  </table>
</body>
</html>`;
}
return getTemplate4(data, TemplateHelpers, lightColor);

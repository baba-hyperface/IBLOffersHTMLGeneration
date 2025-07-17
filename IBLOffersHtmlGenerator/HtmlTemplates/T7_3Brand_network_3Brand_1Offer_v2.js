function getTemplate7(data, TemplateHelpers, lightColor) {
  return `
<!DOCTYPE html>
<html>
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
      .head {
        font-size: 24px !important;
        line-height: normal !important;
        letter-spacing: 1px !important;
      }
      .subhead {
        font-size: 28px !important;
        line-height: 30px !important;
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
      .pdtop5 {
        padding-top: 5px !important;
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
      .font-18 {
        font-size: 18px !important;
        line-height: 24px !important;
      }
      .font-16 {
        font-size: 16px !important;
        line-height: 20px !important;
      }
      .font-14 {
        font-size: 14px !important;
        line-height: 18px !important;
      }
    }
  </style>
</head>
<body>
  <div style="font-size:1px; color:#ffffff; line-height:1px; max-height:0px; max-width:0px; opacity:0; overflow:hidden; display:none;">
  </div>
  <table class="table" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px;" >
    <tbody>
      <tr>
        <td align="center" valign="middle" class="mobile" style="background-color:${
          data.backgroundColor
        };">
          <table class="table" align="center" border="0" cellpadding="0" bgcolor="${
            data.backgroundColor
          }" cellspacing="0" width="600" style="width: 600px; margin: 0 auto; background-color:${
    data.backgroundColor
  };">
            <tbody>
              <tr>
                <td align="center" style="background-color:${
                  data.backgroundColor
                };">
                  <table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="${
                    data.backgroundColor
                  }">
                    <tbody>
                      <tr>
                        <td align="center" valign="top" style="padding: 1px; background-color:${
                          data.backgroundColor
                        };" bgcolor="${data.backgroundColor}">
                          <table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="${
                            data.backgroundColor
                          }">
                            <tbody>
                              <tr>
                                <td align="center" valign="top" bgcolor="${
                                  data.backgroundColor
                                }">
                                  <table class="table" width="100%" border="0" cellpadding="0" cellspacing="0" align="center" bgcolor="${
                                    data.backgroundColor
                                  }">
                                    <tbody>
                                        <tr>
                                        <td align="center" valign="middle"
                                          style="font-family: Arial, 'Times New Roman', Tahoma, 'serif'; font-size: 14px; line-height: 18px; color: #000000; padding: 5px 0px 20px 0px;background:${
                                            data.backgroundColor
                                          }"
                                          class="pdlr pdtb">
                                          <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                            <tbody>
                                              <tr>
                                                        <td align="left" valign="middle" style="padding: 18px; background-color:${
                                                          data.backgroundColor
                                                        };">
                                                        <a href="https://left-image-link.com/" target="_blank" style="text-decoration: none;">
                                                            <img
                                                            src="${
                                                              data.networklogo
                                                            }"
                                                            height="28"
                                                            alt="Left Logo"
                                                            style="display: block; width: auto; height: 28px;"
                                                            />
                                                        </a>
                                                        </td>
                                                        <td style="width: 100%;"></td><!-- This cell expands to fill remaining space -->
                                                        <td align="right" valign="middle" style="padding: 8px; background-color:${
                                                          data.backgroundColor
                                                        };">
                                                        <a href="https://www.indusind.com/"
                                                    target="_blank" style="text-decoration: none;"><img
                                                      src="https://demo.forecastadvtg.com/projects/Hyperface/2025/email/indusind-logo.png"
                                                      height="28" alt="IndusInd Bank"
                                                      style="display: block; width: auto; min-height: 28px; max-height: 28px; height: 28px;"
                                                      class="main-logo" /></a>
                                                        </td>
                                                    </tr>
                                            </tbody>
                                          </table>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td align="center" valign="top" style="padding: 10px 0 10px 0; background-color:${
                                          data.backgroundColor
                                        };"
                                          class="pdlr pdtb">
                                          <table width="520" border="0" cellspacing="0" cellpadding="0"
                                            style="width: 520px; background-color:${
                                              data.backgroundColor
                                            };" class="table">
                                            <tbody>
                                              <tr>
                                                <td align="center" valign="top"
                                                  style="font-family: Arial, 'Times New Roman', Tahoma, 'serif'; font-size: 36px; line-height: 44px; color: #972429; padding: 0; font-weight: bold; background-color:${
                                                    data.backgroundColor
                                                  };"
                                                  class="heading">${TemplateHelpers.processTextWithLineBreaks(
                                                    data.headingLine,
                                                    { delimeter: "/n" }
                                                  )}
                                                </td>
                                              </tr>
                                              <tr>
                                                <td align="center" valign="top"
                                                  style="font-family: Arial, 'Times New Roman', Tahoma, 'serif'; font-size: 23px; line-height: 31px; color: #000000; padding: 10px 0 0 0; background-color:${
                                                    data.backgroundColor
                                                  };"
                                                  class="subheading">${
                                                    TemplateHelpers.processTextWithLineBreaks(
                                                      data.subHeadingLine,
                                                      {
                                                        delimiter: "/n",
                                                      }
                                                    ) || "subheading"
                                                  }</td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td align="center" valign="top" class="pdlr" style="background-color:${
                                          data.backgroundColor
                                        };">
                                          <table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="${
                                            data.backgroundColor
                                          }">
                                            <tbody>
                                              <tr>
                                                <td align="center" valign="top" class="responsive-image" style="background-color:${
                                                  data.backgroundColor
                                                };"><img
                                                    src='${data.heroImage}'
                                                    alt="IndusInd Bank" width="500"
                                                    style="display: block; width: 500px; background-color:${
                                                      data.backgroundColor
                                                    };" /></td>
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
                                                <td align="center" valign="top"
                                                  style="font-family: Arial, 'Times New Roman', Tahoma, 'serif'; font-size: 16px; line-height: 18px; color: #97272b; padding: 25px 0 25px 0; text-decoration: none; background-color:${
                                                    data.backgroundColor
                                                  };">
                                                  ${TemplateHelpers.processTextWithLineBreaks(
                                                    data.offerEndText,
                                                    { delimiter: "/n" }
                                                  )}</td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td align="center" valign="top" style="background-color:${
                                          data.backgroundColor
                                        };">
                                          <table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="${
                                            data.backgroundColor
                                          }">
                                            <tbody>
                                              <tr>
                                                <td align="center" valign="top" style="background-color:${
                                                  data.backgroundColor
                                                };">
                                                  <table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="${
                                                    data.backgroundColor
                                                  }">
                                                    <tbody>
                                                      <tr>
                                                        <td align="left" valign="top"
                                                          style="font-family: Arial, 'Times New Roman', Tahoma, 'serif'; font-size: 14px; line-height: 18px; color: #000000; padding: 0 0 0 0; background-color:${
                                                            data.backgroundColor
                                                          };">
                                                          <table width="100%" border="0" cellspacing="0"
                                                            cellpadding="0" bgcolor="${
                                                              data.backgroundColor
                                                            }">
                                                            <tbody>
                                                              <tr>
                                                                <td align="left" valign="bottom" width="61" style="background-color:${
                                                                  data.backgroundColor
                                                                };"><img
                                                                    src="https://demo.forecastadvtg.com/projects/Hyperface/2025/email/bull.png"
                                                                    width="40" alt="IndusInd Bank"
                                                                    style="display: block; width: 40px; background-color:${
                                                                      data.backgroundColor
                                                                    };" /></td>
                                                                <td align="right" style="padding: 0 15px 10px 0; background-color:${
                                                                  data.backgroundColor
                                                                };"
                                                                  valign="bottom">
                                                                  <table border="0" cellspacing="0" cellpadding="0"
                                                                    align="right" bgcolor="${
                                                                      data.backgroundColor
                                                                    }">
                                                                    <tbody>
                                                                      <tr>
                                                                        <td align="center" valign="middle"
                                                                          style="font-family: Arial, 'Times New Roman', Tahoma, 'serif'; font-size: 10px; line-height: normal; color: #97272b; padding: 0 3px 0 0; background-color:${
                                                                            data.backgroundColor
                                                                          };">
                                                                          Connect with us:</td>
                                                                        <td align="center" valign="middle"
                                                                          style="font-family: Arial, 'Times New Roman', Tahoma, 'serif'; font-size: 12px; line-height: normal; color: #97272b; padding: 0 0 0 0; background-color:${
                                                                            data.backgroundColor
                                                                          };">
                                                                          <a href="https://www.facebook.com/OfficialIndusIndBankPage"
                                                                            target="_blank"
                                                                            style="text-decoration: none;"><img
                                                                              src="https://demo.forecastadvtg.com/projects/Hyperface/2025/email/facebook.png"
                                                                              alt="Facebook" width="16"
                                                                              style="display: block; width: 16px; background-color:${
                                                                                data.backgroundColor
                                                                              };" /></a>
                                                                        </td>
                                                                        <td align="center" valign="middle"
                                                                          style="font-family: Arial, 'Times New Roman', Tahoma, 'serif'; font-size: 12px; line-height: normal; color: #97272b; padding: 0 5px 0 5px; background-color:${
                                                                            data.backgroundColor
                                                                          };">
                                                                          <a href="https://www.instagram.com/indusind_bank/"
                                                                            target="_blank"
                                                                            style="text-decoration: none;"><img
                                                                              src="https://demo.forecastadvtg.com/projects/Hyperface/2025/email/instagram.png"
                                                                              alt="Instagram" width="16"
                                                                              style="display: block; width: 16px; background-color:${
                                                                                data.backgroundColor
                                                                              };" /></a>
                                                                        </td>
                                                                        <td align="center" valign="middle"
                                                                          style="font-family: Arial, 'Times New Roman', Tahoma, 'serif'; font-size: 12px; line-height: normal; color: #97272b; padding: 0 0 0 0; background-color:${
                                                                            data.backgroundColor
                                                                          };">
                                                                          <a href="https://www.threads.net/@indusind_bank"
                                                                            target="_blank"
                                                                            style="text-decoration: none;"><img
                                                                              src="https://demo.forecastadvtg.com/projects/Hyperface/2025/email/at.png"
                                                                              alt="Threads" width="14"
                                                                              style="display: block; width: 14px; background-color:${
                                                                                data.backgroundColor
                                                                              };" /></a>
                                                                        </td>
                                                                        <td align="center" valign="middle"
                                                                          style="font-family: Arial, 'Times New Roman', Tahoma, 'serif'; font-size: 12px; line-height: normal; color: #97272b; padding: 0 5px 0 5px; background-color:${
                                                                            data.backgroundColor
                                                                          };">
                                                                          <a href="https://www.linkedin.com/company/indusind-bank"
                                                                            target="_blank"
                                                                            style="text-decoration: none;"><img
                                                                              src="https://demo.forecastadvtg.com/projects/Hyperface/2025/email/linkedin.png"
                                                                              alt="LinkedIn" width="16"
                                                                              style="display: block; width: 16px; background-color:${
                                                                                data.backgroundColor
                                                                              };" /></a>
                                                                        </td>
                                                                        <td align="center" valign="middle"
                                                                          style="font-family: Arial, 'Times New Roman', Tahoma, 'serif'; font-size: 12px; line-height: normal; color: #97272b; padding: 0 0 0 0; background-color:${
                                                                            data.backgroundColor
                                                                          };">
                                                                          <a href="https://twitter.com/myindusindbank"
                                                                            target="_blank"
                                                                            style="text-decoration: none;"><img
                                                                              src="https://demo.forecastadvtg.com/projects/Hyperface/2025/email/twitter.png"
                                                                              alt="Twitter" width="16"
                                                                              style="display: block; width: 16px; background-color:${
                                                                                data.backgroundColor
                                                                              };" /></a>
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
                                        <td align="right" valign="top"
                                          style="font-family: Arial, 'Times New Roman', Tahoma, 'serif'; font-size: 14px; line-height: 18px; color: #ffffff; padding: 10px 16px 10px 16px; background-color:#97282b;">
                                          <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                            <tbody>
                                              <tr>
                                                <td align="left" valign="bottom"
                                                  style="font-family: Arial, 'Times New Roman', Tahoma, 'serif'; font-size: 12px; line-height: 14px; color: #ffffff; padding: 0 0 0 0;"
                                                  class="td-block"><a
                                                    href="${
                                                      data.tncUrl
                                                    }" target="_blank"
                                                    style="color: #ffffff; text-decoration: underline;">Terms and Conditions Apply</a>
                                                </td>
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
</html>

  `;
}

function getTemplate7preview(data, TemplateHelpers, lightColor) {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta name="viewport" content="width=device-width; initial-scale=1.0; maximum-scale=1.0; user-scalable=no;">
  <title>IndusInd Bank</title>
  <style type="text/css">
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      -webkit-text-size-adjust: none;
      -ms-text-size-adjust: none;
    }
    body {
      margin: 0;
      padding: 0;
      font-family: Arial, 'Times New Roman', Tahoma, serif;
      background-color: ${data.backgroundColor};
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      background-color: ${data.backgroundColor};
    }
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 18px;
      background-color: ${data.backgroundColor};
    }
    .header-logo {
      height: 28px;
      width: auto;
    }
    .spacer {
      flex-grow: 1;
    }
    .main-content {
      padding: 0px 10px;
      background-color: ${data.backgroundColor};
    }
    .content-wrapper {
      max-width: 520px;
      margin: 0 auto;
      background-color: ${data.backgroundColor};
    }
    .heading {
      font-size: 36px;
      line-height: 44px;
      color: #972429 !important;
      font-weight: bold;
      text-align: center;
      margin-bottom: 10px;
      background-color: ${data.backgroundColor};
    }
    .subheading {
    font-weight: 400 !important;
      font-size: 23px;
      line-height: 31px;
      color: #000000;
      text-align: center;
      background-color: ${data.backgroundColor};
    }
    .main-image {
      width: 100%;
      max-width: 500px;
      display: block;
      margin: 0 auto;
      background-color: ${data.backgroundColor};
    }
    .offers-container {
      display: flex;
      justify-content: center;
      background-color: ${data.backgroundColor};
      padding: 25px 0;
    }
    .offer-column {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 0 12px;
      background-color: ${data.backgroundColor};
    }
    .divider {
      width: 1px;
      background-color: #972629;
      margin: 10px 0;
    }
    .brand-logo {
      height: 40px;
      margin: 0 auto 10px;
      display: block;
    }
    .offer-text {
      font-size: 20px;
      line-height: 26px;
      color: #972629;
      font-weight: bold;
      text-align: center;
      margin-bottom: 8px;
    }
    .cta-button {
      background: #97272b;
      color: #fff !important;
      font-size: 16px;
      border-radius: 5px;
      padding: 8px 26px;
      font-weight: bold;
      text-decoration: none !important;
      display: inline-block;
      white-space: nowrap;
      margin-top: 8px;
    }
    .expiry-text {
      font-size: 16px;
      line-height: 18px;
      color: #97272b;
      text-align: center;
      padding: 25px 0;
      text-decoration: none;
      background-color: ${data.backgroundColor};
    }
    .footer-social {
      display: flex;
      align-items: center;
      padding: 0 0 10px;
      background-color: ${data.backgroundColor};
    }
    .social-icons {
      display: flex;
      align-items: center;
      margin-left: auto;
    }
    .social-icon {
      margin: 0 5px;
    }
    .social-icon img {
      width: 16px;
      height: auto;
      display: block;
    }
    .at-icon img {
      width: 14px;
    }
    .footer-links {
      background-color: #97282b;
      padding: 10px 16px;
      color: #ffffff;
      font-size: 12px;
      line-height: 14px;
      display: flex;
      justify-content: space-between;
    }
    .footer-link {
      color: #ffffff !important;
      text-decoration: underline;
    }
    @media all and (max-width: 640px) {
      .container {
        width: 100% !important;
      }
      .content-wrapper {
        padding: 0 15px;
      }
      .heading {
        font-size: 24px !important;
        line-height: normal !important;
      }
      .subheading {
        font-size: 18px !important;
        line-height: 24px !important;
      }
      .offers-container {
        flex-direction: column;
        align-items: center;
      }
      .offer-column {
        margin-bottom: 20px;
      }
      .divider {
        width: 100%;
        height: 1px;
        margin: 10px 0;
      }
      .footer-links {
        flex-direction: column;
      }
      .footer-links a {
        display: block;
        margin-bottom: 5px;
      }
    }
  </style>
</head>
<body>
  <div style="font-size:1px; color:#ffffff; line-height:1px; max-height:0px; max-width:0px; opacity:0; overflow:hidden; display:none;">
  </div>
  
  <div class="container">
    <div class="header">
      <a href="https://left-image-link.com/" target="_blank" style="text-decoration: none;">
        <img src="${
          data.networklogo
        }" height="28" alt="Left Logo" class="header-logo">
      </a>
      <div class="spacer"></div>
      <a href="https://www.indusind.com/" target="_blank" style="text-decoration: none;">
        <img src="https://demo.forecastadvtg.com/projects/Hyperface/2025/email/indusind-logo.png" height="28" alt="IndusInd Bank" class="header-logo">
      </a>
    </div>
    
    <div class="main-content">
      <div class="content-wrapper">
        <h1 class="heading">${TemplateHelpers.processTextWithLineBreaks(
          data.headingLine,
          { delimeter: "/n" }
        )}</h1>
        <h2 class="subheading">${
          TemplateHelpers.processTextWithLineBreaks(data.subHeadingLine, {
            delimiter: "/n",
          }) || "subheading"
        }</h2>
      </div>
      
      <img src="${data.heroImage}" alt="IndusInd Bank" class="main-image">
      
      <div class="offers-container">
        <!-- Offer 1 -->
        <div class="offer-column">
          <img src="${
            data.brandLogoUrl1
          }" height="40" alt="Brand 1" class="brand-logo">
          <div class="offer-text">${TemplateHelpers.processTextWithLineBreaks(
            data.offerText1,
            { delimiter: "/n" }
          )}</div>
          <a href="${data.ctaUrl1}" class="cta-button">${data.ctaText1}</a>
        </div>
        
        <div class="divider"></div>
        
        <!-- Offer 2 -->
        <div class="offer-column">
          <img src="${
            data.brandLogoUrl2
          }" height="40" alt="Brand 2" class="brand-logo">
          <div class="offer-text">${TemplateHelpers.processTextWithLineBreaks(
            data.offerText2,
            { delimiter: "/n" }
          )}</div>
          <a href="${data.ctaUrl2}" class="cta-button">${data.ctaText2}</a>
        </div>
        
        <div class="divider"></div>
        
        <!-- Offer 3 -->
        <div class="offer-column">
          <img src="${
            data.brandLogoUrl3
          }" height="40" alt="Brand 3" class="brand-logo">
          <div class="offer-text">${TemplateHelpers.processTextWithLineBreaks(
            data.offerText3,
            { delimiter: "/n" }
          )}</div>
          <a href="${data.ctaUrl3}" class="cta-button">${data.ctaText3}</a>
        </div>
      </div>
      
      <div class="expiry-text">${TemplateHelpers.processTextWithLineBreaks(
        data.offerEndText,
        { delimiter: "/n" }
      )}</div>
    </div>
    
    <div class="footer-social">
      <img src="https://demo.forecastadvtg.com/projects/Hyperface/2025/email/bull.png" width="40" alt="IndusInd Bank" style="display: block;">
      <div class="social-icons">
        <span style="font-size: 10px; color: #97272b; padding-right: 3px;">Connect with us:</span>
        <a href="https://www.facebook.com/OfficialIndusIndBankPage" target="_blank" class="social-icon">
          <img src="https://demo.forecastadvtg.com/projects/Hyperface/2025/email/facebook.png" alt="Facebook">
        </a>
        <a href="https://www.instagram.com/indusind_bank/" target="_blank" class="social-icon">
          <img src="https://demo.forecastadvtg.com/projects/Hyperface/2025/email/instagram.png" alt="Instagram">
        </a>
        <a href="https://www.threads.net/@indusind_bank" target="_blank" class="social-icon at-icon">
          <img src="https://demo.forecastadvtg.com/projects/Hyperface/2025/email/at.png" alt="Threads">
        </a>
        <a href="https://www.linkedin.com/company/indusind-bank" target="_blank" class="social-icon">
          <img src="https://demo.forecastadvtg.com/projects/Hyperface/2025/email/linkedin.png" alt="LinkedIn">
        </a>
        <a href="https://twitter.com/myindusindbank" target="_blank" class="social-icon">
          <img src="https://demo.forecastadvtg.com/projects/Hyperface/2025/email/twitter.png" alt="Twitter">
        </a>
      </div>
    </div>
    
    <div class="footer-links">
      <div>
        <a href="${
          data.tncUrl
        }" target="_blank" class="footer-link">Terms and Conditions Apply</a>
      </div>
      <div>
        <a href="https://www.indusind.com/in/en/about-us/IBL-thirdparty-disclaimer.html" target="_blank" class="footer-link">Click here</a> for IndusInd Bank Disclaimer
      </div>
    </div>
  </div>
</body>
</html>
  `;
}

if (functionName === "preview") {
  return getTemplate7preview(data, TemplateHelpers, lightColor);
} else {
  return getTemplate7(data, TemplateHelpers, lightColor);
}

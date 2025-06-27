function getTemplate5(data, TemplateHelpers, lightColor) {
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
    body, table, td, a {
      -webkit-text-size-adjust: 100%;
      -ms-text-size-adjust: 100%;
    }
    table {
      border-collapse: collapse;
      border-spacing: 0;
      background-color: ${data.backgroundColor};
    }
    table, td {
      mso-table-lspace: 0pt;
      mso-table-rspace: 0pt;
      background-color: ${data.backgroundColor};
    }
    td {
      border-collapse: collapse;
      background-color: ${data.backgroundColor};
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

<body style="margin:0 auto; padding:0;max-width:600px;">
  <table class="table" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: ${
    data.backgroundColor
  };">
    <tbody>
      <tr>
        <td align="center" valign="middle" class="mobile" style="background-color: ${
          data.backgroundColor
        };padding:7px 10px;">
          <table class="table" align="center" border="0" cellpadding="0" cellspacing="0" style="width: 100%; margin: 0 auto; background-color: ${
            data.backgroundColor
          };">
            <tbody>
              <tr>
                <td align="center" style="padding: 10px 0px 0px 0px;">
                  <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: ${
                    data.backgroundColor
                  };">
                    <tbody>
                      <tr>
                        <td align="center" valign="top" style="padding: 1px; background-color: ${
                          data.backgroundColor
                        };padding: 0px 0px;">
                          <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: ${
                            data.backgroundColor
                          };">
                            <tbody>
                              <tr>
                                <td align="center" valign="top" style="background-color: ${
                                  data.backgroundColor
                                }; padding: 20px 13px 0px 13px;">
                                  <table class="table" width="100%" border="0" cellpadding="0" cellspacing="0" align="center" style="background-color: ${
                                    data.backgroundColor
                                  };">
                                    <tbody>
                                      <tr>
                                        <td align="right" valign="middle" style="font-family: Arial; font-size: 14px; line-height: 18px; padding:0px 0px 7px 0px; background-color: ${
                                          data.backgroundColor
                                        };" class="pdlr pdtb">
                                          ${TemplateHelpers.getNavbarTwoLogos(
                                            data,
                                            data.networklogo
                                          )}
                                        </td>
                                      </tr>
                                      <tr>
                                        <td align="center" valign="top" style="padding: 30px 0 10px 0; background-color: ${
                                          data.backgroundColor
                                        };" class="pdlr pdtb">
                                          <table width="520" border="0" cellspacing="0" cellpadding="0" style="width: 520px; background-color: ${
                                            data.backgroundColor
                                          };" class="table">
                                            <tbody>
                                              <tr>
                                                <td align="center" valign="top" style="font-family: Arial; font-size: 36px; line-height: 44px; color: #972429; padding: 0; font-weight: bold; background-color: ${
                                                  data.backgroundColor
                                                };" class="heading"> ${
    data.headingLine1
  }                                                </td>
                                              </tr>
                                              <tr>
                                                <td align="center" valign="top" style="font-family: Arial; font-size: 23px; line-height: 31px; color: #000000; padding: 10px 0 0 0; background-color: ${
                                                  data.backgroundColor
                                                };" class="subheading">${
    data.subHeadingLine1
  }                                                </td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td align="center" valign="top" class="pdlr responsive-image" style="background-color: ${
                                          data.backgroundColor
                                        };">
                                          <img src='${
                                            data.imageUrl
                                          }' alt="ImageUrl" width="500" style="display: block; width: 500px;" />
                                        </td>
                                      </tr>
                                      
                                      <tr>
                                        <td align="center" valign="top" style="padding: 15px 0 0 0; background-color: ${
                                          data.backgroundColor
                                        };" class="pdlr">
                                          <table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="${
                                            data.backgroundColor
                                          }" style="width:100%:max-width:500px" role="presentation" class="table" align="center" >
                                            <tbody>
                                              <tr>
                                                <td align="left" valign="top" style="padding:0;padding-bottom: 20px; background-color: ${
                                                  data.backgroundColor
                                                };">
                                                  <table width="100%" border="0" cellspacing="0" cellpadding="0" align="center" role="presentation" style="background-color: ${
                                                    data.backgroundColor
                                                  };max-width:500px;">
                                                    <tbody>
                                                      <tr>
                                                        <td align="left" valign="top" style="padding: 12px 10px; border: 1px dashed #000000 !important; background-color: ${
                                                          data.backgroundColor
                                                        };">
                                                          <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation" style="background-color: ${
                                                            data.backgroundColor
                                                          };">
                                                            <tbody>
                                                              <tr>
                                                                <td align="left" valign="middle" width="360" style="width:360px; background-color: ${
                                                                  data.backgroundColor
                                                                };padding:0;vertical-align:middle;">
                                                                  <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: ${
                                                                    data.backgroundColor
                                                                  };">
                                                                    <tbody>
                                                                      <tr>
                                                                        <td align="left" valign="middle" width="135" style="width: 135px; padding:0px;vertical-align:middle;" class="td-block"><img src='${
                                                                          data.brandLogoUrl1
                                                                        }' alt="Brand Logo" width="119" style="display: block; width: 119px; background-color: ${
    data.backgroundColor
  };" />
                                                                        </td>
                                                                        <td align="left" valign="middle" width="225" style="font-family: Arial; font-size: 20px; line-height: 24px; color: #000000; padding:0; background-color: ${
                                                                          data.backgroundColor
                                                                        };width:225px;" class="td-block font-16 pdtop5">
                                                                          ${TemplateHelpers.processText(
                                                                            data.offerText1,
                                                                            {
                                                                              color:
                                                                                "#97272b",
                                                                            }
                                                                          )}
                                                                        </td>
                                                                      </tr>
                                                                    </tbody>
                                                                  </table>
                                                                </td>
                                                                <td align="right" valign="middle" style="background-color: ${
                                                                  data.backgroundColor
                                                                };padding:0px;">
                                                                  <table border="0" cellspacing="0" cellpadding="0" style="background-color: ${
                                                                    data.backgroundColor
                                                                  };">
                                                                    <tbody>
                                                                      <tr>
                                                                        <td align="center" valign="top" height="45" style="background: #97272b; border-radius: 5px; height: 45px;font-family: Arial; font-size: 16px; line-height: 16px; color: #ffffff; text-transform: uppercase; background-color: #97272b;padding:0px 12px;">
                                                                          <a href="${
                                                                            data.ctaUrl1
                                                                          }" target="_blank" style="display: block; height: 45px; color: #ffffff; line-height: 45px; text-decoration: none;"><strong style="color: #ffffff; text-decoration: none;">${
    data.ctaText1
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
                                              <tr>
                                                <td align="left" valign="top" style="background-color: ${
                                                  data.backgroundColor
                                                };padding:0px;">
                                                  <table width="100%" border="0" cellspacing="0" cellpadding="0" align="center" role="presentation" style="background-color: ${
                                                    data.backgroundColor
                                                  };max-width:500px;">
                                                    <tbody>
                                                      <tr>
                                                        <td align="left" valign="top" style="padding: 12px 10px; border: 1px dashed #000000 !important; background-color: ${
                                                          data.backgroundColor
                                                        };">
                                                          <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation" style="background-color: ${
                                                            data.backgroundColor
                                                          };">
                                                            <tbody>
                                                              <tr>
                                                                <td align="left" valign="middle" width="360" style="width: 360px; background-color: ${
                                                                  data.backgroundColor
                                                                };vertical-align:middle;padding:0px">
                                                                  <table width="100%" border="0" cellspacing="0" cellpadding="0" style="background-color: ${
                                                                    data.backgroundColor
                                                                  };">
                                                                    <tbody>
                                                                      <tr>
                                                                        <td align="left" valign="middle" width="135" style="width: 135px;vertical-align:middle;padding:0px;" class="td-block">
                                                                        <img src='${
                                                                          data.brandLogoUrl2
                                                                        }' alt="Brand Logo" width="119" style="display: block; width: 119px; background-color: ${
    data.backgroundColor
  };" />
                                                                        </td>
                                                                        <td align="left" valign="middle" width="225" style="font-family: Arial; font-size: 20px; line-height: 24px; color: #000000; padding: 0px; background-color: ${
                                                                          data.backgroundColor
                                                                        };width:210px;" class="td-block font-16 pdtop5">
                                                                          ${TemplateHelpers.processText(
                                                                            data.offerText2,
                                                                            {
                                                                              color:
                                                                                "#97272b",
                                                                            }
                                                                          )}
                                                                        </td>
                                                                      </tr>
                                                                    </tbody>
                                                                  </table>
                                                                </td>
                                                                <td align="right" valign="middle" style="background-color: ${
                                                                  data.backgroundColor
                                                                };padding:0px">
                                                                  <table border="0" cellspacing="0" cellpadding="0" style="background-color: ${
                                                                    data.backgroundColor
                                                                  };">
                                                                    <tbody>
                                                                      <tr>
                                                                        <td align="center" valign="top" height="45" style="background: #97272b; border-radius: 5px; height: 45px;font-family: Arial; font-size: 16px; line-height: 16px; color: #ffffff; text-transform: uppercase; background-color: #97272b;padding:0px 12px;">
                                                                          <a href="${
                                                                            data.ctaUrl2
                                                                          }" target="_blank" style="display: block; height: 45px; color: #ffffff; line-height: 45px; text-decoration: none;"><strong style="color: #ffffff; text-decoration: none;">${
    data.ctaText2
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
                                        <td align="center" valign="top" style="font-family: Arial; font-size: 16px; line-height: 18px; color: #97272b; padding: 25px 0 25px 0; text-decoration: none; background-color: ${
                                          data.backgroundColor
                                        };">
                                          ${data.expiryText}
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
          data.backgroundColor
        };padding: 0;margin:0;">
          ${TemplateHelpers.getSocialIcons(data, lightColor)}
          ${TemplateHelpers.getFooter(data.tncUrl)}
        </td>
      </tr>
    </tbody>
  </table>
</body>
</html>`;
}
return getTemplate5(data, TemplateHelpers, lightColor);

function getTemplate3(data, TemplateHelpers, lightColor) {
  return `
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
a{color: #8d051e; text-decoration: none;}
@media all and (max-width: 640px) {
body, table, td, p, a, li, blockquote {
    -webkit-text-size-adjust: none !important;
}
.table {
    width: 100% !important;
    clear: both!important;
    display: table!important;
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
	.hauto{
		height: auto !important;
	}
.head {
    font-size: 24px !important;
    line-height: normal!important;
    letter-spacing: 1px !important;
}
.subhead{
    font-size: 18px !important;
    line-height: 24px!important;
    letter-spacing: .5px !important;
}
.mtext {
    font-size: 14px !important;
    line-height: 21px !important;
}
.center {
    text-align: center !important;
}
.center img,.center table{
		margin: 0 auto;
}
	.p-top-5{
		padding-top: 3px !important;
		vertical-align: top !important;
	}
	.p-top-51{
		padding-top: 0 !important;
		vertical-align: top !important;
	}
	.b-top{
		border: none!important;
		border-top: 1px solid #9a413d !important;
	}
	.mob-hide{
		display: none !important;
	}
	.mob-show{
		display: block !important;
	}
	.text-left{
		text-align: left!important;
	}
	.text-center{
		text-align: center !important;
	}
	.text-center table, .text-center img{
		margin: 0 auto !important;
	}
	.pdtop10{
		padding-top: 10px !important;
	}
	.logo{
		height: 20px !important;
		min-height: 20px !important;
		max-height: 20px !important;
		width: auto !important;
	}
	.main-logo{
		height: 20px !important;
		min-height: 20px !important;
		max-height: 20px !important;
		width: auto !important;
	}
	.font-16{
		font-size: 16px !important;
		line-height: 20px !important;
	}
	.blrnone{
		border-left: none !important;
		border-right: none !important;			
	}
	.btop{
		border-top: 1px solid #9a413d !important;	
	}
	.hauto{
		height: auto !important;
	}
}
</style>
</head>

<body>
 
<div style="font-size:1px; color:#ffffff; line-height:1px; max-height:0px; max-width:0px; opacity:0; overflow:hidden; display:none;"></div>
<table class="table" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color:${
    data.backgroundColor
  };">
  <tbody>
     
    <tr>
      <td align="center" valign="middle" class="mobile" style="background-color:#ffffff;"><table class="table" align="center" border="0" cellpadding="0" cellspacing="0" width="600" style="width: 600px; margin: 0 auto;background-color:${
        data.backgroundColor
      };">
          <tbody>
            <tr>
              <td align="center">
				  <table width="100%" border="0" cellspacing="0" cellpadding="0">
            <tbody>
              <tr>
                <td align="center" valign="top" style="padding: 1px;" bgcolor="#cccccc">
                 <table width="100%" border="0" cellspacing="0" cellpadding="0">
                  <tbody>
                    <tr>
                     <td align="center" valign="top" bgcolor="#ffffff">
                       <table class="table" width="100%" border="0" cellpadding="0" cellspacing="0" align="center" bgcolor="#ffffff">
                          <tbody>
                           <tr>
                             <td align="center" valign="middle" style="font-family: Arial, 'Times New Roman', Tahoma, 'serif'; font-size: 14px; line-height: 18px; color: #000000; padding: 20px 20px 20px 20px;" class="pdlr pdtb">
                               <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                <tbody>
                                  <tr>
                                      <td align="right" valign="middle" style="padding: 0 0 0 0;"><a href="https://www.indusind.com/" target="_blank" style="text-decoration: none;"><img src="https://demo.forecastadvtg.com/projects/Hyperface/2025/email/logo.png" alt="IndusInd Bank" style="display: block; width: auto; min-height: 28px; max-height: 28px; height: 28px;" class="main-logo"/></a></td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                          <tr>
                            <td align="center" valign="top" style="vertical-align: middle; padding: 0 15px;">
                              <table border="0" cellspacing="0" cellpadding="0" role="presentation" class="table">
                                <tbody>
                                  <tr>
                                    <td align="center" valign="top" style="font-family: Arial, 'Times New Roman', Tahoma, 'serif'; font-size: 23px; mso-line-height-rule:exactly; line-height: normal; color: #98252a; padding: 20px 0 20px 0; font-weight: normal; text-align: center; letter-spacing: 0.2px; vertical-align: top;" class="pdtb subhead "><strong style="font-size: 36px; display: block; padding-bottom: 5px;" class="head"> ${TemplateHelpers.processTextWithLineBreaks(
                                      data.headingLine,
                                      { delimeter: "/n" }
                                    )} </strong>
                                    
                                    ${TemplateHelpers.processTextWithLineBreaks(data.subHeadingLine, {
                                      delimeter: "/n",
                                    })}</td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        <tr>
                          <td align="center" valign="top" style="font-family: Arial, 'Times New Roman', Tahoma, 'serif'; font-size: 18px; line-height: 21px; color: #000000; padding: 0 0 0 0; font-weight: bold;" class="responsive-image"><a href="https://www.indusind.com/" style="text-decoration: none;" target="_blank"><img src="${
                            data.imageUrl
                          }" width="600" alt="IndusInd Bank" style="display: block; width: 600px; margin: 0 auto;" /></a></td>
                        </tr>	  
                        <tr>
                          <td align="center" valign="top" style="font-family: Arial, 'Times New Roman', Tahoma, 'serif'; font-size: 18px; line-height: 21px; color: #000000; padding: 0 0; font-weight: normal;">
                            <table width="580" border="0" cellspacing="0" cellpadding="0" role="presentation" style="width: 580px; margin: 0 auto;" class="table">
                              <tbody>
                                <tr>
                                  <td align="center" valign="top" style="padding: 35px 0 30px 0;" class="pdtb pdlr">
                                    <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
                                      <tbody>
                                        
                                        <tr>
                                          <td align="center" valign="top">
                                            <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
                                              <tbody>
                                                <tr>
                                                  <td align="center" valign="top">
                                                    <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
                                                      <tbody>
                                                        <tr>
                                                          <td align="center" valign="top" width="25%" class="td-block pdbot15">
                                                            <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
                                                              <tbody>
                                                                <tr>
                                                                  <td align="center" valign="top" style="font-family: Arial, 'Times New Roman', Tahoma, 'serif'; font-size: 19px; line-height: 24px; color: #6b6b6b; padding: 0 0 0 0; font-weight: normal;"><img src="${
                                                                    data.brandLogoUrl1
                                                                  }" alt="IndusInd Bank" style="height: 50px; width: auto; display: block;"/></td>
                                                                  </tr>
                                                                <tr>
                                                                  <td align="center" valign="top" style="font-family: Arial, 'Times New Roman', Tahoma, 'serif'; font-size: 20px; line-height: 26px; color: #9a413d; padding: 0 0 0 0; font-weight: normal;"><strong> ${TemplateHelpers.processTextWithLineBreaks(
                                                                    data.offerText1,
                                                                    { color: "#97272b" }
                                                                  )}  </strong></td>
                                                                  </tr>
                                                                <tr>
                                                                  <td align="center" valign="top" style="padding: 15px 0 0 0; font-weight: normal;"><table border="0" width="100" cellspacing="0" cellpadding="0" align="center" role="presentation">
                                                                    <tbody>
                                                                      <tr>
                                                                        <td align="center" valign="middle" style="height: 32px; background: #9a413d; font-family: Arial, 'Times New Roman', Tahoma, 'serif'; font-size: 16px; mso-line-height-rule:exactly; line-height: 16px; font-weight: normal; color: #ffffff; text-decoration: none; padding: 0 0 0 0; vertical-align: middle; border-radius: 5px;" height="32"><strong style="color: #ffffff; text-decoration: none;"><a href="${
                                                                          data.ctaUrl1
                                                                        }" style="color: #ffffff; text-decoration: none;">${TemplateHelpers.processTextWithLineBreaks(
                data.ctaText1
              )}</a></strong></td>
                                                                        </tr>
                                                                      </tbody>
                                                                    </table></td>
                                                                  </tr>
                                                                </tbody>
                                                              </table>
                                                            </td>
                                          <td align="center" valign="middle" class="hide"><img src="https://demo.forecastadvtg.com/projects/Hyperface/2025/email/Mens/line.png" alt="IndusInd Bank" style="height: 70px; width: auto; display: block;"/></td>
                                                          <td align="center" valign="top" style="padding: 0 0 0 0;" width="25%" class="td-block blrnone btop pdtb">
                                          <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
                                                              <tbody>
                                                                <tr>
                                                                  <td align="center" valign="top" style="font-family: Arial, 'Times New Roman', Tahoma, 'serif'; font-size: 19px; line-height: 24px; color: #6b6b6b; padding: 0 0 0 0; font-weight: normal;"><img src="${
                                                                    data.brandLogoUrl2
                                                                  }" alt="IndusInd Bank" style="height: 50px; width: auto; display: block;"/></td>
                                                                  </tr>
                                                                <tr>
                                                                  <td align="center" valign="top" style="font-family: Arial, 'Times New Roman', Tahoma, 'serif'; font-size: 20px; line-height: 26px; color: #9a413d; padding: 0 0 0 0; font-weight: normal;"><strong>${TemplateHelpers.processTextWithLineBreaks(
                                                                    data.offerText2,
                                                                    { color: "#97272b" }
                                                                  )}</strong></td>
                                                                  </tr>
                                                                <tr>
                                                                  <td align="center" valign="top" style="padding: 15px 0 0 0; font-weight: normal;"><table border="0" width="100" cellspacing="0" cellpadding="0" align="center" role="presentation">
                                                                    <tbody>
                                                                      <tr>
                                                                        <td align="center" valign="middle" style="height: 32px; background: #9a413d; font-family: Arial, 'Times New Roman', Tahoma, 'serif'; font-size: 16px; mso-line-height-rule:exactly; line-height: 16px; font-weight: normal; color: #ffffff; text-decoration: none; padding: 0 0 0 0; vertical-align: middle; border-radius: 5px;" height="32"><strong style="color: #ffffff; text-decoration: none;"><a href="${
                                                                          data.ctaUrl2
                                                                        }" style="color: #ffffff; text-decoration: none;">${TemplateHelpers.processTextWithLineBreaks(
                data.ctaText2,
                { delimeter: "/n" }
              )}</a></strong></td>
                                                                        </tr>
                                                                      </tbody>
                                                                    </table></td>
                                                                  </tr>
                                                                </tbody>
                                                              </table></td>
                                          <td align="center" valign="middle" class="hide"><img src="https://demo.forecastadvtg.com/projects/Hyperface/2025/email/Mens/line.png" alt="IndusInd Bank" style="height: 70px; width: auto; display: block;"/></td>
                                                          <td align="center" valign="top" style="padding: 0 0 0 0;" width="25%" class="td-block btop pdtb">
                                          <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
                                                              <tbody>
                                                                <tr>
                                                                  <td align="center" valign="top" style="font-family: Arial, 'Times New Roman', Tahoma, 'serif'; font-size: 19px; line-height: 24px; color: #6b6b6b; padding: 0 0 0 0; font-weight: normal;"><img src="${
                                                                    data.brandLogoUrl3
                                                                  }" alt="IndusInd Bank" style="height: 50px; width: auto; display: block;"/></td>
                                                                  </tr>
                                                                <tr>
                                                                  <td align="center" valign="top" style="font-family: Arial, 'Times New Roman', Tahoma, 'serif'; font-size: 20px; line-height: 26px; color: #9a413d; padding: 0 0 0 0; font-weight: normal;"><strong>${TemplateHelpers.processTextWithLineBreaks(
                                                                    data.offerText3,
                                                                    { color: "#97272b" }
                                                                  )}</strong></td>
                                                                  </tr>
                                                                <tr>
                                                                  <td align="center" valign="top" style="padding: 15px 0 0 0; font-weight: normal;"><table border="0" width="100" cellspacing="0" cellpadding="0" align="center" role="presentation">
                                                                    <tbody>
                                                                      <tr>
                                                                        <td align="center" valign="middle" style="height: 32px; background: #9a413d; font-family: Arial, 'Times New Roman', Tahoma, 'serif'; font-size: 16px; mso-line-height-rule:exactly; line-height: 16px; font-weight: normal; color: #ffffff; text-decoration: none; padding: 0 0 0 0; vertical-align: middle; border-radius: 5px;" height="32"><strong style="color: #ffffff; text-decoration: none;"><a href="${
                                                                          data.ctaUrl3
                                                                        }" style="color: #ffffff; text-decoration: none;">${TemplateHelpers.processTextWithLineBreaks(
                data.ctaText3
              )}</a></strong></td>
                                                                        </tr>
                                                                      </tbody>
                                                                    </table></td>
                                                                  </tr>
                                                                </tbody>
                                                              </table></td>
                                          <td align="center" valign="middle" class="hide"><img src="https://demo.forecastadvtg.com/projects/Hyperface/2025/email/Mens/line.png" alt="IndusInd Bank" style="height: 70px; width: auto; display: block;"/></td>
                                          <td align="center" valign="top" style="padding: 0 0 0 0;" width="25%" class="td-block blrnone btop pdtop15">
                                          <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
                                                              <tbody>
                                                                <tr>
                                                                  <td align="center" valign="top" style="font-family: Arial, 'Times New Roman', Tahoma, 'serif'; font-size: 19px; line-height: 24px; color: #6b6b6b; padding: 0 0 0 0; font-weight: normal;"><img src="${
                                                                    data.brandLogoUrl4
                                                                  }" alt="IndusInd Bank" style="height: 50px; width: auto; display: block;"/></td>
                                                                  </tr>
                                                                <tr>
                                                                  <td align="center" valign="top" style="font-family: Arial, 'Times New Roman', Tahoma, 'serif'; font-size: 20px; line-height: 26px; color: #9a413d; padding: 0 0 0 0; font-weight: normal;"><strong>${TemplateHelpers.processTextWithLineBreaks(
                                                                    data.offerText4,
                                                                    { color: "#97272b" }
                                                                  )}</strong></td>
                                                                  </tr>
                                                                <tr>
                                                                  <td align="center" valign="top" style="padding: 15px 0 0 0; font-weight: normal;"><table border="0" width="100" cellspacing="0" cellpadding="0" align="center" role="presentation">
                                                                    <tbody>
                                                                      <tr>
                                                                        <td align="center" valign="middle" style="height: 32px; background: #9a413d; font-family: Arial, 'Times New Roman', Tahoma, 'serif'; font-size: 16px; mso-line-height-rule:exactly; line-height: 16px; font-weight: normal; color: #ffffff; text-decoration: none; padding: 0 0 0 0; vertical-align: middle; border-radius: 5px;" height="32"><strong style="color: #ffffff; text-decoration: none;"><a href="${
                                                                          data.ctaUrl4
                                                                        }" style="color: #ffffff; text-decoration: none;">${TemplateHelpers.processTextWithLineBreaks(
                data.ctaText4
              )}</a></strong></td>
                                                                        </tr>
                                                                      </tbody>
                                                                    </table></td>
                                                                  </tr>
                                                                </tbody>
                                                              </table></td>
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
                            <td align="center" valign="top" style="font-family: Arial, 'Times New Roman', Tahoma, 'serif'; font-size: 14px; line-height: 18px; color: #000000; padding: 0 16px 0 16px;">
                              <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                <tbody>
                                  
                                  
          ${String(data.offerEndTextRequire).toLowerCase() === "true"? `
                                  <tr>
                                    <td align="center" valign="top" style="font-family: Arial, 'Times New Roman', Tahoma, 'serif'; font-size: 14px; line-height: 18px; color: #000000; padding: 0 0 0 0;" class="pdnone">
                                      <table width="510" border="0" align="center" cellpadding="0" cellspacing="0" class="table">
                                        <tbody>
                                          <tr>
                                            <td align="center" valign="top" style="font-family: Arial, 'Times New Roman', Tahoma, 'serif'; font-size: 18px; line-height: 24px; color: #9a413d; padding: 0 0 15px 0;">${TemplateHelpers.processTextWithLineBreaks(data.offerEndText)}</td>
                                          </tr>
                                      
                                        </tbody>
                                      </table>
                                      
                                    </td>
                                  </tr>
                                  `
                                  :``}

                                  </tbody>
                                </table>
                              
                              </td>
                            </tr>
                            <tr>
                                        <td align="center" valign="top" style="font-family: Arial; font-size: 14px; line-height: 18px; color: #000000; padding: 0 0 10px 0;">
                                          <a href="https://www.indusmoments.com/" target="_blank" style="text-decoration: none;"><img src="https://demo.forecastadvtg.com/projects/Hyperface/2025/email/indus-moments.png" width="260" alt="IndusInd Bank" style="display: block; width: 260px; margin: 0 auto;"></a>
                                        </td>
                                      </tr>
                            <tr>
                              <td align="left" valign="top" style="font-family: Arial, 'Times New Roman', Tahoma, 'serif'; font-size: 14px; line-height: 18px; color: #000000; padding: 0 0 0 0;">
						                   <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                 <tbody>
                                  <tr>
                                    <td align="left" valign="bottom" width="61">
                                      <img src="https://demo.forecastadvtg.com/projects/Hyperface/2025/email/bull.png" width="40" alt="IndusInd Bank" style="display: block; width: 40px;"/></td>
                                    <td align="right" style="padding: 0 15px 10px 0;" valign="bottom"><table border="0" cellspacing="0" cellpadding="0" align="right">
					                           <tbody>
					        <tr>
					          <td align="center" valign="middle" style="font-family: Arial, 'Times New Roman', Tahoma, 'serif'; font-size: 10px; line-height: normal; color: #97272b; padding: 0 3px 0 0;">Connect with us:</td>
					          <td align="center" valign="middle" style="font-family: Arial, 'Times New Roman', Tahoma, 'serif'; font-size: 12px; line-height: normal; color: #97272b; padding: 0 0 0 0;"><a href="https://www.facebook.com/OfficialIndusIndBankPage" target="_blank" style="text-decoration: none;"><img src="https://demo.forecastadvtg.com/projects/Hyperface/2025/email/facebook.png" alt="Facebook" width="16" style="display: block; width: 16px;"/></a></td>
								 <td align="center" valign="middle" style="font-family: Arial, 'Times New Roman', Tahoma, 'serif'; font-size: 12px; line-height: normal; color: #97272b; padding: 0 5px 0 5px;"><a href="https://www.instagram.com/indusind_bank/" target="_blank" style="text-decoration: none;"><img src="https://demo.forecastadvtg.com/projects/Hyperface/2025/email/instagram.png" alt="Instagram" width="16" style="display: block; width: 16px;"/></a></td>
								<td align="center" valign="middle" style="font-family: Arial, 'Times New Roman', Tahoma, 'serif'; font-size: 12px; line-height: normal; color: #97272b; padding: 0 0 0 0;"><a href="https://www.threads.net/@indusind_bank" target="_blank" style="text-decoration: none;"><img src="https://demo.forecastadvtg.com/projects/Hyperface/2025/email/at.png" alt="Threads" width="14" style="display: block; width: 14px;"/></a></td>
								<td align="center" valign="middle" style="font-family: Arial, 'Times New Roman', Tahoma, 'serif'; font-size: 12px; line-height: normal; color: #97272b; padding: 0 5px 0 5px;"><a href="https://www.linkedin.com/company/indusind-bank" target="_blank" style="text-decoration: none;"><img src="https://demo.forecastadvtg.com/projects/Hyperface/2025/email/linkedin.png" alt="LinkedIn" width="16" style="display: block; width: 16px;"/></a></td>
					          <td align="center" valign="middle" style="font-family: Arial, 'Times New Roman', Tahoma, 'serif'; font-size: 12px; line-height: normal; color: #97272b; padding: 0 0 0 0;"><a href="https://twitter.com/myindusindbank" target="_blank" style="text-decoration: none;"><img src="https://demo.forecastadvtg.com/projects/Hyperface/2025/email/twitter.png" alt="Twitter" width="16" style="display: block; width: 16px;"/></a></td>			          
					         
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
					    <td align="right" valign="top" style="font-family: Arial, 'Times New Roman', Tahoma, 'serif'; font-size: 14px; line-height: 18px; color: #ffffff; padding: 10px 16px 10px 16px;" bgcolor="#97282b">
							<table width="100%" border="0" cellspacing="0" cellpadding="0">
  <tbody>
    <tr>
      <td align="left" valign="bottom" style="font-family: Arial, 'Times New Roman', Tahoma, 'serif'; font-size: 12px; line-height: 14px; color: #ffffff; padding: 0 0 0 0;" class="td-block"><a href="https://www.visa.co.in/en_in/visa-offers-and-perks/" target="_blank" style="color: #ffffff; text-decoration: underline;">Terms and Conditions apply</a></td>
      <td align="right" valign="bottom" style="font-family: Arial, 'Times New Roman', Tahoma, 'serif'; font-size: 12px; line-height: 14px; color: #ffffff; padding: 0 0 0 0;" class="text-left td-block pdtop10"><a href="https://www.indusind.com/in/en/about-us/IBL-thirdparty-disclaimer.html" target="_blank" style="color: #ffffff; text-decoration: underline;">Click here</a> for IndusInd Bank Disclaimer</td>
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
        </table></td>
    </tr>
  </tbody>
</table>
</body>
</html>

  `;
}

function getTemplate3preview(data, TemplateHelpers, lightColor) {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>IndusInd Bank</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      -webkit-text-size-adjust: 100%;
      -ms-text-size-adjust: 100%;
    }
    
    body {
      font-family: Arial, 'Times New Roman', Tahoma, serif;
      background-color: ${data.backgroundColor};
      color: #000000;
      line-height: 1.4;
    }
    
    .container {
      max-width: 600px;
      margin: 0 auto;
      background-color: ${data.backgroundColor};
    }
    
    .header {
      background-color: #ffffff;
      padding: 20px;
    }
    
    .logo-container {
      display: flex;
      justify-content: flex-end;
      align-items: center;

    }
    
    .logo {
      height: 28px;
      width: auto;
    }
    
    .main-content {
      background-color: #ffffff;
      padding: 0 15px;
    }
    
    .heading {
      font-size: 36px;
      color: #98252a !important;
      text-align: center;
      padding: 20px 0;
      line-height: normal;
      letter-spacing: 0.2px;
      font-weight: bold;
    }
    
    .subheading {
      font-size: 18px !important;
      color: #98252a;
      text-align: center;
      padding-bottom: 20px;
      line-height: 24px;
      letter-spacing: 0.5px;
    }
    
    .main-image {
      width: 100%;
      max-width: 600px;
      display: block;
      margin: 0 auto;
    }
    
    .offers-container {
      padding: 35px 10px 30px;
      max-width: 580px;
      margin: 0 auto;
    }
    
    .offers-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 15px;
    }
    
    .offer-item {
      text-align: center;
      padding: 15px 0;
    }
    
    .brand-logo {
      height: 50px;
      width: auto;
      margin: 0 auto;
      display: block;
    }
    
    .offer-text {
      font-size: 20px !important;
      line-height: 26px;
      color: #9a413d;
      padding: 10px 0;
      font-weight: bold !important;
    }
    
    .cta-button {
      display: inline-block;
      background: #9a413d;
      color: #ffffff !important;
      font-size: 16px;
      padding: 8px 15px;
      text-decoration: none !important;
      border-radius: 5px;
      margin-top: 15px;
      text-wrap:nowrap;
      white-space: nowrap;
    }
    
    .expiry-notice {
      font-size: 18px !important;
      color: #9a413d;
      text-align: center;
      padding: 0 0 15px;
      line-height: 24px;
    }
    
    .footer {
      padding: 0 16px;
    }
    
    .footer-content {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      padding-bottom: 10px;
    }
    
    .bull-icon {
      width: 40px;
    }
    
    .social-links {
      display: flex;
      align-items: center;
      gap: 5px;
    }
    
    .social-text {
      font-size: 10px;
      color: #97272b;
      padding-right: 3px;
    }
    
    .social-icon {
      width: 16px;
      height: 16px;
    }
    
    .at-icon {
      width: 14px;
      height: 14px;
    }
    
    .disclaimer-bar {
      background-color: #97282b;
      color: #ffffff !important;
      padding: 10px 16px;
      font-size: 12px;
      line-height: 14px;
    }
    
    .disclaimer-links {
      display: flex;
      justify-content: space-between;
    }
    
    .disclaimer-link {
      color: #ffffff !important;
      text-decoration: underline;
    }
    
    @media (max-width: 640px) {
      .offers-grid {
        grid-template-columns: 1fr;
      }
      
      .offer-item {
        border-top: 1px solid #9a413d;
        padding: 15px 0;
      }
      
      .offer-item:nth-child(odd) {
        border-left: none;
        border-right: none;
      }
      
      .heading {
        font-size: 24px;
      }
      
      .subheading {
        font-size: 18px;
      }
      
      .offer-text {
        font-size: 16px;
      }
      
      .disclaimer-links {
        flex-direction: column;
        gap: 10px;
      }
    }
      .footer-logos {
      text-align: center;
      margin-bottom: 16px;
    }
    .footer-logos img {
      width: 180px;
      max-width: 100%;
    }
  </style>
</head>

<body>
  <div class="container">
    <div class="header">
      <div class="logo-container">
        <a href="https://www.indusind.com/" target="_blank">
          <img src="https://demo.forecastadvtg.com/projects/Hyperface/2025/email/logo.png" alt="IndusInd Bank" class="logo">
        </a>
      </div>
    </div>
    
    <div class="main-content">
      <h1 class="heading">${TemplateHelpers.processTextWithLineBreaks(
        data.headingLine,
        { delimeter: "/n" }
      )}</h1>
      <p class="subheading">${TemplateHelpers.processTextWithLineBreaks(
        data.subHeadingLine,
        { delimeter: "/n" }
      )}</p>
      
      <a href="https://www.indusind.com/" target="_blank">
        <img src="${data.imageUrl}" alt="IndusInd Bank" class="main-image">
      </a>
      
      <div class="offers-container">
        <div class="offers-grid">
          <div class="offer-item">
            <img src="${
              data.brandLogoUrl1
            }" alt="Brand Logo" class="brand-logo">
            <p class="offer-text">${TemplateHelpers.processTextWithLineBreaks(
              data.offerText1,
              { color: "#97272b" }
            )}</p>
            <a href="${
              data.ctaUrl1
            }" class="cta-button">${TemplateHelpers.processTextWithLineBreaks(
    data.ctaText1
  )}</a>
          </div>
          
          <div class="offer-item">
            <img src="${
              data.brandLogoUrl2
            }" alt="Brand Logo" class="brand-logo">
            <p class="offer-text">${TemplateHelpers.processTextWithLineBreaks(
              data.offerText2,
              { color: "#97272b" }
            )}</p>
            <a href="${
              data.ctaUrl2
            }" class="cta-button">${TemplateHelpers.processTextWithLineBreaks(
    data.ctaText2,
    { delimeter: "/n" }
  )}</a>
          </div>
          
          <div class="offer-item">
            <img src="${
              data.brandLogoUrl3
            }" alt="Brand Logo" class="brand-logo">
            <p class="offer-text">${TemplateHelpers.processTextWithLineBreaks(
              data.offerText3,
              { color: "#97272b" }
            )}</p>
            <a href="${
              data.ctaUrl3
            }" class="cta-button">${TemplateHelpers.processTextWithLineBreaks(
    data.ctaText3
  )}</a>
          </div>
          
          <div class="offer-item">
            <img src="${
              data.brandLogoUrl4
            }" alt="Brand Logo" class="brand-logo">
            <p class="offer-text">${TemplateHelpers.processTextWithLineBreaks(
              data.offerText4,
              { color: "#97272b" }
            )}</p>
            <a href="${
              data.ctaUrl4
            }" class="cta-button">${TemplateHelpers.processTextWithLineBreaks(
    data.ctaText4
  )}</a>
          </div>
        </div>
      </div>
      
          ${String(data.offerEndTextRequire).toLowerCase() === "true"? `
      <p class="expiry-notice">${TemplateHelpers.processTextWithLineBreaks(data.offerEndText)}</p>
      `
            :``}
      <div class="footer-logos">
      <a href="https://www.indusmoments.com/" target="_blank">
        <img src="https://demo.forecastadvtg.com/projects/Hyperface/2025/email/indus-moments.png" alt="Indus Moments Logo"/>
      </a>
    </div>
    </div>
    
    <div class="footer">
      <div class="footer-content">
        <img src="https://demo.forecastadvtg.com/projects/Hyperface/2025/email/bull.png" alt="Bull" class="bull-icon">
        <div class="social-links">
          <span class="social-text">Connect with us:</span>
          <a href="https://www.facebook.com/OfficialIndusIndBankPage" target="_blank">
            <img src="https://demo.forecastadvtg.com/projects/Hyperface/2025/email/facebook.png" alt="Facebook" class="social-icon">
          </a>
          <a href="https://www.instagram.com/indusind_bank/" target="_blank">
            <img src="https://demo.forecastadvtg.com/projects/Hyperface/2025/email/instagram.png" alt="Instagram" class="social-icon">
          </a>
          <a href="https://www.threads.net/@indusind_bank" target="_blank">
            <img src="https://demo.forecastadvtg.com/projects/Hyperface/2025/email/at.png" alt="Threads" class="at-icon">
          </a>
          <a href="https://www.linkedin.com/company/indusind-bank" target="_blank">
            <img src="https://demo.forecastadvtg.com/projects/Hyperface/2025/email/linkedin.png" alt="LinkedIn" class="social-icon">
          </a>
          <a href="https://twitter.com/myindusindbank" target="_blank">
            <img src="https://demo.forecastadvtg.com/projects/Hyperface/2025/email/twitter.png" alt="Twitter" class="social-icon">
          </a>
        </div>
      </div>
    </div>
    
    <div class="disclaimer-bar">
      <div class="disclaimer-links">
        <a href="https://www.visa.co.in/en_in/visa-offers-and-perks/" target="_blank" class="disclaimer-link">Terms and Conditions apply</a>
        <a href="https://www.indusind.com/in/en/about-us/IBL-thirdparty-disclaimer.html" target="_blank" class="disclaimer-link">Click here for IndusInd Bank Disclaimer</a>
      </div>
    </div>
  </div>
</body>
</html>
  `;
}

if (functionName === "preview") {
  return getTemplate3preview(data, TemplateHelpers, lightColor);
} else {
  return getTemplate3(data, TemplateHelpers, lightColor);
}
